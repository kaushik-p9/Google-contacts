import React from 'react';
import Card from './Card';

class CardList extends React.Component {
  render() {
    // console.log(this.getInfo.name);
    // let c = this.props.info.feed.entry;
    const res = this.props.info.feed.entry.map((member) => {
      return (
        <Card
          key={member.id.$t}
          name={member.title.$t}
          email={member.email || null}
          number={member.gd$phoneNumber ? member.gd$phoneNumber[0].$t : null}
        />
      );
    });
    return res;
  }
}

export default CardList;
