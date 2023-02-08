import { GraphQLServer } from "graphql-yoga";
//resolvers
import resolvers from "./graphql/resolvers/index.js"
import path from "path"


 const server = new GraphQLServer( {
    //typeDefs
    typeDefs: path.join( __dirname, "graphql/schema.graphql" ), ///c/Users/carlf/Desktop/b16-web/graphql-yoga/src/graphql/schema.graphql
    //resolver
    resolvers
 } )

 module.exports = server
