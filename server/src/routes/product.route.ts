import { Router } from 'express';
import ProductController from '@/controllers/product.controller';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import { productCreationAttributes } from '@/models/product';
import authMiddleware from '@middlewares/auth.middleware';
class ProductRoute implements Routes {
  public path = '/product';
  public router = Router();
  public productController = new ProductController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, authMiddleware, this.productController.index);
    this.router.post(`${this.path}`, authMiddleware, this.productController.createProduct);
    this.router.put(`${this.path}`, authMiddleware, this.productController.createProduct);
  }
}

export default ProductRoute;
