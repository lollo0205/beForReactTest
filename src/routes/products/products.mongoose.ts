import { model, Schema } from 'mongoose';

export const ProductsEntitySchema = new Schema(
  {
    type: { type: Schema.Types.ObjectId, ref: 'type_products' },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    name: { type: String, required: true },
    qtaStock: { type: Number, required: true }
  }
);

export const Product = model('products', ProductsEntitySchema);