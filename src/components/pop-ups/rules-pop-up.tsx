/*eslint-disable*/
// @ts-nocheck

import React, { useState, useEffect, useMemo, useCallback } from "react"
import styled from "styled-components"
import { useLocation } from "react-router-dom"

import { Frame, P, Text } from "../templates/styled-templates"
import PopUpWrapper from "./pop-up-wrapper"

import useEventListener, { eventDispatch } from "../../hooks/useEventListener"

let RulesPopUp = (props: any) => {
  let popUpName = `RULES`

  useEventListener(`OPEN_${popUpName}_POP_UP`, (d) => {})

  return (
    <PopUpWrapper name={popUpName} extra={`height: 100%; width: 100%;`}>
      <Title>how to play?</Title>
      <Description>
        <Text>
          Guess the <Green>BORDLE</Green> in 6 tries!
        </Text>
        <Text>
          Each guess must be a valid five-letter word. Hit the enter button to
          submit.
        </Text>
        <Text extra={`border-bottom: 1px solid #3a3a3c; padding-bottom: 15px;`}>
          After each guess, the color of the tiles will change to show how close
          your guess was to the word.
        </Text>
        <Text>Examples</Text>
        <Frame row extra={`margin-left: -5px;`}>
          <ExampleSquare extra={`background: #6aaa64;`}>W</ExampleSquare>
          <ExampleSquare extra={`border: 2px solid #3a3a3c;`}>E</ExampleSquare>
          <ExampleSquare extra={`border: 2px solid #3a3a3c;`}>A</ExampleSquare>
          <ExampleSquare extra={`border: 2px solid #3a3a3c;`}>R</ExampleSquare>
          <ExampleSquare extra={`border: 2px solid #3a3a3c;`}>Y</ExampleSquare>
        </Frame>

        <Text>
          The letter <strong>W</strong> is in the word and in the correct spot.
        </Text>

        <Frame row extra={`margin-left: -5px;`}>
          <ExampleSquare extra={`border: 2px solid #3a3a3c;`}>P</ExampleSquare>
          <ExampleSquare extra={`background: #c9b458;`}>I</ExampleSquare>
          <ExampleSquare extra={`border: 2px solid #3a3a3c;`}>L</ExampleSquare>
          <ExampleSquare extra={`border: 2px solid #3a3a3c;`}>L</ExampleSquare>
          <ExampleSquare extra={`border: 2px solid #3a3a3c;`}>S</ExampleSquare>
        </Frame>

        <Text>
          The letter <strong>I</strong> is in the word but in the wrong spot.
        </Text>

        <Frame row extra={`margin-left: -5px;`}>
          <ExampleSquare extra={`border: 2px solid #3a3a3c;`}>V</ExampleSquare>
          <ExampleSquare extra={`border: 2px solid #3a3a3c;`}>A</ExampleSquare>
          <ExampleSquare extra={`border: 2px solid #3a3a3c;`}>G</ExampleSquare>
          <ExampleSquare extra={`background: #28292b;`}>U</ExampleSquare>
          <ExampleSquare extra={`border: 2px solid #3a3a3c;`}>E</ExampleSquare>
        </Frame>

        <Text>
          The letter <strong>U</strong> is not in the word in any spot.
        </Text>
      </Description>
    </PopUpWrapper>
  )
}

const Title = styled(P)`
  text-transform: uppercase;
  color: #fff;
  letter-spacing: 10px;
`

const Description = styled(Frame)`
  flex-direction: column;
  align-items: flex-start;
  margin-top: 25px;
`

const Green = styled.span`
  color: #5cb85c;
`

const Examples = styled(Frame)`
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

const ExampleSquare = styled(Frame)`
  box-sizing: border-box;
  color: #fff;
  font-size: 2rem;
  width: 50px;
  height: 50px;
  margin-left: 5px;
`

export default RulesPopUp
