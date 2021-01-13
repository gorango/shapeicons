
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip0c2D9)"><path d="M120 0H0V80H120V0Z" fill="#F2F2F2"/><path d="M120 0H0V26.6667H120V0Z" fill="#EB5757"/><path opacity="0.9" d="M120 53.3333H0V80H120V53.3333Z" fill="#333333"/><path d="M45 32L47.0206 38.2188H53.5595L48.2694 42.0623L50.2901 48.2812L45 44.4377L39.7099 48.2812L41.7306 42.0623L36.4405 38.2188H42.9794L45 32Z" fill="#6FCF97"/><path d="M75 32L77.0206 38.2188H83.5595L78.2694 42.0623L80.2901 48.2812L75 44.4377L69.7099 48.2812L71.7306 42.0623L66.4405 38.2188H72.9794L75 32Z" fill="#6FCF97"/></g>
          <defs><clipPath id="clip0c2D9"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0-rZ7)"><path d="M80 0H0V80H80V0Z" fill="#F2F2F2"/><path d="M80 0H0V26.6667H80V0Z" fill="#EB5757"/><path opacity="0.9" d="M80 53.3333H0V80H80V53.3333Z" fill="#333333"/><path d="M25 32L27.0206 38.2188H33.5595L28.2694 42.0623L30.2901 48.2812L25 44.4377L19.7099 48.2812L21.7306 42.0623L16.4405 38.2188H22.9794L25 32Z" fill="#6FCF97"/><path d="M55 32L57.0206 38.2188H63.5595L58.2694 42.0623L60.2901 48.2812L55 44.4377L49.7099 48.2812L51.7306 42.0623L46.4405 38.2188H52.9794L55 32Z" fill="#6FCF97"/></g>
          <defs><clipPath id="clip0-rZ7"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0swgb" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0swgb)"><g clip-path="url(#clip0swgb)"><path d="M80 0H0V80H80V0Z" fill="#F2F2F2"/><path d="M80 0H0V26.6667H80V0Z" fill="#EB5757"/><path opacity="0.9" d="M80 53.3333H0V80H80V53.3333Z" fill="#333333"/><path d="M25 32L27.0206 38.2188H33.5595L28.2694 42.0623L30.2901 48.2812L25 44.4377L19.7099 48.2812L21.7306 42.0623L16.4405 38.2188H22.9794L25 32Z" fill="#6FCF97"/><path d="M55 32L57.0206 38.2188H63.5595L58.2694 42.0623L60.2901 48.2812L55 44.4377L49.7099 48.2812L51.7306 42.0623L46.4405 38.2188H52.9794L55 32Z" fill="#6FCF97"/></g></g>
          <defs><clipPath id="clip0swgb"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsSyria = forwardRef((props, ref) => {
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

FlagsSyria.displayName = 'FlagsSyria'

export default FlagsSyria