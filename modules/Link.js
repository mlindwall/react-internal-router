import React from 'react';
import PropTypes from 'prop-types';

const Link = (props, context) =>  <div onClick={ () => context.setRoute(props.to) }>{props.children}</div>;

Link.contextTypes = {
  setRoute: PropTypes.func
};

export default Link;