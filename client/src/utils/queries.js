import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      announcements {
        _id
        announcementText
        announcementAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_ANNOUNCEMENTS = gql`
  query getAnnouncements {
    announcements {
      _id
      announcementText
      announcementAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_ANNOUNCEMENT = gql`
  query getSingleAnnouncement($announcementId: ID!) {
    announcement(announcementId: $announcementId) {
      _id
      announcementText
      announcementAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      announcements {
        _id
        announcementText
        announcementAuthor
        createdAt
      }
    }
  }
`;
