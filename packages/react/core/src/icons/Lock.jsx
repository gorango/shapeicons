
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M18 40.0833C18 39.0708 18.8208 38.25 19.8333 38.25H60.1667C61.1792 38.25 62 39.0708 62 40.0833V66.4167C62 67.4292 61.1792 68.25 60.1667 68.25H19.8333C18.8208 68.25 18 67.4292 18 66.4167V40.0833Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M37 56.25C38.6568 57.9068 41.3431 57.9068 43 56.25C44.6568 54.5931 44.6568 51.9068 43 50.25C41.3431 48.5931 38.6568 48.5931 37 50.25C35.3431 51.9068 35.3431 54.5931 37 56.25Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M26.5 38.25V29.75C26.5 22.2942 32.5442 16.25 40 16.25C47.4558 16.25 53.5 22.2942 53.5 29.75V38.25"
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.8333 38.5C18.8208 38.5 18 39.3208 18 40.3333L18 66.6667C18 67.6792 18.8208 68.5 19.8333 68.5H60.1667C61.1792 68.5 62 67.6792 62 66.6667L62 40.3333C62 39.3208 61.1792 38.5 60.1667 38.5L19.8333 38.5ZM43 56.5C41.3431 58.1569 38.6569 58.1569 37 56.5C35.3431 54.8431 35.3431 52.1569 37 50.5C38.6569 48.8431 41.3431 48.8431 43 50.5C44.6569 52.1569 44.6569 54.8431 43 56.5Z"
            fill="currentColor"
          />
          <path
            d="M37 56.5L37.7071 55.7929L37.7071 55.7929L37 56.5ZM43 56.5L42.2929 55.7929V55.7929L43 56.5ZM37 50.5L37.7071 51.2071H37.7071L37 50.5ZM19 40.3333C19 39.8731 19.3731 39.5 19.8333 39.5V37.5C18.2685 37.5 17 38.7685 17 40.3333H19ZM19 66.6667L19 40.3333H17L17 66.6667H19ZM19.8333 67.5C19.3731 67.5 19 67.1269 19 66.6667H17C17 68.2315 18.2685 69.5 19.8333 69.5V67.5ZM60.1667 67.5H19.8333V69.5H60.1667V67.5ZM61 66.6667C61 67.1269 60.6269 67.5 60.1667 67.5V69.5C61.7315 69.5 63 68.2315 63 66.6667H61ZM61 40.3333L61 66.6667H63L63 40.3333H61ZM60.1667 39.5C60.6269 39.5 61 39.8731 61 40.3333H63C63 38.7685 61.7315 37.5 60.1667 37.5V39.5ZM19.8333 39.5L60.1667 39.5V37.5L19.8333 37.5V39.5ZM36.2929 57.2071C38.3403 59.2545 41.6597 59.2545 43.7071 57.2071L42.2929 55.7929C41.0266 57.0592 38.9734 57.0592 37.7071 55.7929L36.2929 57.2071ZM36.2929 49.7929C34.2455 51.8403 34.2455 55.1597 36.2929 57.2071L37.7071 55.7929C36.4408 54.5266 36.4408 52.4734 37.7071 51.2071L36.2929 49.7929ZM43.7071 49.7929C41.6597 47.7455 38.3403 47.7455 36.2929 49.7929L37.7071 51.2071C38.9734 49.9408 41.0266 49.9408 42.2929 51.2071L43.7071 49.7929ZM43.7071 57.2071C45.7545 55.1597 45.7545 51.8403 43.7071 49.7929L42.2929 51.2071C43.5592 52.4734 43.5592 54.5266 42.2929 55.7929L43.7071 57.2071Z"
            fill="currentColor"
          />
          <path
            d="M23.5 38.5V41.5H29.5V38.5H23.5ZM50.5 38.5V41.5H56.5V38.5H50.5ZM29.5 38.5V30H23.5V38.5H29.5ZM50.5 30V38.5H56.5V30L50.5 30ZM40 19.5C45.799 19.5 50.5 24.201 50.5 30L56.5 30C56.5 20.8873 49.1127 13.5 40 13.5V19.5ZM40 13.5C30.8873 13.5 23.5 20.8873 23.5 30H29.5C29.5 24.201 34.201 19.5 40 19.5V13.5Z"
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
            d="M19.8333 38.25C18.8208 38.25 18 39.0708 18 40.0833L18 66.4167C18 67.4292 18.8208 68.25 19.8333 68.25H60.1667C61.1792 68.25 62 67.4292 62 66.4167L62 40.0833C62 39.0708 61.1792 38.25 60.1667 38.25L19.8333 38.25ZM43 56.25C41.3431 57.9069 38.6569 57.9069 37 56.25C35.3431 54.5931 35.3431 51.9069 37 50.25C38.6569 48.5931 41.3431 48.5931 43 50.25C44.6569 51.9069 44.6569 54.5931 43 56.25Z"
            fill="#F2C94C"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 14.25C31.4396 14.25 24.5 21.1896 24.5 29.75V38.25H28.5V29.75C28.5 23.3987 33.6487 18.25 40 18.25C46.3513 18.25 51.5 23.3987 51.5 29.75V38.25H55.5V29.75C55.5 21.1896 48.5604 14.25 40 14.25Z"
            fill="#828282"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.8333 38.25C18.8208 38.25 18 39.0708 18 40.0833V66.4167C18 67.4292 18.8208 68.25 19.8333 68.25H60.1667C61.1792 68.25 62 67.4292 62 66.4167V40.0833C62 39.0708 61.1792 38.25 60.1667 38.25H19.8333ZM43 56.25C41.3431 57.9069 38.6569 57.9069 37 56.25C35.3431 54.5931 35.3431 51.9069 37 50.25C38.6569 48.5931 41.3431 48.5931 43 50.25C44.6569 51.9069 44.6569 54.5931 43 56.25Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M26.5 38.25V29.75C26.5 22.2942 32.5442 16.25 40 16.25C47.4558 16.25 53.5 22.2942 53.5 29.75V38.25M18 40.0833C18 39.0708 18.8208 38.25 19.8333 38.25H60.1667C61.1792 38.25 62 39.0708 62 40.0833V66.4167C62 67.4292 61.1792 68.25 60.1667 68.25H19.8333C18.8208 68.25 18 67.4292 18 66.4167V40.0833ZM37 56.25C38.6569 57.9069 41.3431 57.9069 43 56.25C44.6569 54.5931 44.6569 51.9069 43 50.25C41.3431 48.5931 38.6569 48.5931 37 50.25C35.3431 51.9069 35.3431 54.5931 37 56.25Z"
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
            d="M44.4142 57.9142C46.8521 55.4763 46.8521 51.5237 44.4142 49.0858C41.9763 46.6479 38.0237 46.6479 35.5858 49.0858C33.1479 51.5237 33.1479 55.4763 35.5858 57.9142C38.0237 60.3521 41.9763 60.3521 44.4142 57.9142ZM38.4142 51.9142C39.29 51.0384 40.71 51.0384 41.5858 51.9142C42.4616 52.79 42.4616 54.21 41.5858 55.0858C40.71 55.9616 39.29 55.9616 38.4142 55.0858C37.5384 54.21 37.5384 52.79 38.4142 51.9142Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 14.5C31.4396 14.5 24.5 21.4396 24.5 30V36.5H19.8333C17.7162 36.5 16 38.2162 16 40.3333V66.6667C16 68.7838 17.7162 70.5 19.8333 70.5H60.1667C62.2838 70.5 64 68.7838 64 66.6667V40.3333C64 38.2162 62.2838 36.5 60.1667 36.5H55.5V30C55.5 21.4396 48.5604 14.5 40 14.5ZM51.5 36.5V30C51.5 23.6487 46.3513 18.5 40 18.5C33.6487 18.5 28.5 23.6487 28.5 30V36.5H51.5ZM20 40.5V66.5H60V40.5H20Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreLock = forwardRef((props, ref) => {
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

CoreLock.displayName = 'CoreLock'

export default CoreLock
