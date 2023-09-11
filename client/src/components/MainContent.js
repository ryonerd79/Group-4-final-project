import React, { useState } from 'react';
import About from '../pages/About';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Contact from '../pages/Contact';
import Header from './Header'
import Nav from './Nav';
import Home from '../pages/Home'

export default function MainContentContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

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
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Home />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <main>
      <Header />
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </main>
  );
}
