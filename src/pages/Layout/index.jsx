import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AppBar from 'components/AppBar';

const StyledLayout = styled.div`
  padding-top: 50px;
`;

const Layout = ({ children }) => {
  return (
    <Fragment>
      <AppBar />
      <StyledLayout>{children}</StyledLayout>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
