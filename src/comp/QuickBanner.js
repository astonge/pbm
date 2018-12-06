import React, {Component} from 'react';
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch

import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
// import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import '../css/App.css';

class QuickBanner extends Component {
  constructor() {
    super();
    this.bus_names = [];
    this.state = {
      loading: false,
      advertisers: {}
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
    this.setState({loading: true});
  }

  renderAdvertiserList() {
    let items = [];
    if(this.state.advertisers.results) {
      this.state.advertisers.results.map(function(name,id) {
        items.push(<option value={id}>{name.name}</option>);
      })
    }
    return items;
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
          </FormControl>
          <br/>
        </FormGroup>
        </form>
      </div>
    );
  }
}

export default QuickBanner;