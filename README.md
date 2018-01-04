# react-internal-router
Internal routing mechanism for React that does not display routes in browser navigation.
## Installation
Using [npm](https://www.npmjs.com/):

    $ npm i --S react-internal-router
    
## Usage
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
Use the Link component to change path
```js
import { Link } from 'react-internal-router';
```
Using Link
```js
<Link to="/about">About</Link>
```