import React from 'react';
import PropTypes from 'prop-types';

import AppBar from 'components/AppBar';

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
