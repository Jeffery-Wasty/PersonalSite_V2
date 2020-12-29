import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Sidebar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
