/* eslint-disable */
import React, { useEffect, useState } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Alerts from "../templates/alerts"

import { getStorage, putStorage } from "../../hooks/useStorage"

import styled from "styled-components"
import { Frame } from "../templates/styled-templates"

import UserApp from "./user-app"

let RouterApp = () => {
  const route = UserApp

  return (
    <BrowserRouter>
      <Wrapper>
        <Alerts />
        <Switch>
          <Route path="/">
            <UserApp />
          </Route>
        </Switch>
      </Wrapper>
    </BrowserRouter>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: #121213;
  padding: 0;
  margin: 0;
`

export default RouterApp

/* eslint-enable */
