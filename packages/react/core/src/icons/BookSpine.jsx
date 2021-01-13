
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M33 13C33 12.4477 33.4477 12 34 12H46C46.5523 12 47 12.4477 47 13V67C47 67.5523 46.5523 68 46 68H34C33.4477 68 33 67.5523 33 67V13Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M33 19.998H47"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M33 59.998H47"
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
            d="M33 13C33 12.4477 33.4477 12 34 12H46C46.5523 12 47 12.4477 47 13V16.998H33V13Z"
            fill="currentColor"
          />
          <path
            d="M33 22.998H47V56.998H33V22.998Z"
            fill="currentColor"
          />
          <path
            d="M33 62.998V67C33 67.5523 33.4477 68 34 68H46C46.5523 68 47 67.5523 47 67V62.998H33Z"
            fill="currentColor"
          />
          <path
            d="M33 13C33 12.4477 33.4477 12 34 12H46C46.5523 12 47 12.4477 47 13V16.998H33V13Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M33 22.998H47V56.998H33V22.998Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M33 62.998V67C33 67.5523 33.4477 68 34 68H46C46.5523 68 47 67.5523 47 67V62.998H33Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'poly':
      return (
        <>
          <rect
            x="33"
            y="12"
            width="14"
            height="56"
            rx="1"
            fill="#2F80ED"
          />
          <path
            d="M33 19.998L47 19.998"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M33 59.998H47"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M33 13C33 12.4477 33.4477 12 34 12H46C46.5523 12 47 12.4477 47 13V67C47 67.5523 46.5523 68 46 68H34C33.4477 68 33 67.5523 33 67V13Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M33 19.998H47M33 59.998H47M34 68H46C46.5523 68 47 67.5523 47 67V13C47 12.4477 46.5523 12 46 12H34C33.4477 12 33 12.4477 33 13V67C33 67.5523 33.4477 68 34 68Z"
            stroke="currentColor"
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
            d="M31 13C31 11.3431 32.3431 10 34 10H46C47.6569 10 49 11.3431 49 13V67C49 68.6569 47.6569 70 46 70H34C32.3431 70 31 68.6569 31 67V13ZM35 14V17.998H45V14H35ZM35 57.998V21.998H45V57.998H35ZM35 61.998V66H45V61.998H35Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreBookSpine = forwardRef((props, ref) => {
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

CoreBookSpine.displayName = 'CoreBookSpine'

export default CoreBookSpine