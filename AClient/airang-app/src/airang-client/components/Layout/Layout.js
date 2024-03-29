import React from 'react';
import { Fragment } from 'react';
import MainNavigation from './MainNavigation';

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <br/><br/>
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
