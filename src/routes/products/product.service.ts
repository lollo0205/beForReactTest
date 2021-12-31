
import { ICreateProduct } from "./interfaces/product/product.interface";
import { Product } from "./products.mongoose";

export default class ProductService {

  getProducts = () => Product.find().populate(['type']);
  getProductById = (productId: string) => Product.findOne({ _id: productId }).populate(['type']);
  createProduct = (newProduct: ICreateProduct) => Product.create(newProduct);
}