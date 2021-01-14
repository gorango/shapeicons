
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0)"><path d="M120 -0.0102539H0V8.87864H120V-0.0102539Z" fill="#F2F2F2"/><path d="M120 8.87866H0V17.7676H120V8.87866Z" fill="#2F80ED"/><path d="M120 17.7676H0V26.6565H120V17.7676Z" fill="#F2F2F2"/><path d="M120 26.6565H0V35.5454H120V26.6565Z" fill="#2F80ED"/><path d="M120 35.5454H0V44.4343H120V35.5454Z" fill="#F2F2F2"/><path d="M120 44.4341H0V53.323H120V44.4341Z" fill="#2F80ED"/><path d="M120 53.323H0V62.2119H120V53.323Z" fill="#F2F2F2"/><path d="M120 62.2119H0V71.1008H120V62.2119Z" fill="#2F80ED"/><path d="M120 71.1008H0V79.9897H120V71.1008Z" fill="#F2F2F2"/><path d="M44 0H0V44H44V0Z" fill="#F2F2F2"/><path d="M22 6L23.748 13.2122L28.1229 7.21793L26.9779 14.55L33.3137 10.6863L29.45 17.0221L36.7821 15.8771L30.7878 20.252L38 22L30.7878 23.748L36.7821 28.1229L29.45 26.9779L33.3137 33.3137L26.9779 29.45L28.1229 36.7821L23.748 30.7878L22 38L20.252 30.7878L15.8771 36.7821L17.0221 29.45L10.6863 33.3137L14.55 26.9779L7.21793 28.1229L13.2122 23.748L6 22L13.2122 20.252L7.21793 15.8771L14.55 17.0221L10.6863 10.6863L17.0221 14.55L15.8771 7.21793L20.252 13.2122L22 6Z" fill="#F2994A"/><circle cx="22" cy="22" r="7" fill="#F2C94C"/></g>
          <defs><clipPath id="clip0"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0)"><path d="M120 -0.0102539H0V8.87864H120V-0.0102539Z" fill="#F2F2F2"/><path d="M120 8.87866H0V17.7676H120V8.87866Z" fill="#2F80ED"/><path d="M120 17.7676H0V26.6565H120V17.7676Z" fill="#F2F2F2"/><path d="M120 26.6565H0V35.5454H120V26.6565Z" fill="#2F80ED"/><path d="M120 35.5454H0V44.4343H120V35.5454Z" fill="#F2F2F2"/><path d="M120 44.4341H0V53.323H120V44.4341Z" fill="#2F80ED"/><path d="M120 53.323H0V62.2119H120V53.323Z" fill="#F2F2F2"/><path d="M120 62.2119H0V71.1008H120V62.2119Z" fill="#2F80ED"/><path d="M120 71.1008H0V79.9897H120V71.1008Z" fill="#F2F2F2"/><path d="M44 0H0V44H44V0Z" fill="#F2F2F2"/><path d="M22 6L23.748 13.2122L28.1229 7.21793L26.9779 14.55L33.3137 10.6863L29.45 17.0221L36.7821 15.8771L30.7878 20.252L38 22L30.7878 23.748L36.7821 28.1229L29.45 26.9779L33.3137 33.3137L26.9779 29.45L28.1229 36.7821L23.748 30.7878L22 38L20.252 30.7878L15.8771 36.7821L17.0221 29.45L10.6863 33.3137L14.55 26.9779L7.21793 28.1229L13.2122 23.748L6 22L13.2122 20.252L7.21793 15.8771L14.55 17.0221L10.6863 10.6863L17.0221 14.55L15.8771 7.21793L20.252 13.2122L22 6Z" fill="#F2994A"/><circle cx="22" cy="22" r="7" fill="#F2C94C"/></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0)"><g clip-path="url(#clip0)"><path d="M120 -0.0102539H0V8.87864H120V-0.0102539Z" fill="#F2F2F2"/><path d="M120 8.87866H0V17.7676H120V8.87866Z" fill="#2F80ED"/><path d="M120 17.7676H0V26.6565H120V17.7676Z" fill="#F2F2F2"/><path d="M120 26.6565H0V35.5454H120V26.6565Z" fill="#2F80ED"/><path d="M120 35.5454H0V44.4343H120V35.5454Z" fill="#F2F2F2"/><path d="M120 44.4341H0V53.323H120V44.4341Z" fill="#2F80ED"/><path d="M120 53.323H0V62.2119H120V53.323Z" fill="#F2F2F2"/><path d="M120 62.2119H0V71.1008H120V62.2119Z" fill="#2F80ED"/><path d="M120 71.1008H0V79.9897H120V71.1008Z" fill="#F2F2F2"/><path d="M44 0H0V44H44V0Z" fill="#F2F2F2"/><path d="M22 6L23.748 13.2122L28.1229 7.21793L26.9779 14.55L33.3137 10.6863L29.45 17.0221L36.7821 15.8771L30.7878 20.252L38 22L30.7878 23.748L36.7821 28.1229L29.45 26.9779L33.3137 33.3137L26.9779 29.45L28.1229 36.7821L23.748 30.7878L22 38L20.252 30.7878L15.8771 36.7821L17.0221 29.45L10.6863 33.3137L14.55 26.9779L7.21793 28.1229L13.2122 23.748L6 22L13.2122 20.252L7.21793 15.8771L14.55 17.0221L10.6863 10.6863L17.0221 14.55L15.8771 7.21793L20.252 13.2122L22 6Z" fill="#F2994A"/><circle cx="22" cy="22" r="7" fill="#F2C94C"/></g></g>
          <defs><clipPath id="clip0"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsUruguay = forwardRef((props, ref) => {
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

FlagsUruguay.displayName = 'FlagsUruguay'

export default FlagsUruguay
