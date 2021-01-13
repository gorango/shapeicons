
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M70.2136 34.0872L41.4141 62.8867C40.6331 63.6678 39.3667 63.6678 38.5857 62.8867L9.78613 34.0872C11.317 31.4002 13.206 28.9179 15.4114 26.7125C19.7276 22.3963 25.1039 19.2923 30.9999 17.7125C36.8959 16.1326 43.1039 16.1326 48.9999 17.7125C54.8959 19.2923 60.2722 22.3963 64.5883 26.7125C66.7938 28.9179 68.6828 31.4002 70.2136 34.0872Z"
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
            d="M70.2136 34.0872L72.335 36.2085C73.2906 35.2529 73.4893 33.7763 72.8203 32.6021L70.2136 34.0872ZM41.4141 62.8867L43.5354 65.008H43.5354L41.4141 62.8867ZM38.5857 62.8867L40.707 60.7654L38.5857 62.8867ZM9.78613 34.0872L7.1795 32.6021C6.51051 33.7763 6.70921 35.2529 7.66481 36.2085L9.78613 34.0872ZM15.4114 26.7125L17.5328 28.8338L15.4114 26.7125ZM30.9999 17.7125L30.2234 14.8147V14.8147L30.9999 17.7125ZM48.9999 17.7125L48.2234 20.6102L48.9999 17.7125ZM64.5883 26.7125L66.7097 24.5911L64.5883 26.7125ZM68.0923 31.9659L39.2928 60.7654L43.5354 65.008L72.335 36.2085L68.0923 31.9659ZM39.2928 60.7654C39.6833 60.3749 40.3165 60.3749 40.707 60.7654L36.4644 65.008C38.417 66.9606 41.5828 66.9606 43.5354 65.008L39.2928 60.7654ZM40.707 60.7654L11.9075 31.9658L7.66481 36.2085L36.4644 65.008L40.707 60.7654ZM12.3928 35.5722C13.7916 33.1171 15.5176 30.849 17.5328 28.8338L13.2901 24.5911C10.8944 26.9869 8.84241 29.6833 7.1795 32.6021L12.3928 35.5722ZM17.5328 28.8338C21.4766 24.89 26.389 22.0538 31.7763 20.6102L30.2234 14.8147C23.8188 16.5308 17.9787 19.9026 13.2901 24.5911L17.5328 28.8338ZM31.7763 20.6102C37.1637 19.1667 42.8361 19.1667 48.2234 20.6102L49.7763 14.8147C43.3717 13.0986 36.6281 13.0986 30.2234 14.8147L31.7763 20.6102ZM48.2234 20.6102C53.6108 22.0538 58.5232 24.89 62.467 28.8338L66.7097 24.5911C62.0211 19.9026 56.181 16.5308 49.7763 14.8147L48.2234 20.6102ZM62.467 28.8338C64.4822 30.849 66.2082 33.1171 67.607 35.5723L72.8203 32.6021C71.1574 29.6833 69.1054 26.9869 66.7097 24.5911L62.467 28.8338Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M70.2136 34.0872L41.4141 62.8867C40.6331 63.6678 39.3667 63.6678 38.5857 62.8867L9.78613 34.0872C11.317 31.4002 13.206 28.9179 15.4114 26.7125C19.7276 22.3963 25.1039 19.2923 30.9999 17.7125C36.8959 16.1326 43.1039 16.1326 48.9999 17.7125C54.8959 19.2923 60.2722 22.3963 64.5883 26.7125C66.7938 28.9179 68.6828 31.4002 70.2136 34.0872Z"
            fill="currentColor"
          />
          <path
            d="M70.2136 34.0872L72.335 36.2085C73.2906 35.2529 73.4893 33.7763 72.8203 32.6021L70.2136 34.0872ZM41.4141 62.8867L43.5354 65.008H43.5354L41.4141 62.8867ZM38.5857 62.8867L40.707 60.7654L38.5857 62.8867ZM9.78613 34.0872L7.1795 32.6021C6.51051 33.7763 6.70921 35.2529 7.66481 36.2085L9.78613 34.0872ZM15.4114 26.7125L17.5328 28.8338L15.4114 26.7125ZM30.9999 17.7125L30.2234 14.8147V14.8147L30.9999 17.7125ZM48.9999 17.7125L48.2234 20.6102L48.9999 17.7125ZM64.5883 26.7125L66.7097 24.5911L64.5883 26.7125ZM68.0923 31.9659L39.2928 60.7654L43.5354 65.008L72.335 36.2085L68.0923 31.9659ZM39.2928 60.7654C39.6833 60.3749 40.3165 60.3749 40.707 60.7654L36.4644 65.008C38.417 66.9606 41.5828 66.9606 43.5354 65.008L39.2928 60.7654ZM40.707 60.7654L11.9075 31.9658L7.66481 36.2085L36.4644 65.008L40.707 60.7654ZM12.3928 35.5722C13.7916 33.1171 15.5176 30.849 17.5328 28.8338L13.2901 24.5911C10.8944 26.9869 8.84241 29.6833 7.1795 32.6021L12.3928 35.5722ZM17.5328 28.8338C21.4766 24.89 26.389 22.0538 31.7763 20.6102L30.2234 14.8147C23.8188 16.5308 17.9787 19.9026 13.2901 24.5911L17.5328 28.8338ZM31.7763 20.6102C37.1637 19.1667 42.8361 19.1667 48.2234 20.6102L49.7763 14.8147C43.3717 13.0986 36.6281 13.0986 30.2234 14.8147L31.7763 20.6102ZM48.2234 20.6102C53.6108 22.0538 58.5232 24.89 62.467 28.8338L66.7097 24.5911C62.0211 19.9026 56.181 16.5308 49.7763 14.8147L48.2234 20.6102ZM62.467 28.8338C64.4822 30.849 66.2082 33.1171 67.607 35.5723L72.8203 32.6021C71.1574 29.6833 69.1054 26.9869 66.7097 24.5911L62.467 28.8338Z"
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
            d="M70.2137 34.0872L41.4141 62.8867C40.6331 63.6678 39.3667 63.6678 38.5857 62.8867L9.78613 34.0872C11.317 31.4002 13.206 28.9179 15.4114 26.7125C19.7276 22.3963 25.1039 19.2923 30.9999 17.7125C36.8959 16.1326 43.1039 16.1326 48.9999 17.7125C54.8959 19.2923 60.2722 22.3963 64.5883 26.7125C66.7938 28.9179 68.6828 31.4002 70.2137 34.0872Z"
            fill="#2F80ED"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M70.2136 34.0872L41.4141 62.8867C40.6331 63.6678 39.3667 63.6678 38.5857 62.8867L9.78613 34.0872C11.317 31.4002 13.206 28.9179 15.4114 26.7125C19.7276 22.3963 25.1039 19.2923 30.9999 17.7125C36.8959 16.1326 43.1039 16.1326 48.9999 17.7125C54.8959 19.2923 60.2722 22.3963 64.5883 26.7125C66.7938 28.9179 68.6828 31.4002 70.2136 34.0872Z"
            fill="#2F80ED"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M70.2136 34.0872L41.4141 62.8867C40.6331 63.6678 39.3667 63.6678 38.5857 62.8867L9.78613 34.0872C11.317 31.4002 13.206 28.9179 15.4114 26.7125C19.7276 22.3963 25.1039 19.2923 30.9999 17.7125C36.8959 16.1326 43.1039 16.1326 48.9999 17.7125C54.8959 19.2923 60.2722 22.3963 64.5883 26.7125C66.7938 28.9179 68.6828 31.4002 70.2136 34.0872Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M70.2136 34.0872L41.4141 62.8867C40.6331 63.6678 39.3667 63.6678 38.5857 62.8867L9.78613 34.0872C11.317 31.4002 13.206 28.9179 15.4114 26.7125C19.7276 22.3963 25.1039 19.2923 30.9999 17.7125C36.8959 16.1326 43.1039 16.1326 48.9999 17.7125C54.8959 19.2923 60.2722 22.3963 64.5883 26.7125C66.7938 28.9179 68.6828 31.4002 70.2136 34.0872Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M70.2136 34.0872L41.4141 62.8867C40.6331 63.6678 39.3667 63.6678 38.5857 62.8867L9.78613 34.0872C11.317 31.4002 13.206 28.9179 15.4114 26.7125C19.7276 22.3963 25.1039 19.2923 30.9999 17.7125C36.8959 16.1326 43.1039 16.1326 48.9999 17.7125C54.8959 19.2923 60.2722 22.3963 64.5883 26.7125C66.7938 28.9179 68.6828 31.4002 70.2136 34.0872Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M70.2136 34.0872L41.4141 62.8867C40.6331 63.6678 39.3667 63.6678 38.5857 62.8867L9.78613 34.0872C11.317 31.4002 13.206 28.9179 15.4114 26.7125C19.7276 22.3963 25.1039 19.2923 30.9999 17.7125C36.8959 16.1326 43.1039 16.1326 48.9999 17.7125C54.8959 19.2923 60.2722 22.3963 64.5883 26.7125C66.7938 28.9179 68.6828 31.4002 70.2136 34.0872Z"
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
            d="M49.5176 15.7806C43.2825 14.1099 36.7174 14.1099 30.4823 15.7806C24.2472 17.4513 18.5617 20.7338 13.9973 25.2982C11.6649 27.6306 9.66732 30.2556 8.04843 33.0971C7.90905 33.3417 7.82617 33.6061 7.79752 33.8733C7.78089 34.0284 7.78254 34.1845 7.80202 34.3384C7.85636 34.7676 8.04954 35.179 8.37197 35.5014L37.1715 64.3009C38.3431 65.4725 40.0606 65.7654 41.5051 65.1796C41.9867 64.9843 42.4378 64.6914 42.8284 64.3009L71.6279 35.5014C72.265 34.8643 72.3974 33.8799 71.9515 33.0971C70.3326 30.2556 68.3349 27.6306 66.0026 25.2982C62.3741 21.6698 58.0372 18.8513 53.2788 17.0088C52.0515 16.5335 50.7961 16.1232 49.5176 15.7806ZM52.5502 21.0258C51.2301 20.4786 49.8715 20.0166 48.4823 19.6443C42.9254 18.1554 37.0745 18.1554 31.5176 19.6443C25.9607 21.1333 20.8936 24.0588 16.8257 28.1267C15.1076 29.8448 13.5932 31.7412 12.3049 33.7774L39.9999 61.4725L67.695 33.7774C66.5677 31.9957 65.2674 30.3211 63.8089 28.7793C63.6005 28.559 63.389 28.3414 63.1742 28.1267C60.1232 25.0757 56.5103 22.6674 52.5502 21.0258Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreWifi100 = forwardRef((props, ref) => {
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

CoreWifi100.displayName = 'CoreWifi100'

export default CoreWifi100