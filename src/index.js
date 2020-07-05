import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'animate.css'
import App from './App'

// Selector tipo jquery
const $ = el => el.startsWith('#') ? document.querySelector(el) : document.querySelectorAll(el)

ReactDOM.render(
  <App />,
  $('#root')
);