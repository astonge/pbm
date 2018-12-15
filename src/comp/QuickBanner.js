import React, {Component} from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import '../css/App.css';

class QuickBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      advertisers: {},
      zones: {}
    };
  }

  componentDidMount() {
    this.setState({loading: true});
  }

  renderAdvertiserList() {
    let business_name_items = [];
    if(this.props.advertisers.results) {
      this.props.advertisers.results.map(function(business) {
        business_name_items.push(<option value={business.id}>{business.name}</option>);
      })
    }
    return business_name_items;
  }

  renderZoneList() {
    let zone_items = [];
    if(this.props.zones.results) {
      this.props.zones.results.map(function(zone) {
        zone_items.push(<option value={zone.id}>{zone.short_name}</option>);
      });
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