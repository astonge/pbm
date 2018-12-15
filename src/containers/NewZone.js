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
  render() {
    return (
      <Grid>
      <h2 class="page-title">New Zone</h2>
      <Row className="NewZone">
        <Col md={6}>

          <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
              <Col sm={2}>
                <h4 class="form-label">Name</h4>
              </Col>
              <Col sm={10}>
                <FormControl type="text" placeholder="Advertiser Name"/>
              </Col>
            </FormGroup>
            
            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit">Create</Button>
              </Col>
            </FormGroup>
          </Form>

        </Col>
      </Row>
    </Grid>
    );
  }
}