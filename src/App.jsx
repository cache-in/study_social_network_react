import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

const App = () => {
  return (
    <div>
      <Sidebar />
      <Header />
      <Content />
    </div>);
}

export default App;