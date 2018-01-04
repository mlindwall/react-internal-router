import React from 'react';
import Route from './Route';
import PropTypes from 'prop-types';

export default class Router extends React.Component {

  getChildContext() {
    return { setRoute: this.setRoute }
  };

  constructor() {
    super();
    this.state = {
      path: "/"
    };
    this.setRoute = this.setRoute.bind(this);
  }

  setRoute(route) {
    this.setState({
      path: route
    })
  }

  render() {
    let { children } = this.props;
    for (var i in children) {
      let child = children[i];
      if (child.type == Route && child.props.path === this.state.path) {
        return <child.props.component />
      }
    }
    return null;
  }

}

Router.childContextTypes = {
  setRoute: PropTypes.func
};