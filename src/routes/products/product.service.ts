import { products } from "./products.mock";

export default class ProductService {

  products = products;

  getProducts = () => {
    console.log('');
    return [...this.products]
  }
}