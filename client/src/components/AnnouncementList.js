import React from 'react';
import { Link } from 'react-router-dom';

const AnnouncementList = ({
  announcements,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!announcements.length) {
    return <h3>No Announcements Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {announcements &&
        announcements.map((announcement) => (
          <div key={announcement._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${announcement.announcementAuthor}`}
                >
                  {announcement.announcementAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    had this announcement on {announcement.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You had this announcement on {announcement.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{announcement.announcementText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/announcements/${announcement._id}`}
            >
              Join the discussion on this announcement.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default AnnouncementList;