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
      {showTitle && <h3 className="mb-5 text-center border border-light border-3 p-3 text-light bg-dark">{title}</h3>}
      {announcements &&
        announcements.map((announcement) => (
          <div key={announcement._id} className="card mb-3 border border-2 border-dark">
            <h4 className="card-header announcement-bg text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-dark text-decoration-none"
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
            <div className="card-body bg-light border-top border-bottom border-black p-4">
              <p className="fs-3">{announcement.announcementText}</p>
            </div>
            <Link
              className="btn btn-secondary btn-block rounded-0 fs-5 text-decoration-none"
              to={`/announcements/${announcement._id}`}
            >
              Comment
            </Link>
          </div>
        ))}
    </div>
  );
};

export default AnnouncementList;