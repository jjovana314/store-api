import * as mongoose from 'mongoose';


export const LogsSchema = new mongoose.Schema({
    id: String,
    name: String,
    action: String,
    at: String
});