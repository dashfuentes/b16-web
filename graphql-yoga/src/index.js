import  server   from './server.js';
//import "./database.js"; //** Use this import if we are reaching out a cloud cluster */
import { connect } from "./database.js" //**Use this import in order to execute a local connection DB */
connect()

server.start( { port: 3000 }, ( { port } ) => {
    console.log('server is running on ' + port)
})