import express from "express";
import { connect } from "./database.js";
import { graphqlHTTP } from "express-graphql";
import schema from './schema.js'

const app = express();
connect();

app.use( '/graphql-playground', graphqlHTTP( {
    schema: schema,
    graphiql : true
}))

app.listen( '3000', () => {
    console.log('server is up!!')
})