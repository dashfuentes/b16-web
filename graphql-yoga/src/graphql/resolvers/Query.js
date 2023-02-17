import Note from "../../models/Note.js"
import User from "../../models/User.js"

const Query = {


  async  getNotes() {
        const notes = await Note.find();
        return notes
    },

    async login(_, {email,password} ){
      var message;
      const verifyUser = await User.find( { email: email, password : password}); //returns an array
       console.log('user', verifyUser.length)
      
      if(verifyUser.length > 0){
          message = "Ok User"
      } else{
        message = "Bad User"
      }
  
      return message;
  },
    
    async getNoteByTitle( _, { title } ) {
      const singleNote = await Note.findOne( { title: title } );
      return singleNote;
      },
}

export default Query