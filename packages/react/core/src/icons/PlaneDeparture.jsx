
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M7 64H75"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M50.8224 33.2842L31.0079 22.743C29.256 21.8109 27.1908 21.6663 25.3261 22.345L19.7984 24.3569C19.3667 24.5141 19.2513 25.0706 19.5849 25.3865L34.2839 39.3037L18.5106 45.0447L13.6804 42.0448C12.6377 41.3972 11.3554 41.2642 10.202 41.6841L5.45105 43.4133C4.9931 43.5799 4.83851 44.15 5.1495 44.5252L13.9344 55.124C13.9588 55.1535 13.9934 55.1711 14.0299 55.1746C14.0581 55.1928 14.0913 55.2035 14.1264 55.2046L22.9607 55.4824C27.707 55.6317 32.4381 54.874 36.9003 53.2498L63.8001 43.4591C66.6964 42.405 69.3244 40.7247 71.4967 38.5381L72.708 37.3189C73.9985 36.0199 74.4226 34.0923 73.7963 32.3716C73.17 30.6509 71.6061 29.4468 69.7825 29.2812L68.0709 29.1259C65.0014 28.8472 61.9081 29.2493 59.0118 30.3034L50.8224 33.2842Z"
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
            d="M50.8224 33.2841L31.008 22.743C29.2561 21.8109 27.1909 21.6663 25.3262 22.345L19.7985 24.3569C19.3667 24.5141 19.2513 25.0706 19.5849 25.3865L34.2839 39.3037L18.5107 45.0447L13.6805 42.0448C12.6378 41.3972 11.3555 41.2642 10.202 41.684L5.45108 43.4133C4.99314 43.5799 4.83855 44.15 5.14954 44.5252L13.9345 55.124C13.9589 55.1535 13.9934 55.1711 14.0299 55.1746C14.0582 55.1928 14.0913 55.2035 14.1264 55.2046L22.9607 55.4824C27.707 55.6317 32.4381 54.874 36.9004 53.2498L63.8001 43.4591C66.6965 42.405 69.3245 40.7247 71.4968 38.5381L72.708 37.3189C73.9986 36.0199 74.4226 34.0923 73.7963 32.3716C73.1701 30.6509 71.6062 29.4468 69.7826 29.2812L68.071 29.1258C65.0014 28.8472 61.9082 29.2493 59.0119 30.3034L50.8224 33.2841Z"
            fill="currentColor"
          />
          <path
            d="M7 64H75"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M50.8224 33.2841L31.008 22.743C29.2561 21.8109 27.1909 21.6663 25.3262 22.345L19.7985 24.3569C19.3667 24.5141 19.2513 25.0706 19.5849 25.3865L34.2839 39.3037L18.5107 45.0447L13.6805 42.0448C12.6378 41.3972 11.3555 41.2642 10.202 41.684L5.45108 43.4133C4.99314 43.5799 4.83855 44.15 5.14954 44.5252L13.9345 55.124C13.9589 55.1535 13.9934 55.1711 14.0299 55.1746C14.0582 55.1928 14.0913 55.2035 14.1264 55.2046L22.9607 55.4824C27.707 55.6317 32.4381 54.874 36.9004 53.2498L63.8001 43.4591C66.6965 42.405 69.3245 40.7247 71.4968 38.5381L72.708 37.3189C73.9986 36.0199 74.4226 34.0923 73.7963 32.3716C73.1701 30.6509 71.6062 29.4468 69.7826 29.2812L68.071 29.1258C65.0014 28.8472 61.9082 29.2493 59.0119 30.3034L50.8224 33.2841Z"
            fill="#9B51E0"
          />
          <path
            d="M7 64H75"
            stroke="#56CCF2"
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
            d="M50.8224 33.2842L31.0079 22.743C29.256 21.8109 27.1908 21.6663 25.3261 22.345L19.7984 24.3569C19.3667 24.5141 19.2513 25.0706 19.5849 25.3865L34.2839 39.3037L18.5106 45.0447L13.6804 42.0448C12.6377 41.3972 11.3554 41.2642 10.202 41.6841L5.45105 43.4133C4.9931 43.5799 4.83851 44.15 5.1495 44.5252L13.9344 55.124C13.9588 55.1535 13.9934 55.1711 14.0299 55.1746C14.0581 55.1928 14.0913 55.2035 14.1264 55.2046L22.9607 55.4824C27.707 55.6317 32.4381 54.874 36.9003 53.2498L63.8001 43.4591C66.6964 42.405 69.3244 40.7247 71.4967 38.5381L72.708 37.3189C73.9985 36.0199 74.4226 34.0923 73.7963 32.3716C73.17 30.6509 71.6061 29.4468 69.7825 29.2812L68.0709 29.1259C65.0014 28.8472 61.9081 29.2493 59.0118 30.3034L50.8224 33.2842Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M6.99998 63.9998H75M31.0079 22.743L50.8224 33.2842L59.0118 30.3034C61.9081 29.2493 65.0014 28.8472 68.0709 29.1259L69.7825 29.2812C71.6061 29.4468 73.17 30.6509 73.7963 32.3716C74.4226 34.0923 73.9985 36.0199 72.708 37.3189L71.4967 38.5381C69.3244 40.7247 66.6964 42.405 63.8001 43.4591L36.9003 53.2498C32.4381 54.874 27.707 55.6317 22.9607 55.4824L14.1264 55.2046C14.0913 55.2035 14.0581 55.1928 14.0299 55.1746C13.9934 55.1711 13.9588 55.1535 13.9344 55.124L5.1495 44.5252C4.83851 44.15 4.9931 43.5799 5.45105 43.4133L10.202 41.6841C11.3554 41.2642 12.6377 41.3972 13.6804 42.0448L18.5106 45.0447L34.2839 39.3037L19.5849 25.3865C19.2513 25.0706 19.3667 24.5141 19.7984 24.3569L25.3261 22.345C27.1908 21.6663 29.256 21.8109 31.0079 22.743Z"
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
            d="M5.00009 63.9998C5.00009 62.8952 5.89552 61.9998 7.00009 61.9998H75.0001C76.1047 61.9998 77.0001 62.8952 77.0001 63.9998C77.0001 65.1043 76.1047 65.9998 75.0001 65.9998H7.00009C5.89552 65.9998 5.00009 65.1043 5.00009 63.9998Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M31.9474 20.9773C29.6949 19.779 27.0397 19.593 24.6422 20.4656L19.1145 22.4775C17.2856 23.1432 16.7967 25.5007 18.2099 26.8388L30.5591 38.5311L18.7401 42.8328L14.7357 40.3458C13.1717 39.3744 11.2482 39.175 9.51806 39.8047L4.76711 41.5339C3.00951 42.1736 2.41619 44.3614 3.60978 45.8015L12.3947 56.4003C12.6509 56.7094 12.981 56.932 13.3425 57.0572C13.5689 57.1448 13.8122 57.1957 14.0636 57.2036L22.8979 57.4815C27.8985 57.6387 32.8832 56.8404 37.5845 55.1292L64.4842 45.3385C67.6571 44.1837 70.536 42.343 72.9157 39.9477L74.1269 38.7285C75.9636 36.8797 76.5671 34.1364 75.6758 31.6875C74.7845 29.2387 72.5588 27.5251 69.9635 27.2894L68.2519 27.1341C64.8893 26.8288 61.5007 27.2692 58.3279 28.4241L50.9754 31.1001L31.9474 20.9773ZM30.0687 24.5086C28.8173 23.8429 27.3422 23.7396 26.0103 24.2244L22.5838 25.4715L35.6591 37.8514C36.1624 38.3279 36.3831 39.0311 36.2423 39.7098C36.1016 40.3885 35.6194 40.946 34.9681 41.183L19.1948 46.9241C18.6181 47.134 17.9769 47.0675 17.4555 46.7437L12.6254 43.7438C12.104 43.42 11.4629 43.3535 10.8861 43.5634L7.86235 44.664L14.9622 53.2299L23.0237 53.4834C27.5156 53.6247 31.9933 52.9076 36.2164 51.3705L63.1162 41.5798C65.736 40.6262 68.1131 39.1063 70.078 37.1285L71.2893 35.9093C72.0337 35.16 72.2783 34.0481 71.917 33.0556C71.5558 32.0631 70.6537 31.3686 69.6018 31.2731L67.8902 31.1177C65.1137 30.8656 62.3158 31.2293 59.696 32.1828L51.5065 35.1635C50.9737 35.3575 50.3837 35.3161 49.8831 35.0498L30.0687 24.5086Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CorePlaneDeparture = forwardRef((props, ref) => {
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

CorePlaneDeparture.displayName = 'CorePlaneDeparture'

export default CorePlaneDeparture