/* eslint-disable */
import React from "react"
import styled, { keyframes, css } from "styled-components"
import { Link } from "react-router-dom"

const jump = keyframes`
  from{
    transform: translateY(0)
  }
  to{
    transform: translateY(-2px)
  }
`

export const shake = keyframes`
  10%, 90% {
    transform: translateX(-1px);
  }
  
  20%, 80% {
    transform: translateX(2px);
  }

  30%, 50%, 70% {
    transform: translateX(-4px);
  }

  40%, 60% {
    transform: translateX(4px);
  }
`

export const Frame = styled.div.attrs((props) => ({
  ...props
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => (props.row ? `row` : `column`)};
  transition: 0.2s;
  font-size: 18px;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 4vw;
  }
  ${(props) => props.extra}
`

export const Button = styled(Frame)`
  box-sizing: border-box;
  border-radius: 50px;
  padding: 7px 15px;
  font-weight: 500;
  font-size: 18px;
  line-height: 16px;
  background: #5cb85c;
  cursor: pointer;
  flex-direction: row;
  transition: all 0.3s ease-out;
  :focus,
  :hover {
    animation: ${jump} 0.3s ease-out forwards;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`

export const Workspace = styled(Frame)`
  width: 85vw;
  max-width: 1200px;
  height: 100%;
  flex-direction: column;
  align-items: center;
  ${(props) => props.extra}
`

export const Input = styled.input.attrs((props) => ({
  ...props
}))`
  max-width: 100%;
  padding: 11px 13px;
  outline: 0;
  margin-bottom: 1rem;
  background: #f9f9fa;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 18px;
  border-radius: 4px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`

export const Form = styled.form.attrs((props) => ({
  ...props
}))`
  width: 480px;
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`

export const H1 = styled(Frame)`
  font-weight: 700;
  font-size: 3rem;
`

export const Text = styled(Frame)`
  font-weight: normal;
  font-size: 18px;
  letter-spacing: 1px;
`

export const StyledLink = styled(Link).attrs((props) => ({
  ...props
}))`
  text-decoration: none;
  color: black;
  ${({ extra }) => extra}
`
