import React, {Component} from 'react';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

import '../css/App.css';

class ActiveBanners extends Component {
  constructor(props) {
    super(props);
    this.state = {
      advertisers: {}
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:3123/advertisers/")
      .then(response => response.json())
      .then(data => {this.setState({advertisers:data}) 
    });
  }

  
  renderAdvertiserList() {
    let ad_name_list = [];
    if(this.props.advertisers.results) {
      this.props.advertisers.results.map(function(business) {
        ad_name_list.push(<ListGroupItem>{business.name}</ListGroupItem>);
      })
    }
    return ad_name_list;
  }

  render() {
    return (
      <ListGroup>
        {
          this.renderAdvertiserList()
        }
        {/* <ListGroupItem>LB1 <Label>10</Label></ListGroupItem>
        <ListGroupItem>MR1 <Label>4</Label></ListGroupItem>
        <ListGroupItem>TB <Label>2</Label></ListGroupItem> */}
      </ListGroup>
    );
  }
}

export default ActiveBanners;