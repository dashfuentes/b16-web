//TypeDefs= type definition(Query,Mutation,custom types)
//Resolvers= functions to resolve type defintion(Query, Mutation..)
import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from "./resolvers.js"

const TypeDefs = `

type Query {
    getBooks:[Book]
}
type Mutation {
    createBook(title:String,author:String,dateofreleased: String) : Book
    updateBook(_id:ID,title:String,author:String,dateofreleased: String) : Book
}

type Book {
    _id: ID
    title: String
    author: String
    dateofreleased : String
}

`

//Delete

//Find by title

export default makeExecutableSchema( {
    typeDefs: TypeDefs,
    resolvers: resolvers
})