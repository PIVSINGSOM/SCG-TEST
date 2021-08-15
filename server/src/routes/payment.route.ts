import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import PaymentController from '@/controllers/payment.controller';
import authMiddleware from '@/middlewares/auth.middleware';

class PaymentRoute implements Routes {
  public path = '/payment';
  public router = Router();
  public paymentController = new PaymentController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.paymentController.index);
    this.router.post(`${this.path}`, authMiddleware, this.paymentController.createPayment);
  }
}

export default PaymentRoute;
