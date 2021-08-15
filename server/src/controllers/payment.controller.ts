import { NextFunction, Request, Response } from 'express';
import { paymentAttributes, paymentCreationAttributes } from '@/models/payment';
import PaymentService from '@/services/payment.service';
import { RequestWithMachine } from '@/interfaces/auth.interface';
import { orderAttributes, orderCreationAttributes } from '@/models/order';
import { stockAttributes } from '@/models/stock';
class PaymentController {
  public paymentService = new PaymentService();

  public index = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const dataList: paymentAttributes[] = await this.paymentService.index();

      res.status(200).json({ data: dataList, message: 'get list payment' });
    } catch (error) {
      next(error);
    }
  };

  public createPayment = async (req: RequestWithMachine, res: Response, next: NextFunction) => {
    try {
      const paymentData: paymentCreationAttributes = req.body;
      const { order } = req.body;
      const orderData: orderAttributes[] = order;
      console.log(orderData);
      const machineId: number = req.machine.id;
      paymentData.machine_id = machineId;
      const createPaymentData: paymentAttributes = await this.paymentService.createPayment(paymentData, orderData);
      res.status(201).json({ data: createPaymentData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}

export default PaymentController;
