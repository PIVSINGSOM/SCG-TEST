import { NextFunction, Request, Response } from 'express';
import ProductService from '@/services/product.service';
import { productAttributes, productCreationAttributes } from '@/models/product';
import { RequestWithMachine } from '@/interfaces/auth.interface';
class ProductController {
  public productService = new ProductService();

  public index = async (req: RequestWithMachine, res: Response, next: NextFunction) => {
    try {
      const dataList: productAttributes[] = await this.productService.index();
      res.status(200).json({ data: dataList, message: '' });
    } catch (error) {
      next(error);
    }
  };

  public createProduct = async (req: RequestWithMachine, res: Response, next: NextFunction) => {
    try {
      const userData: productCreationAttributes = req.body;

      const createProductData: productAttributes = await this.productService.createProduct(userData);
      res.status(201).json({ data: createProductData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateProduct = async (req: RequestWithMachine, res: Response, next: NextFunction) => {
    try {
      const productData: productCreationAttributes = req.body;
      const updateUserData: productAttributes = await this.productService.updateProduct(productData);
      res.status(200).json({ data: updateUserData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };
}

export default ProductController;
