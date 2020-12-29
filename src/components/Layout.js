import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import GlobalStyle from '../styles/GlobalStyle';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Sidebar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
