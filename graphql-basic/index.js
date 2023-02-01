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
}

type Mutation {
    addBook(id:Int!, title:String, author: String) : [Book]
}

    type Book {
        id: Int
        title: String
        author: String

    }

`)

//Create a query that return a collection of books by author

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
    addBook: addBook
   
}
app.use( '/graphql', graphqlHTTP( {
    schema: schema,
    rootValue: root,
    graphiql: true
}))


app.listen( 3000, () => {
    console.log('server is running!!')
})