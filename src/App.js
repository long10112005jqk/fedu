import React from 'react';
import './App.css';
import Navbar from './Component/Navbar.js';
import Footer from './Component/Footer.js';
import DieuHuongURL from './Component/DieuHuongURL.js';
import {BrowserRouter as Router} from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar/>
          <DieuHuongURL/>
        <Footer/>
      </Router>
    );
  }
}

export default App;
