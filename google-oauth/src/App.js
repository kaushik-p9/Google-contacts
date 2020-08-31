import React, { Component } from 'react';
import './App.css';
import './components/styles.css';
import Box from './components/Box';
import GoogleAuth from './components/GoogleAuth';
import axios from 'axios';
import Navbar from './components/Navbar';

class App extends Component {
  // componentDidMount() {
  //   axios
  //     .get('https://www.google.com/m8/feeds/contacts/default/full')
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err.message));
  // }

  render() {
    return (
      <div>
        <Navbar />
        <GoogleAuth />

        {/* <Box /> */}
      </div>
    );
  }
}

export default App;
