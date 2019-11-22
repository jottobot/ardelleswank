import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header style={{ backgroundColor: "black" }} title={<Link style={{ textDecoration: 'none', color: '#fc5193' }} to="/">Swank PR, L.L.C.</Link>} scroll>
          <Navigation>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/clients">Clients</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title={<Link style={{ textDecoration: 'none', color: 'black' }} to="/">Swank PR, L.L.C.</Link>}>
          <Navigation>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/clients">Clients</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
