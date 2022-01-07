import { model, Schema } from 'mongoose';
export interface IDataOfWhereYouLive {
  address: string,
  houseNumber: number,
  city: string
}
export interface IUser {
  dataOfWhereYouLive: IDataOfWhereYouLive,
  firstName: string,
  lastName: string,
  email: string
}
export const UsersEntitySchema = new Schema(
  {
    // type: { type: Schema.Types.ObjectId, ref: 'type_products' },
    dataOfWhereYouLive: {
      type: Map, of: {
        address: { type: String, required: true },
        houseNumber: { type: Number, required: true },
        city: { type: String, required: true }
      }, required: false
    },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true }
  }
);

export const Users = model<IUser>('users', UsersEntitySchema);