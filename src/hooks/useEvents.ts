/* eslint-disable */
// @ts-nocheck
import React, { useState, useEffect } from "react"

export let useEventListener = (key: any, handler: any) => {
  useEffect(() => {
    window.addEventListener(key, handler)
    return () => {
      window.removeEventListener(key, handler)
    }
  })
}

export let eventDispatch = (key: any, detail: any) => {
  window.dispatchEvent(new CustomEvent(key, { detail }))
}

/* eslint-enable */
