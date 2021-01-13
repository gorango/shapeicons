
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0LlZc)"><path d="M120 0H0V80H120V0Z" fill="#F2C94C"/><path d="M39.9991 0H0V80H39.9991V0Z" fill="#2F80ED"/><path d="M120 0H80.001V80H120V0Z" fill="#EB5757"/></g>
          <defs><clipPath id="clip0LlZc"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0Ydp1)"><path d="M80 0H0V80H80V0Z" fill="#F2C94C"/><path d="M26.6661 0H0V80H26.6661V0Z" fill="#2F80ED"/><path d="M80.0001 0H53.334V80H80.0001V0Z" fill="#EB5757"/></g>
          <defs><clipPath id="clip0Ydp1"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0qUHJ" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0qUHJ)"><g clip-path="url(#clip0qUHJ)"><path d="M80 0H0V80H80V0Z" fill="#F2C94C"/><path d="M26.6661 0H0V80H26.6661V0Z" fill="#2F80ED"/><path d="M80.0001 0H53.334V80H80.0001V0Z" fill="#EB5757"/></g></g>
          <defs><clipPath id="clip0qUHJ"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsChad = forwardRef((props, ref) => {
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

FlagsChad.displayName = 'FlagsChad'

export default FlagsChad
