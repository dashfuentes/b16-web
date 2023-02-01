const express = require( 'express' );
const app = express();

const { buildSchema } = require( 'graphql' );
const { graphqlHTTP } = require( 'express-graphql' );
const { request } = require( 'express' );

const schema = buildSchema( `

type Query {

    getWelcome:String
    getPersonalInfo(name:String, age:Int): String
}
`)

function getWelcome() {
    return "hola mundo";
} 
function getPersonalInfo( args ) {
    
    return "Hello" + args.name + ' ' + args.age
}

const root = {
    /// Propiedades de el schema === funciones
    getWelcome: getWelcome,
    getPersonalInfo : getPersonalInfo
   
}
app.use( '/graphql', graphqlHTTP( {
    schema: schema,
    rootValue: root,
    graphiql: true
}))


app.listen( 3000, () => {
    console.log('server is running!!')
})