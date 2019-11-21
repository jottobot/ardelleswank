import React, { Component } from "react";
import Hero from "./Hero/index";
import { Row, Container } from "react-bootstrap";
import { Card, CardTitle, CardText  } from "react-mdl";

class Clients extends Component {
  render() {
    return (
      <div>
        <Hero backgroundImage="https://images.unsplash.com/photo-1540745291638-2c71059043e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60">
          <h1>Clients</h1>
        </Hero>

      {/* ABOUT CLIENTS */}
        <Container style={{ paddingTop: 30, paddingLeft: 30, paddingRight: 30, paddingBottom: 30, backgroundColor: "white" }}>
          <Row>
            <p>At Swank, our clients mean the world to us BLAH BLAH.</p>
          </Row>
        </Container>

      {/* CLIENT CARDS */}
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
    )
  }
}

export default Clients;