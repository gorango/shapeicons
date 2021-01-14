
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M56 26C56 24.8954 55.1046 24 54 24H26C24.8954 24 24 24.8954 24 26V54C24 55.1046 24.8954 56 26 56H54C55.1046 56 56 55.1046 56 54V26Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M56 31.5H62.5C63.0523 31.5 63.5 31.0523 63.5 30.5V17.5C63.5 16.9477 63.0523 16.5 62.5 16.5H49.5C48.9477 16.5 48.5 16.9477 48.5 17.5V24"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M56 36H66C67.1046 36 68 35.1046 68 34V14C68 12.8954 67.1046 12 66 12H46C44.8954 12 44 12.8954 44 14V24"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M24 48.5H17.5C16.9477 48.5 16.5 48.9477 16.5 49.5V62.5C16.5 63.0523 16.9477 63.5 17.5 63.5H30.5C31.0523 63.5 31.5 63.0523 31.5 62.5V56"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M24 44H14C12.8954 44 12 44.8954 12 46V66C12 67.1046 12.8954 68 14 68H34C35.1046 68 36 67.1046 36 66V56"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'bold':
      return (
        <>
          <path
            d="M33 60.5C33 59.6716 33.6716 59 34.5 59C35.3284 59 36 59.6716 36 60.5V66C36 67.1046 35.1046 68 34 68H14C12.8954 68 12 67.1046 12 66V46C12 44.8954 12.8954 44 14 44H19.5C20.3284 44 21 44.6716 21 45.5C21 46.3284 20.3284 47 19.5 47H17.5C16.1193 47 15 48.1193 15 49.5V62.5C15 63.8807 16.1193 65 17.5 65H30.5C31.8807 65 33 63.8807 33 62.5V60.5Z"
            fill="currentColor"
          />
          <path
            d="M19.5 50C20.3284 50 21 50.6716 21 51.5V54C21 56.7614 23.2386 59 26 59H28.5C29.3284 59 30 59.6716 30 60.5C30 61.3284 29.3284 62 28.5 62H20C18.8954 62 18 61.1046 18 60V51.5C18 50.6716 18.6716 50 19.5 50Z"
            fill="currentColor"
          />
          <path
            d="M56 26C56 24.8954 55.1046 24 54 24H26C24.8954 24 24 24.8954 24 26V54C24 55.1046 24.8954 56 26 56H54C55.1046 56 56 55.1046 56 54V26Z"
            fill="currentColor"
          />
          <path
            d="M66 12C67.1046 12 68 12.8954 68 14V34C68 35.1046 67.1046 36 66 36H60.5C59.6716 36 59 35.3284 59 34.5C59 33.6716 59.6716 33 60.5 33H62.5C63.8807 33 65 31.8807 65 30.5V17.5C65 16.1193 63.8807 15 62.5 15H49.5C48.1193 15 47 16.1193 47 17.5V19.5C47 20.3284 46.3284 21 45.5 21C44.6716 21 44 20.3284 44 19.5V14C44 12.8954 44.8954 12 46 12H66Z"
            fill="currentColor"
          />
          <path
            d="M60.5 30C59.6716 30 59 29.3284 59 28.5V26C59 23.2386 56.7614 21 54 21H51.5C50.6716 21 50 20.3284 50 19.5C50 18.6716 50.6716 18 51.5 18H60C61.1046 18 62 18.8954 62 20V28.5C62 29.3284 61.3284 30 60.5 30Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M66 12C67.1046 12 68 12.8954 68 14V34C68 35.1046 67.1046 36 66 36H56V26C56 24.8954 55.1046 24 54 24L44 24V14C44 12.8954 44.8954 12 46 12L66 12Z"
            fill="#2F80ED"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M62.5 16.5C63.0523 16.5 63.5 16.9477 63.5 17.5V30.5C63.5 31.0523 63.0523 31.5 62.5 31.5H56V26C56 24.8954 55.1046 24 54 24L48.5 24V17.5C48.5 16.9477 48.9477 16.5 49.5 16.5L62.5 16.5Z"
            fill="#56CCF2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14 68C12.8954 68 12 67.1046 12 66L12 46C12 44.8954 12.8954 44 14 44H24L24 54C24 55.1046 24.8954 56 26 56H36V66C36 67.1046 35.1046 68 34 68H14Z"
            fill="#2F80ED"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.5 63.5C16.9477 63.5 16.5 63.0523 16.5 62.5L16.5 49.5C16.5 48.9477 16.9477 48.5 17.5 48.5H24L24 54C24 55.1046 24.8954 56 26 56H31.5V62.5C31.5 63.0523 31.0523 63.5 30.5 63.5H17.5Z"
            fill="#56CCF2"
          />
          <path
            d="M56 26C56 24.8954 55.1046 24 54 24L26 24C24.8954 24 24 24.8954 24 26L24 54C24 55.1046 24.8954 56 26 56L54 56C55.1046 56 56 55.1046 56 54L56 26Z"
            fill="#9B51E0"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M66 12C67.1046 12 68 12.8954 68 14V34C68 35.1046 67.1046 36 66 36H56V26C56 24.8954 55.1046 24 54 24H44V14C44 12.8954 44.8954 12 46 12H66Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M62.5 16.5C63.0523 16.5 63.5 16.9477 63.5 17.5V30.5C63.5 31.0523 63.0523 31.5 62.5 31.5H56V26C56 24.8954 55.1046 24 54 24H48.5V17.5C48.5 16.9477 48.9477 16.5 49.5 16.5H62.5Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M14 68C12.8954 68 12 67.1046 12 66V46C12 44.8954 12.8954 44 14 44H24V54C24 55.1046 24.8954 56 26 56H36V66C36 67.1046 35.1046 68 34 68H14Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M17.5 63.5C16.9477 63.5 16.5 63.0523 16.5 62.5V49.5C16.5 48.9477 16.9477 48.5 17.5 48.5H24V54C24 55.1046 24.8954 56 26 56H31.5V62.5C31.5 63.0523 31.0523 63.5 30.5 63.5H17.5Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M56 26C56 24.8954 55.1046 24 54 24H26C24.8954 24 24 24.8954 24 26V54C24 55.1046 24.8954 56 26 56H54C55.1046 56 56 55.1046 56 54V26Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M56 26V36H66C67.1046 36 68 35.1046 68 34V14C68 12.8954 67.1046 12 66 12H46C44.8954 12 44 12.8954 44 14V24H54M56 26C56 24.8954 55.1046 24 54 24M56 26V31.5H62.5C63.0523 31.5 63.5 31.0523 63.5 30.5V17.5C63.5 16.9477 63.0523 16.5 62.5 16.5H49.5C48.9477 16.5 48.5 16.9477 48.5 17.5V24H54M56 26V54C56 55.1046 55.1046 56 54 56H26M54 24H26C24.8954 24 24 24.8954 24 26V54M24 54V44H14C12.8954 44 12 44.8954 12 46V66C12 67.1046 12.8954 68 14 68H34C35.1046 68 36 67.1046 36 66V56H26M24 54C24 55.1046 24.8954 56 26 56M24 54V48.5H17.5C16.9477 48.5 16.5 48.9477 16.5 49.5V62.5C16.5 63.0523 16.9477 63.5 17.5 63.5H30.5C31.0523 63.5 31.5 63.0523 31.5 62.5V56H26"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'outline':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M70 14C70 11.7909 68.2091 10 66 10H46C43.7909 10 42 11.7909 42 14V22H26C23.7909 22 22 23.7909 22 26V42H14C11.7909 42 10 43.7909 10 46V66C10 68.2091 11.7909 70 14 70H34C36.2091 70 38 68.2091 38 66V58H54C56.2091 58 58 56.2091 58 54V38H66C68.2091 38 70 36.2091 70 34V14ZM58 34H64C65.1046 34 66 33.1046 66 32V16C66 14.8954 65.1046 14 64 14L48 14C46.8954 14 46 14.8954 46 16V22H46.5V17.5C46.5 15.8431 47.8431 14.5 49.5 14.5H62.5C64.1569 14.5 65.5 15.8431 65.5 17.5V30.5C65.5 32.1569 64.1569 33.5 62.5 33.5H58V34ZM58 29.5H61.5V18.5H50.5V22H54C56.2091 22 58 23.7909 58 26V29.5ZM34 58H33.5V62.5C33.5 64.1569 32.1569 65.5 30.5 65.5H17.5C15.8431 65.5 14.5 64.1569 14.5 62.5V49.5C14.5 47.8431 15.8431 46.5 17.5 46.5H22V46H16C14.8954 46 14 46.8954 14 48V64C14 65.1046 14.8954 66 16 66H32C33.1046 66 34 65.1046 34 64V58ZM22 50.5H18.5V61.5H29.5V58H26C23.7909 58 22 56.2091 22 54V50.5ZM26 54H54V26H26V54Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreLayerFront = forwardRef((props, ref) => {
  const { size, variant, rotate, flip, children } = props

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 80"
      width={size || 40}
      height={size || 40}
      transform={transform(rotate, flip)}
    >
      {children}
      <g>
        {renderString({ size, variant, rotate, flip })}
      </g>
    </svg>
  )
})

CoreLayerFront.displayName = 'CoreLayerFront'

export default CoreLayerFront
