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
    this.router.get(`${this.path}/machine/:id(\\d+)`, authMiddleware, this.stockController.getListStockByMachine);
    this.router.post(`${this.path}`, authMiddleware, this.stockController.createStock);
    this.router.put(`${this.path}`, authMiddleware, this.stockController.increaseStock);
    this.router.delete(`${this.path}/:id(\\d+)`, authMiddleware, this.stockController.deleteStock);
  }
}

export default StockRoute;
