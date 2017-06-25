//- ### ### ### ### ### ### ### ###
//- BUILD
//- ### ### ### ### ### ### ###

//- ### CSS BUILD
import scss from './sass/styles.scss';
 
//- ### TEMPLATES BUILD
function requireAll (r) { r.keys().forEach(r); }
requireAll(require.context('./templates/', false, /\.pug$/));

//- ### ### ### ### ### ### ### ### 
//- APP
//- ### ### ### ### ### ### ###

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//- ### ### ### COMPONENTS
import App from './js/components/com_index';

//- ### ### ### REDUCERS
import reducers from './js/reducers/red_index.js';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const appEl =  document.querySelector('.container');

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , appEl);
