// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import renderDOM from './render';
import store from "./redux/state";

// ReactDOM.render(<App />, document.getElementById('root'));
// debugger;
renderDOM(store);

