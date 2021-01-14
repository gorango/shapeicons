
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0)"><path d="M120 0H0V80H120V0Z" fill="#EB5757"/><path d="M39.9991 0H0V80H39.9991V0Z" fill="#333333"/><path d="M120 0H80.001V80H120V0Z" fill="#219653"/><path d="M72 19.2154C76.5754 21.857 80.1513 25.9345 82.1731 30.8156C84.1949 35.6967 84.5496 41.1085 83.1822 46.2117C81.8148 51.3149 78.8017 55.8243 74.6103 59.0405C70.4188 62.2567 65.2832 64 60 64C54.7168 64 49.5812 62.2567 45.3897 59.0405C41.1983 55.8243 38.1852 51.3149 36.8178 46.2117C35.4504 41.1085 35.8051 35.6967 37.8269 30.8156C39.8487 25.9345 43.4246 21.857 48 19.2154" stroke="#F2F2F2" stroke-width="8"/><circle cx="60" cy="40" r="10" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0)"><path d="M80 0H0V80H80V0Z" fill="#EB5757"/><path d="M19.9991 0H-20V80H19.9991V0Z" fill="#333333"/><path d="M100 0H60.001V80H100V0Z" fill="#219653"/><path d="M52 19.2154C56.5754 21.857 60.1513 25.9345 62.1731 30.8156C64.1949 35.6967 64.5496 41.1085 63.1822 46.2117C61.8148 51.3149 58.8017 55.8243 54.6103 59.0405C50.4188 62.2567 45.2832 64 40 64C34.7168 64 29.5812 62.2567 25.3897 59.0405C21.1983 55.8243 18.1852 51.3149 16.8178 46.2117C15.4504 41.1085 15.8051 35.6967 17.8269 30.8156C19.8487 25.9345 23.4246 21.857 28 19.2154" stroke="#F2F2F2" stroke-width="8"/><circle cx="40" cy="40" r="10" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0)"><g clip-path="url(#clip0)"><path d="M80 0H0V80H80V0Z" fill="#EB5757"/><path d="M19.9991 0H-20V80H19.9991V0Z" fill="#333333"/><path d="M100 0H60.001V80H100V0Z" fill="#219653"/><path d="M52 19.2154C56.5754 21.857 60.1513 25.9345 62.1731 30.8156C64.1949 35.6967 64.5496 41.1085 63.1822 46.2117C61.8148 51.3149 58.8017 55.8243 54.6103 59.0405C50.4188 62.2567 45.2832 64 40 64C34.7168 64 29.5812 62.2567 25.3897 59.0405C21.1983 55.8243 18.1852 51.3149 16.8178 46.2117C15.4504 41.1085 15.8051 35.6967 17.8269 30.8156C19.8487 25.9345 23.4246 21.857 28 19.2154" stroke="#F2F2F2" stroke-width="8"/><circle cx="40" cy="40" r="10" fill="#F2F2F2"/></g></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsAfghanistan = forwardRef((props, ref) => {
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

FlagsAfghanistan.displayName = 'FlagsAfghanistan'

export default FlagsAfghanistan
