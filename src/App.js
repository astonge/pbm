import React, { Component } from 'react';
import './css/App.css';

import Header from './comp/Header';
import QuickBanner from './comp/QuickBanner';
import ActiveBanners from './comp/ActiveBanners';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class App extends Component {

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
    this.setState({loading: true});
  }

  renderActiveBanners() {
    if(this.state.zones.results) {
      return(<ActiveBanners zones={this.state.zones}/>);
    }
  }
  
  render() {
    return (
      <div className="App">
      <Header/>
      <Grid>
        <Row className="show-grid">
          <Col sx={12} md={4}>
            <h2>Active Banners</h2>
            {
              this.renderActiveBanners()
            }
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
