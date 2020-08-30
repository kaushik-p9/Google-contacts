import React, { Component } from 'react';
import Card from './Card';
import './styles.css';

class CardList extends Component {
  render() {
    const res = this.props.info.feed.entry.map((member) => {
      return (
        <Card
          key={member.id.$t}
          name={member.title.$t}
          // email={member.email || null}
          number={member.gd$phoneNumber ? member.gd$phoneNumber[0].$t : null}
        />
      );
    });
    return (
      <table className='table highlight'>
        <tr>
          <th>Name</th>
          <th>Number</th>
        </tr>
        {res}
      </table>
    );
  }
}

export default CardList;
