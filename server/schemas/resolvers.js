const { gql } =  require('apollo-server-express');

const typeDefs = gql`
    type Teacher {
        _id: ID!
        name: String!
        email: String!
        subject: String!
    }
    
    type Student {
        _id: ID!
        name: String!
    }
    
    type Parent {
        _id: ID!
        name: String!
        email: String!
    }
`

