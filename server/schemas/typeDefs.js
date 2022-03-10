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
    me: User 
    users:[User]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth!
    login(email: String!, password: String!until time): Auth!
    saveBook(
      authors: [String],
      description: String!,
      bookId: String!,
      image: String,
      link: String,
      title: String!
    ): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
