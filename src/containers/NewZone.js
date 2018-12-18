import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import "../css/App.css";

export default class NewZone extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
    this.createZone = this.createZone.bind(this);
  }

  createZone(e) {
    e.preventDefault();
    var data = {id:'WHO YOU FIGHTING BEEECH'};
    
    console.log("Clicked");
    fetch('http://127.0.0.1:3123/', {
      method: 'POST',
      headers: {
        "Content-Type":"application/json"
      },
      cache: "reload",
      referrer: "no-referrer",
      body: JSON.stringify(data),
      // credentials: 'include',
      // redirect: 'follow',
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
    // .then(response => console.log('Cowboy I love you.. yeaaauh'))
    // .catch(error => console.error('WHAT THE FUCK RICHARD'));
  };
  

  render() {
    return (
      <Grid>
      <h2 className="page-title">New Zone</h2>
      <hr/>
      <Row className="NewZone">
        <Col md={6}>

          <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
              <Col sm={2}>
                <h4 className="form-label">Name</h4>
              </Col>
              <Col sm={10}>
                <FormControl type="text" placeholder="Advertiser Name"/>
              </Col>
            </FormGroup>
            
            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button onClick={this.createZone} type="submit">Create Zone</Button>
              </Col>
            </FormGroup>
          </Form>

        </Col>
      </Row>
    </Grid>
    );
  }
}