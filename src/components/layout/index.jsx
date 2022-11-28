import React from 'react';
import Footer from "./footer";
import Header from "./header";

import './styles.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
