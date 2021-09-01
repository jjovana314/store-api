import * as mongoose from 'mongoose'


export const NameSchema = new mongoose.Schema({
  firstname: String,
  lastname: String
});