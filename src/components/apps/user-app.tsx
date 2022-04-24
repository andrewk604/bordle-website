/* eslint-disable */

import React, { useState, useEffect } from "react"
import styled from "styled-components"

import { Frame, Workspace, Button } from "../templates/styled-templates"
import Header from "../templates/header"
import Game from "../elements/Game"

import RulesPopUp from "../pop-ups/rules-pop-up"
import SettingsPopUp from "../pop-ups/settings-pop-up"
import ResultPopUp from "../pop-ups/result-pop-up"

import useEventListener, { eventDispatch } from "../../hooks/useEventListener"

let UserApp = (props: any) => {
  return (
    <Wrapper>
      <RulesPopUp />
      <SettingsPopUp />
      <ResultPopUp />
      <Header />
      <Workspace>
        <Game />
      </Workspace>
    </Wrapper>
  )
}

const Wrapper = styled(Frame)`
  /* height: 100vh; */
  padding: 0;
  margin: 0;
`
const Title = styled(Frame)``
const AppInfo = styled(Frame)`
  width: 100vw;
  height: 180px;
  justify-content: space-evenly;
`

export default UserApp

/* eslint-enable */
