import React from 'react';
import { useQuery } from '@apollo/client';

import AnnouncementList from '../components/AnnouncementList';
import AnnouncementForm from '../components/AnnouncementForm';

import { QUERY_ANNOUNCEMENTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_ANNOUNCEMENTS);
  const announcements = data?.announcements || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <AnnouncementForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <AnnouncementList
              announcements={announcements}
              title="Recent Announcements, Ideas, Questions, and/or Concerns..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
  