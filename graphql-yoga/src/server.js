import { GraphQLServer } from "graphql-yoga";
//resolvers
import resolvers from "./graphql/resolvers/index.js"
import path from "path";
import { fileURLToPath } from 'url';

/*** Limitation using type:module this is a hijack solution ***/
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname( __filename );

/*** Limitation using type:module this is a hijack solution ***/

 const server = new GraphQLServer( {
    //typeDefs
    typeDefs: path.join( __dirname, "graphql/schema.graphql" ), ///c/Users/carlf/Desktop/b16-web/graphql-yoga/src/graphql/schema.graphql
    //resolver
    resolvers
 } )

 export default server
