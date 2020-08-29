import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import GoogleAuth from './components/GoogleAuth';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <GoogleAuth />
        <Card />
      </div>
    );
  }
}

export default App;
