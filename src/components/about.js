import React, { Component } from "react";
import Hero from "./Hero/index";
import { Row, Col, Container } from "react-bootstrap";
import Footer from "./Footer/index";

class About extends Component {
  render() {
    return (
      <div>
        <Hero backgroundImage="https://images.unsplash.com/photo-1564547563308-5ad53935116d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" >
          <h1 style={{ color: "#fc5193", textTransform: "uppercase" }}>About</h1>
        </Hero>

        {/* SWANK SUMMARY */}
        <div style={{ paddingTop: 80, paddingLeft: 30, paddingRight: 30, paddingBottom: 80, backgroundColor: "black" }}>
          <Row>
            <Col size="md-12">
              <h1 style={{ textAlign: "center", color: "#fc5193" }}>ANOTHER CATCHY PHRASE</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <p style={{ color: "white", paddingLeft: "80px", paddingRight: "80px", fontSize: "18px", textAlign: "justify", letterSpacing: "1px", lineHeight: "25px" }}>
                Swank PR, L.L.C. is an efficient and results oriented PR firm specializing in real estate and lifestyle public relations. Founded in 2019, Swank PR L.L.C. offers strategic solutions for an array of clients, and seeks to use digital platforms to enhance interpersonal relations rather than isolate them.
             </p>
              <p style={{ color: "white", paddingLeft: "80px", paddingRight: "80px", fontSize: "18px", textAlign: "justify", letterSpacing: "1px", lineHeight: "25px" }}>
                While the firm’s client portfolio continues to expand, Ardelle Swank, Founder and Owner, is thoughtful and strategic about client engagements. By maintaining direct contact with every account and relationship, this ensures that clients have access to a senior level expert at all times.
            </p>
            </Col>
          </Row>
        </div>

        {/* ABOUT ARDELLE */}
        <Container>
          <Row style={{ marginTop: "50px", paddingLeft: "30px", marginBottom: "100px" }}>
            <Col>
              <p style={{ textAlign: "center", fontSize: "28px", letterSpacing: "1px", lineHeight: "25px" }}>
                Meet the founder, Ardelle Swank.
          </p>
              <p style={{ textAlign: "center", fontSize: "18px", letterSpacing: "1px", lineHeight: "25px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
            </Col>
            <Col lg={6} style={{ textAlign: "center" }}>
              <img src={"https://images.unsplash.com/photo-1533518463841-d62e1fc91373?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"} width="300px" alt="logo" />
            </Col>
          </Row>
        </Container>

        <Footer />

      </div>
    )
  }
}

export default About;