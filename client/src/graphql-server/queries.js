import {gql} from '@apollo/client'

const getPhones = gql `
    query {
        phones {
            id
            name
            price
            img
        }
    }
`

export { getPhones }
