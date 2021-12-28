export default class ProductService {
    products: {
        id: number;
        type: string;
        image: string;
        price: number;
        name: string;
        qtaStock: number;
    }[];
    getProducts: () => {
        id: number;
        type: string;
        image: string;
        price: number;
        name: string;
        qtaStock: number;
    }[];
}
