import React from 'react';
import { useQuery } from '@apollo/client';

import AnnouncementList from '../components/AnnouncementList';
import AnnouncementForm from '../components/AnnouncementForm';

import { QUERY_ANNOUNCEMENTS } from '../utils/queries';
import Auth from '../utils/auth';

const Home = () => {
  const { loading, data } = useQuery(QUERY_ANNOUNCEMENTS);
  const announcements = data?.announcements || [];
  const userRole = Auth.getProfile()?.data?.role; //

  return (
    <main className="d-flex justify-content-center align-items-center mt-5">
      <div>
        <div className="border border-dark border-3 mb-3 p-3 bg-light-subtle">
          <AnnouncementForm />
        </div>
        <div className="m-5">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div>
              {userRole === 'teacher' ? (
                <AnnouncementList
                  announcements={announcements}
                  title="Teacher View: Recent Announcements, Ideas, Questions, and/or Concerns..."
                  className="mt-5"
                />
              ) : (
                <AnnouncementList
                  announcements={announcements}
                  title="Parent View: Recent Announcements, Ideas, Questions, and/or Concerns..."
                  className="mt-5"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
  