import React, { Component } from "react";
import Hero from "./Hero/index";
import { Row, Col } from "react-bootstrap";
import Footer from "./Footer/index";
import { WiRainMix } from "react-icons/wi";
import { AiOutlineMail } from "react-icons/ai";
import { MdLocalPhone } from "react-icons/md";





class Contact extends Component {
  render() {
    return (
      <div>
        <Hero backgroundImage="https://images.unsplash.com/photo-1564547563308-5ad53935116d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60">
          <h1 style={{ color: "#fc5193", textTransform: "uppercase" }}>Contact</h1>
        </Hero>

      <Row style={{ padding:"80px"}}>
        <Col>
        <WiRainMix style={{fontSize:"80px"}} />
        <p style={{fontSize:"30px"}}>Located in Seattle, WA</p>
        </Col>
        <Col>
        <AiOutlineMail style={{fontSize:"80px"}}/>
        <p style={{fontSize:"30px"}}>email@email.com</p>
        </Col>
        <Col>
        <MdLocalPhone style={{fontSize:"80px"}}/>
        <p style={{fontSize:"30px"}}>123-456-7891</p>
        </Col>
      </Row>

      <hr />

      <Row>
        <Col>
        <p>Thinking of putting your Logo here.</p>
        </Col>
        <Col>
          <p>Connect with us:</p>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>LinkedIn</p>
        </Col>
      </Row>



        <Footer />
      </div>
    )
  }
}

export default Contact;