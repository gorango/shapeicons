
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M61 20L56.3735 64.4144C56.1612 66.4521 54.4437 68 52.395 68H27.605C25.5563 68 23.8388 66.4521 23.6265 64.4144L19 20"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M65 20H15"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M27.8555 19.9986L33.926 12.3865H46.0747L52.1452 19.9986"
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
            d="M56.3735 64.4144L60.9482 20.4973C60.9759 20.2314 60.7673 20 60.5 20L19.5 20C19.2327 20 19.0241 20.2314 19.0518 20.4973L23.6265 64.4144C23.8388 66.4521 25.5563 68 27.605 68H52.395C54.4437 68 56.1612 66.4521 56.3735 64.4144Z"
            fill="currentColor"
          />
          <path
            d="M19 20L23.6265 64.4144C23.8388 66.4521 25.5563 68 27.605 68H52.395C54.4437 68 56.1612 66.4521 56.3735 64.4144L61 20"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M65 20H61L19 20H15"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M27.855 19.9986L25.9004 18.4399C25.3017 19.1907 25.1859 20.2181 25.6026 21.0834C26.0192 21.9486 26.8947 22.4986 27.855 22.4986V19.9986ZM52.1447 19.9986V22.4986C53.105 22.4986 53.9805 21.9486 54.3972 21.0834C54.8138 20.2181 54.6981 19.1907 54.0993 18.4399L52.1447 19.9986ZM33.9255 12.3865V9.88647C33.1647 9.88647 32.4453 10.2329 31.9709 10.8277L33.9255 12.3865ZM46.0742 12.3865L48.0288 10.8278C47.5545 10.2329 46.835 9.88647 46.0742 9.88647V12.3865ZM27.855 22.4986L52.1447 22.4986V17.4986L27.855 17.4986V22.4986ZM29.8096 21.5574L35.8801 13.9452L31.9709 10.8277L25.9004 18.4399L29.8096 21.5574ZM33.9255 14.8865L46.0742 14.8865V9.88647L33.9255 9.88647V14.8865ZM44.1197 13.9452L50.1902 21.5574L54.0993 18.4399L48.0288 10.8278L44.1197 13.9452Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M56.3735 64.4144L60.9482 20.4973C60.9759 20.2314 60.7673 20 60.5 20L19.5 20C19.2327 20 19.0241 20.2314 19.0518 20.4973L23.6265 64.4144C23.8388 66.4521 25.5563 68 27.605 68H52.395C54.4437 68 56.1612 66.4521 56.3735 64.4144Z"
            fill="#6FCF97"
          />
          <path
            d="M65 20H61L19 20H15"
            stroke="#219653"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M27.855 19.9986L26.2913 18.7517C25.8123 19.3523 25.7197 20.1742 26.053 20.8664C26.3864 21.5586 27.0867 21.9986 27.855 21.9986V19.9986ZM52.1447 19.9986V21.9986C52.913 21.9986 53.6133 21.5586 53.9467 20.8664C54.28 20.1742 54.1874 19.3523 53.7084 18.7517L52.1447 19.9986ZM33.9255 12.3865V10.3865C33.3168 10.3865 32.7413 10.6636 32.3618 11.1395L33.9255 12.3865ZM46.0742 12.3865L47.6379 11.1395C47.2584 10.6636 46.6829 10.3865 46.0742 10.3865V12.3865ZM27.855 21.9986L52.1447 21.9986V17.9986L27.855 17.9986V21.9986ZM29.4186 21.2456L35.4891 13.6335L32.3618 11.1395L26.2913 18.7517L29.4186 21.2456ZM33.9255 14.3865L46.0742 14.3865V10.3865L33.9255 10.3865V14.3865ZM44.5106 13.6335L50.5811 21.2456L53.7084 18.7517L47.6379 11.1395L44.5106 13.6335Z"
            fill="#219653"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M56.3735 64.4145L60.9482 20.4973C60.9759 20.2314 60.7673 20 60.5 20H19.5C19.2327 20 19.0241 20.2314 19.0518 20.4973L23.6265 64.4145C23.8388 66.4521 25.5563 68 27.605 68H52.395C54.4437 68 56.1612 66.4521 56.3735 64.4145Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M52.1449 19.9986H27.8551L33.9256 12.3865H46.0744L52.1449 19.9986Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M56.3735 64.4145L60.9482 20.4973C60.9759 20.2314 60.7673 20 60.5 20H19.5C19.2327 20 19.0241 20.2314 19.0518 20.4973L23.6265 64.4145M56.3735 64.4145C56.1612 66.4521 54.4437 68 52.395 68H27.605C25.5563 68 23.8388 66.4521 23.6265 64.4145M56.3735 64.4145L61 20M23.6265 64.4145L19 20M61 20H19M61 20H65M19 20H15M27.8551 19.9986H52.1449L46.0744 12.3865H33.9256L27.8551 19.9986Z"
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
            d="M33.9256 10.3865C33.317 10.3865 32.7415 10.6636 32.362 11.1395L26.8909 18H19.0277C19.0109 17.9998 18.994 17.9998 18.9771 18H15C13.8954 18 13 18.8955 13 20C13 21.1046 13.8954 22 15 22H17.1975L21.6373 64.6217C21.9557 67.6782 24.5319 70 27.605 70H52.395C55.4681 70 58.0443 67.6782 58.3627 64.6217L62.8025 22H65C66.1046 22 67 21.1046 67 20C67 18.8955 66.1046 18 65 18H61.0229C61.006 17.9998 60.9891 17.9998 60.9723 18H53.1091L47.638 11.1395C47.2585 10.6636 46.683 10.3865 46.0744 10.3865H33.9256ZM32.0082 17.9986L34.8888 14.3865H45.1112L47.9918 17.9986H32.0082ZM25.6157 64.2072L21.2192 22H58.7808L54.3843 64.2073C54.2781 65.2261 53.4194 66 52.395 66H27.605C26.5806 66 25.7219 65.2261 25.6157 64.2072Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreTrash = forwardRef((props, ref) => {
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

CoreTrash.displayName = 'CoreTrash'

export default CoreTrash
