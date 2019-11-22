import React, { Component } from "react";
import Hero from "./Hero/index";
import { Row, Col } from "react-bootstrap";

class Services extends Component {
  render() {
    return (
      <div>
        <Hero backgroundImage="https://images.unsplash.com/photo-1564547563308-5ad53935116d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60">
          <h1 style={{ color: "pink", textTransform: "uppercase"}}>Services</h1>
        </Hero>

        <div style={{ paddingTop: 30, paddingLeft: 30, paddingRight: 30, paddingBottom: 30, backgroundColor: "black" }}>
          <Row>
            <Col size="md-12">
              <h1 style={{ textAlign: "center", color: "white" }}>What we do.</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <p style={{ color: "white" }}>
                Again, hoping to put some photos or animations here for what services you offer.
            </p>
            </Col>
          </Row>
        </div>


      </div>
    )
  }
}

export default Services;