import React, {Component} from 'react';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Label from 'react-bootstrap/lib/Label';

import '../css/App.css';

class ActiveBanners extends Component {
  constructor(props) {
    super(props);
    // this.setState = {
    //   loading: false
    // };
  }

  componentDidMount() {
    console.log("Yes");
    console.log(this.props.zones);
  }

  render() {
    return (
      <ListGroup>
        <ListGroupItem>LB1 <Label>10</Label></ListGroupItem>
        <ListGroupItem>MR1 <Label>4</Label></ListGroupItem>
        <ListGroupItem>TB <Label>2</Label></ListGroupItem>
      </ListGroup>
    );
  }
}

export default ActiveBanners;