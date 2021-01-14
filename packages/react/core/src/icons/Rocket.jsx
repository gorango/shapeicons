
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M40.5785 10.6969C40.4333 10.5724 40.219 10.5724 40.0738 10.6969L36.5061 13.7549C30.0448 19.2932 26.3262 27.3783 26.3262 35.8883C26.3262 38.9311 26.8025 41.955 27.738 44.8504L34.5417 65.9096C34.6517 66.25 34.9685 66.4806 35.3262 66.4806H45.3262C45.6838 66.4806 46.0007 66.25 46.1106 65.9096L52.9144 44.8504C53.8498 41.955 54.3262 38.9311 54.3262 35.8883C54.3262 27.3783 50.6075 19.2932 44.1462 13.7549L40.5785 10.6969Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M37.7282 25.9803C39.3359 25.0521 41.3167 25.0521 42.9244 25.9803C44.5321 26.9085 45.5224 28.6239 45.5224 30.4803C45.5224 32.3367 44.532 34.0521 42.9244 34.9803C41.3167 35.9085 39.3359 35.9085 37.7282 34.9803C36.1205 34.0521 35.1301 32.3367 35.1301 30.4803C35.1301 28.6239 36.1205 26.9085 37.7282 25.9803Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M27.2529 43.1797C26.7195 43.5379 26.2182 43.9491 25.7573 44.41L19.88 50.2869C17.7074 52.4593 16.9714 55.6843 17.9863 58.5842L21.5086 68.6478C21.8253 69.5526 22.9787 69.8156 23.6562 69.1375L32.6721 60.1223"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M47.8213 60.6162L56.3424 69.1373C57.0209 69.8158 58.1754 69.5524 58.4924 68.6466L62.0134 58.5865C63.0286 55.6858 62.2925 52.46 60.1194 50.2869L54.2428 44.4103C53.9432 44.1107 53.6264 43.832 53.2949 43.5752"
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
            d="M40.0738 10.6969C40.219 10.5724 40.4333 10.5724 40.5785 10.6969L44.1462 13.7549C50.6075 19.2932 54.3262 27.3783 54.3262 35.8883C54.3262 38.9311 53.8498 41.955 52.9144 44.8504L46.1106 65.9096C46.0007 66.25 45.6838 66.4806 45.3262 66.4806H35.3262C34.9685 66.4806 34.6517 66.25 34.5417 65.9096L27.738 44.8504C26.8025 41.955 26.3262 38.9311 26.3262 35.8883C26.3262 27.3783 30.0448 19.2932 36.5061 13.7549L40.0738 10.6969ZM42.9242 25.9808C41.3166 25.0526 39.3358 25.0526 37.7281 25.9808C36.1204 26.909 35.13 28.6244 35.13 30.4808C35.13 32.3372 36.1204 34.0526 37.7281 34.9808C39.3358 35.909 41.3166 35.909 42.9242 34.9808C44.5319 34.0526 45.5223 32.3372 45.5223 30.4808C45.5223 28.6244 44.5319 26.909 42.9242 25.9808Z"
            fill="currentColor"
          />
          <path
            d="M24.7659 45.4014L19.88 50.2869C17.7074 52.4593 16.9714 55.6843 17.9863 58.5842L21.5086 68.6478C21.8253 69.5526 22.9787 69.8156 23.6562 69.1375L30.2892 62.505L24.8836 45.7735C24.8436 45.6497 24.8043 45.5256 24.7659 45.4014Z"
            fill="currentColor"
          />
          <path
            d="M50.2043 62.999L56.3425 69.1372C57.021 69.8158 58.1755 69.5523 58.4925 68.6466L62.0135 58.5865C63.0288 55.6858 62.2926 52.4599 60.1195 50.2868L55.7296 45.8969L50.2043 62.999Z"
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
            d="M27.2529 43.1797C26.7195 43.5379 26.2182 43.9491 25.7573 44.41L19.88 50.2869C17.7074 52.4593 16.9714 55.6843 17.9863 58.5842L21.5086 68.6478C21.8253 69.5526 22.9787 69.8156 23.6562 69.1375L23.6589 69.1348L32.6721 60.1223L27.7383 44.8512C27.5597 44.2985 27.3979 43.741 27.2529 43.1797ZM47.8214 60.6162L56.3425 69.1372C57.021 69.8158 58.1755 69.5523 58.4925 68.6466L62.0135 58.5865C63.0288 55.6858 62.2926 52.4599 60.1195 50.2868L54.243 44.4103C53.9433 44.1106 53.6265 43.8319 53.295 43.5751C53.1781 44.003 53.0513 44.4285 52.9147 44.8512L47.8214 60.6162Z"
            fill="#F2C94C"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40.0738 10.6969C40.219 10.5724 40.4333 10.5724 40.5785 10.6969L44.1462 13.7549C50.6075 19.2932 54.3262 27.3783 54.3262 35.8883C54.3262 38.9311 53.8498 41.955 52.9144 44.8504L46.1106 65.9096C46.0007 66.25 45.6838 66.4806 45.3262 66.4806H35.3262C34.9685 66.4806 34.6517 66.25 34.5417 65.9096L27.738 44.8504C26.8025 41.955 26.3262 38.9311 26.3262 35.8883C26.3262 27.3783 30.0448 19.2932 36.5061 13.7549L40.0738 10.6969Z"
            fill="#EB5757"
          />
          <path
            d="M37.7281 25.9805C39.3358 25.0523 41.3166 25.0523 42.9242 25.9805C44.5319 26.9087 45.5223 28.6241 45.5223 30.4805C45.5223 32.3369 44.5319 34.0523 42.9242 34.9805C41.3166 35.9087 39.3358 35.9087 37.7281 34.9805C36.1204 34.0523 35.13 32.3369 35.13 30.4805C35.13 28.6241 36.1204 26.9087 37.7281 25.9805Z"
            fill="#F2F2F2"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M27.2529 43.1798C26.7195 43.538 26.2182 43.9492 25.7573 44.4101L19.88 50.287C17.7074 52.4594 16.9714 55.6844 17.9863 58.5843L21.5086 68.6479C21.8253 69.5527 22.9787 69.8157 23.6562 69.1376L32.6721 60.1224L27.7383 44.8513C27.5597 44.2986 27.3979 43.7411 27.2529 43.1798Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M47.8214 60.6163L56.3425 69.1373C57.021 69.8159 58.1755 69.5524 58.4925 68.6467L62.0135 58.5866C63.0288 55.6859 62.2926 52.46 60.1195 50.2869L54.243 44.4104C53.9433 44.1107 53.6265 43.832 53.295 43.5753C53.1781 44.0031 53.0513 44.4286 52.9147 44.8513L47.8214 60.6163Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M40.0738 10.6969C40.219 10.5724 40.4333 10.5724 40.5785 10.6969L44.1462 13.7549C50.6075 19.2932 54.3262 27.3783 54.3262 35.8883C54.3262 38.9311 53.8501 41.9559 52.9147 44.8513L46.1106 65.9096C46.0007 66.25 45.6838 66.4806 45.3262 66.4806H35.3262C34.9685 66.4806 34.6517 66.25 34.5417 65.9096L27.7383 44.8513C26.8029 41.9559 26.3262 38.9311 26.3262 35.8883C26.3262 27.3783 30.0448 19.2932 36.5061 13.7549L40.0738 10.6969Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M37.7281 25.9808C39.3358 25.0526 41.3166 25.0526 42.9242 25.9808C44.5319 26.909 45.5223 28.6244 45.5223 30.4808C45.5223 32.3372 44.5319 34.0526 42.9242 34.9808C41.3166 35.909 39.3358 35.909 37.7281 34.9808C36.1204 34.0526 35.13 32.3372 35.13 30.4808C35.13 28.6244 36.1204 26.909 37.7281 25.9808Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M27.7383 44.8513L32.6721 60.1224L23.6562 69.1376C22.9787 69.8157 21.8253 69.5527 21.5086 68.6479L17.9863 58.5843C16.9714 55.6844 17.7074 52.4594 19.88 50.287L25.7573 44.4101C26.2182 43.9492 26.7195 43.538 27.2529 43.1798C27.3979 43.7411 27.5597 44.2986 27.7383 44.8513ZM27.7383 44.8513L34.5417 65.9096C34.6517 66.25 34.9685 66.4806 35.3262 66.4806H45.3262C45.6838 66.4806 46.0007 66.25 46.1106 65.9096L52.9147 44.8513M27.7383 44.8513C26.8029 41.9559 26.3262 38.9311 26.3262 35.8883C26.3262 27.3783 30.0448 19.2932 36.5061 13.7549L40.0738 10.6969C40.219 10.5724 40.4333 10.5724 40.5785 10.6969L44.1462 13.7549C50.6075 19.2932 54.3262 27.3783 54.3262 35.8883C54.3262 38.9311 53.8501 41.9559 52.9147 44.8513M52.9147 44.8513C53.0513 44.4286 53.1781 44.0031 53.295 43.5753C53.6265 43.832 53.9433 44.1107 54.243 44.4104L60.1195 50.2869C62.2926 52.46 63.0288 55.6859 62.0135 58.5866L58.4925 68.6467C58.1755 69.5524 57.021 69.8159 56.3425 69.1373L47.8214 60.6163L52.9147 44.8513ZM35.13 30.4808C35.13 28.6244 36.1204 26.909 37.7281 25.9808C39.3358 25.0526 41.3166 25.0526 42.9242 25.9808C44.5319 26.909 45.5223 28.6244 45.5223 30.4808C45.5223 32.3372 44.5319 34.0526 42.9242 34.9808C41.3166 35.909 39.3358 35.909 37.7281 34.9808C36.1204 34.0526 35.13 32.3372 35.13 30.4808Z"
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M43.9243 24.2488C41.6978 22.9633 38.9546 22.9633 36.7281 24.2488C34.5017 25.5342 33.1301 27.9099 33.1301 30.4808C33.1301 33.0518 34.5017 35.4274 36.7281 36.7129C38.9546 37.9983 41.6978 37.9983 43.9243 36.7129C46.1508 35.4274 47.5224 33.0518 47.5224 30.4808C47.5224 27.9099 46.1508 25.5342 43.9243 24.2488ZM38.7281 27.7129C39.717 27.1419 40.9354 27.1419 41.9243 27.7129C42.9132 28.2838 43.5224 29.3389 43.5224 30.4808C43.5224 31.6227 42.9132 32.6778 41.9243 33.2488C40.9354 33.8197 39.717 33.8197 38.7281 33.2488C37.7393 32.6778 37.1301 31.6227 37.1301 30.4808C37.1301 29.3389 37.7393 28.2838 38.7281 27.7129Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M38.7723 9.17835C39.6665 8.4119 40.986 8.4119 41.8802 9.17835L45.4479 12.2364C52.3525 18.1546 56.3262 26.7945 56.3262 35.8883C56.3262 38.2421 56.0595 40.5854 55.5329 42.8737C55.5746 42.9142 55.6161 42.955 55.6572 42.9962L61.5338 48.8727C64.2502 51.5891 65.1704 55.6214 63.9013 59.2473L60.3803 69.3074C59.5764 71.6041 56.649 72.2722 54.9284 70.5516L48.7189 64.3421L48.0138 66.5245C47.6371 67.6905 46.5516 68.4806 45.3262 68.4806H35.3262C34.1009 68.4806 33.0153 67.6905 32.6386 66.5245L31.7741 63.8487L25.0731 70.5492L25.0715 70.5508C23.3521 72.2717 20.4246 71.6048 19.6209 69.3086L16.0987 59.245C14.8299 55.6199 15.75 51.5884 18.4659 48.8727L24.3432 42.9959C24.5582 42.7808 24.7806 42.5748 25.0097 42.378C24.5559 40.2476 24.3262 38.0725 24.3262 35.8883C24.3262 26.7945 28.3 18.1546 35.2046 12.2364L38.7723 9.17835ZM26.249 46.7469L30.3929 59.5732L23.0287 66.9368L19.8741 57.9236C19.113 55.7489 19.6649 53.3304 21.2942 51.7013L26.249 46.7469ZM36.1819 64.4806L34.5793 59.5201L34.5753 59.5076L29.6415 44.2364C29.4752 43.7216 29.3244 43.2024 29.1894 42.6796L29.1844 42.6608C28.6151 40.4505 28.3262 38.1751 28.3262 35.8883C28.3262 27.9622 31.7897 20.4317 37.8077 15.2734L40.3262 13.1147L42.8447 15.2734C48.8627 20.4317 52.3262 27.9622 52.3262 35.8883C52.3262 38.7223 51.8825 41.5388 51.0113 44.2355L44.4706 64.4806H36.1819ZM54.2447 47.2405L50.1007 60.0671L56.9716 66.938L60.1259 57.9259C60.8873 55.7504 60.3352 53.331 58.7054 51.7012L54.2447 47.2405Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreRocket = forwardRef((props, ref) => {
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

CoreRocket.displayName = 'CoreRocket'

export default CoreRocket
