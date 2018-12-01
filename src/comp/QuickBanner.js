import React, {Component} from 'react';
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch

import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
// import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import '../css/App.css';

class QuickBanner extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      zone: {}
    };
  }

  componentDidMount() {
    this.setState({loading: true});
    fetch("https://swapi.co/api/people/13/")
      .then(response => response.json())
      .then(data =>  {
          this.setState({
            loading: false,
            zone: data
          })
      });
      console.log(this.state.zone);
  }

  render() {
    const placeholder = this.state.loading ? "loading..." : this.state.zone.name;
    return (
      <div>
        <form>
        <FormGroup>
          <FormControl componentClass="select" placeholder="select">
            <option value="select">Advertiser</option>
          </FormControl>
          <br/>
          <FormControl componentClass="select" placeholder="select">
            <option value="select">Zone</option>
            <option value="opt1">{placeholder}</option>
          </FormControl>
          <br/>
        </FormGroup>
        </form>
      </div>
    );
  }
}

export default QuickBanner;