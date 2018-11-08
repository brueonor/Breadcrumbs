/**
 *
 * Breadcrumb
 *
 */

import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


const getPath = (path) => {
  if (typeof path === 'string') {
    return path;
  }

  return path.pathname + path.search;
};

const getComponentToRender = (componentToRender) => {
  if (typeof componentToRender === 'function') {
    return componentToRender;
  }

  return () => componentToRender;
};

function Breadcrumb({
  to,
  exact,
  text,
  componentToRender
}) {
  return (
    <div>
      <NavLink to={to} exact={exact}>{text}</NavLink>
      <Route exact={exact} path={getPath(to)} component={getComponentToRender(componentToRender)}></Route>
    </div>
  );
}

Breadcrumb.propTypes = {
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      search: PropTypes.string.isRequired
    })
  ]).isRequired,
  exact: PropTypes.bool,
  text: PropTypes.string.isRequired,
  componentToRender: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object
  ]).isRequired
};

Breadcrumb.defaultProps = {
  exact: false,
};

export default Breadcrumb;
