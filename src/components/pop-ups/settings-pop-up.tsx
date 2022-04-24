/*eslint-disable*/
import React, { useState, useEffect, useMemo, useCallback } from "react"
import styled from "styled-components"
import { useLocation } from "react-router-dom"

import { Frame, P, Text, StyledLink } from "../templates/styled-templates"
import PopUpWrapper from "./pop-up-wrapper"

import useEventListener, { eventDispatch } from "../../hooks/useEventListener"

let SettingsPopUp = (props: any) => {
  let popUpName = `SETTINGS`

  useEventListener(`OPEN_${popUpName}_POP_UP`, (d) => {})

  return (
    <PopUpWrapper name={popUpName} extra={`height: 100%; width: 100%;`}>
      <Title>SETTINGS</Title>
      <Frame
        row
        extra={`width: 300px; justify-content: space-between; border-bottom: 1px solid #3a3a3c; margin-top: 50px;`}
      >
        <Text>Feedback</Text>
        <a
          className="link"
          target={"_blank"}
          href={
            "mailto:nytgames@nytimes.com?subject=Wordle%20Feedback&body=%0D%0A%0D%0A%0A--%0ADevice%20summary%3A%0APage%3A%20%2Fgames%2Fwordle%0APlatform%3A%20Web%20(Desktop)%20%0ABrowser%3A%20Chrome%0AScreen%20Resolution%3A%202560%20x%201440%0AViewport%20Size%3A%202560%20x%201301%0ATimezone%3A%20UTC%2B2%0ABuild%3A%20e17c80f8%0A%20%20"
          }
        >
          Email
        </a>
      </Frame>
      <Frame
        row
        extra={`width: 300px; justify-content: space-between; border-bottom: 1px solid #3a3a3c;`}
      >
        <Text>Community</Text>
        <a
          className="link"
          target={"_blank"}
          href={"https://twitter.com/NYTGames"}
        >
          Twitter
        </a>
      </Frame>
      <Frame
        row
        extra={`width: 300px; justify-content: space-between; border-bottom: 1px solid #3a3a3c;`}
      >
        <Text>Questions?</Text>
        <a
          className="link"
          target={"_blank"}
          href={
            "https://help.nytimes.com/hc/en-us/articles/360029050872-Word-Games-and-Logic-Puzzles#h_01FVGCB2Z00ZQMDMCYWBPWJNXB"
          }
        >
          FAQ
        </a>
      </Frame>
      <Frame
        row
        extra={`width: 300px; justify-content: space-between; border-bottom: 1px solid #3a3a3c;`}
      >
        <Text>Original</Text>
        <a
          className="link"
          target={"_blank"}
          href={"https://www.nytimes.com/games/wordle/index.html"}
        >
          Wordle
        </a>
      </Frame>
      <Frame
        row
        extra={`width: 300px; justify-content: space-between; border-bottom: 1px solid #3a3a3c;`}
      >
        <Text>Author</Text>
        <a
          className="link"
          target={"_blank"}
          href={"https://github.com/andrewk604"}
        >
          andrewk604
        </a>
      </Frame>
    </PopUpWrapper>
  )
}

const Title = styled(P)`
  text-transform: uppercase;
  color: #fff;
  letter-spacing: 5px;
`

export default SettingsPopUp
