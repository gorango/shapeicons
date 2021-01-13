
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M37.1127 8.82831C38.6748 7.26621 41.2075 7.26621 42.7696 8.82831L71.0538 37.1126C72.6159 38.6747 72.6159 41.2073 71.0538 42.7694L42.7696 71.0537C41.2075 72.6158 38.6748 72.6158 37.1127 71.0537L8.82843 42.7694C7.26634 41.2073 7.26634 38.6747 8.82843 37.1126L37.1127 8.82831Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M48.0523 34.4805H36.9412C31.4183 34.4805 26.9412 38.9576 26.9412 44.4805V51.2497"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M48.0522 40.5077L48.0522 28.4535C48.0522 27.2909 49.468 26.7201 50.2745 27.5575L55.7851 33.2801C56.4305 33.9503 56.4305 35.0109 55.7851 35.6811L50.2745 41.4037C49.468 42.2411 48.0522 41.6703 48.0522 40.5077Z"
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
            d="M37.1127 8.82831C38.6748 7.26621 41.2075 7.26621 42.7696 8.82831L71.0538 37.1126C72.6159 38.6747 72.6159 41.2073 71.0538 42.7694L42.7696 71.0537C41.2075 72.6158 38.6748 72.6158 37.1127 71.0537L8.82843 42.7694C7.26634 41.2073 7.26634 38.6747 8.82843 37.1126L37.1127 8.82831ZM24.9412 44.4805C24.9412 37.8531 30.3137 32.4805 36.9412 32.4805H48.0523L48.0522 28.4536C48.0522 27.291 49.468 26.7201 50.2745 27.5576L55.7851 33.2801C56.4305 33.9504 56.4305 35.0109 55.7851 35.6812L50.2745 41.4037C49.468 42.2412 48.0522 41.6703 48.0522 40.5077L48.0523 36.4805H36.9412C32.5229 36.4805 28.9412 40.0622 28.9412 44.4805V51.2497C28.9412 52.3543 28.0457 53.2497 26.9412 53.2497C25.8366 53.2497 24.9412 52.3543 24.9412 51.2497V44.4805Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <rect
            x="39.9412"
            y="6"
            width="48"
            height="48"
            rx="4"
            transform="rotate(45 39.9412 6)"
            fill="#F2C94C"
            stroke="#F2C94C"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M48.0522 35.25C49.1568 35.25 50.0522 34.3546 50.0522 33.25C50.0522 32.1454 49.1568 31.25 48.0522 31.25V35.25ZM24.941 51.25C24.941 52.3546 25.8365 53.25 26.941 53.25C28.0456 53.25 28.941 52.3546 28.941 51.25H24.941ZM48.0522 31.25H36.941V35.25H48.0522V31.25ZM24.941 43.25V51.25H28.941V43.25H24.941ZM36.941 31.25C30.3136 31.25 24.941 36.6226 24.941 43.25H28.941C28.941 38.8317 32.5228 35.25 36.941 35.25V31.25Z"
            fill="#333333"
          />
          <path
            d="M48.0523 38.2603L48.0523 28.2397C48.0523 27.0869 49.4176 26.4788 50.2745 27.25L55.5118 31.9635C56.2757 32.6511 56.2757 33.8489 55.5118 34.5365L50.2745 39.25C49.4176 40.0212 48.0523 39.4131 48.0523 38.2603Z"
            fill="#333333"
            stroke="#333333"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M37.1127 8.82831C38.6748 7.26621 41.2075 7.26621 42.7696 8.82831L71.0538 37.1126C72.6159 38.6747 72.6159 41.2073 71.0538 42.7694L42.7696 71.0537C41.2075 72.6158 38.6748 72.6158 37.1127 71.0537L8.82843 42.7694C7.26634 41.2073 7.26634 38.6747 8.82843 37.1126L37.1127 8.82831Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M48.0522 38.2602V28.2396C48.0522 27.0868 49.4176 26.4787 50.2745 27.2499L55.5117 31.9634C56.2756 32.6509 56.2756 33.8488 55.5117 34.5364L50.2745 39.2499C49.4176 40.021 48.0522 39.413 48.0522 38.2602Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M48.0522 33.2497H36.9411C31.4182 33.2497 26.9411 37.7269 26.9411 43.2497V51.2497M8.82843 42.7694L37.1127 71.0537C38.6748 72.6158 41.2075 72.6158 42.7696 71.0537L71.0538 42.7694C72.6159 41.2073 72.6159 38.6747 71.0538 37.1126L42.7696 8.82831C41.2075 7.26621 38.6748 7.26621 37.1127 8.82831L8.82843 37.1126C7.26634 38.6747 7.26634 41.2073 8.82843 42.7694ZM48.0522 28.2396V38.2602C48.0522 39.413 49.4176 40.021 50.2745 39.2499L55.5117 34.5364C56.2756 33.8488 56.2756 32.651 55.5117 31.9634L50.2745 27.2499C49.4176 26.4787 48.0522 27.0868 48.0522 28.2396Z"
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
            d="M24.9412 44.4805C24.9412 37.8531 30.3137 32.4805 36.9412 32.4805H46.0522V28.4536C46.0522 25.4909 49.6601 24.0362 51.7151 26.1703L57.2257 31.8928C58.6169 33.3376 58.6169 35.6237 57.2257 37.0685L51.7151 42.791C49.6601 44.9251 46.0522 43.4704 46.0522 40.5077V36.4805H36.9412C32.5229 36.4805 28.9412 40.0622 28.9412 44.4805V51.2497C28.9412 52.3543 28.0457 53.2497 26.9412 53.2497C25.8366 53.2497 24.9412 52.3543 24.9412 51.2497V44.4805ZM50.0522 34.4901V38.7512L54.1646 34.4807L50.0522 30.2101V34.4708C50.0523 34.474 50.0523 34.4772 50.0523 34.4805C50.0523 34.4837 50.0523 34.4869 50.0522 34.4901Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M35.6985 7.4141C38.0416 5.07095 41.8406 5.07095 44.1838 7.4141L72.468 35.6984C74.8112 38.0415 74.8112 41.8405 72.468 44.1837L44.1838 72.4679C41.8406 74.8111 38.0416 74.8111 35.6985 72.4679L7.41422 44.1837C5.07107 41.8405 5.07107 38.0415 7.41422 35.6984L35.6985 7.4141ZM41.3553 10.2425C40.5743 9.46148 39.308 9.46148 38.5269 10.2425L10.2426 38.5268C9.4616 39.3078 9.4616 40.5742 10.2426 41.3552L38.5269 69.6395C39.308 70.4205 40.5743 70.4205 41.3553 69.6395L69.6396 41.3552C70.4207 40.5742 70.4207 39.3078 69.6396 38.5268L41.3553 10.2425Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreTurnSign = forwardRef((props, ref) => {
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

CoreTurnSign.displayName = 'CoreTurnSign'

export default CoreTurnSign
