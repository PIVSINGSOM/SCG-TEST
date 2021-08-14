import DB from '@databases';
import { paymentAttributes, paymentCreationAttributes } from '@/models/payment';
import { HttpException } from '@/exceptions/HttpException';
import { isEmpty } from 'class-validator';

class PaymentService {
  public payment = DB.payment;

  public async index(): Promise<paymentAttributes[]> {
    const resultList = await this.payment.findAll({});
    return resultList;
  }

  public async createProduct(paymentData: paymentCreationAttributes): Promise<paymentAttributes> {
    if (isEmpty(paymentData)) throw new HttpException(400, 'Bad request');

    const createProductData: paymentAttributes = await this.payment.create({ ...paymentData });
    return createProductData;
  }
}

export default PaymentService;
