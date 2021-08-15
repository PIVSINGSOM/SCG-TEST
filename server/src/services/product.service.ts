import DB from '@databases';
import { User } from '@interfaces/users.interface';
import { productAttributes, productCreationAttributes } from '@/models/product';
import { isEmpty } from '@/utils/util';
import { HttpException } from '@/exceptions/HttpException';
class ProductService {
  public product = DB.product;

  public async index(machineId: number): Promise<productAttributes[]> {
    const resultList = await this.product.findAll({});
    return resultList;
  }
  public async createProduct(productData: productCreationAttributes): Promise<productAttributes> {
    if (isEmpty(productData)) throw new HttpException(400, 'Bad request');

    const createProductData: productAttributes = await this.product.create({ ...productData });
    return createProductData;
  }
  public async updateProduct(productData: productCreationAttributes): Promise<productAttributes> {
    if (isEmpty(productData)) throw new HttpException(400, 'Bad request');

    const findProduct: productAttributes = await this.product.findByPk(productData.id);
    if (!findProduct) throw new HttpException(409, 'Not have product!!');

    await this.product.update({ ...productData }, { where: { id: productData.id } });

    const updateUser: productAttributes = await this.product.findByPk(productData.id);
    return updateUser;
  }
}

export default ProductService;
