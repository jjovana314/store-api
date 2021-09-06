import * as mongoose from 'mongoose';
import { NameSchema } from './name.schema';
import { AddressSchema } from './address.schema';

export const UsersSchema = new mongoose.Schema({
  email: String,
  username: String,
  password: String,
  name: NameSchema,
  address: AddressSchema,
  phone: String
});