import React, { Component } from "react";

import Main from "./../browserRouter/Main";

import { Link } from "react-router-dom";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";

export default class LayoutHeader extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout fixedHeader>
          <Header title="keywords" scroll>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/About">About</Link>
              <Link to="/Table">Table</Link>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <a href="#">Link</a>
              <a href="#">Link</a>
              <a href="#">Link</a>
              <a href="#">Link</a>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content">
              <Main />
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}
