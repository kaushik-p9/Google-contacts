import React, { Component } from 'react';
import './App.css';
import Box from './components/Box';
import GoogleAuth from './components/GoogleAuth';
import axios from 'axios';

class App extends Component {
  // componentDidMount() {
  //   axios
  //     .get('https://www.google.com/m8/feeds/contacts/default/full')
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err.message));
  // }

  render() {
    return (
      <div className='App'>
        {/* <GoogleAuth /> */}
        <Box />
      </div>
    );
  }
}

export default App;
