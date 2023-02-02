import Book from "./models/Book.js"

export const resolvers = {

    Query: {

        async getBooks() {
            const books = await Book.find();
            return books
        }
    }
} 