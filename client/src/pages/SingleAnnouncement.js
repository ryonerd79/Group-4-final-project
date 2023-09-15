import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

import { QUERY_SINGLE_ANNOUNCEMENT } from '../utils/queries';

const SingleAnnouncement = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { announcementId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_ANNOUNCEMENT, {
    // pass URL parameter
    variables: { announcementId: announcementId },
  });

  const announcement = data?.announcement || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 className="card-header announcement-bg text-dark p-2 m-0">
        {announcement.announcementAuthor} <br />
        <span style={{ fontSize: '1rem' }}>
          had this announcement on {announcement.createdAt}
        </span>
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            lineHeight: '1.5',
          }}
        >
          {announcement.announcementText}
        </blockquote>
      </div>

      <div className="my-5">
        <CommentList comments={announcement.comments} />
      </div>
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <CommentForm announcementId={announcement._id} />
      </div>
    </div>
  );
};

export default SingleAnnouncement;
