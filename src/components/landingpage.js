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
              <Col xs={12} lg={8}>
                <Hero backgroundImage="https://images.unsplash.com/photo-1568050989546-ad3e9a567206?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" >
                </Hero>
              </Col>
              <Col xs={12} lg={4} style={{ backgroundColor: "black" }}>
                <div style={{ textAlign: "center" }}>
                  <h1 style={{ color: "#fc5193", marginTop: "30px" }}>Swank PR, L.L.C.</h1>
                  <h2 style={{ color: "white", marginTop: "50px" }}>Own it, someone has to.</h2>
                </div>
              </Col>         
          </Row>
        {/* </div> */}

          {/* WHAT SWANK IS */}
          <div style={{ paddingTop: 80, paddingLeft: 30, paddingRight: 30, paddingBottom: 80, backgroundColor: "white" }}>
            <Row>
              <Col size="md-12">
                <h1 style={{ textAlign: "center", color: "#fc5193", marginBottom: "40px" }}>SOME CATCHY PHRASE</h1>
              </Col>
            </Row>
            <Row>
              <Col size="md-12">
                <p style={{ color: "black", paddingLeft: "50px", paddingRight: "50px", fontSize: "25px", textAlign: "justify", letterSpacing: "1px", lineHeight: "30px" }}>
                  Welcome to Swank PR, L.L.C., a Public Relations Consulting Firm that helps businesses like yours achieve unique goals. Our expert professionals will partner with your business to deliver tailor-made practical solutions, fast. Since 2000, we’ve supported numerous clients - and we’re confident we’re the right Public Relations Consulting Firm for you.
            </p>
              </Col>
            </Row>
          </div>

          {/* OVERVIEW OF SERVICES */}
          <div style={{ paddingTop: 30, paddingBottom: 30, backgroundColor: "black" }}>
            <Row>
              <Col>
                <h1 style={{ textAlign: "center", color: "#fc5193" }}>What We Do</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <p style={{ color: "white", paddingLeft: "80px", paddingRight: "80px", fontSize: "18px", textAlign: "justify", letterSpacing: "1px", lineHeight: "25px" }}>
                  Swank PR, L.L.C. exists to solve the critical issues facing our clients, both large and small. Our unique approach is not only what differentiates us, but also what makes us successful. We provide a broad range of services and solutions to help organizations facilitate change, achieve their vision and optimize performance and productivity.
            </p>
              </Col>
            </Row>
            <Row style={{ marginTop: "40px", marginBottom: "100px" }}>
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
            </Row>
          </div>

          <Footer />

        </div>
        )
      }
    }
    
export default Landing;