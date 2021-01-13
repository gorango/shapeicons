
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <path
            d="M40 40C49.665 40 57.5 32.165 57.5 22.5C57.5 12.835 49.665 5 40 5C30.335 5 22.5 12.835 22.5 22.5C22.5 32.165 30.335 40 40 40Z"
            fill="url(#paint0_linearn_4R)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M38.6068 74.5739C27.935 67.297 19.0596 57.38 12.7313 45.6616C12.4867 45.1918 12.4335 44.6353 12.5842 44.1224C12.7349 43.6095 13.0762 43.1854 13.5282 42.9495L25.9026 36.4582C26.7682 36.007 27.8128 36.3493 28.2932 37.2415C34.5495 48.45 43.8004 57.4009 54.8557 62.9424C50.7785 67.3336 46.2634 71.234 41.3912 74.5739C40.5393 75.1424 39.4587 75.1424 38.6068 74.5739Z"
            fill="url(#paint1_linearn_4R)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M41.3915 74.5739C52.0646 67.2988 60.9404 57.3814 67.2669 45.6616C67.5122 45.1931 67.5667 44.6375 67.4178 44.1248C67.2689 43.612 66.9296 43.1872 66.4792 42.9495L54.0956 36.4582C53.23 36.007 52.1854 36.3493 51.705 37.2415C45.4501 48.4512 36.1987 57.4024 25.1426 62.9424C29.2173 67.3365 33.7327 71.2372 38.607 74.5739C39.4589 75.1424 40.5395 75.1424 41.3915 74.5739Z"
            fill="#2684FF"
          />
          <defs><linearGradient id="paint0_linearn_4R" x1="40" y1="10.817" x2="40" y2="46.7489" gradientUnits="userSpaceOnUse"><stop stop-color="#2684FF"/><stop offset="0.82" stop-color="#0052CC"/></linearGradient><linearGradient id="paint1_linearn_4R" x1="29.9419" y1="45.6616" x2="39.5693" y2="71.4069" gradientUnits="userSpaceOnUse"><stop stop-color="#2684FF"/><stop offset="0.62" stop-color="#0052CC"/></linearGradient></defs>
        </>
      )
    case 'solid':
      return (
        <>
          <path
            d="M40 40C49.665 40 57.5 32.165 57.5 22.5C57.5 12.835 49.665 5 40 5C30.335 5 22.5 12.835 22.5 22.5C22.5 32.165 30.335 40 40 40Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M38.6068 74.5739C27.935 67.297 19.0596 57.38 12.7313 45.6616C12.4867 45.1918 12.4335 44.6353 12.5842 44.1224C12.7349 43.6095 13.0762 43.1854 13.5282 42.9495L25.9026 36.4582C26.7682 36.007 27.8128 36.3493 28.2932 37.2415C34.5495 48.45 43.8004 57.4009 54.8557 62.9424C50.7785 67.3336 46.2634 71.234 41.3912 74.5739C40.5393 75.1424 39.4587 75.1424 38.6068 74.5739Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M41.3912 74.5739C52.0644 67.2988 60.94 57.3814 67.2666 45.6616C67.5118 45.1931 67.5664 44.6375 67.4175 44.1248C67.2685 43.612 66.9292 43.1872 66.4789 42.9495L54.0953 36.4582C53.2297 36.007 52.185 36.3493 51.7047 37.2415C45.4497 48.4512 36.1984 57.4025 25.1422 62.9424C29.2169 67.3365 33.7325 71.2372 38.6068 74.5739C39.4587 75.1424 40.5393 75.1424 41.3912 74.5739Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M38.6068 74.5739C27.935 67.297 19.0596 57.38 12.7313 45.6616C12.4867 45.1918 12.4335 44.6353 12.5842 44.1224C12.7349 43.6095 13.0762 43.1854 13.5282 42.9495L25.9026 36.4582C26.7682 36.007 27.8128 36.3493 28.2932 37.2415C34.5495 48.45 43.8004 57.4009 54.8557 62.9424C50.7785 67.3336 46.2634 71.234 41.3912 74.5739M38.6068 74.5739C39.4587 75.1425 40.5393 75.1425 41.3912 74.5739M38.6068 74.5739C33.7325 71.2372 29.2169 67.3365 25.1422 62.9424C36.1984 57.4024 45.4497 48.4512 51.7047 37.2415C52.185 36.3493 53.2297 36.007 54.0953 36.4582L66.4789 42.9495C66.9292 43.1872 67.2685 43.612 67.4175 44.1248C67.5664 44.6375 67.5118 45.1931 67.2666 45.6616C60.94 57.3814 52.0644 67.2988 41.3912 74.5739M57.5 22.5C57.5 32.165 49.665 40 40 40C30.335 40 22.5 32.165 22.5 22.5C22.5 12.835 30.335 5 40 5C49.665 5 57.5 12.835 57.5 22.5Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsOpsgenie = forwardRef((props, ref) => {
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

BrandsOpsgenie.displayName = 'BrandsOpsgenie'

export default BrandsOpsgenie
