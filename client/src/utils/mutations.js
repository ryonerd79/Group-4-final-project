import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, $isTeacher: Boolean!) {
    addUser(username: $username, email: $email, password: $password, isTeacher: $isTeacher) {
      token
      user {
        _id
        username
        isTeacher
      }
    }
  }
`;

export const ADD_ANNOUNCEMENT = gql`
  mutation addAnnouncement($announcementText: String!) {
    addAnnouncement(announcementText: $announcementText) {
      _id
      announcementText
      announcementAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($announcementId: ID!, $commentText: String!) {
    addComment(announcementId: $announcementId, commentText: $commentText) {
      _id
      announcementText
      announcementAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
