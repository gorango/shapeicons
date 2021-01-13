
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <circle
            cx="40"
            cy="40"
            r="35"
            fill="white"
          />
          <path
            d="M40 75C59.33 75 75 59.33 75 40C75 20.67 59.33 5 40 5C20.67 5 5 20.67 5 40C5 54.2003 13.4567 66.4254 25.6087 71.9138C25.625 71.5352 25.6434 71.188 25.6591 70.8902C25.6805 70.4844 25.6971 70.1705 25.6971 69.994C25.6971 68.9423 26.4123 63.7259 26.4123 63.7259L30.7873 45.7632C30.1142 44.6694 29.6094 42.3557 29.6094 40.5889C29.6094 32.4279 34.1527 30.661 36.9291 30.661C40.4627 30.661 41.262 34.4892 41.262 37.3077C41.262 38.7985 40.4887 41.1321 39.6929 43.5335C38.8494 46.0786 37.9808 48.6999 37.9808 50.4747C37.9808 53.9243 41.3882 55.649 43.744 55.649C49.97 55.649 55.6911 47.8245 55.6911 40C55.6911 32.1755 52.0313 22.7103 40.0421 22.7103C28.0529 22.7103 22.6683 31.8389 22.6683 38.8221C22.6683 43.5336 24.4351 46.9831 25.3185 47.5721C25.5709 47.7964 26 48.4892 25.6971 49.4651C25.3942 50.4411 24.8418 52.6202 24.6034 53.5877C24.5753 53.8121 24.3089 54.1935 23.4676 53.9243C22.4159 53.5877 15.7272 49.381 15.7272 38.8221C15.7272 28.2632 24.0144 15.9795 40.0421 15.9795C56.0697 15.9795 64.2728 26.7488 64.2728 40C64.2728 53.2512 53.5457 61.7067 45.3846 61.7067C38.8558 61.7067 36.2981 58.79 35.8353 57.3317L33.3534 66.7968C32.7673 68.3671 31.6741 71.1894 30.3259 73.6459C33.3984 74.5277 36.644 75 40 75Z"
            fill="#BB0F23"
          />
        </>
      )
    case 'solid':
      return (
        <>
          <path
            d="M40 75C59.33 75 75 59.33 75 40C75 20.67 59.33 5 40 5C20.67 5 5 20.67 5 40C5 54.2003 13.4567 66.4254 25.6087 71.9138C25.625 71.5352 25.6434 71.188 25.6591 70.8902C25.6805 70.4844 25.6971 70.1705 25.6971 69.994C25.6971 68.9423 26.4123 63.7259 26.4123 63.7259L30.7873 45.7632C30.1142 44.6694 29.6094 42.3557 29.6094 40.5889C29.6094 32.4279 34.1527 30.661 36.9291 30.661C40.4627 30.661 41.262 34.4892 41.262 37.3077C41.262 38.7985 40.4887 41.1321 39.6929 43.5335C38.8494 46.0786 37.9808 48.6999 37.9808 50.4747C37.9808 53.9243 41.3882 55.649 43.744 55.649C49.97 55.649 55.6911 47.8245 55.6911 40C55.6911 32.1755 52.0313 22.7103 40.0421 22.7103C28.0529 22.7103 22.6683 31.8389 22.6683 38.8221C22.6683 43.5336 24.4351 46.9831 25.3185 47.5721C25.5709 47.7964 26 48.4892 25.6971 49.4651C25.3942 50.4411 24.8418 52.6202 24.6034 53.5877C24.5753 53.8121 24.3089 54.1935 23.4676 53.9243C22.4159 53.5877 15.7272 49.381 15.7272 38.8221C15.7272 28.2632 24.0144 15.9795 40.0421 15.9795C56.0697 15.9795 64.2728 26.7488 64.2728 40C64.2728 53.2512 53.5457 61.7067 45.3846 61.7067C38.8558 61.7067 36.2981 58.79 35.8353 57.3317L33.3534 66.7968C32.7673 68.3671 31.6741 71.1894 30.3259 73.6459C33.3984 74.5277 36.644 75 40 75Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M40 75C59.33 75 75 59.33 75 40C75 20.67 59.33 5 40 5C20.67 5 5 20.67 5 40M40 75C20.67 75 5 59.33 5 40M40 75C36.644 75 33.3984 74.5277 30.3259 73.6459C31.6741 71.1894 32.7673 68.3671 33.3534 66.7968L35.8353 57.3317C36.2981 58.79 38.8558 61.7067 45.3846 61.7067C53.5457 61.7067 64.2728 53.2512 64.2728 40C64.2728 26.7488 56.0697 15.9795 40.0421 15.9795C24.0144 15.9795 15.7272 28.2632 15.7272 38.8221C15.7272 49.381 22.4159 53.5877 23.4676 53.9243C24.3089 54.1935 24.5753 53.8121 24.6034 53.5877C24.8418 52.6202 25.3942 50.4411 25.6971 49.4651C26 48.4892 25.5709 47.7964 25.3185 47.5721C24.4351 46.9831 22.6683 43.5336 22.6683 38.8221C22.6683 31.8389 28.0529 22.7103 40.0421 22.7103C52.0313 22.7103 55.6911 32.1755 55.6911 40C55.6911 47.8245 49.97 55.649 43.744 55.649C41.3882 55.649 37.9808 53.9243 37.9808 50.4747C37.9808 48.6999 38.8495 46.0786 39.6929 43.5335C40.4887 41.1321 41.262 38.7985 41.262 37.3077C41.262 34.4892 40.4627 30.661 36.9291 30.661C34.1527 30.661 29.6094 32.4279 29.6094 40.5889C29.6094 42.3557 30.1142 44.6694 30.7873 45.7632L26.4123 63.7259C26.4123 63.7259 25.6971 68.9423 25.6971 69.994C25.6971 70.1705 25.6805 70.4844 25.6591 70.8902C25.6434 71.188 25.625 71.5352 25.6087 71.9138C13.4567 66.4254 5 54.2003 5 40"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsPinterest = forwardRef((props, ref) => {
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

BrandsPinterest.displayName = 'BrandsPinterest'

export default BrandsPinterest