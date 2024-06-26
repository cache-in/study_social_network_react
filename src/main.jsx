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
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
// import renderDOM from './render';
// import store from "./redux/state";
import store from "./redux/redux-store";
// import {subscribe} from "./redux/state";
import App from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderDOM = (store) => {
  root.render(
    <React.StrictMode>
      <App store={store}/>
    </React.StrictMode>,
  )
}

// ReactDOM.render(<App />, document.getElementById('root'));
// debugger;
renderDOM(store);

store.subscribe(() => {
  renderDOM(store);
});

