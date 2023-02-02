import { Schema, model } from "mongoose";

const bookSchema = new Schema( {
    title: String,
    author: String,
    dateofrealease: String
} );

export default model('Book', bookSchema)