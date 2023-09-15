import React from 'react';
import { useQuery } from '@apollo/client';

import AnnouncementList from '../components/AnnouncementList';
import AnnouncementForm from '../components/AnnouncementForm';

import { QUERY_ANNOUNCEMENTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_ANNOUNCEMENTS);
  const announcements = data?.announcements || [];

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
            <AnnouncementList
              announcements={announcements}
              title="Recent Announcements, Ideas, Questions, and/or Concerns..."
              className="mt-5"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
  