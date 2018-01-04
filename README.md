# react-internal-router
Internal routing mechanism for React that does not display routes in browser navigation.
## Installation
Using [npm](https://www.npmjs.com/):

    $ npm i -s react-internal-router
    
## Usage
### Routing
Import Router and Route components
```js
import { Router, Route } from 'react-internal-router';
```
Wrap the Routes in the Router
```js
<Router>
  <Route path="/" component={HomePage} />
  <Route path="/about" component={AboutPage} />
</Router>
```
__Properties passed to a Route will be accessible in the components props!__
### Navigation
There are three methods of changing routes, two of which are recommended. 
#### Link
Use the Link component to render anchor tags that change path on click
```js
import { Link } from 'react-internal-router';
```
Using Link
```js
<Link to="/about">About</Link>
```

#### Redirect
The redirect component is the recommended way to change paths without user action
```js
import { Redirect } from 'react-internal-router';
```
Upon rendering the Redirect component the route will be updated
```js
<Redirect to="/about" />
```

#### Router Context (not recommended)
The third way to change paths is by retrieving the setRoute function from the Routers context.
If possible, this method should be avoided altogether. 
In order to access the setRoute function you need to retrieve it from the Router context. The Router context is accessible in all components nested within the Router, using PropTypes.
```js
import { PropTypes } from 'prop-types';
```
To access the setRoute function within your component context, you need to add contextTypes tp your component
```js
YourComponentName.contextTypes = {
  setRoute: PropTypes.func
};
```
You will now have access to the setRoute function inside your components context, and can use it to programmatically change paths. 
The setRoute function accepts one argument, the target path.
```js
this.context.setRoute("/about");
```