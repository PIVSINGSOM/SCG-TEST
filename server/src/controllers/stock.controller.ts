import { NextFunction, Request, Response } from 'express';
import StockService from '@/services/stock.service';
import { stockAttributes, stockCreationAttributes } from '@/models/stock';
import { RequestWithMachine } from '@/interfaces/auth.interface';
import { machineAttributes } from '@/models/machine';
class StockController {
  public stockService = new StockService();

  public index = async (req: RequestWithMachine, res: Response, next: NextFunction) => {
    try {
      const machine: machineAttributes = req.machine;
      const dataList: stockAttributes[] = await this.stockService.index(machine.id);

      res.status(200).json({ data: dataList, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getListStockByMachine = async (req: RequestWithMachine, res: Response, next: NextFunction) => {
    try {
      const machineId: number = Number(req.params.id);
      const dataList: stockAttributes[] = await this.stockService.getListStockByMachine(machineId);
      res.status(200).json({ data: dataList, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public createStock = async (req: RequestWithMachine, res: Response, next: NextFunction) => {
    try {
      const stockData: stockCreationAttributes = req.body;
      const createStockData: stockAttributes = await this.stockService.createStock(stockData);
      res.status(201).json({ data: createStockData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public increaseStock = async (req: RequestWithMachine, res: Response, next: NextFunction) => {
    try {
      const stockData: stockCreationAttributes = req.body;
      const createStockData: stockAttributes = await this.stockService.increaseQuantity(stockData.id, stockData.quantity);
      res.status(201).json({ data: createStockData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteStock = async (req: RequestWithMachine, res: Response, next: NextFunction) => {
    try {
      const stockId: number = Number(req.params.id);
      const result: Boolean = await this.stockService.deleteStock(stockId);
      res.status(201).json({ success: result, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default StockController;
