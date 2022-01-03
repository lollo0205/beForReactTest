import { ICreateProduct } from './interfaces/product/product.interface';
export default class ProductService {
    getProducts: () => import("mongoose").Query<any[], any, {}, any>;
    getProductById: (productId: string) => import("mongoose").Query<any, any, {}, any>;
    createProduct: (newProduct: ICreateProduct) => Promise<any>;
}
