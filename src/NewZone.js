import React, { Component } from 'react';
import './css/App.css';
import Header from './comp/Header';
import QuickBanner from './comp/QuickBanner';
import ActiveBanners from './comp/ActiveBanners';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class NewZone extends Component {
  constructor() {
    super();
  }

  render() {
    return (
    <div className="NewZone">
    <Header/>
    <Grid>
      <Row className="show-grid">
      <Col sx={12} md={4}>
        <h2>Testing</h2>
      </Col>
      </Row>
      </Grid></div>
      );    
    }
}

export default NewZone;