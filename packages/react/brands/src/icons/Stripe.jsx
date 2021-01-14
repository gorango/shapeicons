
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <path
            d="M7.17987 15.9202C5 20.1984 5 25.799 5 37V43C5 54.201 5 59.8016 7.17987 64.0798C9.09734 67.8431 12.1569 70.9027 15.9202 72.8201C20.1984 75 25.799 75 37 75H43C54.201 75 59.8016 75 64.0798 72.8201C67.8431 70.9027 70.9027 67.8431 72.8201 64.0798C75 59.8016 75 54.201 75 43V37C75 25.799 75 20.1984 72.8201 15.9202C70.9027 12.1569 67.8431 9.09734 64.0798 7.17987C59.8016 5 54.201 5 43 5H37C25.799 5 20.1984 5 15.9202 7.17987C12.1569 9.09734 9.09734 12.1569 7.17987 15.9202Z"
            fill="url(#paint0_linear)"
          />
          <path
            d="M5.66306 20.6988C5 24.467 5 29.4669 5 36.9999V42.9999C5 54.2009 5 59.8015 7.17987 64.0797C9.09734 67.8429 12.1569 70.9026 15.9202 72.82C20.1984 74.9999 25.799 74.9999 37 74.9999H43C54.201 74.9999 59.8016 74.9999 64.0798 72.82C67.8431 70.9026 70.9027 67.8429 72.8201 64.0797C75 59.8015 75 54.2009 75 42.9999V36.9999C75 25.7988 75 20.1983 72.8201 15.9201C70.9694 12.2878 68.0546 9.31099 64.47 7.38403L5.66306 20.6988Z"
            fill="url(#paint1_linear)"
          />
          <path
            d="M74.2758 59.635C73.9544 61.3244 73.4903 62.7645 72.8202 64.0797C70.9027 67.8429 67.8431 70.9025 64.0798 72.82C59.9296 74.9346 54.5351 74.9979 43.9907 74.9998H40.1465V67.0918L74.2758 59.635Z"
            fill="url(#paint2_linear)"
          />
          <path
            d="M42.9999 5H36.9999C34.8208 5 32.8536 5 31.0669 5.01605V14.9263L64.4634 7.38063C64.3364 7.31239 64.2085 7.24546 64.0798 7.17987C61.7047 5.96971 58.9221 5.43137 54.9999 5.19189C51.8571 5 47.9827 5 42.9999 5Z"
            fill="url(#paint3_linear)"
          />
          <path
            d="M74.9999 43.4335C74.9997 50.9475 74.9863 55.9004 74.2757 59.6352L62.4058 62.2286V44.5397L74.9999 41.6108V43.4335Z"
            fill="url(#paint4_linear)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M37.352 33.4447C37.352 31.838 38.6656 31.2201 40.8413 31.2201C43.9611 31.2201 47.902 32.1676 51.0218 33.8567V24.1753C47.6146 22.8158 44.2485 22.2803 40.8413 22.2803C32.5081 22.2803 26.9663 26.6472 26.9663 33.9391C26.9663 45.3096 42.5654 43.4969 42.5654 48.3994C42.5654 50.2944 40.9234 50.9124 38.6246 50.9124C35.2174 50.9124 30.8661 49.5117 27.4179 47.6166V57.4216C31.2355 59.0695 35.0943 59.7698 38.6246 59.7698C47.1631 59.7698 53.0333 55.5265 53.0333 48.1522C52.9922 35.8754 37.352 38.0588 37.352 33.4447Z"
            fill="white"
          />
          <defs><linearGradient id="paint0_linear" x1="5" y1="5" x2="27.9916" y2="21.2552" gradientUnits="userSpaceOnUse"><stop stop-color="#392993"/><stop offset="1" stop-color="#4B47B9"/></linearGradient><linearGradient id="paint1_linear" x1="7.63599" y1="21.4361" x2="58.3916" y2="63.3023" gradientUnits="userSpaceOnUse"><stop stop-color="#594BB9"/><stop offset="1" stop-color="#60A8F2"/></linearGradient><linearGradient id="paint2_linear" x1="40.1465" y1="67.3849" x2="75" y2="74.9999" gradientUnits="userSpaceOnUse"><stop stop-color="#61A2EF"/><stop offset="1" stop-color="#58E6FD"/></linearGradient><linearGradient id="paint3_linear" x1="31.0669" y1="9.97908" x2="74.9999" y2="5" gradientUnits="userSpaceOnUse"><stop stop-color="#534EBE"/><stop offset="1" stop-color="#6875E2"/></linearGradient><linearGradient id="paint4_linear" x1="62.4058" y1="44.6862" x2="74.9999" y2="59.7698" gradientUnits="userSpaceOnUse"><stop stop-color="#71A5F3"/><stop offset="1" stop-color="#6CC3FA"/></linearGradient></defs>
        </>
      )
    case 'solid':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5 37C5 25.799 5 20.1984 7.17987 15.9202C9.09734 12.1569 12.1569 9.09734 15.9202 7.17987C20.1984 5 25.799 5 37 5H43C54.201 5 59.8016 5 64.0798 7.17987C67.843 9.09734 70.9027 12.1569 72.8201 15.9202C75 20.1984 75 25.799 75 37V43C75 54.201 75 59.8016 72.8201 64.0798C70.9027 67.843 67.843 70.9027 64.0798 72.8201C59.8016 75 54.201 75 43 75H37C25.799 75 20.1984 75 15.9202 72.8201C12.1569 70.9027 9.09734 67.843 7.17987 64.0798C5 59.8016 5 54.201 5 43V37ZM40.8416 31.2201C38.6659 31.2201 37.3523 31.838 37.3523 33.4447C37.3523 35.199 39.613 35.9707 42.4177 36.928C46.9901 38.4888 53.0081 40.5429 53.0335 48.1522C53.0335 55.5265 47.1633 59.7698 38.6248 59.7698C35.0945 59.7698 31.2358 59.0695 27.4181 57.4216V47.6166C30.8663 49.5117 35.2177 50.9124 38.6248 50.9124C40.9237 50.9124 42.5657 50.2944 42.5657 48.3994C42.5657 46.4562 40.115 45.568 37.1563 44.4957C32.6505 42.8627 26.9666 40.8027 26.9666 33.9391C26.9666 26.6472 32.5083 22.2803 40.8416 22.2803C44.2487 22.2803 47.6149 22.8158 51.022 24.1753V33.8567C47.9022 32.1676 43.9614 31.2201 40.8416 31.2201Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M7.17987 15.9202C5 20.1984 5 25.799 5 37V43C5 54.201 5 59.8016 7.17987 64.0798C9.09734 67.8431 12.1569 70.9027 15.9202 72.8201C20.1984 75 25.799 75 37 75H43C54.201 75 59.8016 75 64.0798 72.8201C67.8431 70.9027 70.9027 67.8431 72.8201 64.0798C75 59.8016 75 54.201 75 43V37C75 25.799 75 20.1984 72.8201 15.9202C70.9027 12.1569 67.8431 9.09734 64.0798 7.17987C59.8016 5 54.201 5 43 5H37C25.799 5 20.1984 5 15.9202 7.17987C12.1569 9.09734 9.09734 12.1569 7.17987 15.9202Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M37.3523 33.4447C37.3523 31.838 38.6659 31.2201 40.8416 31.2201C43.9614 31.2201 47.9022 32.1676 51.022 33.8567V24.1753C47.6149 22.8158 44.2487 22.2803 40.8416 22.2803C32.5083 22.2803 26.9666 26.6472 26.9666 33.9391C26.9666 45.3096 42.5657 43.4969 42.5657 48.3994C42.5657 50.2944 40.9237 50.9124 38.6248 50.9124C35.2177 50.9124 30.8663 49.5117 27.4181 47.6166V57.4216C31.2358 59.0695 35.0945 59.7698 38.6248 59.7698C47.1633 59.7698 53.0335 55.5265 53.0335 48.1522C52.9924 35.8754 37.3523 38.0588 37.3523 33.4447Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsStripe = forwardRef((props, ref) => {
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

BrandsStripe.displayName = 'BrandsStripe'

export default BrandsStripe
