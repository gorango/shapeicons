
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <path
            d="M120 0H0V80H120V0Z"
            fill="#EB5757"
          />
          <path
            d="M120 26.6667H0V53.3334H120V26.6667Z"
            fill="#F2F2F2"
          />
        </>
      )
    case 'square':
      return (
        <>
          <path
            d="M80 0H0V80H80V0Z"
            fill="#EB5757"
          />
          <path
            d="M80 26.6666H0V53.3333H80V26.6666Z"
            fill="#F2F2F2"
          />
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0pf-X" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0pf-X)"><path d="M80 0H0V80H80V0Z" fill="#EB5757"/><path d="M80 26.6666H0V53.3333H80V26.6666Z" fill="#F2F2F2"/></g>
        </>
      )
  }
}

const FlagsLatvia = forwardRef((props, ref) => {
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

FlagsLatvia.displayName = 'FlagsLatvia'

export default FlagsLatvia