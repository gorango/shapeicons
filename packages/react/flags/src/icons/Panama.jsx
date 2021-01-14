
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0)"><path d="M120 0.0791016H0V80.0774H120V0.0791016Z" fill="#F2F2F2"/><path d="M60 40C60 40 60 59.9931 60 79.9991H0V40H20.0009C39.1252 40 60 40 60 40Z" fill="#2F80ED"/><path d="M120 0V39.9991H99.9991C78.7931 39.9991 60 39.9991 60 39.9991C60 39.9991 60 18.8297 60 0H120Z" fill="#EB5757"/><path d="M30 11L32.0206 17.2188H38.5595L33.2694 21.0623L35.2901 27.2812L30 23.4377L24.7099 27.2812L26.7306 21.0623L21.4405 17.2188H27.9794L30 11Z" fill="#2F80ED"/><path d="M90 51L92.0206 57.2188H98.5595L93.2694 61.0623L95.2901 67.2812L90 63.4377L84.7099 67.2812L86.7306 61.0623L81.4405 57.2188H87.9794L90 51Z" fill="#EB5757"/></g>
          <defs><clipPath id="clip0"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0)"><path d="M100 0.0791016H-20V80.0774H100V0.0791016Z" fill="#F2F2F2"/><path d="M40 40C40 40 40 59.9931 40 79.9991H-20V40H0.000858307C19.1252 40 40 40 40 40Z" fill="#2F80ED"/><path d="M100 0V39.9991H79.9991C58.7931 39.9991 40 39.9991 40 39.9991C40 39.9991 40 18.8297 40 0H100Z" fill="#EB5757"/><path d="M20 11L22.0206 17.2188H28.5595L23.2694 21.0623L25.2901 27.2812L20 23.4377L14.7099 27.2812L16.7306 21.0623L11.4405 17.2188H17.9794L20 11Z" fill="#2F80ED"/><path d="M60 51L62.0206 57.2188H68.5595L63.2694 61.0623L65.2901 67.2812L60 63.4377L54.7099 67.2812L56.7306 61.0623L51.4405 57.2188H57.9794L60 51Z" fill="#EB5757"/></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0)"><g clip-path="url(#clip0)"><path d="M100 0.0791016H-20V80.0774H100V0.0791016Z" fill="#F2F2F2"/><path d="M40 40C40 40 40 59.9931 40 79.9991H-20V40H0.000858307C19.1252 40 40 40 40 40Z" fill="#2F80ED"/><path d="M100 0V39.9991H79.9991C58.7931 39.9991 40 39.9991 40 39.9991C40 39.9991 40 18.8297 40 0H100Z" fill="#EB5757"/><path d="M20 11L22.0206 17.2188H28.5595L23.2694 21.0623L25.2901 27.2812L20 23.4377L14.7099 27.2812L16.7306 21.0623L11.4405 17.2188H17.9794L20 11Z" fill="#2F80ED"/><path d="M60 51L62.0206 57.2188H68.5595L63.2694 61.0623L65.2901 67.2812L60 63.4377L54.7099 67.2812L56.7306 61.0623L51.4405 57.2188H57.9794L60 51Z" fill="#EB5757"/></g></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsPanama = forwardRef((props, ref) => {
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

FlagsPanama.displayName = 'FlagsPanama'

export default FlagsPanama
