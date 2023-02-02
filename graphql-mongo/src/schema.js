//TypeDefs= type definition(Query,Mutation,custom types)
//Resolvers= functions to resolve type defintion(Query, Mutation..)
import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from "./resolvers.js"

const TypeDefs = `

type Query {
    getBooks:[Book]
}

type Book {
    _id: ID
    title: String
    author: String
    dateofrealese : String
}

`

export default makeExecutableSchema( {
    typeDefs: TypeDefs,
    resolvers: resolvers
})