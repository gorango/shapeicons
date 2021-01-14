
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <path
            d="M17.8654 49.2705L14.5175 50.4937L14.3394 60.4522L25.9279 56.2188C21.9498 54.8866 19.0487 52.5386 17.8654 49.2705Z"
            fill="#FDBD39"
          />
          <path
            d="M19.6177 38.7383L8 42.9822L14.5175 50.4969L17.8654 49.2737C16.6847 46.0163 17.4133 42.3387 19.6177 38.7383Z"
            fill="#F69833"
          />
          <path
            d="M39.165 24.3657C24.3722 29.769 14.8339 40.9214 17.8653 49.2711L71.4337 29.7025C68.4023 21.3529 53.9578 18.9623 39.165 24.3657Z"
            fill="#FECF33"
          />
          <path
            d="M50.1314 54.6105C64.9241 49.2072 74.4784 38.1053 71.431 29.7051L17.8628 49.271C20.9102 57.6738 35.3386 60.0139 50.1314 54.6105Z"
            fill="#EE6723"
          />
          <path
            d="M71.431 29.7021L17.8655 49.2707C18.9132 52.1638 22.9152 53.5891 28.5259 53.5891C33.9984 53.5891 41.0026 52.2356 48.3046 49.5685C63.0973 44.1652 73.5025 35.414 71.431 29.7021Z"
            fill="#F69833"
          />
          <path
            d="M60.7704 25.3857C55.3006 25.3857 48.2938 26.7392 40.9918 29.4063C26.199 34.8097 15.7938 43.5582 17.8653 49.27L71.4335 29.7015C70.3832 26.8084 66.3838 25.3857 60.7704 25.3857Z"
            fill="#FDBD39"
          />
          <path
            opacity="0.9"
            d="M46.7316 22.2561C45.3289 17.2773 43.6701 14.2205 42.1381 14.3559C39.2543 14.6108 37.9122 26.0816 39.1404 39.9767C40.3687 53.8717 43.7022 64.9292 46.586 64.6743C48.2504 64.5272 49.4012 60.6443 49.8408 54.7157C49.9376 54.681 50.0345 54.6459 50.1314 54.6105C52.7146 53.667 55.1381 52.5496 57.3626 51.3032C59.4567 55.9466 60.1367 59.2991 58.8901 60.1757C56.5219 61.841 48.0977 53.9407 40.0741 42.53C32.0506 31.1193 27.466 20.5192 29.8343 18.854C31.2133 17.8843 34.6456 20.158 38.8566 24.4795"
            stroke="#EE6723"
            stroke-width={strokeWidth}
          />
        </>
      )
    case 'solid':
      return (
        <>
          <path
            opacity="0.9"
            d="M17.8655 49.2712L14.5176 50.4944L14.3395 60.4528L25.928 56.2195C21.9499 54.8873 19.0488 52.5392 17.8655 49.2712ZM17.8655 49.2712C14.8341 40.9215 24.3721 29.7689 39.1649 24.3656C53.9577 18.9622 68.4022 21.3528 71.4336 29.7024M17.8655 49.2712L71.4336 29.7024M17.8655 49.2712L71.4309 29.7025C73.5024 35.4143 63.0972 44.1655 48.3045 49.5689C41.0025 52.236 33.9983 53.5895 28.5258 53.5895C22.9151 53.5895 18.9132 52.1643 17.8655 49.2712ZM17.8655 49.2712C15.794 43.5594 26.1991 34.8105 40.9919 29.4071C48.2938 26.74 55.3006 25.3865 60.7705 25.3865C66.3839 25.3865 70.3832 26.8093 71.4336 29.7024M50.1314 54.6105C64.9241 49.2071 74.4784 38.1052 71.431 29.705L17.8628 49.2709C20.9102 57.6738 35.3386 60.0138 50.1314 54.6105ZM50.1314 54.6105C52.7146 53.6669 55.138 52.5496 57.3625 51.3032C59.4567 55.9466 60.1367 59.2991 58.89 60.1757C57.5233 61.1367 54.1398 58.9121 49.9803 54.6655M50.1314 54.6105C50.081 54.6289 50.0306 54.6472 49.9803 54.6655M39.272 41.3755C40.5934 54.6062 43.7996 64.9206 46.586 64.6743C48.2503 64.5272 49.4011 60.6443 49.8407 54.7157C49.8872 54.699 49.9338 54.6823 49.9803 54.6655M39.272 41.3755C39.2258 40.9127 39.1819 40.4463 39.1404 39.9767C37.9121 26.0816 39.2542 14.6108 42.138 14.3559C43.67 14.2205 45.3288 17.2773 46.7316 22.2561M39.272 41.3755C39.5353 41.7592 39.8027 42.1442 40.0741 42.53C43.4673 47.3557 46.9321 51.5535 49.9803 54.6655M39.272 41.3755C31.7484 30.4126 27.5461 20.4629 29.8342 18.854C31.2132 17.8843 34.6456 20.158 38.8565 24.4795M19.6177 38.7384L8 42.9824L14.5175 50.497L17.8654 49.2738C16.6847 46.0164 17.4133 42.3389 19.6177 38.7384Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            opacity="0.9"
            d="M50.1314 54.6103C64.9241 49.207 74.4784 38.1049 71.431 29.7047C68.3996 21.355 53.9578 18.9621 39.165 24.3655C24.3728 29.7686 14.8346 40.9204 17.865 49.27L17.8628 49.2708C20.9102 57.6737 35.3386 60.0137 50.1314 54.6103ZM50.1314 54.6103C52.7146 53.6668 55.138 52.5496 57.3625 51.3032C59.4567 55.9466 60.1367 59.2991 58.89 60.1757C57.5233 61.1367 54.1398 58.9121 49.9803 54.6655M50.1314 54.6103C50.081 54.6287 50.0306 54.6472 49.9803 54.6655M39.272 41.3755C40.5934 54.6062 43.7996 64.9206 46.586 64.6743C48.2503 64.5272 49.4011 60.6443 49.8407 54.7157C49.8872 54.699 49.9338 54.6823 49.9803 54.6655M39.272 41.3755C39.2258 40.9127 39.1819 40.4463 39.1404 39.9767C37.9121 26.0816 39.2542 14.6108 42.138 14.3559C43.67 14.2205 45.3288 17.2773 46.7316 22.2561M39.272 41.3755C39.5353 41.7592 39.8027 42.1442 40.0741 42.53C43.4673 47.3557 46.9321 51.5535 49.9803 54.6655M39.272 41.3755C31.7484 30.4126 27.5461 20.4629 29.8342 18.854C31.2132 17.8843 34.6456 20.158 38.8565 24.4795M17.8655 49.2712L14.5176 50.4944L14.3395 60.4528L25.928 56.2195C21.9499 54.8873 19.0488 52.5392 17.8655 49.2712ZM19.6177 38.7384L8 42.9824L14.5175 50.497L17.8654 49.2738C16.6847 46.0164 17.4133 42.3389 19.6177 38.7384Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsZeplin = forwardRef((props, ref) => {
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

BrandsZeplin.displayName = 'BrandsZeplin'

export default BrandsZeplin
