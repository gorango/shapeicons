
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M36 22C36 20.8954 36.8954 20 38 20H42C43.1046 20 44 20.8954 44 22V26C44 27.1046 43.1046 28 42 28H38C36.8954 28 36 27.1046 36 26V22Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M36 38C36 36.8954 36.8954 36 38 36H42C43.1046 36 44 36.8954 44 38V42C44 43.1046 43.1046 44 42 44H38C36.8954 44 36 43.1046 36 42V38Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M36 54C36 52.8954 36.8954 52 38 52H42C43.1046 52 44 52.8954 44 54V58C44 59.1046 43.1046 60 42 60H38C36.8954 60 36 59.1046 36 58V54Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'bold':
      return (
        <>
          <rect
            x="36"
            y="20"
            width="8"
            height="8"
            rx="2"
            fill="currentColor"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
          />
          <rect
            x="36"
            y="36"
            width="8"
            height="8"
            rx="2"
            fill="currentColor"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
          />
          <rect
            x="36"
            y="52"
            width="8"
            height="8"
            rx="2"
            fill="currentColor"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
          />
        </>
      )
    case 'poly':
      return (
        <>
          <rect
            x="36"
            y="20"
            width="8"
            height="8"
            rx="2"
            fill="#219653"
          />
          <rect
            x="36"
            y="36"
            width="8"
            height="8"
            rx="2"
            fill="#219653"
          />
          <rect
            x="36"
            y="52"
            width="8"
            height="8"
            rx="2"
            fill="#219653"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M36 22C36 20.8954 36.8954 20 38 20H42C43.1046 20 44 20.8954 44 22V26C44 27.1046 43.1046 28 42 28H38C36.8954 28 36 27.1046 36 26V22Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M36 38C36 36.8954 36.8954 36 38 36H42C43.1046 36 44 36.8954 44 38V42C44 43.1046 43.1046 44 42 44H38C36.8954 44 36 43.1046 36 42V38Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M36 54C36 52.8954 36.8954 52 38 52H42C43.1046 52 44 52.8954 44 54V58C44 59.1046 43.1046 60 42 60H38C36.8954 60 36 59.1046 36 58V54Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M36 22C36 20.8954 36.8954 20 38 20H42C43.1046 20 44 20.8954 44 22V26C44 27.1046 43.1046 28 42 28H38C36.8954 28 36 27.1046 36 26V22Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M36 38C36 36.8954 36.8954 36 38 36H42C43.1046 36 44 36.8954 44 38V42C44 43.1046 43.1046 44 42 44H38C36.8954 44 36 43.1046 36 42V38Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M36 54C36 52.8954 36.8954 52 38 52H42C43.1046 52 44 52.8954 44 54V58C44 59.1046 43.1046 60 42 60H38C36.8954 60 36 59.1046 36 58V54Z"
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
            d="M34 22C34 19.7909 35.7909 18 38 18H42C44.2091 18 46 19.7909 46 22V26C46 28.2091 44.2091 30 42 30H38C35.7909 30 34 28.2091 34 26V22ZM42 22H38V26H42V22Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34 38C34 35.7909 35.7909 34 38 34H42C44.2091 34 46 35.7909 46 38V42C46 44.2091 44.2091 46 42 46H38C35.7909 46 34 44.2091 34 42V38ZM42 38H38V42H42V38Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M38 50C35.7909 50 34 51.7909 34 54V58C34 60.2091 35.7909 62 38 62H42C44.2091 62 46 60.2091 46 58V54C46 51.7909 44.2091 50 42 50H38ZM38 54H42V58H38V54Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreEllipsis = forwardRef((props, ref) => {
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

CoreEllipsis.displayName = 'CoreEllipsis'

export default CoreEllipsis
