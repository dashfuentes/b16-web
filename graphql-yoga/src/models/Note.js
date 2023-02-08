import { Schema, model } from "mongoose";

const noteSchema = new Schema( {
    title: {
        type: String,
        required: true
    },
    content: {
        type: String
    },
    date: {
        type: String
    },
    author: {
        type: String
    }
} );

export default model ("Note", noteSchema)