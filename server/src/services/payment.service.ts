import DB from '@databases';
import { paymentAttributes, paymentCreationAttributes } from '@/models/payment';
import { HttpException } from '@/exceptions/HttpException';
import { isEmpty } from 'class-validator';
import { order, orderAttributes, orderCreationAttributes } from '@/models/order';
import StockService from './stock.service';
import { stockAttributes } from '@/models/stock';
class PaymentService {
  public payment = DB.payment;
  public order = DB.order;
  public stockService = new StockService();
  public async index(): Promise<paymentAttributes[]> {
    const resultList = await this.payment.findAll({});
    return resultList;
  }

  public async createPayment(paymentData: paymentCreationAttributes, stockData: orderAttributes[]): Promise<paymentAttributes> {
    if (isEmpty(paymentData)) throw new HttpException(400, 'Bad request');
    const createPaymentData: paymentAttributes = await await this.payment.create({ ...paymentData });
    for await (const element of stockData) {
      let order = {} as orderCreationAttributes;
      order.payment_id = createPaymentData.id;
      order.product_id = element.product_id;
      order.quantity = element.quantity;
      order.amount = element.amount;
      await this.stockService.decreaseQuantity(element.id, element.quantity);
      await this.order.create(order);
    }

    return createPaymentData;
  }
}

export default PaymentService;
