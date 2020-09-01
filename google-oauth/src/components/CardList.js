import React, { Component } from 'react';
import Card from './Card';
import './styles.scss';

class CardList extends Component {
  render() {
    const res = this.props.info.feed.entry.map((member) => {
      return (
        <Card
          key={member.id.$t}
          name={member.title.$t}
          email={member.gd$email ? member.gd$email[0].address : 'Not available'}
          number={member.gd$phoneNumber ? member.gd$phoneNumber[0].$t : null}
        />
      );
    });
    return (
      <table className='table table-responsive scroll'>
        <tr>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>PHONE NUMBER</th>
        </tr>
        {res}
      </table>
    );
  }
}

export default CardList;
