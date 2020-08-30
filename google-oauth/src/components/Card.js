import React from 'react';
// import './Card.css';
class Card extends React.Component {
  render() {
    return (
      <div className='card'>
        <div>{this.props.name}</div>
        <div>{this.props.email}</div>
        <div>{this.props.number}</div>
      </div>
    );
  }
}

export default Card;
