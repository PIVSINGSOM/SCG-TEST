import { Router } from 'express';
import MachineController from '@/controllers/machine.controller';
import { Routes } from '@interfaces/routes.interface';
import StockController from '@/controllers/stock.controller';
import authMiddleware from '@/middlewares/auth.middleware';
class StockRoute implements Routes {
  public path = '/stock';
  public router = Router();
  public stockController = new StockController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, authMiddleware, this.stockController.index);
    this.router.post(`${this.path}`, this.stockController.createStock);
  }
}

export default StockRoute;
