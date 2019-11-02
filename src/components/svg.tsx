/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { hidden } from "../styles/utils"

const icons = {
  triangle: {
    shape: (
      <polygon
        strokeWidth="1px"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="14.921,2.27 28.667,25.5 1.175,25.5 "
      />
    ),
    viewBox: `0 0 30 30`,
  },
  circle: {
    shape: (
      <path d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z" />
    ),
    viewBox: `0 0 30 30`,
  },
  box: {
    shape: (
      <path d="M28,2V28H2V2H28m.13-2H1.88A1.88,1.88,0,0,0,0,1.88V28.13A1.88,1.88,0,0,0,1.88,30H28.13A1.87,1.87,0,0,0,30,28.13V1.88A1.88,1.88,0,0,0,28.13,0Z" />
    ),
    viewBox: `0 0 30 30`,
  },
  hexa: {
    shape: (
      <polygon
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="27.5,21.904 15,28.809  2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 "
      />
    ),
    viewBox: `0 0 30 30`,
  },
  cross: {
    shape: (
      <path
        strokeWidth="3px"
        d="M60.5,50l34.8-34.8c2.9-2.9,2.9-7.6,0-10.5c-2.9-2.9-7.6-2.9-10.5,0L50,39.5L15.2,4.7c-2.9-2.9-7.6-2.9-10.5,0    c-2.9,2.9-2.9,7.6,0,10.5L39.5,50L4.7,84.8c-2.9,2.9-2.9,7.6,0,10.5c1.4,1.4,3.3,2.2,5.2,2.2s3.8-0.7,5.2-2.2L50,60.5l34.8,34.8    c1.4,1.4,3.3,2.2,5.2,2.2c1.9,0,3.8-0.7,5.2-2.2c2.9-2.9,2.9-7.6,0-10.5L60.5,50z"
      />
    ),
    viewBox: `0 0 100 100`,
  },
  haert: {
    shape: (
      <path
        d="M71.61 119.11l-2.94-2C43.33 99.9 16.08 75.76 15.81 75.51l-.23-.21C2.46 62.18-2.72 45.89 1.37 30.61A41.46 41.46 0 0130.61 1.37c13.87-3.72 28.58.21 41 10.8C84 1.58 98.73-2.35 112.61 1.37a41.46 41.46 0 0129.24 29.24c4.09 15.28-1.09 31.57-14.22 44.69l-.22.21c-.28.25-27.53 24.39-52.87 41.61zM22.86 67.8c1.87 1.65 25.68 22.59 48.75 38.65 23.06-16.06 46.88-37 48.74-38.65 12.43-12.51 18.77-32.92 3.38-48.31S87.8 10.47 75.3 23l-3.69 3.7-3.7-3.7c-12.5-12.5-33-18.92-48.42-3.48s-9.05 35.77 3.37 48.28z"
      />
    ),
    viewBox: "0 0 186.97 133.04",
  },
  claud: {
    shape: (
      <path
        d="M242.2 93A37 37 0 00199 41.26a52.36 52.36 0 00-102.37.17 37 37 0 00-58.42 30.08 37.22 37.22 0 00.79 7.74 27.8 27.8 0 10-11.22 53.24h208.38a20.2 20.2 0 006-39.47z"
      />
    ),
    viewBox: "0 0 256.35 132.49"
  }
}

type IconType = "triangle" | "circle" | "box" | "hexa" | "cross" | "haert" | "claud"

type SVGProps = {
  stroke?: boolean
  color?: string | number | any
  width: number
  icon: IconType
  left: string
  top: string
  hiddenMobile?: boolean
}

const defaultProps = {
  stroke: false,
  hiddenMobile: false,
}

const SVG = ({ stroke, color, width, icon, left, top, hiddenMobile }: SVGProps) => (
  <svg
    sx={{
      position: `absolute`,
      stroke: stroke ? `currentColor` : `none`,
      fill: stroke ? `none` : `currentColor`,
      display: hiddenMobile ? hidden : `block`,
      color,
      width,
      left,
      top,
    }}
    viewBox={icons[icon].viewBox}
  >
    {icons[icon].shape}
  </svg>
)

export default SVG

SVG.defaultProps = defaultProps
