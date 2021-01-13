
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M32 46L32 44.622C32 41.5687 31.4174 38.5435 30.2834 35.7086L29.4856 33.7139C28.5042 31.2605 28 28.6424 28 26V24.3852C28 22.8095 28.3007 21.2484 28.8858 19.7854L29.2296 18.9259C30.9028 14.7429 34.9542 12 39.4594 12C43.4914 12 47.2013 14.2023 49.132 17.7419L50.1971 19.6947C51.3801 21.8635 52 24.2945 52 26.765V29C52 32.937 51.0121 36.8111 49.1269 40.2674L46.1946 45.6433C46.0669 45.8773 46 46.1397 46 46.4064"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M32 46C32 47.1046 32.8954 48 34 48H44.4064C45.2865 48 46 47.2865 46 46.4064"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M44.0273 54H34.0273C32.9228 54 32.0273 54.8954 32.0273 56V61.1716C32.0273 62.9826 32.7468 64.7194 34.0273 66C35.3079 67.2806 37.0448 68 38.8558 68H39.1756C40.9847 68 42.7204 67.2845 44.004 66.0096C45.299 64.7234 46.0273 62.9735 46.0273 61.1482V56C46.0273 54.8954 45.1319 54 44.0273 54Z"
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
            d="M44.0273 54H34.0273C32.9228 54 32.0273 54.8954 32.0273 56V61.1716C32.0273 62.9826 32.7468 64.7194 34.0273 66C35.3079 67.2806 37.0448 68 38.8558 68H39.1756C40.9847 68 42.7204 67.2845 44.004 66.0096C45.299 64.7234 46.0273 62.9735 46.0273 61.1482V56C46.0273 54.8954 45.1319 54 44.0273 54Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width={strokeWidth}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M28 24.3852C28 22.8095 28.3007 21.2484 28.8858 19.7854L29.2296 18.9259C30.9028 14.7429 34.9542 12 39.4594 12C43.4914 12 47.2013 14.2023 49.132 17.7419L50.1971 19.6947C51.3801 21.8635 52 24.2945 52 26.765V29C52 32.937 51.0121 36.8111 49.1269 40.2674L46.1946 45.6433C46.0669 45.8773 46 46.1397 46 46.4064C46 47.2865 45.2865 48 44.4064 48H34C32.8954 48 32 47.1046 32 46L32 44.622C32 41.5687 31.4174 38.5435 30.2834 35.7086L29.4856 33.7139C28.5042 31.2605 28 28.6424 28 26V24.3852Z"
            fill="currentColor"
          />
          <path
            d="M29.4856 33.7139L27.6286 34.4567L29.4856 33.7139ZM46.1946 45.6433L47.9504 46.601L46.1946 45.6433ZM49.1269 40.2674L50.8827 41.2251L49.1269 40.2674ZM49.132 17.7419L47.3762 18.6996L49.132 17.7419ZM28.8858 19.7854L27.0289 19.0426L28.8858 19.7854ZM29.2296 18.9259L27.3727 18.1831L29.2296 18.9259ZM27.3727 18.1831L27.0289 19.0426L30.7428 20.5282L31.0866 19.6687L27.3727 18.1831ZM47.3762 18.6996L48.4413 20.6524L51.9529 18.737L50.8877 16.7842L47.3762 18.6996ZM50 26.765V29H54V26.765H50ZM47.3711 39.3097L44.4388 44.6855L47.9504 46.601L50.8827 41.2251L47.3711 39.3097ZM44.4064 46H34V50H44.4064V46ZM34 46L34 44.622H30L30 46H34ZM27.6286 34.4567L28.4265 36.4514L32.1404 34.9658L31.3425 32.9711L27.6286 34.4567ZM26 24.3852V26H30V24.3852H26ZM31.3425 32.9711C30.4557 30.754 30 28.388 30 26H26C26 28.8968 26.5528 31.767 27.6286 34.4567L31.3425 32.9711ZM34 44.622C34 41.3143 33.3688 38.0369 32.1404 34.9658L28.4265 36.4514C29.4659 39.05 30 41.8232 30 44.622H34ZM34 46H30C30 48.2091 31.7909 50 34 50V46ZM44 46.4064C44 46.1819 44.1819 46 44.4064 46V50C46.3911 50 48 48.3911 48 46.4064H44ZM44.4388 44.6855C44.1509 45.2134 44 45.8051 44 46.4064H48C48 46.4744 47.9829 46.5413 47.9504 46.601L44.4388 44.6855ZM50 29C50 32.6024 49.0961 36.1472 47.3711 39.3097L50.8827 41.2251C52.9282 37.475 54 33.2716 54 29H50ZM48.4413 20.6524C49.4641 22.5275 50 24.6292 50 26.765H54C54 23.9599 53.2961 21.1996 51.9529 18.737L48.4413 20.6524ZM39.4594 14C42.7595 14 45.7959 15.8025 47.3762 18.6996L50.8877 16.7842C48.6066 12.6021 44.2232 10 39.4594 10V14ZM27.0289 19.0426C26.3492 20.7418 26 22.5551 26 24.3852H30C30 23.064 30.2521 21.7549 30.7428 20.5282L27.0289 19.0426ZM31.0866 19.6687C32.4561 16.245 35.772 14 39.4594 14V10C34.1364 10 29.3496 13.2408 27.3727 18.1831L31.0866 19.6687Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M44.0273 54H34.0273C32.9228 54 32.0273 54.8954 32.0273 56V61.1716C32.0273 62.9826 32.7468 64.7194 34.0273 66C35.3079 67.2806 37.0448 68 38.8558 68H39.1756C40.9847 68 42.7204 67.2845 44.004 66.0096C45.299 64.7234 46.0273 62.9735 46.0273 61.1482V56C46.0273 54.8954 45.1319 54 44.0273 54Z"
            fill="#F2994A"
            stroke="#F2994A"
            stroke-width={strokeWidth}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M28 24.3852C28 22.8095 28.3007 21.2484 28.8858 19.7854L29.2296 18.9259C30.9028 14.7429 34.9542 12 39.4594 12C43.4914 12 47.2013 14.2023 49.132 17.7419L50.1971 19.6947C51.3801 21.8635 52 24.2945 52 26.765V29C52 32.937 51.0121 36.8111 49.1269 40.2674L46.1946 45.6433C46.0669 45.8773 46 46.1397 46 46.4064C46 47.2865 45.2865 48 44.4064 48H34C32.8954 48 32 47.1046 32 46L32 44.622C32 41.5687 31.4174 38.5435 30.2834 35.7086L29.4856 33.7139C28.5042 31.2605 28 28.6424 28 26V24.3852Z"
            fill="#F2994A"
          />
          <path
            d="M29.4856 33.7139L27.6286 34.4567L29.4856 33.7139ZM46.1946 45.6433L47.9504 46.601L46.1946 45.6433ZM49.1269 40.2674L50.8827 41.2251L49.1269 40.2674ZM49.132 17.7419L47.3762 18.6996L49.132 17.7419ZM28.8858 19.7854L27.0289 19.0426L28.8858 19.7854ZM29.2296 18.9259L27.3727 18.1831L29.2296 18.9259ZM27.3727 18.1831L27.0289 19.0426L30.7428 20.5282L31.0866 19.6687L27.3727 18.1831ZM47.3762 18.6996L48.4413 20.6524L51.9529 18.737L50.8877 16.7842L47.3762 18.6996ZM50 26.765V29H54V26.765H50ZM47.3711 39.3097L44.4388 44.6855L47.9504 46.601L50.8827 41.2251L47.3711 39.3097ZM44.4064 46H34V50H44.4064V46ZM34 46L34 44.622H30L30 46H34ZM27.6286 34.4567L28.4265 36.4514L32.1404 34.9658L31.3425 32.9711L27.6286 34.4567ZM26 24.3852V26H30V24.3852H26ZM31.3425 32.9711C30.4557 30.754 30 28.388 30 26H26C26 28.8968 26.5528 31.767 27.6286 34.4567L31.3425 32.9711ZM34 44.622C34 41.3143 33.3688 38.0369 32.1404 34.9658L28.4265 36.4514C29.4659 39.05 30 41.8232 30 44.622H34ZM34 46H30C30 48.2091 31.7909 50 34 50V46ZM44 46.4064C44 46.1819 44.1819 46 44.4064 46V50C46.3911 50 48 48.3911 48 46.4064H44ZM44.4388 44.6855C44.1509 45.2134 44 45.8051 44 46.4064H48C48 46.4744 47.9829 46.5413 47.9504 46.601L44.4388 44.6855ZM50 29C50 32.6024 49.0961 36.1472 47.3711 39.3097L50.8827 41.2251C52.9282 37.475 54 33.2716 54 29H50ZM48.4413 20.6524C49.4641 22.5275 50 24.6292 50 26.765H54C54 23.9599 53.2961 21.1996 51.9529 18.737L48.4413 20.6524ZM39.4594 14C42.7595 14 45.7959 15.8025 47.3762 18.6996L50.8877 16.7842C48.6066 12.6021 44.2232 10 39.4594 10V14ZM27.0289 19.0426C26.3492 20.7418 26 22.5551 26 24.3852H30C30 23.064 30.2521 21.7549 30.7428 20.5282L27.0289 19.0426ZM31.0866 19.6687C32.4561 16.245 35.772 14 39.4594 14V10C34.1364 10 29.3496 13.2408 27.3727 18.1831L31.0866 19.6687Z"
            fill="#F2994A"
          />
          <path
            d="M31.9956 26.2548C31.9956 25.2038 32.1961 24.1625 32.5865 23.1867L32.8158 22.6134C33.9318 19.8232 36.6342 17.9937 39.6392 17.9937C42.3286 17.9937 44.8032 19.4626 46.091 21.8236L46.8015 23.1262C47.5905 24.5728 48.004 26.1943 48.004 27.8421V29.3329C48.004 31.959 47.3451 34.5431 46.0876 36.8485L44.1317 40.4343C44.0465 40.5904 44.0019 40.7654 44.0019 40.9433C44.0019 41.5303 43.526 42.0063 42.9389 42.0063H35.9977C35.2609 42.0063 34.6637 41.409 34.6637 40.6722L34.6637 39.7531C34.6637 37.7165 34.2751 35.6986 33.5187 33.8077L32.9865 32.4772C32.3319 30.8407 31.9956 29.0944 31.9956 27.3319V26.2548Z"
            fill="#F2C94C"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M44.0273 54H34.0273C32.9228 54 32.0273 54.8954 32.0273 56V61.1716C32.0273 62.9826 32.7468 64.7194 34.0273 66C35.3079 67.2806 37.0448 68 38.8558 68H39.1756C40.9847 68 42.7204 67.2845 44.004 66.0096C45.299 64.7234 46.0273 62.9735 46.0273 61.1482V56C46.0273 54.8954 45.1319 54 44.0273 54Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M28 24.3852C28 22.8095 28.3007 21.2484 28.8858 19.7854L29.2296 18.9259C30.9028 14.7429 34.9542 12 39.4594 12C43.4914 12 47.2013 14.2023 49.132 17.7419L50.1971 19.6947C51.3801 21.8635 52 24.2945 52 26.765V29C52 32.937 51.0121 36.8111 49.1269 40.2674L46.1946 45.6433C46.0669 45.8773 46 46.1397 46 46.4064C46 47.2865 45.2865 48 44.4064 48H34C32.8954 48 32 47.1046 32 46L32 44.622C32 41.5687 31.4174 38.5435 30.2834 35.7086L29.4856 33.7139C28.5042 31.2605 28 28.6424 28 26V24.3852Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M44.0273 54H34.0273C32.9228 54 32.0273 54.8954 32.0273 56V61.1716C32.0273 62.9826 32.7468 64.7194 34.0273 66C35.3079 67.2806 37.0448 68 38.8558 68H39.1756C40.9847 68 42.7204 67.2845 44.004 66.0096C45.299 64.7234 46.0273 62.9735 46.0273 61.1482V56C46.0273 54.8954 45.1319 54 44.0273 54Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M28 24.3852C28 22.8095 28.3007 21.2484 28.8858 19.7854L29.2296 18.9259C30.9028 14.7429 34.9542 12 39.4594 12C43.4914 12 47.2013 14.2023 49.132 17.7419L50.1971 19.6947C51.3801 21.8635 52 24.2945 52 26.765V29C52 32.937 51.0121 36.8111 49.1269 40.2674L46.1946 45.6433C46.0669 45.8773 46 46.1397 46 46.4064C46 47.2865 45.2865 48 44.4064 48H34C32.8954 48 32 47.1046 32 46L32 44.622C32 41.5687 31.4174 38.5435 30.2834 35.7086L29.4856 33.7139C28.5042 31.2605 28 28.6424 28 26V24.3852Z"
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
            d="M30.0273 56C30.0273 53.7909 31.8182 52 34.0273 52H44.0273C46.2365 52 48.0273 53.7909 48.0273 56V61.1482C48.0273 63.5063 47.0865 65.7669 45.4134 67.4287C43.7551 69.0757 41.5128 70 39.1756 70H38.8558C36.5143 70 34.2688 69.0699 32.6131 67.4142C30.9575 65.7586 30.0273 63.513 30.0273 61.1716V56ZM44.0273 56H34.0273V61.1716C34.0273 62.4522 34.5361 63.6803 35.4416 64.5858C36.3471 65.4913 37.5752 66 38.8558 66H39.1756C40.4566 66 41.6857 65.4934 42.5946 64.5906C43.5116 63.6798 44.0273 62.4407 44.0273 61.1482V56Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M39.4594 14C35.772 14 32.4561 16.245 31.0866 19.6687L30.7428 20.5282C30.2521 21.7549 30 23.064 30 24.3852V26C30 28.388 30.4557 30.754 31.3425 32.9711L32.1404 34.9658C33.3688 38.0369 34 41.3143 34 44.622L34 46H44.023C44.0754 45.5404 44.2161 45.0939 44.4388 44.6856L47.3711 39.3097C49.0961 36.1472 50 32.6024 50 29V26.765C50 24.6292 49.4641 22.5275 48.4413 20.6524L47.3762 18.6996C45.7959 15.8025 42.7595 14 39.4594 14ZM27.3727 18.1831C29.3496 13.2408 34.1364 10 39.4594 10C44.2232 10 48.6066 12.6021 50.8877 16.7842L51.9529 18.737C53.2961 21.1996 54 23.9599 54 26.765V29C54 33.2716 52.9282 37.475 50.8827 41.2251L47.9985 46.5128C47.9421 48.4483 46.3555 50 44.4064 50H34C31.7909 50 30 48.2091 30 46L30 44.622C30 41.8232 29.4659 39.05 28.4265 36.4514L27.6286 34.4567C26.5528 31.767 26 28.8968 26 26V24.3852C26 22.5551 26.3492 20.7418 27.0289 19.0426L27.3727 18.1831Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreShoePrint = forwardRef((props, ref) => {
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

CoreShoePrint.displayName = 'CoreShoePrint'

export default CoreShoePrint
