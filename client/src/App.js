import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Calculator from './pages/Calculator';
import MyFootprint from './pages/MyFootprint';
import MyPledges from './pages/MyPledges';
import NoMatch from './pages/NoMatch';
import Donation from './pages/Donation';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import References from './pages/References';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/myfootprint" element={<MyFootprint />} />
            <Route path="/mypledges" element={<MyPledges />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/references" element={<References />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
