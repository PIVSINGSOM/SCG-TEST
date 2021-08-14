import DB from '@databases';
import { stockAttributes, stockCreationAttributes } from '@/models/stock';
import { HttpException } from '@/exceptions/HttpException';
import { isEmpty } from '@/utils/util';
class StockService {
  public stock = DB.stock;

  public async index(): Promise<stockAttributes[]> {
    const resultList = await this.stock.findAll({});
    return resultList;
  }

  public async createStock(stockData: stockCreationAttributes): Promise<stockAttributes> {
    if (isEmpty(stockData)) throw new HttpException(400, 'Bad request');

    const createStockData: stockAttributes = await this.stock.create({ ...stockData });
    return createStockData;
  }

  public async increaseQuantity(stockId: number, quantity: number): Promise<stockAttributes> {
    if (isEmpty(stockId) || isEmpty(quantity)) throw new HttpException(400, 'Bad request');

    const findStock: stockAttributes = await this.stock.findByPk(stockId);
    if (!findStock) throw new HttpException(409, 'Not have stock!!');

    findStock.quantity = findStock.quantity + quantity;
    await this.stock.update({ ...findStock }, { where: { id: stockId } });

    const updateQuantityData: stockAttributes = await this.stock.findByPk(stockId);
    return updateQuantityData;
  }

  public async decreaseQuantity(stockId: number, quantity: number): Promise<stockAttributes> {
    if (isEmpty(stockId) || isEmpty(quantity)) throw new HttpException(400, 'Bad request');

    const findStock: stockAttributes = await this.stock.findByPk(stockId);
    if (!findStock) throw new HttpException(409, 'Not have stock!!');

    findStock.quantity = findStock.quantity - quantity;

    await this.stock.update({ ...findStock }, { where: { id: stockId } });

    const updateQuantityData: stockAttributes = await this.stock.findByPk(stockId);
    if (updateQuantityData.quantity < 10) {
      /**
       * TODO  create send email if quantity < 10
       *
       */
    }

    return updateQuantityData;
  }
}

export default StockService;
