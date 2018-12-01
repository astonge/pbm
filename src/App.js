import React, { Component } from 'react';
import './css/App.css';
import Header from './comp/Header';
import QuickBanner from './comp/QuickBanner';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Label from 'react-bootstrap/lib/Label';

class App extends Component {
  
  render() {
    return (
      <div className="App">
      <Header/>
      <Grid>
        <Row className="show-grid">
          <Col sx={12} md={4}>
            <h2>Active Banners</h2>
            <ListGroup>
              <ListGroupItem>LB1 <Label>10</Label></ListGroupItem>
              <ListGroupItem>MR1 <Label>4</Label></ListGroupItem>
              <ListGroupItem>TB <Label>2</Label></ListGroupItem>
            </ListGroup>
          </Col>
          <Col sx={12} md={4}>
            <h2>Quick Creation</h2>
            <QuickBanner/>
          </Col>
        </Row>
      </Grid>
      </div>
    );
  }
}

export default App;
