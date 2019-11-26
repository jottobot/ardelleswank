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
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://static1.squarespace.com/static/5cd444d74d8711b3988679a7/t/5d3b719ed2608a0001f9b145/1574793225359/?format=1500w) center / cover' }}>Roy Street Group</CardTitle>
              <CardText>
                Seattle real estate strategy, permitting, and development consulting.
        </CardText>
            </Card>

            <Card shadow={0} style={{ width: '400px', margin: 'auto', marginTop: "50px", marginBottom: "50px" }}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://static.wixstatic.com/media/270d5a_f2d09e152c2d49af85ab03ee2e28b67b~mv2.png/v1/fill/w_402,h_102,al_c,lg_1,q_80/270d5a_f2d09e152c2d49af85ab03ee2e28b67b~mv2.webp) center / cover' }}>Seattle Controller L.L.C.</CardTitle>
              <CardText>
                Full service outsourced controller, management accounting, and financial consulting services firm.
        </CardText>
            </Card>
          </Row>

          <Row>
            <Card shadow={0} style={{ width: '400px', margin: 'auto', marginTop: "50px", marginBottom: "50px" }}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://f4.bcbits.com/img/a4058940826_2.jpg' }}>James Anaya & The Current </CardTitle>
              <CardText>
                James Anaya is a Soul/Rock n roll, singer/songwriter, and guitar man.
        </CardText>
            </Card>

            {/* <Card shadow={0} style={{ width: '400px', margin: 'auto', marginTop: "50px", marginBottom: "50px" }}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>CLIENT NAME</CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>
            </Card> */}
          </Row>
        </div>

        <div style={{ backgroundColor: "white" }}>
          <Row>
            <Col>
              <h3 style={{ textAlign: "center", color: "#fc5193" }}>Reviews.</h3>
              <p style={{ padding: "80px", paddingBottom: "10px"}}>
              “Ardelle Swank advises Roy Street Group (RSG) on its communications strategy. She is an active listener, project-oriented, and hard-working – qualities which are helping our firm be more intentional about designing and implementing a carefully thought-out plan.”</p>
              <p style={{ paddingLeft: "80px", paddingRight:"80px"}}>
                Roy Mann
                Director, Roy Street Group
              </p>
            </Col>
          </Row>
        </div>


        <Footer />

      </div>
    )
  }
}

export default Clients;