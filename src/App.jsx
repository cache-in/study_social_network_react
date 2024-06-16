import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import {BrowserRouter} from "react-router-dom";

const App = (props) => {
  // debugger;
  return (
    <div>
      <BrowserRouter>
        <Sidebar />
        <Header />
        <Content store={props.store}/>
      </BrowserRouter>
    </div>);
}

export default App;