
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M29.3935 14.3935C36.1848 11.5804 43.8154 11.5804 50.6067 14.3935C57.398 17.2065 62.7936 22.6022 65.6067 29.3935C68.4197 36.1848 68.4197 43.8154 65.6067 50.6067C62.7936 57.398 57.398 62.7936 50.6067 65.6067C43.8154 68.4197 36.1848 68.4197 29.3935 65.6067C22.6022 62.7936 17.2065 57.398 14.3935 50.6067C11.5804 43.8154 11.5804 36.1848 14.3935 29.3935C17.2065 22.6022 22.6022 17.2065 29.3935 14.3935Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M49.5562 24.4466C53.682 34.4071 53.682 45.5987 49.5562 55.5593C47.6893 60.0664 45.0468 64.1544 41.79 67.662C40.5987 67.7391 39.4036 67.7392 38.2123 67.6622C34.9543 64.154 32.3109 60.0649 30.4435 55.5566C26.3177 45.596 26.3177 34.4045 30.4435 24.4439C32.3097 19.9385 34.9508 15.8519 38.2059 12.3452C39.3997 12.2678 40.5973 12.2677 41.7911 12.345C45.0474 15.8524 47.6895 19.94 49.5562 24.4466Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M13.7844 49H66.2134"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M14.1494 30H65.8485"
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
            d="M29.3935 14.3934C31.2873 13.609 33.2464 13.0433 35.2343 12.6963C32.5048 15.9717 30.2575 19.6669 28.5958 23.6785C28.0081 25.0973 27.5002 26.54 27.0721 28H15.0161C17.9622 21.8656 23.0735 17.0112 29.3935 14.3934Z"
            fill="currentColor"
          />
          <path
            d="M14.1495 30.0026C11.79 36.1032 11.6684 42.8317 13.7846 48.997V47H25.9274C25.101 42.0318 25.1605 36.9521 26.1061 32H14.1495V30.0026Z"
            fill="currentColor"
          />
          <path
            d="M30.1861 32C29.1407 36.9415 29.0747 42.0388 29.9882 47H50.0121C50.9253 42.0388 50.859 36.9414 49.8132 32H30.1861Z"
            fill="currentColor"
          />
          <path
            d="M53.8933 32C54.8392 36.952 54.899 42.0318 54.0729 47H66.2136V49.0029C68.3325 42.8342 68.2108 36.1013 65.8486 29.9974V32H53.8933Z"
            fill="currentColor"
          />
          <path
            d="M64.9841 28H52.927C52.499 26.5409 51.9914 25.0991 51.404 23.6811C49.7419 19.6683 47.4936 15.972 44.7629 12.6958C46.7519 13.0427 48.7119 13.6086 50.6067 14.3934C56.9266 17.0112 62.038 21.8656 64.9841 28Z"
            fill="currentColor"
          />
          <path
            d="M65.4402 51H53.2087C52.7275 52.8028 52.126 54.5816 51.404 56.3246C49.743 60.3347 47.4967 64.0287 44.7685 67.3032C46.7555 66.9562 48.7137 66.3907 50.6067 65.6066C57.2663 62.8481 62.5839 57.6061 65.4402 51Z"
            fill="currentColor"
          />
          <path
            d="M49.0533 51H30.9474C31.3276 52.2804 31.7755 53.5459 32.2913 54.7912C33.9622 58.825 36.2863 62.5056 39.136 65.7053C39.7126 65.7247 40.2897 65.7246 40.8663 65.7052C43.7149 62.5061 46.0381 58.8265 47.7085 54.7938C48.2247 53.5477 48.6729 52.2813 49.0533 51Z"
            fill="currentColor"
          />
          <path
            d="M26.7919 51H14.56C17.4163 57.6061 22.7338 62.8481 29.3935 65.6066C31.2872 66.391 33.2461 66.9567 35.234 67.3036C32.5046 64.0283 30.2574 60.3333 28.5958 56.3219C27.8742 54.5798 27.2729 52.8019 26.7919 51Z"
            fill="currentColor"
          />
          <path
            d="M48.7398 28H31.2592C31.5663 27.0601 31.9103 26.1291 32.2913 25.2092C33.961 21.1782 36.2831 17.4999 39.1301 14.3017C39.709 14.2822 40.2884 14.2821 40.8673 14.3017C43.7154 17.5005 46.0383 21.1797 47.7085 25.2119C48.0892 26.1309 48.433 27.061 48.7398 28Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M29.3934 14.3934C36.1847 11.5804 43.8153 11.5804 50.6066 14.3934C57.3979 17.2064 62.7936 22.6021 65.6066 29.3934C68.4196 36.1847 68.4196 43.8153 65.6066 50.6066C62.7936 57.3979 57.3979 62.7936 50.6066 65.6066C43.8153 68.4196 36.1847 68.4196 29.3934 65.6066C22.6021 62.7936 17.2064 57.3979 14.3934 50.6066C11.5804 43.8153 11.5804 36.1847 14.3934 29.3934C17.2064 22.6021 22.6021 17.2064 29.3934 14.3934Z"
            fill="#2F80ED"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M29.0577 56.1306C24.7796 45.8025 24.7796 34.198 29.0577 23.8699C30.7743 19.7256 33.1232 15.9231 35.988 12.5789C38.6473 12.19 41.3497 12.1898 44.009 12.5785C46.8749 15.9234 49.2248 19.727 50.942 23.8726C55.22 34.2007 55.22 45.8052 50.942 56.1333C49.2246 60.2794 46.8743 64.0834 44.0079 67.4287C41.351 67.8168 38.6512 67.8169 35.9944 67.429C33.1267 64.083 30.7755 60.2779 29.0577 56.1306ZM31.8293 25.0179C33.7573 20.3632 36.5443 16.1727 39.9985 12.6378C43.454 16.1732 46.2418 20.3647 48.1703 25.0206C52.1439 34.6136 52.1439 45.3922 48.1703 54.9853C46.2423 59.6399 43.4554 63.8305 40.0011 67.3654C36.5457 63.8299 33.7578 59.6384 31.8293 54.9826C27.8557 45.3896 27.8557 34.6109 31.8293 25.0179Z"
            fill="#F2F2F2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.618 31.5C13.8467 30.7902 14.1048 30.0874 14.3923 29.3934C14.5168 29.0928 14.6463 28.795 14.7808 28.5L65.2169 28.5C65.3514 28.795 65.481 29.0928 65.6055 29.3934C65.8929 30.0874 66.151 30.7902 66.3798 31.5L13.618 31.5ZM14.3484 50.5C13.9454 49.5157 13.6015 48.514 13.3164 47.5L66.6813 47.5C66.3963 48.514 66.0523 49.5157 65.6494 50.5L14.3484 50.5Z"
            fill="#F2F2F2"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M29.3935 14.3935C36.1848 11.5804 43.8154 11.5804 50.6067 14.3935C57.398 17.2065 62.7936 22.6022 65.6067 29.3935C68.4197 36.1848 68.4197 43.8154 65.6067 50.6067C62.7936 57.398 57.398 62.7936 50.6067 65.6067C43.8154 68.4197 36.1848 68.4197 29.3935 65.6067C22.6022 62.7936 17.2065 57.398 14.3935 50.6067C11.5804 43.8154 11.5804 36.1848 14.3935 29.3935C17.2065 22.6022 22.6022 17.2065 29.3935 14.3935Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M49.5563 24.4466C53.6821 34.4071 53.6821 45.5987 49.5563 55.5593C47.6894 60.0664 45.0469 64.1544 41.7901 67.662C40.5988 67.7391 39.4037 67.7392 38.2124 67.6622C34.9544 64.154 32.311 60.0649 30.4436 55.5566C26.3178 45.596 26.3178 34.4045 30.4436 24.4439C32.3098 19.9385 34.951 15.8519 38.206 12.3452C39.3998 12.2678 40.5974 12.2677 41.7912 12.345C45.0475 15.8524 47.6896 19.94 49.5563 24.4466Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M13.7846 49.0001H66.2136M14.1495 30.0001H65.8486M14.3935 29.3935C17.2065 22.6022 22.6022 17.2065 29.3935 14.3935C36.1848 11.5804 43.8154 11.5804 50.6067 14.3935C57.398 17.2065 62.7936 22.6022 65.6067 29.3935C68.4197 36.1848 68.4197 43.8154 65.6067 50.6067C62.7936 57.398 57.398 62.7936 50.6067 65.6067C43.8154 68.4197 36.1848 68.4197 29.3935 65.6067C22.6022 62.7936 17.2065 57.398 14.3935 50.6067C11.5804 43.8154 11.5804 36.1848 14.3935 29.3935ZM49.5563 55.5593C53.6821 45.5987 53.6821 34.4071 49.5563 24.4466C47.6896 19.94 45.0475 15.8524 41.7912 12.345C40.5974 12.2677 39.3998 12.2678 38.206 12.3452C34.951 15.8519 32.3098 19.9385 30.4436 24.4439C26.3178 34.4045 26.3178 45.596 30.4436 55.5566C32.311 60.0649 34.9544 64.154 38.2124 67.6622C39.4037 67.7392 40.5988 67.7391 41.7901 67.662C45.0469 64.1544 47.6894 60.0664 49.5563 55.5593Z"
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
            d="M28.6281 12.5452C35.9095 9.52919 44.0907 9.52919 51.372 12.5452C58.6534 15.5613 64.4384 21.3463 67.4544 28.6276C70.4705 35.909 70.4705 44.0902 67.4544 51.3716C64.4384 58.6529 58.6534 64.4379 51.372 67.4539C48.372 68.6966 45.2192 69.4273 42.0396 69.6459C41.9997 69.6509 41.9596 69.6548 41.9192 69.6574C40.642 69.74 39.3607 69.7401 38.0835 69.6575C38.0431 69.6549 38.003 69.6511 37.9631 69.6461C34.7825 69.4276 31.6289 68.6969 28.6281 67.4539C21.3468 64.4379 15.5617 58.6529 12.5457 51.3716C9.52968 44.0902 9.52968 35.909 12.5457 28.6276C15.5617 21.3463 21.3468 15.5613 28.6281 12.5452ZM49.8413 63.7584C48.8052 64.1876 47.748 64.5462 46.6766 64.8343C48.5573 62.2081 50.148 59.3565 51.404 56.3242C52.126 54.5812 52.7275 52.8024 53.2087 50.9996H63.2452C60.522 56.7547 55.7512 61.3105 49.8413 63.7584ZM64.7455 46.9996C66.1348 42.0887 66.0332 36.8646 64.4405 31.9996H53.8933C54.8392 36.9516 54.899 42.0314 54.0729 46.9996H64.7455ZM50.0121 46.9996H29.9882C29.0747 42.0384 29.1407 36.9411 30.1861 31.9996H49.8132C50.859 36.941 50.9253 42.0384 50.0121 46.9996ZM49.0533 50.9996H30.9474C31.3276 52.28 31.7755 53.5455 32.2913 54.7907C33.9616 58.8231 36.2846 62.5024 39.1329 65.7014C39.7116 65.7209 40.2908 65.7208 40.8694 65.7013C43.7166 62.503 46.0388 58.8246 47.7085 54.7934C48.2247 53.5473 48.6729 52.2809 49.0533 50.9996ZM25.9274 46.9996C25.101 42.0314 25.1605 36.9517 26.1061 31.9996H15.5596C13.967 36.8646 13.8653 42.0887 15.2546 46.9996H25.9274ZM16.755 50.9996H26.7919C27.2729 52.8015 27.8742 54.5794 28.5958 56.3215C29.8524 59.3551 31.4439 62.2078 33.3255 64.8348C32.2535 64.5467 31.1956 64.1879 30.1588 63.7584C24.2489 61.3105 19.4781 56.7547 16.755 50.9996ZM17.255 27.9996H27.0721C27.5002 26.5396 28.0081 25.0969 28.5958 23.678C29.8525 20.6443 31.444 17.7914 33.3258 15.1643C32.2537 15.4524 31.1957 15.8113 30.1588 16.2407C24.5955 18.5451 20.0416 22.7174 17.255 27.9996ZM31.2592 27.9996C31.5663 27.0597 31.9103 26.1287 32.2913 25.2088C33.961 21.1778 36.2831 17.4995 39.1301 14.3013C39.709 14.2817 40.2884 14.2817 40.8673 14.3012C43.7154 17.5001 46.0383 21.1793 47.7085 25.2115C48.0892 26.1305 48.433 27.0606 48.7398 27.9996H31.2592ZM52.927 27.9996C52.499 26.5405 51.9914 25.0987 51.404 23.6807C50.1469 20.6456 48.5544 17.7916 46.6716 15.1636C47.7446 15.4518 48.8035 15.8109 49.8413 16.2407C55.4046 18.5451 59.9585 22.7174 62.7451 27.9996H52.927Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreGlobe = forwardRef((props, ref) => {
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

CoreGlobe.displayName = 'CoreGlobe'

export default CoreGlobe
