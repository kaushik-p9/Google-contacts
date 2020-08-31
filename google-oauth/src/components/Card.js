import React, { Component } from 'react';
class Card extends Component {
  render() {
    if (this.props.name) {
      return (
        <tr className='highlight'>
          <td style={{ padding: '10px' }}>
            <i class='fa fa-square-o' aria-hidden='true'></i>
            &nbsp;&nbsp;
            {this.props.name}
          </td>
          {/* <td>{this.props.email}</td> */}
          <td style={{ padding: '10px' }}>{this.props.number}</td>
          <td style={{ padding: '10px' }}>
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
