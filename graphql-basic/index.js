const express = require( 'express' );
const app = express();

const { buildSchema } = require( 'graphql' );
const { graphqlHTTP } = require( 'express-graphql' );
const { request } = require( 'express' );
const { books } = require( './data.json' );

const schema = buildSchema( `

type Query {

    getWelcome:String
    getPersonalInfo(name:String, age:Int): String
    getBooks : [Book]
    getBookByAuthor(author: String): [Book]
}

type Mutation {
    addBook(id:Int!, title:String, author: String) : [Book]
    updateBook(id:Int!, title:String, author: String) : Book
    deleteBook(id: Int!):[Book]
}

    type Book {
        id: Int
        title: String
        author: String

    }

`)

function deleteBook({id}) {
   
    return books.filter( line => { return line.id !== id } )
}

function updateBook( { id, title, author } ) {
    //Find the book to update
    books.map( book => {
        if ( book.id === id ) {
           
            book.title = title ? title :  book.title
            book.author = author ? author : book.author
        }
        return book;
    })
    //return the updated book
    return books.find(book => book.id == id)

}

function getBookByAuthor( { author } ) {
    var booksByAuthor = books.filter( (line) => {
        return line.author === author
    } )
    
    return booksByAuthor
}

function getWelcome() {
    return "hola mundo";
} 
function getPersonalInfo( args ) {
    
    return "Hello" + args.name + ' ' + args.age
}

function getBooks() {
    return  books
}
function addBook( { id, title, author } ) {
    //insert the object to the collection []
    books.push( {id: id,title:title,author} );
    //return all the books
     return books
}

const root = {
    /// Propiedades de el schema === funciones
    getWelcome: getWelcome,
    getPersonalInfo: getPersonalInfo,
    getBooks: getBooks,
    addBook: addBook,
    getBookByAuthor: getBookByAuthor,
    updateBook: updateBook,
    deleteBook : deleteBook
   
}
app.use( '/graphql', graphqlHTTP( {
    schema: schema,
    rootValue: root,
    graphiql: true
}))


app.listen( 3000, () => {
    console.log('server is running!!')
})