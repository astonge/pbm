import React, {Component} from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import '../css/App.css';

class QuickBanner extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
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

  renderAdvertiserList() {
    let items = [];
    if(this.state.advertisers.results) {
      this.state.advertisers.results.map(function(business) {
        items.push(<option value={business.id}>{business.name}</option>);
      })
    }
    return items;
  }
  renderZoneList() {
    let zone_items = [];
    if(this.state.zones.results) {
      this.state.zones.results.map(function(zone) {
        zone_items.push(<option value={zone.id}>{zone.short_name}</option>);
      })
    }
    return zone_items;
  }

  render() {
    return (
      <div>
        <form>
        <FormGroup>
          <FormControl componentClass="select" placeholder="select">
            <option value="select">Select Advertiser</option>
            {this.renderAdvertiserList()}
          </FormControl>
          <br/>
          <FormControl componentClass="select" placeholder="select">
            <option value="select">Select Zone</option>
            {this.renderZoneList()}
          </FormControl>
          <br/>
        </FormGroup>
        </form>
      </div>
    );
  }
}

export default QuickBanner;