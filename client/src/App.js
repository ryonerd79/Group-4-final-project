import './normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './utils/auth';

import Signup from './pages/Signup';
import Login from './pages/Login';
import SingleAnnouncement from './pages/SingleAnnouncement';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact'
import Parents from './pages/Parents';
import Teachers from './pages/Teachers';
import Gradebook from './pages/Gradebook';
import ComingSoon from './components/ComingSoon';

import { useState, useEffect } from 'react';


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  const [userType, setUserType] = useState('');

  useEffect(() => {
    const userTypeFromStorage = localStorage.getItem('userType');
    if (userTypeFromStorage) {
      setUserType(userTypeFromStorage);
      console.log(userTypeFromStorage);
    }
  }, []);
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              {userType === 'teacher' ? (
                <Route
                path="/"
                element={<Teachers/>} />
              ):(
                <Route
                path="/"
                element={<Parents />} />
              )};
              <Route 
                path="/login" 
                element={<Login />}
              />
              <Route 
                path="/signup" 
                element={<Signup />}
              />
              <Route 
                path="/about" 
                element={<About />}
              />
              {Auth.loggedIn() ? (
                <Route path="/contact" element={<Contact />} />
              ) : null}
              <Route 
                path="/me" 
                element={<Profile />}
              />
              <Route 
                path="/profiles/:username" 
                element={<Profile />}
              />
              <Route 
                path="/announcements/:announcementId" 
                element={<SingleAnnouncement />}
              />
              <Route 
                path="/gradebook"
                element={<Gradebook/>}
              />
              <Route 
                path="/coming-soon" 
                element={<ComingSoon />} 
              />
            </Routes>
          </div >
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
