/* eslint-disable */
// @ts-nocheck
import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"
import {
  Frame,
  Workspace,
  StyledLink
} from "../../components/templates/styled-templates"

import { getStorage, putStorage } from "../../hooks/useStorage"
import useEventListener, { eventDispatch } from "../../hooks/useEventListener"

let Header = (props: any) => {
  let path = useLocation().pathname.split("/").slice(1)[0]

  const LinkProperties = {
    textDecoration: `none`,
    color: `black`
  }

  return (
    <Wrapper>
      <HeaderItems row>
        <QuestionMark
          onClick={() => {
            eventDispatch(`OPEN_RULES_POP_UP`)
            eventDispatch(`OPEN_POP_UP`)
          }}
        ></QuestionMark>
        <Logo>Bordle</Logo>
        <Settings
          onClick={() => {
            eventDispatch(`OPEN_SETTINGS_POP_UP`)
            eventDispatch(`OPEN_POP_UP`)
          }}
        ></Settings>
      </HeaderItems>
    </Wrapper>
  )
}

const Wrapper = styled(Frame)`
  width: 100%;
  height: 72px;
  background: #121213;
  border-bottom: 1px solid #3a3a3c;
`

const Logo = styled(Frame)`
  align-items: center;
  height: 100%;
  font-weight: 600;
  font-size: 1.5rem;
  color: #5cb85c;
  :hover {
    cursor: pointer;
  }
`

const Tabs = styled(Frame)`
  height: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`

const HeaderItems = styled(Frame)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`

const HeaderTab = styled(Frame)`
  width: 80px;
  :hover {
    cursor: pointer;
  }
`

const QuestionMark = styled(Frame)`
  height: 24px;
  width: 24px;
  cursor: pointer;
  background: url(${require(`../../assets/icons/question-mark.svg`).default});
`

const Settings = styled(Frame)`
  height: 24px;
  width: 24px;
  cursor: pointer;
  background: url(${require(`../../assets/icons/settings.svg`).default});
`

export default Header

/* eslint-enable */
