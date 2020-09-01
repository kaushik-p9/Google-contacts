import React, { Component } from 'react';
class Card extends Component {
  render() {
    if (this.props.name) {
      return (
        <tr className='person'>
          <td className='person-name'>
            <i class='fa fa-square-o' aria-hidden='true'></i>
            &nbsp;&nbsp;
            {this.props.name}
          </td>
          <td className='person-email'>{this.props.email}</td>
          <td className='person-number'>{this.props.number}</td>
          <td>
            <i class='fa fa-trash-o small' aria-hidden='true'></i>
          </td>
        </tr>
      );
    } else {
      return [];
    }
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
