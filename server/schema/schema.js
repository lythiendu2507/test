const {gql} = require('apollo-server-express')

const typeDefs = gql`  
    type Phone {
         id:ID
         name: String
         price: String
         system: String
         camera: String
         cpu: String
         ram: String
         sim: String
         pin: String
         img: String
    }

    #root type 
    type Query{
        phones: [Phone]
        phone(id: ID!): Phone
    }

`

module.exports = typeDefs;