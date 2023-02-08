import Note from "../../models/Note.js"

const Query = {


  async  getNotes() {
        const notes = await Note.find();
        return notes
    }
}

export default Query