/* eslint-disable */
// @ts-nocheck

import React, { useState, useEffect, useMemo, useCallback } from "react"
import styled from "styled-components"
import { useLocation } from "react-router-dom"

import { Frame, P, Text, StyledLink } from "../templates/styled-templates"
import PopUpWrapper from "./pop-up-wrapper"

import useEventListener, { eventDispatch } from "../../hooks/useEventListener"
import { putStorage, getStorage } from "../../hooks/useStorage"

let ResultPopUp = (props: any) => {
  let popUpName = `RESULT`

  let [result, setResult] = useState("false")
  const [tryNumber, setTryNumber] = useState("0")
  const [dayWord, setDayWord] = useState("")

  useEventListener(`OPEN_${popUpName}_POP_UP`, (d) => {
    const newResult = getStorage(`result`)
    console.log(getStorage(`word`))
    const dayWord = getStorage(`word`).split("").slice(1, 6).join("")
    setResult(newResult)
    setTryNumber((Number(getStorage(`try`)) + 1).toString())
    setDayWord(dayWord)
    console.log(dayWord)
  })

  return (
    <PopUpWrapper
      name={popUpName}
      extra={`height: 350px;border: 3px solid #1a1a1b; background: #121213; box-shadow: 0 4px 23px 0 rgb(0 0 0 / 20%); border-radius: 12px;`}
    >
      <Title>RESULT</Title>
      {result === "true" ? (
        <>
          <Text>You guessed the word correct!</Text>
          <Text>{`You gueesed the word at the ` + tryNumber + ` try`}</Text>
        </>
      ) : (
        <>
          <Text>You didn't guess the word!</Text>
          <Frame extra={`color: #fff;`}>
            The word was{" "}
            <Text extra={`color: #5cb85c; font-weight: 600; font-size: 24px;`}>
              {dayWord}
            </Text>
          </Frame>
        </>
      )}
    </PopUpWrapper>
  )
}

const Title = styled(P)`
  text-transform: uppercase;
  color: #fff;
  letter-spacing: 5px;
`

export default ResultPopUp
