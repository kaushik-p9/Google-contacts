import React, { Component } from 'react';

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:
          '341041004591-5vb90oon9stkbjn6bks8m5gdqvmfl6a2.apps.googleusercontent.com',
        scope: 'email',
      });
    });
  }
  render() {
    return <div> Google Auth </div>;
  }
}

export default GoogleAuth;
