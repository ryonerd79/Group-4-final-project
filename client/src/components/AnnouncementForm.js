import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_ANNOUNCEMENT } from '../utils/mutations';
import { QUERY_ANNOUNCEMENTS, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const AnnouncementForm = () => {
  const [announcementText, setAnnouncementText] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

  const [addAnnouncement, { error }] = useMutation(ADD_ANNOUNCEMENT, {
    update(cache, { data: { addAnnouncement } }) {
      try {
        const { announcements } = cache.readQuery({ query: QUERY_ANNOUNCEMENTS });

        cache.writeQuery({
          query: QUERY_ANNOUNCEMENTS,
          data: { announcements: [addAnnouncement, ...announcements] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, announcements: [...me.announcements, addAnnouncement] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addAnnouncement({
        variables: {
          announcementText,
          thoughtAuthor: Auth.getProfile().data.username,
        },
      });

      setAnnouncementText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'announcementText' && value.length <= 300) {
      setAnnouncementText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h3>How would like to help us teach together today?</h3>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 300 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/300
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="announcementText"
                placeholder="Here's a new announcement or idea..."
                value={announcementText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Announcement
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share an announcement. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default AnnouncementForm;