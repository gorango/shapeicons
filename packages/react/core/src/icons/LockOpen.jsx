
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M18 42.8275C18 41.815 18.8208 40.9941 19.8333 40.9941H60.1667C61.1792 40.9941 62 41.815 62 42.8275V69.1608C62 70.1733 61.1792 70.9941 60.1667 70.9941H19.8333C18.8208 70.9941 18 70.1733 18 69.1608V42.8275Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M37 58.9941C38.6568 60.651 41.3431 60.651 43 58.9941C44.6568 57.3373 44.6568 54.651 43 52.9941C41.3431 51.3373 38.6568 51.3373 37 52.9941C35.3431 54.651 35.3431 57.3373 37 58.9941Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M26.0455 40.9942L23.3315 30.8656C21.4018 23.6638 25.6757 16.2612 32.8775 14.3315C40.0792 12.4018 47.4818 16.6757 49.4115 23.8775L51.6115 32.0878"
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
            d="M19.8333 40.9941C18.8208 40.9941 18 41.815 18 42.8275L18 69.1608C18 70.1733 18.8208 70.9941 19.8333 70.9941H60.1667C61.1792 70.9941 62 70.1733 62 69.1608L62 42.8275C62 41.815 61.1792 40.9941 60.1667 40.9941L19.8333 40.9941ZM43 58.9941C41.3431 60.651 38.6569 60.651 37 58.9941C35.3431 57.3373 35.3431 54.651 37 52.9941C38.6569 51.3373 41.3431 51.3373 43 52.9941C44.6569 54.651 44.6569 57.3373 43 58.9941Z"
            fill="currentColor"
          />
          <path
            d="M37 58.9941L37.7071 58.287L37.7071 58.287L37 58.9941ZM43 58.9941L42.2929 58.287V58.287L43 58.9941ZM37 52.9941L37.7071 53.7012H37.7071L37 52.9941ZM19 42.8275C19 42.3672 19.3731 41.9941 19.8333 41.9941V39.9941C18.2685 39.9941 17 41.2627 17 42.8275H19ZM19 69.1608L19 42.8275H17L17 69.1608H19ZM19.8333 69.9941C19.3731 69.9941 19 69.621 19 69.1608H17C17 70.7256 18.2685 71.9941 19.8333 71.9941V69.9941ZM60.1667 69.9941H19.8333V71.9941H60.1667V69.9941ZM61 69.1608C61 69.621 60.6269 69.9941 60.1667 69.9941V71.9941C61.7315 71.9941 63 70.7256 63 69.1608H61ZM61 42.8275L61 69.1608H63L63 42.8275H61ZM60.1667 41.9941C60.6269 41.9941 61 42.3672 61 42.8275H63C63 41.2627 61.7315 39.9941 60.1667 39.9941V41.9941ZM19.8333 41.9941L60.1667 41.9941V39.9941L19.8333 39.9941V41.9941ZM36.2929 59.7012C38.3403 61.7486 41.6597 61.7486 43.7071 59.7012L42.2929 58.287C41.0266 59.5534 38.9734 59.5534 37.7071 58.287L36.2929 59.7012ZM36.2929 52.287C34.2455 54.3344 34.2455 57.6539 36.2929 59.7012L37.7071 58.287C36.4408 57.0207 36.4408 54.9676 37.7071 53.7012L36.2929 52.287ZM43.7071 52.287C41.6597 50.2397 38.3403 50.2397 36.2929 52.287L37.7071 53.7012C38.9734 52.4349 41.0266 52.4349 42.2929 53.7012L43.7071 52.287ZM43.7071 59.7012C45.7545 57.6539 45.7545 54.3344 43.7071 52.287L42.2929 53.7012C43.5592 54.9676 43.5592 57.0207 42.2929 58.287L43.7071 59.7012Z"
            fill="currentColor"
          />
          <path
            d="M23.1477 41.7707C23.5765 43.371 25.2215 44.3208 26.8219 43.892C28.4223 43.4631 29.3721 41.8181 28.9432 40.2177L23.1477 41.7707ZM23.3315 30.8656L20.4337 31.642L23.3315 30.8656ZM49.4115 23.8775L46.5137 24.6539V24.6539L49.4115 23.8775ZM48.7137 32.8643C49.1425 34.4647 50.7875 35.4144 52.3879 34.9856C53.9883 34.5568 54.9381 32.9118 54.5093 31.3114L48.7137 32.8643ZM32.8775 14.3315L33.6539 17.2293H33.6539L32.8775 14.3315ZM28.9432 40.2177L26.2293 30.0891L20.4337 31.642L23.1477 41.7707L28.9432 40.2177ZM46.5137 24.6539L48.7137 32.8643L54.5093 31.3114L52.3093 23.101L46.5137 24.6539ZM33.6539 17.2293C39.2553 15.7284 45.0128 19.0525 46.5137 24.6539L52.3093 23.101C49.9508 14.2988 40.9032 9.0752 32.101 11.4337L33.6539 17.2293ZM32.101 11.4337C23.2988 13.7923 18.0752 22.8398 20.4337 31.642L26.2293 30.0891C24.7284 24.4877 28.0525 18.7302 33.6539 17.2293L32.101 11.4337Z"
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
            d="M19.8333 40.9941C18.8208 40.9941 18 41.815 18 42.8275L18 69.1608C18 70.1733 18.8208 70.9941 19.8333 70.9941H60.1667C61.1792 70.9941 62 70.1733 62 69.1608L62 42.8275C62 41.815 61.1792 40.9941 60.1667 40.9941L19.8333 40.9941ZM43 58.9941C41.3431 60.651 38.6569 60.651 37 58.9941C35.3431 57.3373 35.3431 54.651 37 52.9941C38.6569 51.3373 41.3431 51.3373 43 52.9941C44.6569 54.651 44.6569 57.3373 43 58.9941Z"
            fill="#F2C94C"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M32.3598 12.3997C24.0911 14.6153 19.1841 23.1145 21.3997 31.3832L23.9749 40.9942H28.116L25.2634 30.3479C23.6195 24.2131 27.2602 17.9072 33.3951 16.2634C39.53 14.6195 45.8358 18.2602 47.4797 24.3951L49.6796 32.6055C49.9655 33.6724 51.0622 34.3056 52.1291 34.0197C53.1961 33.7338 53.8292 32.6371 53.5433 31.5702L51.3434 23.3598C49.1278 15.0911 40.6286 10.1841 32.3598 12.3997Z"
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
            d="M19.8333 40.9942C18.8208 40.9942 18 41.815 18 42.8275V69.1609C18 70.1734 18.8208 70.9942 19.8333 70.9942H60.1667C61.1792 70.9942 62 70.1734 62 69.1609V42.8275C62 41.815 61.1792 40.9942 60.1667 40.9942H19.8333ZM43 58.9942C41.3431 60.651 38.6569 60.651 37 58.9942C35.3431 57.3373 35.3431 54.651 37 52.9942C38.6569 51.3373 41.3431 51.3373 43 52.9942C44.6569 54.651 44.6569 57.3373 43 58.9942Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M26.0456 40.9942L23.3316 30.8656C21.4019 23.6638 25.6758 16.2612 32.8776 14.3315C40.0794 12.4018 47.4819 16.6757 49.4116 23.8775L51.6116 32.0878M18 42.8275C18 41.815 18.8208 40.9942 19.8333 40.9942H60.1667C61.1792 40.9942 62 41.815 62 42.8275V69.1609C62 70.1734 61.1792 70.9942 60.1667 70.9942H19.8333C18.8208 70.9942 18 70.1734 18 69.1609V42.8275ZM37 58.9942C38.6569 60.651 41.3431 60.651 43 58.9942C44.6569 57.3373 44.6569 54.651 43 52.9942C41.3431 51.3373 38.6569 51.3373 37 52.9942C35.3431 54.651 35.3431 57.3373 37 58.9942Z"
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
            d="M44.4142 51.58C41.9763 49.1421 38.0237 49.1421 35.5858 51.58C33.1479 54.0179 33.1479 57.9705 35.5858 60.4084C38.0237 62.8463 41.9763 62.8463 44.4142 60.4084C46.8521 57.9705 46.8521 54.0179 44.4142 51.58ZM38.4142 54.4084C39.29 53.5326 40.71 53.5326 41.5858 54.4084C42.4616 55.2842 42.4616 56.7042 41.5858 57.58C40.71 58.4558 39.29 58.4558 38.4142 57.58C37.5384 56.7042 37.5384 55.2842 38.4142 54.4084Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M33.3952 16.2634C39.5301 14.6195 45.836 18.2602 47.4798 24.3951L49.6798 32.6055C49.9656 33.6724 51.0623 34.3056 52.1292 34.0197C53.1962 33.7338 53.8293 32.6371 53.5435 31.5702L51.3435 23.3598C49.1279 15.0911 40.6287 10.1841 32.36 12.3997C24.0912 14.6153 19.1842 23.1145 21.3998 31.3832L23.4392 38.9942H19.8333C17.7162 38.9942 16 40.7104 16 42.8275V69.1609C16 71.278 17.7162 72.9942 19.8333 72.9942H60.1667C62.2838 72.9942 64 71.278 64 69.1609V42.8275C64 40.7104 62.2838 38.9942 60.1667 38.9942H27.5803L25.2635 30.3479C23.6197 24.2131 27.2604 17.9072 33.3952 16.2634ZM25.9999 42.9942C26.0294 42.9949 26.0591 42.9949 26.0888 42.9942H60V68.9942H20V42.9942H25.9999Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreLockOpen = forwardRef((props, ref) => {
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

CoreLockOpen.displayName = 'CoreLockOpen'

export default CoreLockOpen
