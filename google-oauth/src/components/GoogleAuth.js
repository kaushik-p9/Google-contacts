// import React, { Component } from 'react';
// import axios from 'axios';

// class GoogleAuth extends Component {
//   state = { isSignedIn: null };
//   // 'https://www.googleapis.com/auth/userinfo.profile'
//   componentDidMount() {
//     window.gapi.load('client:auth2', () => {
//       window.gapi.client
//         .init({
//           clientId:
//             '341041004591-5vb90oon9stkbjn6bks8m5gdqvmfl6a2.apps.googleusercontent.com',
//           scope: 'https://www.google.com/m8/feeds',
//         })
//         .then(() => {
//           this.auth = window.gapi.auth2.getAuthInstance();
//           this.setState({ isSignedIn: this.auth.isSignedIn.get() });
//           this.auth.isSignedIn.listen(this.onAuthChange);
//         });
//     });
//   }

//   onAuthChange = () => {
//     this.setState({ isSignedIn: this.auth.isSignedIn.get() });
//   };

//   onSignIn = async () => {
//     await this.auth.signIn();
//     let token = window.gapi.auth2.AuthResponse.id_token;
//     console.log(token);
//     axios
//       .get('https://www.google.com/m8/feeds/contacts/default/full')
//       .then((res) => console.log(res.data))
//       .catch((err) => console.log(err.message));
//   };

//   onSignOut = () => {
//     this.auth.signOut();
//   };

//   renderAuthButton() {
//     if (this.state.isSignedIn === null) {
//       return null;
//     } else if (this.state.isSignedIn) {
//       return (
//         <button onClick={this.onSignOut} className='ui red google btn'>
//           <i className='google icon' />
//           Sign Out
//         </button>
//       );
//     } else {
//       return (
//         <button onClick={this.onSignIn} className='ui red google btn'>
//           <i className='google icon' />
//           Sign In
//         </button>
//       );
//     }
//   }
//   render() {
//     return <div>{this.renderAuthButton()}</div>;
//   }
// }

// export default GoogleAuth;
import React, { Component } from 'react';
import axios from 'axios';
import CardList from './CardList';
class GoogleAuth extends Component {
  state = {
    people: null,
  };
  handleClick = (event) => {
    event.preventDefault();
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '252669349047-sslescsn58s9ojlifuov3o0303v934qr.apps.googleusercontent.com',
          scope: 'https://www.google.com/m8/feeds/',
        })
        .then((res) => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.auth
            .signIn()
            .then((resp) => resp.wc.access_token)
            .then((token) => {
              axios
                .get(
                  'https://www.google.com/m8/feeds/contacts/default/full?alt=json&max-results=200',
                  {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  }
                )
                .then((res) => {
                  console.log(res.data);
                  this.setState({ people: res.data });
                });
            });
        })
        .catch((err) => console.log(err.message));
      // this.auth.signOut();
    });
  };

  render() {
    if (this.state.people != null) return <CardList info={this.state.people} />;
    else {
      return (
        <button onClick={this.handleClick} className='sign-in btn'>
          Sign In With Google
        </button>
      );
    }
  }
}

export default GoogleAuth;
