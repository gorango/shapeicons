
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M41.4141 62.8867L70.2136 34.0872C68.6828 31.4002 66.7938 28.9179 64.5883 26.7125C60.2722 22.3963 54.8959 19.2923 48.9999 17.7125C43.1039 16.1326 36.8959 16.1326 30.9999 17.7125C25.1039 19.2923 19.7276 22.3963 15.4114 26.7125C13.206 28.9179 11.317 31.4002 9.78613 34.0872L38.5857 62.8867C39.3667 63.6678 40.6331 63.6678 41.4141 62.8867Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M61.4604 42.8405C60.7431 41.9053 59.9632 41.015 59.1244 40.1762C55.7673 36.8192 51.5858 34.405 47 33.1762C42.4142 31.9474 37.5858 31.9474 33 33.1762C28.4142 34.405 24.2327 36.8192 20.8757 40.1762C20.0368 41.015 19.2569 41.9054 18.5396 42.8406"
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
            d="M70.2136 34.0872L72.335 36.2085C73.2906 35.2529 73.4893 33.7763 72.8203 32.6021L70.2136 34.0872ZM41.4141 62.8867L43.5354 65.008H43.5354L41.4141 62.8867ZM38.5857 62.8867L40.707 60.7654L38.5857 62.8867ZM9.78613 34.0872L7.1795 32.6021C6.51051 33.7763 6.70921 35.2529 7.66481 36.2085L9.78613 34.0872ZM15.4114 26.7125L17.5328 28.8338L15.4114 26.7125ZM30.9999 17.7125L30.2234 14.8147V14.8147L30.9999 17.7125ZM48.9999 17.7125L48.2234 20.6102L48.9999 17.7125ZM64.5883 26.7125L66.7097 24.5911L64.5883 26.7125ZM68.0923 31.9659L39.2928 60.7654L43.5354 65.008L72.335 36.2085L68.0923 31.9659ZM39.2928 60.7654C39.6833 60.3749 40.3165 60.3749 40.707 60.7654L36.4644 65.008C38.417 66.9606 41.5828 66.9606 43.5354 65.008L39.2928 60.7654ZM40.707 60.7654L11.9075 31.9658L7.66481 36.2085L36.4644 65.008L40.707 60.7654ZM12.3928 35.5722C13.7916 33.1171 15.5176 30.849 17.5328 28.8338L13.2901 24.5911C10.8944 26.9869 8.84241 29.6833 7.1795 32.6021L12.3928 35.5722ZM17.5328 28.8338C21.4766 24.89 26.389 22.0538 31.7763 20.6102L30.2234 14.8147C23.8188 16.5308 17.9787 19.9026 13.2901 24.5911L17.5328 28.8338ZM31.7763 20.6102C37.1637 19.1667 42.8361 19.1667 48.2234 20.6102L49.7763 14.8147C43.3717 13.0986 36.6281 13.0986 30.2234 14.8147L31.7763 20.6102ZM48.2234 20.6102C53.6108 22.0538 58.5232 24.89 62.467 28.8338L66.7097 24.5911C62.0211 19.9026 56.181 16.5308 49.7763 14.8147L48.2234 20.6102ZM62.467 28.8338C64.4822 30.849 66.2082 33.1171 67.607 35.5723L72.8203 32.6021C71.1574 29.6833 69.1054 26.9869 66.7097 24.5911L62.467 28.8338Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M61.4604 42.8405L41.4141 62.8867C40.6331 63.6678 39.3667 63.6678 38.5857 62.8867L18.5396 42.8406C19.2569 41.9053 20.0368 41.015 20.8757 40.1762C24.2327 36.8192 28.4142 34.405 33 33.1762C37.5858 31.9474 42.4142 31.9474 47 33.1762C51.5858 34.405 55.7673 36.8192 59.1244 40.1762C59.9632 41.015 60.7431 41.9053 61.4604 42.8405Z"
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
            d="M70.2136 34.0872L41.4141 62.8867C40.6331 63.6678 39.3667 63.6678 38.5857 62.8867L9.78613 34.0872C11.317 31.4002 13.206 28.9179 15.4114 26.7125C19.7276 22.3963 25.1039 19.2923 30.9999 17.7125C36.8959 16.1326 43.1039 16.1326 48.9999 17.7125C54.8959 19.2923 60.2722 22.3963 64.5883 26.7125C66.7938 28.9179 68.6828 31.4002 70.2136 34.0872Z"
            fill="#56CCF2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M61.4604 42.8405L41.4141 62.8867C40.6331 63.6678 39.3667 63.6678 38.5857 62.8867L18.5396 42.8406C19.2569 41.9053 20.0368 41.015 20.8757 40.1762C24.2327 36.8192 28.4142 34.405 33 33.1762C37.5858 31.9474 42.4142 31.9474 47 33.1762C51.5858 34.405 55.7673 36.8192 59.1244 40.1762C59.9632 41.015 60.7431 41.9053 61.4604 42.8405Z"
            fill="#2F80ED"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M70.2136 34.0872L41.4141 62.8867C40.6331 63.6678 39.3667 63.6678 38.5857 62.8867L9.78613 34.0872C11.317 31.4002 13.206 28.9179 15.4114 26.7125C19.7276 22.3963 25.1039 19.2923 30.9999 17.7125C36.8959 16.1326 43.1039 16.1326 48.9999 17.7125C54.8959 19.2923 60.2722 22.3963 64.5883 26.7125C66.7938 28.9179 68.6828 31.4002 70.2136 34.0872Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M61.4604 42.8405L41.4141 62.8867C40.6331 63.6678 39.3667 63.6678 38.5857 62.8867L18.5395 42.8406C19.2568 41.9054 20.0368 41.015 20.8756 40.1762C24.2327 36.8192 28.4142 34.405 33 33.1762C37.5858 31.9475 42.4142 31.9475 47 33.1762C51.5858 34.405 55.7673 36.8192 59.1244 40.1762C59.9632 41.015 60.7431 41.9053 61.4604 42.8405Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M41.4141 62.8867L70.2136 34.0872C68.6828 31.4002 66.7938 28.9179 64.5883 26.7125C60.2722 22.3963 54.8959 19.2923 48.9999 17.7125C43.1039 16.1326 36.8959 16.1326 30.9999 17.7125C25.1039 19.2923 19.7276 22.3963 15.4114 26.7125C13.206 28.9179 11.317 31.4002 9.78613 34.0872L38.5857 62.8867M41.4141 62.8867C40.6331 63.6678 39.3667 63.6678 38.5857 62.8867M41.4141 62.8867L61.4604 42.8405C60.7431 41.9053 59.9632 41.015 59.1244 40.1762C55.7673 36.8192 51.5858 34.405 47 33.1762C42.4142 31.9475 37.5858 31.9475 33 33.1762C28.4142 34.405 24.2327 36.8192 20.8756 40.1762C20.0368 41.015 19.2568 41.9054 18.5395 42.8406L38.5857 62.8867"
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
            d="M17.1189 44.2483L8.37197 35.5014C7.7349 34.8643 7.60243 33.8799 8.04843 33.0971C9.66732 30.2556 11.6649 27.6306 13.9973 25.2982C18.5617 20.7338 24.2472 17.4513 30.4823 15.7806C36.7174 14.1099 43.2825 14.1099 49.5176 15.7806C55.7527 17.4513 61.4382 20.7338 66.0026 25.2982C68.3349 27.6306 70.3326 30.2556 71.9515 33.0971C72.3974 33.8799 72.265 34.8643 71.6279 35.5014L62.8813 44.248C62.8791 44.2503 62.8769 44.2525 62.8746 44.2547L42.8284 64.3009C41.4615 65.6677 39.3516 65.8386 37.799 64.8135C37.5772 64.667 37.3668 64.4962 37.1715 64.3009L17.1254 44.2548C17.1232 44.2527 17.1211 44.2505 17.1189 44.2483ZM31.5176 19.6443C37.0745 18.1553 42.9254 18.1553 48.4823 19.6443C54.0392 21.1333 59.1063 24.0587 63.1742 28.1267C64.8923 29.8448 66.4067 31.7412 67.695 33.7774L61.5958 39.8766C61.2538 39.4964 60.9013 39.1247 60.5386 38.762C56.9333 35.1567 52.4426 32.564 47.5177 31.2444C42.5928 29.9247 37.4073 29.9247 32.4824 31.2444C27.5575 32.564 23.0668 35.1567 19.4615 38.762C19.0987 39.1248 18.7462 39.4965 18.4042 39.8767L12.3049 33.7774C13.5932 31.7412 15.1076 29.8448 16.8257 28.1267C20.8936 24.0587 25.9607 21.1333 31.5176 19.6443ZM21.2372 42.7098L39.9999 61.4725L58.7628 42.7097C58.4241 42.3266 58.0731 41.9533 57.7102 41.5904C54.6014 38.4816 50.7291 36.246 46.4824 35.1081C42.2357 33.9702 37.7644 33.9702 33.5177 35.1081C29.271 36.246 25.3987 38.4816 22.2899 41.5904C21.927 41.9534 21.576 42.3267 21.2372 42.7098Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreWifi75 = forwardRef((props, ref) => {
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

CoreWifi75.displayName = 'CoreWifi75'

export default CoreWifi75
