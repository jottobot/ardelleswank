import React, { Component } from "react";
import Hero from "./Hero/index";
import { Row, Col } from "react-bootstrap";
import Footer from "./Footer/index";
import { FaPencilAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSistrix } from "react-icons/fa";
import { FaGrinBeam } from "react-icons/fa";

class Services extends Component {
  render() {
    return (
      <div>
        <Hero backgroundImage="https://images.unsplash.com/photo-1564547563308-5ad53935116d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60">
          <h1 style={{ color: "#fc5193", textTransform: "uppercase" }}>Services</h1>
        </Hero>

        <div style={{ paddingTop: 80, paddingLeft: 30, paddingRight: 30, paddingBottom: 80, backgroundColor: "black" }}>
          <Row>
            <Col size="md-12">
              <h1 style={{ textAlign: "center", color: "#fc5193" }}>ANOTHER CATCHY PHRASE</h1>
            </Col>
          </Row>
          <Row style={{ textAlign:"center"}}>
            <Col>
              <FaPhone style={{ color: "white", fontSize:"80px", marginBottom: "20px", marginTop: "40px" }} />
              <p style={{ color: "white" }}>Communications Strategy & Planning</p>
            </Col>
            <Col>
              <FaHandsHelping style={{ color: "white", fontSize:"80px", marginBottom: "20px", marginTop: "40px" }} />
              <p style={{ color: "white" }}>Community Relations</p>
            </Col>
            <Col>
              <FaInstagram style={{ color: "white", fontSize:"80px", marginBottom: "20px", marginTop: "40px" }} />
              <p style={{ color: "white" }}>Media Relations</p>
            </Col>
          </Row>
          <Row style={{ textAlign:"center"}}>
            <Col>
              <FaPencilAlt style={{ color: "white", fontSize:"80px", marginBottom: "20px", marginTop: "40px" }} />
              <p style={{ color: "white" }}>Copywriting & Content Development</p>
            </Col>
            <Col>
              <FaSistrix style={{ color: "white", fontSize:"80px", marginBottom: "20px", marginTop: "40px" }} />
              <p style={{ color: "white" }}>Crisis Communications</p>
            </Col>
            <Col>
              <FaGrinBeam style={{ color: "white", fontSize:"80px", marginBottom: "20px", marginTop: "40px" }} />
              <p style={{ color: "white" }}>Brand & Reputation Management</p>
            </Col>

          </Row>
        </div>

        <Footer />

      </div>
    )
  }
}

export default Services;