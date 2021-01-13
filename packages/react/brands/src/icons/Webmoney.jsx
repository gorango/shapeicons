
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
            fill="#036CB5"
          />
          <path
            d="M39.8811 15C43.7819 15 47.4932 15.9075 50.8237 17.5309C51.346 17.7702 51.8717 18.0566 52.3923 18.3432L50.1087 20.3972L46.6852 16.8153L40.7862 22.0682L37.3125 18.2948L26.4651 28.0856L33.4099 35.7747L30.6988 38.162L37.5505 45.8511L34.8391 48.2375L44.6402 59.1743L50.441 53.8251L55.4863 59.5576C54.4864 60.3218 53.3922 61.0875 52.2042 61.755C48.5879 63.8083 44.4006 65 39.9291 65C26.1786 65 15.0002 53.7792 15.0002 39.9785C14.9516 26.2711 26.132 15 39.8811 15ZM35.3131 38.4492L41.2602 33.1L46.5898 39.0695L40.6414 44.4182L35.3131 38.4492ZM39.5485 48.7651L45.4472 43.3686L50.8237 49.3377L44.8763 54.6871L39.5485 48.7651ZM31.0814 28.2773L37.0268 22.9281L42.3551 28.8977L36.4078 34.2466L31.0814 28.2773ZM41.974 25.4109L46.3988 21.3995L50.3961 25.8411L45.9712 29.8999L41.974 25.4109ZM49.8723 43.7976L54.2957 39.7859L58.2928 44.2739L53.8677 48.2881L49.8723 43.7976ZM53.7729 52.8247L58.198 48.8123L62.1919 53.2536L57.7685 57.3119L53.7729 52.8247ZM55.5811 32.1925L58.5303 29.5178L61.1937 32.4799L58.2449 35.1536L55.5811 32.1925ZM51.775 23.3573L54.7245 20.6358L57.3898 23.644L54.4381 26.3184L51.775 23.3573ZM59.3391 41.0284L62.2883 38.354L65 41.315L62.0039 43.9888L59.3391 41.0284ZM46.066 34.3899L50.4911 30.3782L54.4864 34.8189L50.0633 38.8313L46.066 34.3899Z"
            fill="white"
          />
        </>
      )
    case 'solid':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 75C59.33 75 75 59.33 75 40C75 20.67 59.33 5 40 5C20.67 5 5 20.67 5 40C5 59.33 20.67 75 40 75ZM50.8237 17.5309C47.4932 15.9075 43.7819 15 39.8811 15C26.132 15 14.9516 26.2711 15.0002 39.9785C15.0002 53.7792 26.1786 65 39.9291 65C44.4006 65 48.5879 63.8083 52.2042 61.755C53.3922 61.0875 54.4864 60.3218 55.4863 59.5576L50.441 53.8251L44.6402 59.1743L34.8391 48.2375L37.5505 45.8511L30.6987 38.162L33.4099 35.7747L26.4651 28.0856L37.3125 18.2948L40.7862 22.0682L46.6852 16.8153L50.1087 20.3972L52.3923 18.3432C51.8717 18.0566 51.346 17.7702 50.8237 17.5309ZM41.2602 33.1L35.3131 38.4492L40.6414 44.4182L46.5898 39.0695L41.2602 33.1ZM45.4472 43.3686L39.5485 48.7651L44.8763 54.6871L50.8237 49.3377L45.4472 43.3686ZM37.0268 22.9281L31.0814 28.2773L36.4078 34.2466L42.3551 28.8977L37.0268 22.9281ZM46.3988 21.3995L41.974 25.4109L45.9712 29.8999L50.3961 25.8411L46.3988 21.3995ZM54.2957 39.7859L49.8723 43.7976L53.8677 48.2881L58.2928 44.2739L54.2957 39.7859ZM58.198 48.8123L53.7729 52.8247L57.7685 57.3119L62.1919 53.2536L58.198 48.8123ZM58.5303 29.5178L55.5811 32.1925L58.2449 35.1536L61.1937 32.4799L58.5303 29.5178ZM54.7245 20.6358L51.775 23.3573L54.4381 26.3184L57.3898 23.644L54.7245 20.6358ZM62.2883 38.354L59.3391 41.0284L62.0039 43.9888L65 41.315L62.2883 38.354ZM50.4911 30.3782L46.066 34.3899L50.0633 38.8313L54.4864 34.8189L50.4911 30.3782Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 75C59.33 75 75 59.33 75 40C75 20.67 59.33 5 40 5C20.67 5 5 20.67 5 40C5 59.33 20.67 75 40 75ZM50.8237 17.5309C47.4932 15.9075 43.7819 15 39.8811 15C26.132 15 14.9516 26.2711 15.0002 39.9785C15.0002 53.7792 26.1786 65 39.9291 65C44.4006 65 48.5879 63.8083 52.2042 61.755C53.3922 61.0875 54.4864 60.3218 55.4863 59.5576L50.441 53.8251L44.6402 59.1743L34.8391 48.2375L37.5505 45.8511L30.6987 38.162L33.4099 35.7747L26.4651 28.0856L37.3125 18.2948L40.7862 22.0682L46.6852 16.8153L50.1087 20.3972L52.3923 18.3432C51.8717 18.0566 51.346 17.7702 50.8237 17.5309ZM41.2602 33.1L35.3131 38.4492L40.6414 44.4182L46.5898 39.0695L41.2602 33.1ZM45.4472 43.3686L39.5485 48.7651L44.8763 54.6871L50.8237 49.3377L45.4472 43.3686ZM37.0268 22.9281L31.0814 28.2773L36.4078 34.2466L42.3551 28.8977L37.0268 22.9281ZM46.3988 21.3995L41.974 25.4109L45.9712 29.8999L50.3961 25.8411L46.3988 21.3995ZM54.2957 39.7859L49.8723 43.7976L53.8677 48.2881L58.2928 44.2739L54.2957 39.7859ZM58.198 48.8123L53.7729 52.8247L57.7685 57.3119L62.1919 53.2536L58.198 48.8123ZM58.5303 29.5178L55.5811 32.1925L58.2449 35.1536L61.1937 32.4799L58.5303 29.5178ZM54.7245 20.6358L51.775 23.3573L54.4381 26.3184L57.3898 23.644L54.7245 20.6358ZM62.2883 38.354L59.3391 41.0284L62.0039 43.9888L65 41.315L62.2883 38.354ZM50.4911 30.3782L46.066 34.3899L50.0633 38.8313L54.4864 34.8189L50.4911 30.3782Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsWebmoney = forwardRef((props, ref) => {
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

BrandsWebmoney.displayName = 'BrandsWebmoney'

export default BrandsWebmoney
