import React, { Component } from 'react';

import { Routes } from './Routes'
import Nav from './components/Nav'
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header />
        <Nav />
        <main className="main-content">
          <Routes/>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
