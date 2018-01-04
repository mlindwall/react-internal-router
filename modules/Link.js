import React from 'react';
import PropTypes from 'prop-types';

const Link = (props, context) =>  {

  function onClick(e) {
    if (!e.defaultPrevented && e.button === 0) {
      e.preventDefault();
      context.setRoute(props.to);
    }
  }

  return <a { ...props } href={ window.location.href } onClick={ onClick } />;

};

Link.contextTypes = {
  setRoute: PropTypes.func
};

export default Link;