import Book from "./models/Book.js"

export const resolvers = {

    Query: {

        async getBooks() {
            const books = await Book.find();
            return books
        }
    },

    Mutation: {
       async createBook( _, { title, author, dateofreleased } ) {
            const book = { title, author, dateofreleased }
            return await Book.create(book)

        },
        async updateBook( _, { _id, title, author, dateofreleased } ) {
            const book = { title, author, dateofreleased }
            return await Book.findByIdAndUpdate(_id, book, {new : true} )
        }

    }
} 