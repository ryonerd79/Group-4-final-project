const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    isTeacher: Boolean
  }

  type Auth {
    token: ID!
    user: User
  }

  type Announcement {
    _id: ID
    announcementText: String
    announcementAuthor: String
    createdAt: String
    comments: [Comment]!
  }
  
  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }


  type Query {
    users: [User]
    user(username: String!): User
    announcements: [Announcement!]!
    announcement(id: ID!): Announcement
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, isTeacher: Boolean!): Auth
    login(email: String!, password: String!): Auth
    createAnnouncement(content: String!): Announcement
  }
`;

module.exports = typeDefs;
