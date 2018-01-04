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
      path: this.formatPath(route)
    })
  }

  formatPath(path) {
    if (path.charAt(0) !== "/") {
      return "/" + path.toLowerCase();
    }
    return path.toLowerCase();
  }

  render() {
    let { children } = this.props;
    for (var i in children) {
      let child = children[i];
      if (child.type === Route && this.formatPath(child.props.path) === this.state.path) {
        let { component, path, ...rest } = child.props;
        if (component) {
          return <child.props.component { ...rest } />
        }
      }
    }
    return null;
  }

}

Router.childContextTypes = {
  setRoute: PropTypes.func
};