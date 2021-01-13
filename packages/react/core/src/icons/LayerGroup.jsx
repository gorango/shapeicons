
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M39.2121 16.3376C39.7152 16.122 40.2847 16.122 40.7878 16.3376L63.7106 26.1617C65.3268 26.8543 65.3268 29.1456 63.7106 29.8383L40.7878 39.6623C40.2847 39.8779 39.7152 39.8779 39.2121 39.6623L16.2893 29.8383C14.6731 29.1456 14.6731 26.8543 16.2893 26.1617L39.2121 16.3376Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M24.1987 33.772L16.2893 37.1617C14.6731 37.8544 14.6731 40.1456 16.2893 40.8383L39.2121 50.6623C39.7152 50.878 40.2847 50.878 40.7878 50.6623L63.7106 40.8383C65.3268 40.1456 65.3268 37.8544 63.7106 37.1617L55.8013 33.772"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M24.1987 44.772L16.2893 48.1617C14.6731 48.8544 14.6731 51.1456 16.2893 51.8383L39.2121 61.6623C39.7152 61.878 40.2847 61.878 40.7878 61.6623L63.7106 51.8383C65.3268 51.1456 65.3268 48.8544 63.7106 48.1617L55.8013 44.772"
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
            d="M40.7878 16.3377C40.2847 16.1221 39.7152 16.1221 39.2121 16.3377L16.2893 26.1617C14.6731 26.8544 14.6731 29.1457 16.2893 29.8383L39.2121 39.6624C39.7152 39.878 40.2847 39.878 40.7878 39.6624L63.7106 29.8383C65.3269 29.1457 65.3269 26.8544 63.7106 26.1617L40.7878 16.3377ZM19.7561 35.6759L16.2893 37.1617C14.6731 37.8543 14.6731 40.1456 16.2893 40.8383L39.2121 50.6623C39.7152 50.8779 40.2847 50.8779 40.7878 50.6623L63.7106 40.8383C65.3268 40.1456 65.3268 37.8543 63.7106 37.1617L60.2438 35.6759L42.3635 43.3389C40.8542 43.9857 39.1458 43.9857 37.6365 43.3389L19.7561 35.6759ZM19.7562 46.6759L16.2893 48.1617C14.6731 48.8544 14.6731 51.1456 16.2893 51.8383L39.2121 61.6623C39.7152 61.8779 40.2847 61.8779 40.7878 61.6623L63.7106 51.8383C65.3269 51.1456 65.3269 48.8544 63.7106 48.1617L60.2438 46.6759L42.3635 54.3389C40.8542 54.9857 39.1458 54.9857 37.6365 54.3389L19.7562 46.6759Z"
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
            d="M40.7878 16.3377C40.2847 16.1221 39.7152 16.1221 39.2121 16.3377L16.2893 26.1617C14.6731 26.8544 14.6731 29.1457 16.2893 29.8383L39.2121 39.6624C39.7152 39.878 40.2847 39.878 40.7878 39.6624L63.7106 29.8383C65.3269 29.1457 65.3269 26.8544 63.7106 26.1617L40.7878 16.3377ZM24.1987 33.772L16.2893 37.1617C14.6731 37.8543 14.6731 40.1456 16.2893 40.8383L39.2121 50.6623C39.7152 50.8779 40.2847 50.8779 40.7878 50.6623L63.7106 40.8383C65.3268 40.1456 65.3268 37.8543 63.7106 37.1617L55.8013 33.772L40.9848 40.1219C40.3559 40.3914 39.6441 40.3914 39.0152 40.1219L24.1987 33.772ZM24.1987 44.772L16.2893 48.1617C14.6731 48.8544 14.6731 51.1456 16.2893 51.8383L39.2121 61.6623C39.7152 61.8779 40.2847 61.8779 40.7878 61.6623L63.7106 51.8383C65.3269 51.1456 65.3269 48.8544 63.7106 48.1617L55.8013 44.772L40.9848 51.1219C40.3559 51.3914 39.6441 51.3914 39.0152 51.1219L24.1987 44.772Z"
            fill="#56CCF2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24.1987 33.772L16.2893 37.1617C14.6731 37.8544 14.6731 40.1456 16.2893 40.8383L39.2121 50.6623C39.7152 50.878 40.2847 50.878 40.7878 50.6623L63.7106 40.8383C65.3268 40.1456 65.3268 37.8544 63.7106 37.1617L55.8013 33.772L40.9848 40.1219C40.3559 40.3914 39.6441 40.3914 39.0152 40.1219L24.1987 33.772Z"
            fill="#9B51E0"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M40.7878 16.3377C40.2847 16.1221 39.7152 16.1221 39.2121 16.3377L16.2893 26.1617C14.6731 26.8544 14.6731 29.1457 16.2893 29.8383L39.2121 39.6624C39.7152 39.878 40.2847 39.878 40.7878 39.6624L63.7106 29.8383C65.3269 29.1457 65.3269 26.8544 63.7106 26.1617L40.7878 16.3377Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M24.1987 33.772L16.2893 37.1617C14.6731 37.8543 14.6731 40.1456 16.2893 40.8383L39.2121 50.6623C39.7152 50.8779 40.2847 50.8779 40.7878 50.6623L63.7106 40.8383C65.3268 40.1456 65.3268 37.8543 63.7106 37.1617L55.8013 33.772L40.9848 40.1219C40.3559 40.3914 39.6441 40.3914 39.0152 40.1219L24.1987 33.772Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M24.1987 44.772L16.2893 48.1617C14.6731 48.8544 14.6731 51.1456 16.2893 51.8383L39.2121 61.6623C39.7152 61.8779 40.2847 61.8779 40.7878 61.6623L63.7106 51.8383C65.3269 51.1456 65.3269 48.8544 63.7106 48.1617L55.8013 44.772L40.9848 51.1219C40.3559 51.3914 39.6441 51.3914 39.0152 51.1219L24.1987 44.772Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M40.7878 16.3377C40.2847 16.1221 39.7152 16.1221 39.2121 16.3377L16.2893 26.1617C14.6731 26.8544 14.6731 29.1457 16.2893 29.8383L39.2121 39.6624C39.7152 39.878 40.2847 39.878 40.7878 39.6624L63.7106 29.8383C65.3269 29.1457 65.3269 26.8544 63.7106 26.1617L40.7878 16.3377Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M24.1987 33.772L16.2893 37.1617C14.6731 37.8543 14.6731 40.1456 16.2893 40.8383L39.2121 50.6623C39.7152 50.8779 40.2847 50.8779 40.7878 50.6623L63.7106 40.8383C65.3268 40.1456 65.3268 37.8543 63.7106 37.1617L55.8013 33.772L40.9848 40.1219C40.3559 40.3914 39.6441 40.3914 39.0152 40.1219L24.1987 33.772Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M24.1987 44.772L16.2893 48.1617C14.6731 48.8544 14.6731 51.1456 16.2893 51.8383L39.2121 61.6623C39.7152 61.8779 40.2847 61.8779 40.7878 61.6623L63.7106 51.8383C65.3269 51.1456 65.3269 48.8544 63.7106 48.1617L55.8013 44.772L40.9848 51.1219C40.3559 51.3914 39.6441 51.3914 39.0152 51.1219L24.1987 44.772Z"
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M38.4243 14.4994C39.4305 14.0682 40.5695 14.0682 41.5757 14.4994L64.4985 24.3235C67.7309 25.7088 67.7309 30.2913 64.4985 31.6767L60.2439 33.5001L64.4985 35.3235C67.7309 36.7088 67.7309 41.2913 64.4985 42.6766L60.2438 44.5L64.4985 46.3235C67.7309 47.7088 67.7309 52.2913 64.4985 53.6766L41.5757 63.5007C40.5695 63.9319 39.4305 63.9319 38.4243 63.5007L15.5015 53.6766C12.2691 52.2913 12.2691 47.7088 15.5015 46.3235L19.7561 44.5L15.5015 42.6766C12.269 41.2913 12.269 36.7088 15.5015 35.3235L19.7561 33.5001L15.5015 31.6767C12.2691 30.2913 12.2691 25.7088 15.5015 24.3235L38.4243 14.4994ZM24.1987 35.948L17.0771 39L40 48.8241L62.9228 39L55.8013 35.948L41.7726 41.9602C40.6407 42.4454 39.3593 42.4454 38.2273 41.9602L24.1987 35.948ZM24.1987 46.948L17.0772 50L40 59.8241L62.9228 50L55.8013 46.948L41.7726 52.9603C40.6407 53.4454 39.3593 53.4454 38.2274 52.9603L24.1987 46.948ZM62.9228 28.0001L40 18.176L17.0772 28.0001L40 37.8242L62.9228 28.0001Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreLayerGroup = forwardRef((props, ref) => {
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

CoreLayerGroup.displayName = 'CoreLayerGroup'

export default CoreLayerGroup
