'use strict'
import React from 'react'
import { Provider } from 'react-redux'

import store from './store'

import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Root from './components/Root.js'

ReactDOM.render(
  <Provider store={store}>
      <Root />
  </Provider>,
  document.getElementById('app') // second argument to render(), references root node in your HTML
);