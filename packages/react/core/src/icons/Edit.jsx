
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M38.4 20.7417H14C12.8954 20.7417 12 21.6371 12 22.7417V66.7417C12 67.8463 12.8954 68.7417 14 68.7417H58C59.1046 68.7417 60 67.8463 60 66.7417V42.342"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M68.0145 21.8972C68.7943 21.1174 68.7943 19.8532 68.0145 19.0734L62.3577 13.4166C61.5753 12.6342 60.3069 12.6342 59.5246 13.4166L30.6996 42.2416C28.1991 44.7421 26.5974 48.0005 26.1449 51.5077L25.7115 54.8664C25.6479 55.359 26.0674 55.7785 26.56 55.715L29.9187 55.2816C33.4259 54.829 36.6844 53.2273 39.1849 50.7268L68.0145 21.8972Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M52.1455 20.8037L60.6261 29.2843"
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
            d="M15 23.7418H38.4C40.0569 23.7418 41.4 22.3986 41.4 20.7418C41.4 19.0849 40.0569 17.7418 38.4 17.7418H14C11.2386 17.7418 9 19.9803 9 22.7418V66.7418C9 69.5032 11.2386 71.7418 14 71.7418H58C60.7614 71.7418 63 69.5032 63 66.7418V42.342C63 40.6852 61.6569 39.342 60 39.342C58.3431 39.342 57 40.6852 57 42.342V65.7418H15V23.7418ZM66.9539 22.9579C68.3195 21.5923 68.3194 19.3783 66.9539 18.0128L63.4184 14.4773C62.0502 13.1091 59.8321 13.1091 58.464 14.4773L30.6997 42.2416C28.1991 44.7421 26.5975 48.0005 26.1449 51.5077L25.7115 54.8664C25.648 55.359 26.0675 55.7785 26.5601 55.715L29.9188 55.2816C33.426 54.829 36.6844 53.2274 39.1849 50.7268L66.9539 22.9579ZM58.5051 31.4057L50.0244 22.9251L54.2671 18.6824L62.7477 27.1631L58.5051 31.4057Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M38.4 22.7417C39.5046 22.7417 40.4 21.8463 40.4 20.7417C40.4 19.6371 39.5046 18.7417 38.4 18.7417V22.7417ZM62 42.342C62 41.2374 61.1046 40.342 60 40.342C58.8954 40.342 58 41.2374 58 42.342H62ZM10 22.7417L10 66.7417H14L14 22.7417H10ZM14 70.7417H58V66.7417H14V70.7417ZM38.4 18.7417L14 18.7417V22.7417L38.4 22.7417V18.7417ZM62 66.7417L62 42.342H58L58 66.7417H62ZM58 70.7417C60.2091 70.7417 62 68.9508 62 66.7417H58V66.7417V70.7417ZM10 66.7417C10 68.9508 11.7909 70.7417 14 70.7417V66.7417H10ZM14 22.7417L14 22.7417V18.7417C11.7909 18.7417 10 20.5326 10 22.7417H14Z"
            fill="#2F80ED"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M68.0148 21.8972C68.7946 21.1174 68.7946 19.8532 68.0148 19.0734L62.358 13.4165C61.5756 12.6342 60.3072 12.6342 59.5249 13.4166L30.6999 42.2415C28.1994 44.742 26.5977 48.0005 26.1452 51.5077L25.8375 53.8921L25.7118 54.8664C25.6482 55.3589 26.0677 55.7785 26.5603 55.7149L27.5345 55.5892L29.919 55.2815C33.4262 54.829 36.6847 53.2273 39.1852 50.7268L68.0148 21.8972Z"
            fill="#9B51E0"
          />
          <path
            d="M52.1465 20.8037L60.6271 29.2843"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M68.0146 19.0734L62.3577 13.4166C61.5754 12.6342 60.3069 12.6343 59.5246 13.4166L30.6997 42.2416C28.1991 44.7421 26.5975 48.0005 26.1449 51.5077L25.7115 54.8664C25.648 55.359 26.0675 55.7785 26.5601 55.715L29.9188 55.2816C33.426 54.829 36.6844 53.2273 39.1849 50.7268L68.0146 21.8972C68.7943 21.1174 68.7943 19.8532 68.0146 19.0734Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M38.4 20.7417H14C12.8954 20.7417 12 21.6372 12 22.7417V66.7417C12 67.8463 12.8954 68.7417 14 68.7417H58C59.1046 68.7417 60 67.8463 60 66.7417V42.342M52.1458 20.8037L60.6264 29.2844M68.0146 19.0734L62.3577 13.4166C61.5754 12.6342 60.307 12.6343 59.5246 13.4166L30.6997 42.2416C28.1991 44.7421 26.5975 48.0005 26.1449 51.5077L25.7115 54.8664C25.648 55.359 26.0675 55.7785 26.5601 55.715L29.9188 55.2816C33.426 54.829 36.6844 53.2273 39.1849 50.7268L68.0146 21.8972C68.7943 21.1174 68.7943 19.8532 68.0146 19.0734Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'outline':
      return (
        <>
          <path
            d="M60.9426 14.8299L60.9435 14.8308L66.598 20.4853L60.6269 26.4564L54.97 20.7996L60.9388 14.8308L60.9426 14.8299ZM60.9426 14.8299L60.9412 14.8298L60.9398 14.8299H60.9426ZM58.7384 11.4894C60.2923 10.4634 62.404 10.6344 63.7719 12.0024L69.4288 17.6592C70.9896 19.22 70.9896 21.7506 69.4288 23.3114L40.5992 52.141C40.2475 52.4927 39.8826 52.8285 39.5054 53.148C36.8653 55.3844 33.6271 56.8197 30.1747 57.2651L26.816 57.6985C25.0234 57.9298 23.4967 56.403 23.728 54.6105L24.1614 51.2518C24.1932 51.0052 24.23 50.7597 24.2719 50.5154C24.8997 46.8513 26.6482 43.4646 29.2854 40.8273L58.1104 12.0024C58.3058 11.807 58.5164 11.636 58.7384 11.4894ZM57.7985 29.2849L52.1416 23.628L32.1139 43.6558C29.9259 45.8437 28.5244 48.6949 28.1285 51.7637L27.9012 53.5253L29.6628 53.298C32.348 52.9515 34.8666 51.8352 36.92 50.0958C37.2134 49.8473 37.4972 49.5861 37.7707 49.3126L57.7985 29.2849ZM10 22.7417C10 20.5326 11.7909 18.7417 14 18.7417H38.4C39.5046 18.7417 40.4 19.6372 40.4 20.7417C40.4 21.8463 39.5046 22.7417 38.4 22.7417H14V66.7417L58 66.7417V42.342C58 41.2374 58.8954 40.342 60 40.342C61.1046 40.342 62 41.2374 62 42.342V66.7417C62 68.9509 60.2091 70.7417 58 70.7417H14C11.7909 70.7417 10 68.9509 10 66.7417V22.7417Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreEdit = forwardRef((props, ref) => {
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

CoreEdit.displayName = 'CoreEdit'

export default CoreEdit
