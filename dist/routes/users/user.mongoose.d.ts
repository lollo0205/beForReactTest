import { Schema } from 'mongoose';
export interface IDataOfWhereYouLive {
    address: string;
    houseNumber: number;
    city: string;
}
export interface IUser {
    dataOfWhereYouLive: IDataOfWhereYouLive;
    firstName: string;
    lastName: string;
    email: string;
}
export declare const UsersEntitySchema: Schema<any, import("mongoose").Model<any, any, any, any>, any>;
export declare const Users: import("mongoose").Model<IUser, {}, {}, {}>;
