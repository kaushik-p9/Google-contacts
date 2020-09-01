import React, { Component } from 'react';
import './components/styles.scss';
import Box from './components/Box';
import GoogleAuth from './components/GoogleAuth';
import axios from 'axios';
import Navbar from './components/Navbar';

class App extends Component {
  state = {
    isLoggedIn: false,
  };

  render() {
    return (
      <div>
        {/* <Box /> */}
        <Navbar />
        <GoogleAuth />
      </div>
    );
  }
}

export default App;
