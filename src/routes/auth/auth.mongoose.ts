import { model, Schema } from 'mongoose';

export const AuthEntitySchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'users' },
    accessToken: { type: String, required: true },
    idToken: { type: String, required: true },
    expiresIn: { type: Number, required: true },
    tokenType: { type: String, required: false }
  }
);

export const Auth = model('auth', AuthEntitySchema);