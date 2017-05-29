function requireAll (r) { r.keys().forEach(r); }
requireAll(require.context('../templates/', false, /\.pug$/));

// const scss = require('../sass/styles.scss');

import React from "react";
import ReactDOM from "react-dom";
import {HashRouter, Route, Link} from 'react-router-dom';

import Layout from "./pages/Layout";
import About from "./pages/About";

const app = document.getElementById('app');

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path='/' component={Layout}></Route>
      <Route path='/about' component={About}></Route>
    </div>
  </HashRouter>,
  app
);
