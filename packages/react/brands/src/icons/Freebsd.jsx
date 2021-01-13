
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <path
            d="M75 40C75 59.32 59.3375 75 40 75C20.6625 75 5 59.32 5 40C5 20.6625 20.6625 5 40 5C59.3375 5 75 20.6625 75 40Z"
            fill="white"
          />
          <path
            d="M61.9864 18.2687C64.3718 20.6904 57.7589 31.3351 56.641 32.4712C55.523 33.605 52.6835 32.5618 50.2992 30.1396C47.9138 27.7179 46.8862 24.8334 48.0042 23.6979C49.1216 22.5619 59.6015 15.8459 61.9864 18.2687Z"
            fill="#B5010F"
          />
          <path
            d="M28.5346 20.8303C24.8929 18.7316 19.711 16.3972 18.0625 18.0715C16.3923 19.7673 18.7749 25.1489 20.8629 28.8545C22.7212 25.5733 25.3643 22.8111 28.5346 20.8303Z"
            fill="#B5010F"
          />
          <path
            d="M43.611 21.111C44.722 20 47.3188 20.4242 47.3188 20.4242L47.5933 19.6976C47.5933 19.6976 45 18.5157 40.5727 18.5157C28.6138 18.5157 18.9188 28.361 18.9188 40.5084C18.9188 52.6536 28.6138 62.5 40.5727 62.5C52.5315 62.5 62.226 52.6536 62.226 40.5084C62.226 37.4788 61.6214 34.5949 60.5303 31.9697C59.9916 33.7782 59.5772 34.4199 58.2486 35.7486C56.2543 37.7429 51.3609 36.0828 47.3188 32.0408C43.2767 27.9987 41.6167 23.1053 43.611 21.111Z"
            fill="#B5010F"
          />
        </>
      )
    case 'solid':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M75 40C75 59.32 59.3375 75 40 75C20.6625 75 5 59.32 5 40C5 20.6625 20.6625 5 40 5C59.3375 5 75 20.6625 75 40ZM61.9862 18.2685C64.3716 20.6901 57.7588 31.3349 56.6408 32.471C55.5229 33.6047 52.6833 32.5616 50.299 30.1394C47.9136 27.7177 46.8861 24.8331 48.004 23.6977C49.1214 22.5616 59.6014 15.8457 61.9862 18.2685ZM18.0625 18.0715C19.711 16.3972 24.8929 18.7316 28.5346 20.8303C25.3643 22.8111 22.7212 25.5733 20.8629 28.8545C18.7749 25.1489 16.3923 19.7673 18.0625 18.0715ZM47.3188 20.4242C47.3188 20.4242 44.722 20 43.611 21.111C41.6167 23.1053 43.2767 27.9987 47.3188 32.0408C51.3609 36.0828 56.2543 37.7429 58.2486 35.7486C59.5772 34.4199 59.9916 33.7782 60.5303 31.9697C61.6214 34.5949 62.226 37.4788 62.226 40.5084C62.226 52.6536 52.5315 62.5 40.5727 62.5C28.6138 62.5 18.9188 52.6536 18.9188 40.5084C18.9188 28.361 28.6138 18.5157 40.5727 18.5157C45 18.5157 47.5933 19.6976 47.5933 19.6976L47.3188 20.4242Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M75 40C75 59.32 59.3375 75 40 75C20.6625 75 5 59.32 5 40C5 20.6625 20.6625 5 40 5C59.3375 5 75 20.6625 75 40Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M61.9862 18.2685C64.3716 20.6901 57.7587 31.3349 56.6408 32.471C55.5229 33.6047 52.6833 32.5616 50.299 30.1394C47.9136 27.7177 46.8861 24.8331 48.004 23.6977C49.1214 22.5616 59.6014 15.8457 61.9862 18.2685Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M28.5346 20.8303C24.8929 18.7316 19.711 16.3972 18.0625 18.0715C16.3923 19.7673 18.7749 25.1489 20.8629 28.8545C22.7212 25.5733 25.3643 22.8111 28.5346 20.8303Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M43.611 21.111C44.722 20 47.3188 20.4242 47.3188 20.4242L47.5933 19.6976C47.5933 19.6976 45 18.5157 40.5727 18.5157C28.6138 18.5157 18.9188 28.361 18.9188 40.5084C18.9188 52.6536 28.6138 62.5 40.5727 62.5C52.5315 62.5 62.226 52.6536 62.226 40.5084C62.226 37.4788 61.6214 34.5949 60.5303 31.9697C59.9916 33.7782 59.5772 34.4199 58.2486 35.7486C56.2543 37.7429 51.3609 36.0828 47.3188 32.0408C43.2767 27.9987 41.6167 23.1053 43.611 21.111Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsFreebsd = forwardRef((props, ref) => {
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

BrandsFreebsd.displayName = 'BrandsFreebsd'

export default BrandsFreebsd
