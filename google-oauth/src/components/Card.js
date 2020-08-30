import React, { Component } from 'react';
class Card extends Component {
  render() {
    return (
      <tr className='highlight'>
        <td>{this.props.name}</td>
        {/* <td>{this.props.email}</td> */}
        <td>{this.props.number}</td>
        <td>
          <a href='#' class='delete'>
            X
          </a>
        </td>
      </tr>
    );
  }
}
{
  /* <div className='person'>
        <div>{this.props.name}</div>
        <div>{this.props.email}</div>
        <div>{this.props.number}</div>
      </div> */
}
export default Card;
