const { gql } = require("apollo-server-express");

const typeDefs = gql`
type User {
    _id: ID!
    username: String! 
    email: String! 
    savedBooks: [Book]
}

type Book {
    _id: ID! 
    authors: [String]
    description: String! 
    bookId: String! 
    image: String 
    link: String
    title: String! 
}

type Query {
    test: Int 
}

type Auth {
    token: ID!
    user: User
} 

type Mutation {
     createUser(username: String!, email: String!, password: String!): Auth!
  }
`;

module.exports = typeDefs;
