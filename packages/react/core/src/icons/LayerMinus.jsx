
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
            d="M68.4614 22.2559H52.4614"
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
            d="M49.4614 22.2559C49.4614 20.599 50.8046 19.2559 52.4614 19.2559H68.4614C70.1183 19.2559 71.4614 20.599 71.4614 22.2559C71.4614 23.9127 70.1183 25.2559 68.4614 25.2559H52.4614C50.8046 25.2559 49.4614 23.9127 49.4614 22.2559Z"
            fill="currentColor"
          />
          <path
            d="M39.6736 29.5935C40.1766 29.3779 40.7461 29.3779 41.2492 29.5935L64.172 39.4175C65.7883 40.1102 65.7883 42.4015 64.172 43.0941L41.2492 52.9182C40.7461 53.1338 40.1767 53.1338 39.6736 52.9182L16.7507 43.0941C15.1345 42.4015 15.1345 40.1102 16.7507 39.4175L39.6736 29.5935Z"
            fill="currentColor"
          />
          <path
            d="M20.8522 48.6598L16.7507 50.4175C15.1345 51.1102 15.1345 53.4015 16.7507 54.0941L39.6736 63.9182C40.1767 64.1338 40.7461 64.1338 41.2492 63.9182L64.172 54.0941C65.7883 53.4015 65.7883 51.1102 64.172 50.4175L60.0706 48.6598L42.628 56.1352C41.2445 56.7281 39.6784 56.7281 38.2949 56.1352L20.8522 48.6598Z"
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
            d="M52.4614 22.2559L59.7342 22.2559L61.1887 22.2559L68.4614 22.2559"
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
            d="M68.4614 22.2559H52.4614M39.6736 29.5935C40.1766 29.3779 40.7461 29.3779 41.2492 29.5935L64.172 39.4176C65.7883 40.1102 65.7883 42.4015 64.172 43.0941L41.2492 52.9182C40.7461 53.1338 40.1767 53.1338 39.6736 52.9182L16.7507 43.0941C15.1345 42.4015 15.1345 40.1102 16.7507 39.4176L39.6736 29.5935ZM24.6601 47.0278L16.7507 50.4176C15.1345 51.1102 15.1345 53.4015 16.7507 54.0941L39.6736 63.9182C40.1767 64.1338 40.7461 64.1338 41.2492 63.9182L64.172 54.0941C65.7883 53.4015 65.7883 51.1102 64.172 50.4176L56.2627 47.0278L41.4462 53.3778C40.8173 53.6473 40.1055 53.6473 39.4766 53.3778L24.6601 47.0278Z"
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
            d="M52.4614 20.2559C51.3568 20.2559 50.4614 21.1513 50.4614 22.2559C50.4614 23.3604 51.3568 24.2559 52.4614 24.2559H68.4614C69.566 24.2559 70.4614 23.3604 70.4614 22.2559C70.4614 21.1513 69.566 20.2559 68.4614 20.2559H52.4614Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M42.0371 27.7552C41.0309 27.324 39.8919 27.324 38.8857 27.7552L15.9629 37.5793C12.7305 38.9646 12.7305 43.5471 15.9629 44.9324L20.2176 46.7558L15.9629 48.5793C12.7305 49.9646 12.7305 54.5471 15.9629 55.9324L38.8857 65.7565C39.8919 66.1877 41.0309 66.1877 42.0371 65.7565L64.9599 55.9324C68.1923 54.5471 68.1923 49.9646 64.9599 48.5793L60.7052 46.7558L64.9599 44.9324C68.1923 43.5471 68.1923 38.9646 64.9599 37.5793L42.0371 27.7552ZM17.5386 52.2559L24.6601 49.2038L38.6888 55.2161C39.8207 55.7012 41.1021 55.7012 42.234 55.2161L56.2627 49.2038L63.3842 52.2559L40.4614 62.0799L17.5386 52.2559ZM40.4614 31.4318L63.3842 41.2558L40.4614 51.0799L17.5386 41.2558L40.4614 31.4318Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreLayerMinus = forwardRef((props, ref) => {
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

CoreLayerMinus.displayName = 'CoreLayerMinus'

export default CoreLayerMinus
