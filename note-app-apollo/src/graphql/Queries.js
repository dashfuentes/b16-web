import { gql } from "@apollo/client";

export const GET_NOTES = gql`
    query getNotes {
        getNotes {
            _id
            title
            content
            date
        }
    }
`

export const LOGIN =  gql`
   query login($email:String, $password: String) {
       login(email: $email, password: $password)
   }
`

export const GET_NOTE_BY_ID = gql`
    query getNoteByTitle($title : String) {
        getNoteByTitle(title: $title){
            _id
            title
            content
            date
        }
    }
    

`