import React, { Component } from 'react';
import './styles.css';

class Card extends Component {
  render() {
    return (
      <div id='item'>
        <div class='row'>
          <div class='col l12'>
            <div class='card white'>
              <div class='card-content white-text'>
                <span class='card-title'>
                  <b>Sign In With Google</b>
                </span>
                <input type='text' placeholder='Email' />
                <input type='password' placeholder='Password' />
              </div>
              <div class='card-action'>
                <a href='#' class='btn'>
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
