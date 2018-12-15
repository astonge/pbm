import React, {Component} from 'react';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

import '../css/App.css';

class ActiveBanners extends Component {
  constructor(props) {
    super(props);
  }
  
  renderZoneList() {
    let zone_items = [];
    this.props.zones.results.map(function(zone) {
      zone_items.push(<ListGroupItem>{zone.short_name}</ListGroupItem>);
    })
    return zone_items;
  }

  render() {
    return (
      <ListGroup>
        {
          this.renderZoneList()
        }
        {/* <ListGroupItem>LB1 <Label>10</Label></ListGroupItem>
        <ListGroupItem>MR1 <Label>4</Label></ListGroupItem>
        <ListGroupItem>TB <Label>2</Label></ListGroupItem> */}
      </ListGroup>
    );
  }
}

export default ActiveBanners;