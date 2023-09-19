import React from 'react';

function ComingSoon() {
  return (
    <div className="mt-5">
    <div className="border border-dark border-2">
      <div>
        <h3 className="card-header border-top border-dark announcement-bg text-dark fs-1 text-center">
          COMING SOON!
        </h3>
      </div>
      <div className="bg-light-subtle border-top border-dark py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            lineHeight: '1.5',
          }}
        >
         <p className='fs-1 text-center'>This feature is under development. Please check back later to help us further develop
            the app and local schools!</p>
        </blockquote>
      </div>
    </div>
  </div>
  );
}

export default ComingSoon;
