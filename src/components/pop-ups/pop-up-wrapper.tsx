/* eslint-disable */
import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"

import { Frame } from "../templates/styled-templates"

import useEventListener, { eventDispatch } from "../../hooks/useEventListener"
import useOnClickOutside from "../../hooks/useOnClickOutside"

let PopUpWrapper = (props: any) => {
  let {
    name = ``,
    extra = ``,
    preventClosing = false,
    withCross = true
  } = props

  let [visible, setVisible] = useState(false)
  let [shouldRender, setShouldRender] = useState(visible)
  let ref = useRef()

  useEventListener(`OPEN_${name}_POP_UP`, () => {
    setShouldRender(true)
    setVisible(true)
  })
  useEventListener(`CLOSE_${name}_POP_UP`, () => {
    if (!preventClosing) {
      setVisible(false)
      setTimeout(() => {
        setShouldRender(false)
      }, 200)
    }
  })

  useEffect(() => {
    document.getElementsByTagName(`body`)[0].style.overflowY = visible
      ? `hidden`
      : `scroll`
  }, [visible])

  const onClose = () => {
    eventDispatch(`CLOSE_${name}_POP_UP`)
    eventDispatch(`CLOSE_POP_UP`)
  }
  useOnClickOutside(ref, onClose)

  return (
    <>
      <OpenProjectTab visible={visible} extra={extra} ref={ref}>
        {withCross ? <Cross onClick={onClose} /> : null}
        {props.children}
      </OpenProjectTab>
    </>
  )
}

let Cross = styled.img.attrs(() => {
  let img
  try {
    img = require(`../../assets/icons/cross.svg`).default
  } catch (error) {}
  return { src: img }
})`
  width: 24px;
  height: 24px;
  position: absolute;
  /* top: -54px; */
  right: 20px;
  top: 20px;
  z-index: 4;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: rotate(90deg);
  }
`

const OpenProjectTab = styled(Frame)`
  flex-direction: column;
  justify-content: flex-start;
  min-width: 350px;
  /* height: auto; */
  /* height: 100%; */
  /* width: 100%; */
  padding: 30px 30px;
  padding: 30px 50px;
  background: #121213;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, ${(props) => (props.visible ? `-50%` : `100vh`)});
  z-index: 3;
  box-sizing: border-box;
  overflow-y: scroll;
  overflow-x: hidden;

  @media only screen and (max-width: 600px) {
    min-width: auto;
    width: 90vw;
    padding: 8vw 5vw;
    transition: 0.2s;
  }

  ${(props) => props.extra}
`
export default PopUpWrapper
