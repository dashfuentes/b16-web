import { Schema, model } from "mongoose";

const bookSchema = new Schema( {
    title: String,
    author: String,
    dateofreleased: String
} );

export default model('Book', bookSchema)