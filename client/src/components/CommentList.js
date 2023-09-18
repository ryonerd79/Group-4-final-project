import React from 'react';

const CommentList = ({ comments = [] }) => {
  if (!comments.length) {
    return <h3 className='border bg-dark text-light text-center py-2'>No Comments Yet. Get in the Conversation!</h3>;
  }

  return (
    <>
      <h3
        className="p-3 display-inline-block bg-dark text-light border border-3 fs-2 d-flex justify-content-center"
      >
        Comments
      </h3>
      <div className="d-flex flex-row my-4">
        {comments &&
          comments.map((comment) => (
            <div key={comment._id} className="col-12 mb-3 pb-3">
              <div className="p-3 form-border bg-light-subtle">
                <h5 className="card-header">
                  {comment.commentAuthor} commented{' '}
                  <span style={{ fontSize: '0.825rem' }}>
                    on {comment.createdAt}
                  </span>
                </h5>
                <p className="card-body mt-2 border-top border-dark pt-3">{comment.commentText}</p>
              </div>
            </div>
          ))}
      </div>
    </>

  );
};

export default CommentList;