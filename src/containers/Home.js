import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ActiveBanners from '../comp/ActiveBanners';
import QuickBanner from '../comp/QuickBanner';
import "../css/App.css";

export default class Home extends Component {

  constructor() {
    super();
    this.state = {
      show: false,
      advertisers: {},
      zones: {}
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:3123/advertisers/")
      .then(response => response.json())
      .then(data =>  {
        this.setState({
          loading: false,
          advertisers: data
        })
    });
    fetch("http://127.0.0.1:3123/zones/")
      .then(response => response.json())
      .then(data => {
      this.setState({
        loading: false,
        zones: data
      })
    });
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col sx={6} md={6}>
            <h2 className="page-title">Professional Banner Manager</h2>
          </Col>
          <Col sx={6} md={6}>
          <form>
            <FormGroup id="home-top-search">
              <FormControl type="email" placeholder="Search Advertisers, Banners, Zones, etc.." />
            </FormGroup>
          </form>
          </Col>
        </Row>
        
        <hr/>
        <Row className="show-grid">
          <Col sx={12} md={4}>
            <h2>Active Banners</h2>
            <ActiveBanners advertisers={this.state.advertisers} />
          </Col>
          <Col sx={12} md={4}>
            <h2>Quick Creation</h2>
            <QuickBanner advertisers={this.state.advertisers} zones={this.state.zones}/>
          </Col>
        </Row>
      </Grid>
    );
  }
}