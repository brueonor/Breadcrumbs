/**
 *
 * Home
 *
 */

import React from 'react';
import Breadcrumb from '../Breadcrumb';
import Patate from '../Patate';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';


function Home() {
  return (
    <div>
      <Breadcrumb to="/patate" text="patate" componentToRender={<Patate />} />
      <h1>Home</h1>
    </div>
  );
}

Home.propTypes = {};

export default Home;
