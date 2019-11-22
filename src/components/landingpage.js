import React, { Component } from "react";
import Hero from "./Hero/index";
import { Row, Col, Container } from "react-bootstrap";

class Landing extends Component {
  render() {
    return (
      <div>
        <div>
          <Row>
            <Col xs={8}>
              <Hero backgroundImage="https://images.unsplash.com/photo-1568050989546-ad3e9a567206?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" style={{ padding: "0px" }}>
              </Hero>
            </Col>
            <Col style={{ backgroundColor: "black" }}>
              <div style={{ textAlign: "center" }}>
                <h1 style={{ color: "pink", marginTop: "30px" }}>Swank PR, L.L.C.</h1>
                <h2 style={{ color: "white", marginTop: "50px" }}>Own it, someone has to.</h2>
              </div>
            </Col>
          </Row>
        </div>



        {/* WHAT SWANK IS */}
        <div style={{ paddingTop: 30, paddingLeft: 30, paddingRight: 30, paddingBottom: 30, backgroundColor: "black" }}>
          <Row>
            <Col size="md-12">
              <h1 style={{ textAlign: "center", color: "pink" }}>SOME CATCHY PHRASE</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <p style={{ color: "white" }}>
                Welcome to Swank PR, L.L.C., a Public Relations Consulting Firm that helps businesses like yours achieve unique goals. Our expert professionals will partner with your business to deliver tailor-made practical solutions, fast. Since 2000, we’ve supported numerous clients - and we’re confident we’re the right Public Relations Consulting Firm for you.
            </p>
            </Col>
          </Row>
        </div>

        {/* OVERVIEW OF SERVICES */}
        <Container style={{ paddingTop: 30, paddingLeft: 30, paddingRight: 30, paddingBottom: 30, backgroundColor: "white" }}>
          <Row>
            <Col size="md-12">
              <h1 style={{ textAlign: "center", color: "black" }}>What We Do</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <p style={{ color: "black" }}>
                Swank PR, L.L.C. exists to solve the critical issues facing our clients, both large and small. Our unique approach is not only what differentiates us, but also what makes us successful. We provide a broad range of services and solutions to help organizations facilitate change, achieve their vision and optimize performance and productivity.
            </p>
            </Col>
          </Row>
          <Row>
            <Col style={{ textAlign: "center", color: "black" }}>
              <p>This.</p>
              <img src={"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"} width="150px" alt="logo" />
            </Col>
            <Col style={{ textAlign: "center", color: "black" }}>
              <p>That.</p>
              <img src={"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"} width="150px" alt="logo" />
            </Col>
            <Col style={{ textAlign: "center", color: "black" }}>
              <p>The Other.</p>
              <img src={"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"} width="150px" alt="logo" />
            </Col>
          </Row>
        </Container>



      </div>
    )
  }
}

export default Landing;