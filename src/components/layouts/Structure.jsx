import React from 'react';
import Footer from '../molecules/Footer/Footer';
import Navbar from '../molecules/Navbar/Index';

const BodyLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default BodyLayout;
