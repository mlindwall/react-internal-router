import React from 'react';
import PropTypes from 'prop-types';

const Redirect = (props, context) => {
  context.setRoute(props.to);
  return null;
};

Redirect.contextTypes = {
  setRoute: PropTypes.func
};

export default Redirect;