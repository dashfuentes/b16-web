import Note from "../../models/Note.js";

const Mutation = {

    async createNote( _, { title, content, date, author } ) {
        const newNote = {title,content,date,author}
        const note = await Note.create( newNote );
        return note
    },
    async updateNote( _, { _id, title, content, date, author } ) {
        const note = { title, content, date, author };
        return await Note.findByIdAndUpdate(_id, note, {new : true} )
    },

    async removeNote( _, { _id } ) {
        await Note.findByIdAndDelete( _id )
        return await Note.find();
    },

 


}

export default Mutation