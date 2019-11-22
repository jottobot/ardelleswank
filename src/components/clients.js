import React, { Component } from "react";
import Hero from "./Hero/index";
import { Row, Col } from "react-bootstrap";
import { Card, CardTitle, CardText } from "react-mdl";
import Footer from "./Footer/index";

class Clients extends Component {
  render() {
    return (
      <div>
        <Hero backgroundImage="https://images.unsplash.com/photo-1564547563308-5ad53935116d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60">
          <h1 style={{ color: "#fc5193", textTransform: "uppercase" }}>Clients</h1>
        </Hero>

        {/* ABOUT CLIENTS */}
        <div style={{ backgroundColor: "black" }}>
          <Row>
            <Col>
            <h3 style={{ textAlign: "center", color: "white" }}>At Swank, our clients mean the world to us BLAH BLAH.</h3>
            </Col>
          </Row>            
        </div>

        {/* CLIENT CARDS */}
        <div style={{ backgroundColor: "black" }}>
          <Row>
            <Card shadow={0} style={{ width: '400px', margin: 'auto', marginTop: "50px", marginBottom: "50px" }}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>CLIENT NAME</CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>
            </Card>

            <Card shadow={0} style={{ width: '400px', margin: 'auto', marginTop: "50px", marginBottom: "50px" }}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>CLIENT NAME</CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>
            </Card>
          </Row>

          <Row>
            <Card shadow={0} style={{ width: '400px', margin: 'auto', marginTop: "50px", marginBottom: "50px" }}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>CLIENT NAME</CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>
            </Card>

            <Card shadow={0} style={{ width: '400px', margin: 'auto', marginTop: "50px", marginBottom: "50px" }}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>CLIENT NAME</CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>
            </Card>
          </Row>
        </div>


        <Footer />

      </div>
    )
  }
}

export default Clients;