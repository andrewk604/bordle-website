/* eslint-disable */
import React, { useState, useEffect, useCallback } from "react"
import styled from "styled-components"

import { Frame, Workspace } from "../templates/styled-templates"
import Header from "../templates/header"

import { eventDispatch } from "../../hooks/useEvents"

let Game = (props: any) => {
  useEffect(() => {
    window.addEventListener(`keydown`, keyboardType)
    return () => {
      window.removeEventListener(`keydown`, keyboardType)
    }
  }, [])

  let currentRow = 0
  let currentSquare = -1

  const loading = false

  const newSymbol = (key: string) => {
    if (currentSquare < 4) {
      let newGridItems = [...gridItemsProto]
      newGridItems[currentRow][currentSquare + 1].value = key
      setGridItems(newGridItems)
      if (currentSquare < 4) {
        currentSquare += 1
      }
    }
  }

  const deleteSymbol = (key: string) => {
    if (currentSquare == -1) return
    let newGridItems = [...gridItemsProto]
    newGridItems[currentRow][currentSquare].value = ""
    setGridItems(newGridItems)
    if (currentSquare > -1) {
      currentSquare -= 1
    }
  }

  const Enter = (key: string) => {
    if (currentSquare == 4 && currentRow < 5) {
      currentRow += 1
      currentSquare = -1
    }

    if (currentSquare == 4 && currentRow == 5) {
      currentSquare = -1
      currentRow = 0
      let newGridItems = [...gridItemsProto]
      newGridItems.forEach((item) => {
        item.forEach((subItem) => {
          subItem.value = ""
        })
      })
      setGridItems(newGridItems)
    }
  }

  const keyboardType = (e: any) => {
    console.log(currentSquare)
    if (e.key >= "a" && e.key <= "z" && loading === false) {
      newSymbol(e.key)
    }

    if (e.key === "Backspace" && loading === false) {
      deleteSymbol(e.key)
    }

    if (e.key === "Enter" && loading === false) {
      Enter(e.key)
    }
    console.log(currentSquare)
  }

  const gridItemsProto = [
    [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
    [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
    [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
    [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
    [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
    [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }]
  ]

  const keyboard = [
    [
      { value: "q", key: "q" },
      { value: "w", key: "w" },
      { value: "e", key: "e" },
      { value: "r", key: "r" },
      { value: "t", key: "t" },
      { value: "y", key: "y" },
      { value: "u", key: "u" },
      { value: "i", key: "i" },
      { value: "o", key: "o" },
      { value: "p", key: "p" }
    ],
    [
      { value: "a", key: "a" },
      { value: "s", key: "s" },
      { value: "d", key: "d" },
      { value: "f", key: "f" },
      { value: "g", key: "g" },
      { value: "h", key: "h" },
      { value: "j", key: "j" },
      { value: "k", key: "k" },
      { value: "l", key: "l" }
    ],
    [
      { value: "enter", key: "Enter" },
      { value: "z", key: "z" },
      { value: "x", key: "x" },
      { value: "c", key: "c" },
      { value: "v", key: "v" },
      { value: "b", key: "b" },
      { value: "n", key: "n" },
      { value: "m", key: "m" },
      { value: "Del", key: "Backspace" }
    ]
  ]

  const [gridItems, setGridItems] = useState(gridItemsProto)

  return (
    <GameWrapper>
      <Grid>
        {gridItems.map((item, index) => {
          return (
            <GridRow row key={index}>
              {item.map((subItem, subIndex) => {
                return <GridElement key={subIndex}>{subItem.value}</GridElement>
              })}
            </GridRow>
          )
        })}
      </Grid>
      <Keyboard>
        {keyboard.map((item, index) => {
          return (
            <KeyboardRow row key={index}>
              {item.map((subItem, subIndex) => {
                return (
                  <Key
                    key={subIndex}
                    extra={
                      subItem.key === "Enter" || subItem.key === "Backspace"
                        ? `width: 65px;`
                        : `width: 43px;`
                    }
                    onClick={() => {
                      window.dispatchEvent(
                        new KeyboardEvent("keydown", { key: subItem.key })
                      )
                    }}
                  >
                    {subItem.key === "Backspace" ? <Icon /> : subItem.value}
                  </Key>
                )
              })}
            </KeyboardRow>
          )
        })}
      </Keyboard>
    </GameWrapper>
  )
}

const GameWrapper = styled(Frame)`
  width: 100%;
  height: 100%;
  margin-top: 30px;
  margin-bottom: 10px;
`

const Grid = styled(Frame)`
  margin-right: 5px;
`

const Keyboard = styled(Frame)`
  margin-top: 16px;
  margin-right: 6px;
`

const Key = styled(Frame)`
  height: 58px;
  border-radius: 4px;
  margin-left: 6px;
  background: #818384;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  user-select: none;
`

const KeyboardRow = styled(Frame)`
  margin-top: 6px;
`

const GridElement = styled(Frame)`
  width: 55px;
  height: 55px;
  border: 2px solid #3a3a3c;
  font-size: 2rem;
  line-height: 2rem;
  color: #fff;
  font-weight: 600;
  margin: 0 5px 5px 0;
  text-transform: uppercase;
  user-select: none;
`

const GridRow = styled(Frame)`
  width: 100%;
`

const Icon = styled(Frame)`
  background: url(${require(`../../assets/icons/delete-icon.svg`).default});
  background-size: cover;
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
`

export default Game
