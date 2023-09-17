const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    announcements: [Announcement]!
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

  type GradeBook {
    _id: ID
    studentName: String!
    grade: Float!
  }

  extend type User {
    gradeBook: [Gradebook]
  }

  type Query {
    getGradeBook: [GradeBook]
  }


  type Query {
    users: [User]
    user(username: String!): User
    announcements(username: String): [Announcement]
    announcement(announcementId: ID!): Announcement
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, isTeacher: Boolean!): Auth
    login(email: String!, password: String!): Auth
    addAnnouncement(announcementText: String!): Announcement
    addComment(announcementId: ID!, commentText: String!): Announcement
    removeAnnouncement(announcementId: ID!): Announcement
    removeComment(announcementId: ID!, commentId: ID!): Announcement
  }
`;

module.exports = typeDefs;
