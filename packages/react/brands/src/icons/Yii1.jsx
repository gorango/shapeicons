
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <path
            d="M63.9345 5.00146C68.6662 7.42773 72.7303 13.7947 72.5265 22.4343C71.9081 33.0796 64.238 42.254 55.8928 50.7068C55.4255 40.3983 53.198 33.8289 49.72 24.5908C46.4364 15.2812 56.0365 5.29944 63.9345 5.00146Z"
            fill="url(#paint0_linearWsbD)"
          />
          <path
            d="M43.8014 42.0493C42.5519 44.5354 40.79 47.2782 38.3402 50.3446C34.0778 55.7508 29.7796 64.6166 31.1017 75.0104C50.2015 72.8906 55.0521 57.4224 54.7076 50.7314C54.6951 50.5821 54.6819 50.4324 54.6679 50.2821C54.6672 50.2812 54.6664 50.2803 54.6656 50.2794C54.6801 50.4297 54.6944 50.5809 54.7076 50.7314C51.7016 46.8357 48.1103 44.1498 43.8014 42.0493Z"
            fill="url(#paint1_linearWsbD)"
          />
          <path
            d="M46.1181 25.8066C50.9094 33.2929 53.927 41.87 54.7071 50.7303C51.7007 46.8342 48.1092 44.1489 43.7996 42.0483C47.2776 35.1289 46.7892 30.1986 46.1181 25.8066Z"
            fill="url(#paint2_linearWsbD)"
          />
          <path
            d="M44.3133 23.1613C35.8578 11.5955 21.2118 6.04438 7.60313 11.4634C6.97835 19.5949 10.4343 31.6868 24.4482 35.5353C25.9919 35.9953 27.4147 36.4091 28.7542 36.7987C32.5354 37.8984 35.6536 38.8052 38.9596 40.0138C40.6667 40.6378 42.2781 41.3068 43.7998 42.0487C47.2777 35.1294 46.7893 30.1991 46.1182 25.8072C46.1182 25.8072 44.6425 23.6115 44.3133 23.1613Z"
            fill="url(#paint3_linearWsbD)"
          />
          <defs><linearGradient id="paint0_linearWsbD" x1="60.7961" y1="5.00146" x2="60.7961" y2="50.7068" gradientUnits="userSpaceOnUse"><stop stop-color="#73B723"/><stop offset="1" stop-color="#D8EE61"/></linearGradient><linearGradient id="paint1_linearWsbD" x1="51.1106" y1="50.4983" x2="28.4161" y2="67.3601" gradientUnits="userSpaceOnUse"><stop stop-color="#98C9EA"/><stop offset="0.68865" stop-color="#026FB2"/><stop offset="1" stop-color="#086EB6"/></linearGradient><linearGradient id="paint2_linearWsbD" x1="47.1766" y1="33.5312" x2="56.7776" y2="37.3523" gradientUnits="userSpaceOnUse"><stop stop-color="#D4C883"/><stop offset="1" stop-color="#A1D1A7"/></linearGradient><linearGradient id="paint3_linearWsbD" x1="7.53406" y1="11.4573" x2="36.9363" y2="37.6769" gradientUnits="userSpaceOnUse"><stop stop-color="#D73721"/><stop offset="1" stop-color="#F7D768"/></linearGradient></defs>
        </>
      )
    case 'solid':
      return (
        <>
          <path
            d="M63.9345 5.00146C68.6662 7.42773 72.7303 13.7947 72.5265 22.4343C71.9081 33.0796 64.238 42.254 55.8928 50.7068C55.4255 40.3983 53.198 33.8289 49.72 24.5908C46.4364 15.2812 56.0365 5.29944 63.9345 5.00146Z"
            fill="currentColor"
          />
          <path
            d="M43.8014 42.0497C42.5519 44.5358 40.7901 47.2786 38.3402 50.345C34.0779 55.7512 29.7796 64.617 31.1017 75.0108C50.2016 72.891 55.0521 57.4227 54.7077 50.7318C54.6952 50.5825 54.682 50.4328 54.668 50.2825C54.6672 50.2816 54.6664 50.2807 54.6657 50.2798C54.6802 50.4301 54.6944 50.5813 54.7077 50.7318C51.7017 46.8361 48.1104 44.1502 43.8014 42.0497Z"
            fill="currentColor"
          />
          <path
            d="M46.1181 25.8071C50.9095 33.2933 53.9271 41.8705 54.7071 50.7308C51.7007 46.8346 48.1093 44.1493 43.7996 42.0487C47.2777 35.1294 46.7892 30.199 46.1181 25.8071Z"
            fill="currentColor"
          />
          <path
            d="M44.3133 23.1615C35.8578 11.5957 21.2118 6.04456 7.60313 11.4636C6.97835 19.5951 10.4343 31.687 24.4482 35.5355C25.9919 35.9955 27.4147 36.4093 28.7542 36.7988C32.5354 37.8985 35.6536 38.8054 38.9596 40.014C40.6667 40.638 42.278 41.3068 43.7996 42.0487C47.2777 35.1294 46.7892 30.199 46.1181 25.8071C46.1181 25.8071 44.6425 23.6117 44.3133 23.1615Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M54.7077 50.7318C55.0521 57.4227 50.2016 72.891 31.1017 75.0108C29.7796 64.617 34.0779 55.7512 38.3402 50.345C40.79 47.2786 42.5519 44.5358 43.8014 42.0497C48.1104 44.1502 51.7017 46.8361 54.7077 50.7318ZM54.7077 50.7318C54.6952 50.5825 54.682 50.4328 54.668 50.2825C54.6672 50.2816 54.6664 50.2807 54.6657 50.2798C54.6802 50.4301 54.6944 50.5813 54.7077 50.7318ZM46.1181 25.8071C46.7892 30.199 47.2777 35.1294 43.7996 42.0487M46.1181 25.8071C50.9095 33.2933 53.9271 41.8705 54.7071 50.7308C51.7007 46.8346 48.1093 44.1493 43.7996 42.0487M46.1181 25.8071C46.1181 25.8071 44.6425 23.6117 44.3133 23.1615C35.8578 11.5957 21.2118 6.04456 7.60313 11.4636C6.97835 19.5951 10.4343 31.687 24.4482 35.5355C25.9919 35.9955 27.4147 36.4093 28.7542 36.7988C32.5354 37.8985 35.6536 38.8054 38.9596 40.014C40.6667 40.638 42.278 41.3068 43.7996 42.0487M63.9345 5.00146C68.6662 7.42773 72.7303 13.7947 72.5265 22.4343C71.9081 33.0796 64.238 42.254 55.8928 50.7068C55.4255 40.3983 53.198 33.8289 49.72 24.5908C46.4364 15.2812 56.0365 5.29944 63.9345 5.00146Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsYii1 = forwardRef((props, ref) => {
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

BrandsYii1.displayName = 'BrandsYii1'

export default BrandsYii1
