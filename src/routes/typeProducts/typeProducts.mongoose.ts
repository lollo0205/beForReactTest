import { model, Schema } from "mongoose";

export const typeProducstEntitySchema = new Schema({
  name: { type: String, required: true }
  // products: [{type: }]
})

export const TypeProducts = model('type_products', typeProducstEntitySchema);