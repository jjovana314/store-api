import * as mongoose from 'mongoose';


export const GeolocationSchema = new mongoose.Schema({
  lat: String,
  long: String
});