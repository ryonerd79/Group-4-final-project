import React, { useState } from 'react';
import About from '../pages/About';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Contact from '../pages/Contact';
import Head from './Head';
import Nav from './Nav';

export default function MainContentContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Signup") {
      return <Signup />;
    }
    if (currentPage === "Login") {
      return <Login />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <main>
      <Head />
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </main>
  );
}
