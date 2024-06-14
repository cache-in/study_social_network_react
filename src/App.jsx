import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Sidebar />
        <Header />
        <Content />
      </BrowserRouter>
    </div>);
}

export default App;