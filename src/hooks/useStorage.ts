/* eslint-disable */
// @ts-nocheck

import React, { useState, useEffect } from "react"
import { eventDispatch } from "./useEvents"

export let putStorage = (path: string, value: any) => {
  localStorage.setItem(
    path,
    path == `auth_token` ? value : JSON.stringify(value)
  )
  eventDispatch(`local-storage`, {})
}

export let getStorage = (path: any) => {
  let item = localStorage.getItem(path)
  return item
}

export let getComplicatedStorage = (path: string) => {
  return JSON.parse(localStorage.getItem(path))
}

/* eslint-enable */
