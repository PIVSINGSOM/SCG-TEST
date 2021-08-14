import { NextFunction, Request, Response } from 'express';
import StockService from '@/services/stock.service';
import { stockAttributes, stockCreationAttributes } from '@/models/stock';
class StockController {
  public stockService = new StockService();

  public index = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const dataList: stockAttributes[] = await this.stockService.index();

      res.status(200).json({ data: dataList, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public createStock = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const stockData: stockCreationAttributes = req.body;
      const createStockData: stockAttributes = await this.stockService.createStock(stockData);
      res.status(201).json({ data: createStockData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}

export default StockController;
