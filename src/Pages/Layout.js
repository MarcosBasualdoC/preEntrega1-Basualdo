import React from 'react';
import NavBar from '../componentes/navBar/navBar';

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
