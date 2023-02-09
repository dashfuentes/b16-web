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