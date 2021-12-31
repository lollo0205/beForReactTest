import { ICreateProduct } from "../product/product.interface";
export interface IGetProductByIdRequest {
    Params: {
        productId: string;
    };
}
export interface ICreateProductRequest {
    Body: ICreateProduct;
}
