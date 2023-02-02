import mongoose from "mongoose";

export async function connect() {

    try {
        await mongoose.connect( "mongodb://127.0.0.1:27017/mongodbgraphql", {
            useNewUrlParser: true
        } );
        console.log('Database connected!!')
        
    } catch (error) {
        return console.log('error', error)
    }
 
}

//Connect to Mongo Atlas

// const uri = "mongodb+srv://dashfuentes:Test123@cluster0.3pioj25.mongodb.net/?retryWrites=true&w=majority";

// mongoose.connect( uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// } ).then( ( db ) => console.log( 'DB connected!!' ) )
// .catch(err => console.log(err))