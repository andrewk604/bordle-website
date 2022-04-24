/* eslint-disable */
import React, { useState, useEffect, useCallback } from "react"
import styled from "styled-components"

import { Frame, Workspace, shake } from "../templates/styled-templates"
import Header from "../templates/header"

import { eventDispatch } from "../../hooks/useEvents"
import { putStorage, getStorage } from "../../hooks/useStorage"
import useEventListener from "../../hooks/useEventListener"

import AlertsService from "../../services/alert-service"

import UserApi from "../../api/user-api"

let Game = (props: any) => {
  let lastGridItems = null
  let loading = false
  let finished = false
  let isPopUp = false

  useEffect(() => {
    window.addEventListener(`keydown`, keyboardType)
    return () => {
      window.removeEventListener(`keydown`, keyboardType)
    }
  }, [])

  useEffect(() => {
    lastGridItems = getStorage(`last_grid`) || gridItemsProto
  }, [])

  useEventListener(`OPEN_POP_UP`, () => {
    isPopUp = true
  })
  useEventListener(`CLOSE_POP_UP`, () => {
    isPopUp = false
  })

  let currentRow = 0
  let currentSquare = -1

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

  const congratulations = () => {
    AlertsService.showSuccess(
      `You guessed the word right! Come back tomorrow for the new word!`
    )
    finished = true
  }

  const Enter = async (key: string) => {
    if (currentSquare == 4 && currentRow < 5) {
      loading = true
      const result = await UserApi.checkWord(word)

      if (result == undefined) {
        AlertsService.showError(`Not in the word list`)
        return
      }
      const newGridItems = [...gridItemsProto]
      const newKeyboard = [...keyboardProto]

      result.correctSymbols.forEach((i, id) => {
        newGridItems[currentRow][i].state = 2
        let correctSymbol = word.split("")[i]
        newKeyboard.forEach((subItem, subIndex) => {
          for (let item in subItem) {
            if (subItem[item].value == correctSymbol) {
              subItem[item].state = 2
            }
          }
        })
      })

      result.correctPlaces.forEach((i, id) => {
        newGridItems[currentRow][i].state = 1
        let correctSymbol = word.split("")[i]
        newKeyboard.forEach((subItem, subIndex) => {
          for (let item in subItem) {
            if (subItem[item].value == correctSymbol) {
              subItem[item].state = 1
            }
          }
        })
      })

      result.notCorrect.forEach((i, id) => {
        newGridItems[currentRow][i].state = 3
        let correctSymbol = word.split("")[i]
        newKeyboard.forEach((subItem, subIndex) => {
          for (let item in subItem) {
            if (subItem[item].value == correctSymbol) {
              subItem[item].state = 3
            }
          }
        })
      })

      setGridItems(newGridItems)
      setKeyboard(newKeyboard)

      if (result.correct === true) {
        congratulations()
        return
      } else if (result.correct === false) {
        currentRow += 1
        currentSquare = -1
      }
      loading = false
    }

    if (currentSquare == 4 && currentRow == 5) {
      const result = await UserApi.checkWord(word)
      let newGridItems = [...gridItemsProto]
      let newKeyboard = [...keyboardProto]

      result.correctSymbols.forEach((i, id) => {
        newGridItems[currentRow][i].state = 2
        let correctSymbol = word.split("")[i]
        newKeyboard.forEach((subItem, subIndex) => {
          for (let item in subItem) {
            if (subItem[item].value == correctSymbol) {
              subItem[item].state = 2
            }
          }
        })
      })
      result.correctPlaces.forEach((i, id) => {
        newGridItems[currentRow][i].state = 1
        let correctSymbol = word.split("")[i]
        newKeyboard.forEach((subItem, subIndex) => {
          for (let item in subItem) {
            if (subItem[item].value == correctSymbol) {
              subItem[item].state = 1
            }
          }
        })
      })

      result.notCorrect.forEach((i, id) => {
        newGridItems[currentRow][i].state = 3
        let correctSymbol = word.split("")[i]
        newKeyboard.forEach((subItem, subIndex) => {
          for (let item in subItem) {
            if (subItem[item].value == correctSymbol) {
              subItem[item].state = 3
            }
          }
        })
      })
      if ((result.correct = true)) {
        congratulations()
      }
      setGridItems(newGridItems)
      setKeyboard(newKeyboard)
    }
  }

  const keyboardType = (e: any) => {
    if (isPopUp === true) return
    if (e.getModifierState("CapsLock")) {
      AlertsService.showError("Turn CapsLock off to play")
      return
    }

    if (
      e.key >= "a" &&
      e.key <= "z" &&
      loading === false &&
      finished === false
    ) {
      newSymbol(e.key)
    }

    if (e.key === "Backspace" && loading === false && finished === false) {
      deleteSymbol(e.key)
    }

    if (e.key === "Enter" && loading === false && finished === false) {
      Enter(e.key)
    }
    word = ""
    gridItems[currentRow].forEach((i) => {
      word += i.value
    })
  }

  const gridItemsProto = [
    [
      { value: "", state: 0 },
      { value: "", state: 0 },
      { value: "", state: 0 },
      { value: "", state: 0 },
      { value: "", state: 0 }
    ],
    [
      { value: "", state: 0 },
      { value: "", state: 0 },
      { value: "", state: 0 },
      { value: "", state: 0 },
      { value: "", state: 0 }
    ],
    [
      { value: "", state: 0 },
      { value: "", state: 0 },
      { value: "", state: 0 },
      { value: "", state: 0 },
      { value: "", state: 0 }
    ],
    [
      { value: "", state: 0 },
      { value: "", state: 0 },
      { value: "", state: 0 },
      { value: "", state: 0 },
      { value: "", state: 0 }
    ],
    [
      { value: "", state: 0 },
      { value: "", state: 0 },
      { value: "", state: 0 },
      { value: "", state: 0 },
      { value: "", state: 0 }
    ],
    [
      { value: "", state: 0 },
      { value: "", state: 0 },
      { value: "", state: 0 },
      { value: "", state: 0 },
      { value: "", state: 0 }
    ]
  ]

  // States: default = 0; correct = 1; in word = 2; not in word = 3

  const keyboardProto = [
    [
      { value: "q", key: "q", state: 0 },
      { value: "w", key: "w", state: 0 },
      { value: "e", key: "e", state: 0 },
      { value: "r", key: "r", state: 0 },
      { value: "t", key: "t", state: 0 },
      { value: "y", key: "y", state: 0 },
      { value: "u", key: "u", state: 0 },
      { value: "i", key: "i", state: 0 },
      { value: "o", key: "o", state: 0 },
      { value: "p", key: "p", state: 0 }
    ],
    [
      { value: "a", key: "a", state: 0 },
      { value: "s", key: "s", state: 0 },
      { value: "d", key: "d", state: 0 },
      { value: "f", key: "f", state: 0 },
      { value: "g", key: "g", state: 0 },
      { value: "h", key: "h", state: 0 },
      { value: "j", key: "j", state: 0 },
      { value: "k", key: "k", state: 0 },
      { value: "l", key: "l", state: 0 }
    ],
    [
      { value: "enter", key: "Enter", state: 0 },
      { value: "z", key: "z", state: 0 },
      { value: "x", key: "x", state: 0 },
      { value: "c", key: "c", state: 0 },
      { value: "v", key: "v", state: 0 },
      { value: "b", key: "b", state: 0 },
      { value: "n", key: "n", state: 0 },
      { value: "m", key: "m", state: 0 },
      { value: "Del", key: "Backspace", state: 0 }
    ]
  ]

  const [gridItems, setGridItems] = useState(gridItemsProto)
  const [keyboard, setKeyboard] = useState(keyboardProto)

  let word = ""

  return (
    <GameWrapper>
      <Grid>
        {gridItems.map((item, index) => {
          return (
            <GridRow row key={index}>
              {item.map((subItem, subIndex) => {
                return (
                  <GridElement status={subItem.state} key={subIndex}>
                    {subItem.value}
                  </GridElement>
                )
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
                    status={subItem.state}
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
  justify-content: space-around;
`

const Grid = styled(Frame)`
  margin-right: 5px;
  width: 80%;
`

const Keyboard = styled(Frame)`
  margin-top: 16px;
  margin-right: 6px;
  width: 100%;
`

const Key = styled(Frame)`
  height: 58px;
  border-radius: 4px;
  margin-left: 6px;
  background: ${(props) => {
    if (props.status == 0) {
      return "#818384"
    }
    if (props.status == 1) {
      return "#6aaa64"
    }
    if (props.status == 2) {
      return "#c9b458"
    }
    if (props.status == 3) {
      return "#28292b"
    }
  }};
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  user-select: none;
`

const KeyboardRow = styled(Frame)`
  margin-top: 6px;
  width: 100%;
`

const GridElement = styled(Frame)`
  box-sizing: border-box;
  width: 55px;
  height: 55px;
  border: ${(props) => (props.status == 0 ? `2px solid #3a3a3c` : "")};
  font-size: 2rem;
  line-height: 2rem;
  color: #fff;
  font-weight: 600;
  margin: 0 5px 5px 0;
  text-transform: uppercase;
  user-select: none;
  background: ${(props) => {
    if (props.status == 0) {
      return ""
    }
    if (props.status == 1) {
      return "#6aaa64"
    }
    if (props.status == 2) {
      return "#c9b458"
    }
    if (props.status == 3) {
      return "#28292b"
    }
  }};
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
