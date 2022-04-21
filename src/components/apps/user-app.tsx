/* eslint-disable */

import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Frame, Workspace } from "../templates/styled-templates";
import Header from "../templates/header";

let UserApp = (props: any) => {
  return (
    <Wrapper>
      <Header />
      <AppInfo column>Bordle / Wordle</AppInfo>
      <Workspace></Workspace>
    </Wrapper>
  );
};

const Wrapper = styled(Frame)``;
const Title = styled(Frame)``;
const AppInfo = styled(Frame)`
  width: 100vw;
  height: 180px;
  justify-content: space-evenly;
`;

export default UserApp;

/* eslint-enable */
