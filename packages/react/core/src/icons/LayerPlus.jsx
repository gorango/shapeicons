
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M39.6736 29.5935C40.1766 29.3779 40.7461 29.3779 41.2492 29.5935L64.172 39.4175C65.7883 40.1102 65.7883 42.4015 64.172 43.0941L41.2492 52.9182C40.7461 53.1338 40.1767 53.1338 39.6736 52.9182L16.7507 43.0941C15.1345 42.4015 15.1345 40.1102 16.7507 39.4175L39.6736 29.5935Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M24.6601 47.0278L16.7507 50.4176C15.1345 51.1102 15.1345 53.4015 16.7507 54.0941L39.6736 63.9182C40.1767 64.1338 40.7461 64.1338 41.2492 63.9182L64.172 54.0941C65.7883 53.4015 65.7883 51.1102 64.172 50.4176L56.2627 47.0278"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M68.3755 22.2559H52.3755"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M60.3755 30.2559L60.3755 14.2559"
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M60.3755 11.2559C62.0323 11.2559 63.3755 12.599 63.3755 14.2559V19.2559H68.3755C70.0323 19.2559 71.3755 20.599 71.3755 22.2559C71.3755 23.9127 70.0323 25.2559 68.3755 25.2559H63.3755V30.2559C63.3755 31.9127 62.0323 33.2559 60.3755 33.2559C58.7186 33.2559 57.3755 31.9127 57.3755 30.2559V25.2559H52.3755C50.7186 25.2559 49.3755 23.9127 49.3755 22.2559C49.3755 20.599 50.7186 19.2559 52.3755 19.2559H57.3755V14.2559C57.3755 12.599 58.7186 11.2559 60.3755 11.2559Z"
            fill="currentColor"
          />
          <path
            d="M41.2492 29.5935C40.7461 29.3779 40.1766 29.3779 39.6736 29.5935L16.7507 39.4175C15.1345 40.1102 15.1345 42.4015 16.7507 43.0941L39.6736 52.9182C40.1767 53.1338 40.7461 53.1338 41.2492 52.9182L64.172 43.0941C65.7883 42.4015 65.7883 40.1102 64.172 39.4175L41.2492 29.5935Z"
            fill="currentColor"
          />
          <path
            d="M16.7507 50.4175L20.8522 48.6598L38.2949 56.1352C39.6784 56.7281 41.2445 56.7281 42.628 56.1352L60.0706 48.6598L64.172 50.4175C65.7883 51.1102 65.7883 53.4015 64.172 54.0941L41.2492 63.9182C40.7461 64.1338 40.1767 64.1338 39.6736 63.9182L16.7507 54.0941C15.1345 53.4015 15.1345 51.1102 16.7507 50.4175Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M41.2492 29.5935C40.7461 29.3779 40.1766 29.3779 39.6736 29.5935L16.7507 39.4175C15.1345 40.1102 15.1345 42.4015 16.7507 43.0941L39.6736 52.9182C40.1767 53.1338 40.7461 53.1338 41.2492 52.9182L64.172 43.0941C65.7883 42.4015 65.7883 40.1102 64.172 39.4175L41.2492 29.5935ZM16.7507 50.4175L24.6601 47.0278L39.4766 53.3778C40.1055 53.6473 40.8173 53.6473 41.4462 53.3778L56.2627 47.0278L64.172 50.4175C65.7883 51.1102 65.7883 53.4015 64.172 54.0941L41.2492 63.9182C40.7461 64.1338 40.1767 64.1338 39.6736 63.9182L16.7507 54.0941C15.1345 53.4015 15.1345 51.1102 16.7507 50.4175Z"
            fill="#56CCF2"
          />
          <path
            d="M52.3755 22.2559L59.6482 22.2559L61.1028 22.2559L68.3755 22.2559"
            stroke="#9B51E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M60.3755 14.2559L60.3755 21.5286L60.3755 22.9831L60.3755 30.2559"
            stroke="#9B51E0"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24.6601 47.0278L16.7507 50.4176C15.1345 51.1102 15.1345 53.4015 16.7507 54.0941L39.6736 63.9182C40.1767 64.1338 40.7461 64.1338 41.2492 63.9182L64.172 54.0941C65.7883 53.4015 65.7883 51.1102 64.172 50.4176L56.2627 47.0278L41.4462 53.3778C40.8173 53.6473 40.1055 53.6473 39.4766 53.3778L24.6601 47.0278Z"
            fill="#9B51E0"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M41.2492 29.5935C40.7461 29.3779 40.1766 29.3779 39.6736 29.5935L16.7507 39.4176C15.1345 40.1102 15.1345 42.4015 16.7507 43.0941L39.6736 52.9182C40.1767 53.1338 40.7461 53.1338 41.2492 52.9182L64.172 43.0941C65.7883 42.4015 65.7883 40.1102 64.172 39.4176L41.2492 29.5935Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M16.7507 50.4176L24.6601 47.0278L39.4766 53.3778C40.1055 53.6473 40.8173 53.6473 41.4462 53.3778L56.2627 47.0278L64.172 50.4176C65.7883 51.1102 65.7883 53.4015 64.172 54.0941L41.2492 63.9182C40.7461 64.1338 40.1767 64.1338 39.6736 63.9182L16.7507 54.0941C15.1345 53.4015 15.1345 51.1102 16.7507 50.4176Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M68.3755 22.2559H52.3755M60.3755 30.2559V14.2559M39.6736 29.5935C40.1766 29.3779 40.7461 29.3779 41.2492 29.5935L64.172 39.4176C65.7883 40.1102 65.7883 42.4015 64.172 43.0941L41.2492 52.9182C40.7461 53.1338 40.1767 53.1338 39.6736 52.9182L16.7507 43.0941C15.1345 42.4015 15.1345 40.1102 16.7507 39.4176L39.6736 29.5935ZM24.6601 47.0278L16.7507 50.4176C15.1345 51.1102 15.1345 53.4015 16.7507 54.0941L39.6736 63.9182C40.1767 64.1338 40.7461 64.1338 41.2492 63.9182L64.172 54.0941C65.7883 53.4015 65.7883 51.1102 64.172 50.4176L56.2627 47.0278L41.4462 53.3778C40.8173 53.6473 40.1055 53.6473 39.4766 53.3778L24.6601 47.0278Z"
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
            d="M62.3755 14.2559C62.3755 13.1513 61.48 12.2559 60.3755 12.2559C59.2709 12.2559 58.3755 13.1513 58.3755 14.2559V20.2559H52.3755C51.2709 20.2559 50.3755 21.1513 50.3755 22.2559C50.3755 23.3604 51.2709 24.2559 52.3755 24.2559H58.3755V30.2559C58.3755 31.3604 59.2709 32.2559 60.3755 32.2559C61.48 32.2559 62.3755 31.3604 62.3755 30.2559V24.2559L68.3755 24.2559C69.48 24.2559 70.3755 23.3604 70.3755 22.2559C70.3755 21.1513 69.48 20.2559 68.3755 20.2559L62.3755 20.2559V14.2559Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M38.8857 27.7552C39.8919 27.324 41.0309 27.324 42.0371 27.7552L64.9599 37.5793C68.1923 38.9646 68.1923 43.5471 64.9599 44.9324L60.7052 46.7558L64.9599 48.5793C68.1923 49.9646 68.1923 54.5471 64.9599 55.9324L42.0371 65.7565C41.0309 66.1877 39.8919 66.1877 38.8857 65.7565L15.9629 55.9324C12.7305 54.5471 12.7305 49.9646 15.9629 48.5793L20.2176 46.7558L15.9629 44.9324C12.7305 43.5471 12.7305 38.9646 15.9629 37.5793L38.8857 27.7552ZM24.6601 49.2038L17.5386 52.2559L40.4614 62.0799L63.3842 52.2559L56.2627 49.2038L42.234 55.2161C41.1021 55.7012 39.8207 55.7012 38.6888 55.2161L24.6601 49.2038ZM63.3842 41.2558L40.4614 31.4318L17.5386 41.2558L40.4614 51.0799L63.3842 41.2558Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreLayerPlus = forwardRef((props, ref) => {
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

CoreLayerPlus.displayName = 'CoreLayerPlus'

export default CoreLayerPlus
