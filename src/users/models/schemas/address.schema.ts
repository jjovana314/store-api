import * as mongoose from 'mongoose';
import { GeolocationSchema } from './geolocation.schema';

export const AddressSchema = new mongoose.Schema({
  city: String,
  street: String,
  number: Number,
  zipcode: String,
  geolocation: GeolocationSchema
});