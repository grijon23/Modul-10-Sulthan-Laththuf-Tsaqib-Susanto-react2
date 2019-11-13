import React, { Component } from "react";

import { Footer, FooterSection, FooterLinkList } from "react-mdl";

export default class LayoutFooter extends Component {
  render() {
    return (
      <div>
        <Footer size="mini">
          <FooterSection type="left" logo="Title">
            <FooterLinkList>
              <a href="#">Help</a>
              <a href="#">Privacy and Terms</a>
            </FooterLinkList>
          </FooterSection>
        </Footer>
      </div>
    );
  }
}
