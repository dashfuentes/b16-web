import { gql } from "@apollo/client";

export const CREATE_NOTE = gql`

    mutation createNote($title: String, $content: String, $date:String, $author:String ){
        createNote(title: $title, content: $content, date:$date, author:$author){
            _id
            title
            content
            date
            author
        }
    }
`