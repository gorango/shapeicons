
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M47.5225 68.5H31.5225"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M46.5936 13.429C42.0661 11.5536 36.979 11.5536 32.4514 13.429C27.9239 15.3043 24.3268 18.9015 22.4514 23.429C20.5761 27.9565 20.5761 33.0436 22.4514 37.5711C23.4766 40.0461 25.0163 42.2431 26.9412 44.0327C28.4357 45.4222 29.5234 47.2718 29.5234 49.3124V56.501C29.5234 59.8147 32.2097 62.501 35.5234 62.501H43.5234C46.8371 62.501 49.5234 59.8147 49.5234 56.501V49.3107C49.5234 47.2704 50.6109 45.421 52.105 44.0315C54.0294 42.2421 55.5686 40.0456 56.5936 37.5711C58.4689 33.0436 58.4689 27.9565 56.5936 23.429C54.7182 18.9015 51.1211 15.3043 46.5936 13.429Z"
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
            d="M47.0711 12.929C42.5436 11.0536 37.4565 11.0536 32.929 12.929C28.4015 14.8043 24.8043 18.4015 22.929 22.929C21.0536 27.4565 21.0536 32.5436 22.929 37.0711C23.9542 39.5461 25.4939 41.7431 27.4188 43.5327C28.9133 44.9222 30.001 46.7718 30.001 48.8124V56.001C30.001 59.3147 32.6873 62.001 36.001 62.001L44.001 62.001C47.3147 62.001 50.001 59.3147 50.001 56.001V48.8107C50.001 46.7704 51.0884 44.921 52.5826 43.5315C54.5069 41.7421 56.0462 39.5456 57.0711 37.0711C58.9465 32.5436 58.9465 27.4565 57.0711 22.929C55.1958 18.4015 51.5986 14.8043 47.0711 12.929Z"
            fill="currentColor"
          />
          <path
            d="M32.929 12.929L33.6944 14.7767L32.929 12.929ZM47.0711 12.929L46.3058 14.7767L47.0711 12.929ZM22.929 22.929L24.7767 23.6944L22.929 22.929ZM22.929 37.0711L24.7767 36.3058L22.929 37.0711ZM57.0711 37.0711L58.9189 37.8365V37.8365L57.0711 37.0711ZM52.5826 43.5315L53.9445 44.9962L52.5826 43.5315ZM27.4188 43.5327L26.057 44.9975L27.4188 43.5327ZM33.6944 14.7767C37.7318 13.1044 42.2683 13.1044 46.3058 14.7767L47.8365 11.0812C42.8189 9.00287 37.1812 9.00287 32.1636 11.0812L33.6944 14.7767ZM24.7767 23.6944C26.4491 19.6569 29.6569 16.4491 33.6944 14.7767L32.1636 11.0812C27.146 13.1596 23.1596 17.146 21.0812 22.1636L24.7767 23.6944ZM24.7767 36.3058C23.1044 32.2683 23.1044 27.7318 24.7767 23.6944L21.0812 22.1636C19.0029 27.1812 19.0029 32.8189 21.0812 37.8365L24.7767 36.3058ZM28.7806 42.068C27.0639 40.472 25.691 38.5129 24.7767 36.3058L21.0812 37.8365C22.2174 40.5794 23.9238 43.0142 26.057 44.9975L28.7806 42.068ZM32.001 56.001V48.8124H28.001V56.001H32.001ZM44.001 60.001L36.001 60.001V64.001H44.001V60.001ZM48.001 48.8107V56.001H52.001V48.8107H48.001ZM55.2234 36.3058C54.3094 38.5124 52.9368 40.4711 51.2206 42.0669L53.9445 44.9962C56.0771 43.0131 57.783 40.5788 58.9189 37.8365L55.2234 36.3058ZM55.2234 23.6944C56.8957 27.7318 56.8957 32.2683 55.2234 36.3058L58.9189 37.8365C60.9972 32.8189 60.9972 27.1812 58.9189 22.1636L55.2234 23.6944ZM46.3058 14.7767C50.3432 16.4491 53.551 19.6569 55.2234 23.6944L58.9189 22.1636C56.8405 17.146 52.8541 13.1596 47.8365 11.0812L46.3058 14.7767ZM52.001 48.8107C52.001 47.4996 52.7099 46.1443 53.9445 44.9962L51.2206 42.0669C49.467 43.6976 48.001 46.0412 48.001 48.8107H52.001ZM44.001 64.001C48.4193 64.001 52.001 60.4193 52.001 56.001H48.001C48.001 58.2101 46.2101 60.001 44.001 60.001V64.001ZM28.001 56.001C28.001 60.4193 31.5827 64.001 36.001 64.001V60.001C33.7918 60.001 32.001 58.2101 32.001 56.001H28.001ZM26.057 44.9975C27.2919 46.1456 28.001 47.5011 28.001 48.8124H32.001C32.001 46.0425 30.5346 43.6987 28.7806 42.068L26.057 44.9975Z"
            fill="currentColor"
          />
          <path
            d="M48 68H32"
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
            d="M46.5936 13.429C42.0661 11.5536 36.979 11.5536 32.4514 13.429C27.9239 15.3043 24.3268 18.9015 22.4514 23.429C20.5761 27.9565 20.5761 33.0436 22.4514 37.5711C23.4766 40.0461 25.0163 42.2431 26.9412 44.0327C28.4357 45.4222 29.5234 47.2718 29.5234 49.3124V56.501C29.5234 59.8147 32.2097 62.501 35.5234 62.501L43.5234 62.501C46.8371 62.501 49.5234 59.8147 49.5234 56.501V49.3107C49.5234 47.2704 50.6109 45.421 52.105 44.0315C54.0294 42.2421 55.5686 40.0456 56.5936 37.5711C58.4689 33.0436 58.4689 27.9565 56.5936 23.429C54.7182 18.9015 51.1211 15.3043 46.5936 13.429Z"
            fill="#F2994A"
          />
          <path
            d="M47.5225 68.5H31.5225"
            stroke="#F2994A"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M46.5936 13.429C42.0661 11.5536 36.979 11.5536 32.4514 13.429C27.9239 15.3043 24.3268 18.9015 22.4514 23.429C20.5761 27.9565 20.5761 33.0436 22.4514 37.5711C24.3268 42.0986 27.9239 45.6958 32.4514 47.5711C36.979 49.4465 42.0661 49.4465 46.5936 47.5711C51.1211 45.6958 54.7182 42.0986 56.5936 37.5711C58.4689 33.0436 58.4689 27.9565 56.5936 23.429C54.7182 18.9015 51.1211 15.3043 46.5936 13.429Z"
            fill="#F2C94C"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M46.5936 13.429C42.0661 11.5536 36.979 11.5536 32.4514 13.429C27.9239 15.3043 24.3268 18.9015 22.4514 23.429C20.5761 27.9565 20.5761 33.0436 22.4514 37.5711C23.4766 40.0461 25.0163 42.2431 26.9412 44.0327C28.4357 45.4222 29.5234 47.2718 29.5234 49.3124V56.501C29.5234 59.8147 32.2097 62.501 35.5234 62.501H43.5234C46.8371 62.501 49.5234 59.8147 49.5234 56.501V49.3107C49.5234 47.2704 50.6109 45.421 52.105 44.0315C54.0294 42.2421 55.5686 40.0456 56.5936 37.5711C58.4689 33.0436 58.4689 27.9565 56.5936 23.429C54.7182 18.9015 51.1211 15.3043 46.5936 13.429Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M47.5225 68.5001H31.5225M32.4514 13.429C36.979 11.5536 42.0661 11.5536 46.5936 13.429C51.1211 15.3043 54.7182 18.9015 56.5936 23.429C58.4689 27.9565 58.4689 33.0436 56.5936 37.5711C55.5686 40.0456 54.0294 42.2421 52.105 44.0315C50.6109 45.421 49.5234 47.2704 49.5234 49.3107V56.501C49.5234 59.8147 46.8371 62.501 43.5234 62.501H35.5234C32.2097 62.501 29.5234 59.8147 29.5234 56.501V49.3124C29.5234 47.2718 28.4357 45.4222 26.9412 44.0327C25.0163 42.2431 23.4766 40.0461 22.4514 37.5711C20.5761 33.0436 20.5761 27.9565 22.4514 23.429C24.3268 18.9015 27.9239 15.3043 32.4514 13.429Z"
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
            d="M47.8365 11.0812C42.8189 9.00287 37.1812 9.00287 32.1636 11.0812C27.146 13.1596 23.1596 17.146 21.0812 22.1636C19.0029 27.1812 19.0029 32.8189 21.0812 37.8365C22.2174 40.5794 23.9238 43.0142 26.057 44.9975C27.2919 46.1456 28.001 47.5011 28.001 48.8124V56.001C28.001 60.4193 31.5827 64.001 36.001 64.001H44.001C48.4193 64.001 52.001 60.4193 52.001 56.001V48.8107C52.001 47.4996 52.7099 46.1443 53.9445 44.9962C56.0771 43.0131 57.783 40.5788 58.9189 37.8365C60.9972 32.8189 60.9972 27.1812 58.9189 22.1636C56.8405 17.146 52.8541 13.1596 47.8365 11.0812ZM33.6944 14.7767C37.7318 13.1044 42.2683 13.1044 46.3058 14.7767C50.3432 16.4491 53.551 19.6569 55.2234 23.6944C56.8957 27.7318 56.8957 32.2683 55.2234 36.3058C54.3094 38.5124 52.9368 40.4711 51.2206 42.0669C49.467 43.6976 48.001 46.0412 48.001 48.8107V56.001C48.001 58.2101 46.2101 60.001 44.001 60.001H36.001C33.7918 60.001 32.001 58.2101 32.001 56.001V48.8124C32.001 46.0425 30.5346 43.6987 28.7806 42.068C27.0639 40.4719 25.691 38.5128 24.7767 36.3058C23.1044 32.2683 23.1044 27.7318 24.7767 23.6944C26.4491 19.6569 29.6569 16.4491 33.6944 14.7767Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M32.0001 66.0001C30.8955 66.0001 30.0001 66.8955 30.0001 68.0001C30.0001 69.1046 30.8955 70.0001 32.0001 70.0001H48.0001C49.1046 70.0001 50.0001 69.1046 50.0001 68.0001C50.0001 66.8955 49.1046 66.0001 48.0001 66.0001H32.0001Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreLightbulb1 = forwardRef((props, ref) => {
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

CoreLightbulb1.displayName = 'CoreLightbulb1'

export default CoreLightbulb1
