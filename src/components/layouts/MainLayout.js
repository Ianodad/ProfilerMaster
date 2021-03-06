import React from 'react';

import Menu from '../Menu';

const MainLayout = ({ children }) => (
  <>
    <Menu />
    <div className="container">{children}</div>
  </>
);

export default MainLayout;
