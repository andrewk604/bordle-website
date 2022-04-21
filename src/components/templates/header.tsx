/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  Frame,
  Workspace,
  StyledLink
} from "../../components/templates/styled-templates";
import { getStorage, putStorage } from "../../hooks/useStorage";

let Header = (props) => {
  let [tab, setTab] = useState("home");
  let [role, setRole] = useState(getStorage(`role`));

  let path = useLocation().pathname.split("/").slice(1)[0];

  const LinkProperties = {
    textDecoration: `none`,
    color: `black`
  };

  let HeaderItems = [];

  return (
    <Wrapper>
      <Workspace>
        <Frame row>
          <Frame>
            <Link to="/" style={LinkProperties}>
              <Logo>Bordle</Logo>
            </Link>
          </Frame>
        </Frame>
      </Workspace>
    </Wrapper>
  );
};

const Wrapper = styled(Frame)`
  width: 100%;
  height: 72px;
  background: #121213;
  border-bottom: 1px solid #3a3a3c;
`;

const Logo = styled(Frame)`
  align-items: center;
  height: 100%;
  font-weight: 600;
  font-size: 1.5rem;
  color: #5cb85c;
  :hover {
    cursor: pointer;
  }
`;

const Tabs = styled(Frame)`
  height: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`;

const HeaderTab = styled(Frame)`
  width: 80px;
  :hover {
    cursor: pointer;
  }
`;

export default Header;

/* eslint-enable */
