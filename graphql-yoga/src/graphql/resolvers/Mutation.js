import Note from "../../models/Note.js";

const Mutation = {

    async createNote( _, { title, content, date, author } ) {
        const newNote = {title,content,date,author}
        const note = await Note.create( newNote );
        return note
    }
}

export default Mutation