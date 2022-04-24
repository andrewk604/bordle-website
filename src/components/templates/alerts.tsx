/*eslint-disable*/
// @ts-nocheck

import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"

import { Frame } from "./styled-templates"

import { EAlertTypes } from "../../services/alert-service"

import useEventListener, { eventDispatch } from "../../hooks/useEventListener"

// type TNotification = {
//   id: string
//   message: string
//   visible: boolean
//   status: string
// }

// type TNotificationRef = {
//   current: TNotification[]
// }

const createId = () => Math.random().toString(36).substring(3)

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const Alerts = () => {
  const notificationsRef = useRef([])
  const [notifications, setNotifications] = useState(notificationsRef.current)

  useEffect(() => {
    notificationsRef.current = notifications
  }, [notifications])

  const addItem = (message: any, type: EAlertTypes) => {
    const id = createId()
    setNotifications([
      ...notifications,
      { id, message, visible: false, status: type }
    ])
    return id
  }

  const openItem = (item_id: string) => {
    setNotifications(
      notificationsRef.current.map((i) =>
        i.id === item_id ? { ...i, visible: true } : i
      )
    )
  }

  const closeItem = (itemId: string) => {
    setNotifications(
      notificationsRef.current.map((i) =>
        i.id === itemId ? { ...i, visible: false } : i
      )
    )
  }

  useEventListener(`SHOW_ALERT`, async (d: any) => {
    const id = addItem(d.detail?.message, d?.detail?.type)
    await sleep(0)
    openItem(id)
    await sleep(5000)
    closeItem(id)
  })

  return (
    <>
      {notifications.map((item, index, self) => (
        <Bar
          key={index}
          onClick={() => {}}
          status={item.status}
          visible={item.visible}
          index={notifications
            .filter((i) => i.visible || i.id === item.id)
            .map((i) => i.id)
            .indexOf(item.id)}
        >
          <Frame extra={`align-items: flex-start;`}>
            {item.message.split(`\\n`).map((item, index) => {
              return <span key={index}>{item}</span>
            })}
          </Frame>
          <Cros
            onClick={() => {
              closeItem(item.id)
            }}
          />
        </Bar>
      ))}
    </>
  )
}

const Cros = styled(Frame)`
  width: 18px;
  height: 18px;
  margin-left: 9px;
  cursor: pointer;
`

// <{
//   visible?: boolean;
//   index: number;
//   status?: string;
// }>

const Bar = styled(Frame)`
  padding: 15px;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;

  background: #5cb85c;
  box-shadow: 0px 10px 20px rgba(0, 155, 232, 0.1);
  border-radius: 4px 0px 0px 4px;

  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.6px;
  font-weight: 500;
  color: black;

  transition: 0.5s;
  transform: translate(
    ${({ visible }) => (visible ? 0 : 100)}%,
    ${({ index }) => `calc(${index * 100}% + ${index * 10}px)`}
  );
  visibility: ${({ visible }) => (visible ? `visible` : `hidden`)};
  opacity: ${({ visible }) => (visible ? 1 : 0)};

  z-index: 4;
  position: fixed;
  top: 0;
  right: 0;

  &:before {
    content: "";
    width: 43px;
    height: 43px;
    margin-right: 9px;
  }
`

export default Alerts
/*eslint-enable*/
