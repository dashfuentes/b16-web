import  server   from './server.js';
import "./database.js";

server.start( { port: 3000 }, ( { port } ) => {
    console.log('server is running on ' + port)
})