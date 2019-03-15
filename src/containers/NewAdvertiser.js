import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import "../css/App.css";

export default class NewAdvertiser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      inputValue: "Testing"
    };
    this.createAdvertiser = this.createAdvertiser.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
  }

  updateInputValue(e) {
    // console.log("Update: "+e.target.value);
    this.setState({inputValue: e.target.value});
  }

  createAdvertiser(e) {
    console.log("createAdvertiser()");
  }

  render() {
    return(
      <Grid>
      <h2 className="page-title">New Advertiser</h2>
      <hr/>
      <Row className="NewAdvertiser">
        <Col md={6}>
          
          <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
              <Col sm={2}>
              <h4 className="form-label">Name</h4>
              </Col>
              <Col sm={10}>
                <FormControl
                  onChange={this.updateInputValue}
                  type="text"
                  placeholder="Advertiser Name"/>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button onClick={this.createZone} type="submit">Create Advertiser</Button>
              </Col>
            </FormGroup>
          </Form>

        </Col>
      </Row>
    </Grid>
    );
  }
}