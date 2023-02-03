import { gql } from "@apollo/client";

export const CHARACTERS = gql`

query characters{
    characters{

        results {
            name
            id
            gender
        }
    }
}
`
