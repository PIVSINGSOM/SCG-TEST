import DB from '@databases';
import { stockAttributes, stockCreationAttributes } from '@/models/stock';
import { HttpException } from '@/exceptions/HttpException';
import { isEmpty } from '@/utils/util';
import { Op } from 'sequelize';
import axios from 'axios';
import { machineAttributes } from '@/models/machine';
import { productAttributes } from '@/models/product';

interface emailForm {
  from: String;
  to: String;
  subject: String;
  html: string;
}
class StockService {
  public stock = DB.stock;
  public machine = DB.machine;
  public product = DB.product;
  public axios = axios;
  public async index(machineId: number): Promise<stockAttributes[]> {
    const resultList = await this.stock.findAll({
      include: [
        {
          model: DB.product,
          as: 'product',
        },
      ],
      where: {
        machine_id: {
          [Op.eq]: machineId,
        },
        quantity: {
          [Op.not]: 0,
        },
      },
    });
    return resultList;
  }

  public async getListStockByMachine(machineId: number): Promise<stockAttributes[]> {
    if (isEmpty(machineId)) throw new HttpException(400, 'Bad request');

    const stockList: stockAttributes[] = await this.stock.findAll({
      include: [{ model: DB.product, as: 'product' }],
      where: { machine_id: { [Op.eq]: machineId } },
    });
    return stockList;
  }

  public async createStock(stockData: stockCreationAttributes): Promise<stockAttributes> {
    if (isEmpty(stockData)) throw new HttpException(400, 'Bad request');
    const findStock: stockAttributes = await this.stock.findOne({
      where: { product_id: { [Op.eq]: stockData.product_id }, machine_id: { [Op.eq]: stockData.machine_id } },
    });

    if (findStock) throw new HttpException(400, 'Machine have this product!!');

    const createStockData: stockAttributes = await this.stock.create({ ...stockData });
    return createStockData;
  }

  public async increaseQuantity(stockId: number, quantity: number): Promise<stockAttributes> {
    if (isEmpty(stockId) || isEmpty(quantity)) throw new HttpException(400, 'Bad request');

    const findStock: stockAttributes = await this.stock.findByPk(stockId);
    if (!findStock) throw new HttpException(409, 'Not have stock!!');

    findStock.quantity = findStock.quantity + quantity;
    await this.stock.update({ quantity: findStock.quantity }, { where: { id: stockId } });

    const updateQuantityData: stockAttributes = await this.stock.findByPk(stockId);
    return updateQuantityData;
  }

  public async decreaseQuantity(stockId: number, quantity: number): Promise<stockAttributes> {
    if (isEmpty(stockId) || isEmpty(quantity)) throw new HttpException(400, 'Bad request');

    const findStock: stockAttributes = await this.stock.findByPk(stockId);
    if (!findStock) throw new HttpException(409, 'Not have stock!!');

    findStock.quantity = findStock.quantity - quantity;

    await this.stock.update({ quantity: findStock.quantity }, { where: { id: findStock.id } });

    const updateQuantityData: stockAttributes = await this.stock.findByPk(stockId);

    if (updateQuantityData.quantity < 10) {
      /**
       * TODO  create send email if quantity < 10
       *
       */
      const findMachine: machineAttributes = await this.machine.findByPk(updateQuantityData.machine_id);
      const findProduct: productAttributes = await this.product.findByPk(updateQuantityData.product_id);
      let data = {} as emailForm;
      data.from = 'testforscg@gmail.com';
      data.subject = `${findProduct.name} is less than 10`;
      data.html = `${findProduct.name} is less than 10 at ${findMachine.address}`;
      data.to = findMachine.email;
      console.log(data);
      try {
        await axios.post('http://email-server:3001/email', data);
      } catch (error) {
        console.log('call api error', error);
      }
    }

    return updateQuantityData;
  }

  public async deleteStock(stockId: number): Promise<Boolean> {
    if (isEmpty(stockId)) throw new HttpException(400, 'Bad request');
    const findStock: stockAttributes = await this.stock.findByPk(stockId);
    if (!findStock) throw new HttpException(409, 'Not have stock!!');

    await this.stock.destroy({ where: { id: { [Op.eq]: stockId } } });

    return true;
  }
}

export default StockService;
