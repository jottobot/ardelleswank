import React, { Component } from "react";
import Hero from "./Hero/index";
import { Row, Col } from "react-bootstrap";
import Footer from "./Footer/index";

class Landing extends Component {
  render() {
    return (
      <div>
        {/* <div> */}
        <Row>
          <Col xs={12} lg={7} style={{ padding: "0px"}}>
            <Hero backgroundImage="https://images.unsplash.com/photo-1568050989546-ad3e9a567206?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" >
            </Hero>
          </Col>
          <Col xs={12} lg={5} style={{ backgroundColor: "black", padding: "0px" }}>
            <div style={{ textAlign: "center" }}>
              <h1 style={{ fontFamily: "''Baskervville', serif", color: "#fc5193", marginTop: "150px", textTransform: "uppercase" }}>Swank PR, L.L.C.</h1>
              <h3 style={{ color: "white", marginTop: "40px", fontFamily: "'Montserrat', sans-serif" }}>Own it,
                  <br /> someone has to.</h3>
            </div>
          </Col>
        </Row>
        {/* </div> */}

        {/* WHAT SWANK IS */}
        <div style={{ paddingTop: "80px", paddingLeft: "30px", paddingRight: "30px", paddingBottom: "80px", backgroundColor: "white" }}>
          <Row>
            <Col size="md-12">
              <h1 style={{ textAlign: "center", color: "#fc5193", marginBottom: "40px", fontFamily: "''Baskervville', serif", textTransform: "uppercase" }}>Our Mission</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <p style={{ color: "black", paddingLeft: "60px", paddingRight: "60px", fontSize: "25px", textAlign: "justify", letterSpacing: ".7px", lineHeight: "30px", fontFamily: "'Montserrat', sans-serif" }}>
                Swank PR, L.L.C. is an efficient and results oriented PR firm specializing in real estate development and lifestyle public relations. Founded in 2019, Swank PR L.L.C. offers strategic solutions for an array of clients, and seeks to use digital platforms to enhance interpersonal relations rather than isolate them.
                <br />
                <br />
                While the firm’s client portfolio continues to expand, Ardelle Swank, Founder and Director, is thoughtful and strategic about client engagements. By maintaining direct contact with every account and relationship, this ensures that clients have access to a senior level expert at all times.
            </p>
            </Col>
          </Row>
        </div>

        {/* OVERVIEW OF SERVICES */}
        <div style={{ paddingTop: "80px", paddingLeft: "30px", paddingRight: "30px", paddingBottom: "80px", backgroundColor: "black" }}>
          <Row>
            <Col>
              <h1 style={{ textAlign: "center", color: "#fc5193", marginBottom: "40px", fontFamily: "''Baskervville', serif", textTransform: "uppercase" }}>Why Swank?</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p style={{ color: "white", paddingLeft: "80px", paddingRight: "80px", fontSize: "18px", textAlign: "justify", letterSpacing: ".7px", lineHeight: "28px", fontFamily: "'Montserrat', sans-serif" }}>
                Swank PR L.L.C. was founded on the understanding that not every organization or business has an extensive budget for PR/marketing services. Within this thought, a lightbulb went off, “Who are your bread and butter clients, who keeps your company afloat?”
                <br />
                <br />
                Services offered are meant to be inclusive and geared to provide PR guidance and strategic communications services that enable positive relations and influence positive behaviors. Public Relations is not meant to be complex, but acts as an aid in a complex world.
            </p>
            </Col>
          </Row>

          {/* <Row style={{ marginTop: "40px", marginBottom: "100px" }}>
              <Col style={{ textAlign: "center", color: "white" }}>
                <p>This.</p>
                <img src={"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"} width="150px" alt="logo" />
              </Col>
              <Col style={{ textAlign: "center", color: "white" }}>
                <p>That.</p>
                <img src={"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"} width="150px" alt="logo" />
              </Col>
              <Col style={{ textAlign: "center", color: "white" }}>
                <p>The Other.</p>
                <img src={"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"} width="150px" alt="logo" />
              </Col>
            </Row> */}

        </div>

        <Footer />

      </div>
    )
  }
}

export default Landing;