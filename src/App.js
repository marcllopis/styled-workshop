import React from 'react';

import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
