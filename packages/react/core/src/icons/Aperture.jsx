
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M63.6421 29.5005L33.938 29.5005L42.7278 14.276C45.172 14.5351 47.588 15.1434 49.8997 16.101C56.0368 18.643 60.9527 23.4447 63.6421 29.5005Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M60.9145 55.2248L46.0625 29.5004H63.6422C64.6399 31.7466 65.3211 34.1431 65.6477 36.6239C66.5147 43.2097 64.8143 49.8679 60.9145 55.2248Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M37.2729 65.7246L52.125 40.0001L60.9148 55.2246C59.4684 57.2117 57.7336 58.9999 55.7484 60.5231C50.4784 64.5669 43.8621 66.4234 37.2729 65.7246Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M16.3589 50.5001H46.063L37.2731 65.7246C34.8289 65.4655 32.413 64.8572 30.1012 63.8996C23.9642 61.3576 19.0482 56.5559 16.3589 50.5001Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M19.0864 24.7763L33.9384 50.5008H16.3587C15.361 48.2545 14.6799 45.8581 14.3532 43.3773C13.4862 36.7914 15.1866 30.1332 19.0864 24.7763Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M42.7273 14.2762L27.8753 40.0007L19.0854 24.7762C20.5319 22.789 22.2667 21.0009 24.2519 19.4777C29.5219 15.4338 36.1382 13.5773 42.7273 14.2762Z"
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
            d="M19.0315 29.683C17.0092 33.7933 16.2241 38.4413 16.8309 43.05C17.055 44.7527 17.464 46.4112 18.0428 47.9997H29.6072L25.7345 41.2919C25.7261 41.278 25.7178 41.2641 25.7097 41.25L19.0315 29.683Z"
            fill="currentColor"
          />
          <path
            d="M38.2672 26.9998H46.0262L46.0615 26.9995L59.4181 26.9995C56.8696 23.1929 53.2368 20.1889 48.9421 18.41C47.3554 17.7527 45.7145 17.2777 44.0494 16.9847L38.2672 26.9998Z"
            fill="currentColor"
          />
          <path
            d="M22.0929 24.9845L27.875 34.9995L31.7646 28.2626C31.767 28.2583 31.7695 28.254 31.772 28.2498L38.4503 16.6826C33.8793 16.9863 29.4613 18.6304 25.7732 21.4604C24.4108 22.5058 23.1791 23.6891 22.0929 24.9845Z"
            fill="currentColor"
          />
          <path
            d="M33.9374 52.9998H20.5807C23.1292 56.8065 26.762 59.8105 31.0568 61.5895C32.6435 62.2467 34.2843 62.7217 35.9494 63.0147L41.7316 52.9997H33.9651L33.9374 52.9998Z"
            fill="currentColor"
          />
          <path
            d="M41.5487 63.3167C46.1196 63.013 50.5376 61.3688 54.2256 58.5389C55.588 57.4935 56.8198 56.3101 57.906 55.0148L52.1238 44.9998L48.2405 51.7259L48.2269 51.7497L41.5487 63.3167Z"
            fill="currentColor"
          />
          <path
            d="M54.2891 38.7493L60.9674 50.3164C62.9897 46.2061 63.7748 41.5581 63.168 36.9493C62.9439 35.2467 62.5349 33.5882 61.9561 31.9998H50.3918L54.2653 38.7089L54.2791 38.7322L54.2891 38.7493Z"
            fill="currentColor"
          />
          <path
            d="M19.0315 29.683C17.0092 33.7933 16.2241 38.4413 16.8309 43.05C17.055 44.7527 17.464 46.4112 18.0428 47.9997H29.6072L25.7345 41.2919C25.7261 41.278 25.7178 41.2641 25.7097 41.25L19.0315 29.683Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M38.2672 26.9998H46.0262L46.0615 26.9995L59.4181 26.9995C56.8696 23.1929 53.2368 20.1889 48.9421 18.41C47.3554 17.7527 45.7145 17.2777 44.0494 16.9847L38.2672 26.9998Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M22.0929 24.9845L27.875 34.9995L31.7646 28.2626C31.767 28.2583 31.7695 28.254 31.772 28.2498L38.4503 16.6826C33.8793 16.9863 29.4613 18.6304 25.7732 21.4604C24.4108 22.5058 23.1791 23.6891 22.0929 24.9845Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M33.9374 52.9998H20.5807C23.1292 56.8065 26.762 59.8105 31.0568 61.5895C32.6435 62.2467 34.2843 62.7217 35.9494 63.0147L41.7316 52.9997H33.9651L33.9374 52.9998Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M41.5487 63.3167C46.1196 63.013 50.5376 61.3688 54.2256 58.5389C55.588 57.4935 56.8198 56.3101 57.906 55.0148L52.1238 44.9998L48.2405 51.7259L48.2269 51.7497L41.5487 63.3167Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M54.2891 38.7493L60.9674 50.3164C62.9897 46.2061 63.7748 41.5581 63.168 36.9493C62.9439 35.2467 62.5349 33.5882 61.9561 31.9998H50.3918L54.2653 38.7089L54.2791 38.7322L54.2891 38.7493Z"
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
            d="M63.6411 29.4996H33.937L42.7269 14.2751C45.171 14.5342 47.587 15.1426 49.8987 16.1001C56.0358 18.6422 60.9517 23.4438 63.6411 29.4996Z"
            fill="#F2C94C"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M60.9134 55.2238L46.0613 29.4994L63.641 29.4994C64.6387 31.7456 65.3199 34.1421 65.6465 36.6229C66.5135 43.2087 64.8131 49.8669 60.9134 55.2238Z"
            fill="#F2994A"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M37.2722 65.7237L52.1243 39.9992L60.9141 55.2237C59.4677 57.2109 57.7329 58.999 55.7477 60.5222C50.4777 64.566 43.8614 66.4225 37.2722 65.7237Z"
            fill="#EB5757"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.3579 50.4995L46.062 50.4995L37.2722 65.724C34.828 65.4649 32.412 64.8566 30.1003 63.899C23.9632 61.357 19.0473 56.5553 16.3579 50.4995Z"
            fill="#219653"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.0857 24.7752L33.9377 50.4996L16.358 50.4996C15.3603 48.2534 14.6791 45.857 14.3525 43.3761C13.4855 36.7903 15.1859 30.1321 19.0857 24.7752Z"
            fill="#2F80ED"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M42.7268 14.2753L27.8748 39.9998L19.0849 24.7753C20.5313 22.7882 22.2661 21.0001 24.2513 19.4768C29.5213 15.433 36.1376 13.5765 42.7268 14.2753Z"
            fill="#9B51E0"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M63.641 29.4996H33.9369L42.7268 14.2751C45.1709 14.5342 47.5869 15.1425 49.8987 16.1001C56.0357 18.6421 60.9517 23.4438 63.641 29.4996Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M60.9134 55.2238L46.0614 29.4993L63.641 29.4996C64.6387 31.7458 65.3199 34.142 65.6465 36.6228C66.5136 43.2087 64.8132 49.8668 60.9134 55.2238Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M37.272 65.7236L52.124 39.9991L60.9134 55.2238C59.467 57.2109 57.7326 58.9989 55.7475 60.5221C50.4775 64.5659 43.8611 66.4224 37.272 65.7236Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M16.3578 50.4995L46.0619 50.4995L37.272 65.7236C34.8278 65.4645 32.4119 64.8565 30.1001 63.899C23.9631 61.3569 19.0471 56.5553 16.3578 50.4995Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M19.0854 24.7752L33.9374 50.4996L16.3578 50.4995C15.3601 48.2532 14.6789 45.8569 14.3523 43.3761C13.4852 36.7903 15.1856 30.1321 19.0854 24.7752Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M42.7268 14.2751L27.8747 39.9998L19.0854 24.7752C20.5318 22.788 22.2661 21.0001 24.2513 19.4768C29.5213 15.433 36.1376 13.5762 42.7268 14.2751Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M63.641 29.4996H33.9369L42.7268 14.2751M63.641 29.4996C60.9517 23.4438 56.0357 18.6421 49.8987 16.1001C47.5869 15.1425 45.1709 14.5342 42.7268 14.2751M63.641 29.4996L46.0614 29.4993L60.9134 55.2238M63.641 29.4996C64.6387 31.7458 65.3199 34.142 65.6465 36.6228C66.5136 43.2087 64.8132 49.8668 60.9134 55.2238M42.7268 14.2751L27.8747 39.9998L19.0854 24.7752M42.7268 14.2751C36.1376 13.5762 29.5213 15.433 24.2513 19.4768C22.2661 21.0001 20.5318 22.788 19.0854 24.7752M60.9134 55.2238L52.124 39.9991L37.272 65.7236M60.9134 55.2238C59.467 57.2109 57.7326 58.9989 55.7475 60.5221C50.4775 64.5659 43.8611 66.4224 37.272 65.7236M37.272 65.7236L46.0619 50.4995L16.3578 50.4995M37.272 65.7236C34.8278 65.4645 32.4119 64.8565 30.1001 63.899C23.9631 61.3569 19.0471 56.5553 16.3578 50.4995M16.3578 50.4995L33.9374 50.4996L19.0854 24.7752M16.3578 50.4995C15.3601 48.2532 14.6789 45.8569 14.3523 43.3761C13.4852 36.7903 15.1856 30.1321 19.0854 24.7752"
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
            d="M43.0021 11.3643C43.0132 11.3653 43.0242 11.3663 43.0352 11.3675C45.7557 11.6559 48.4448 12.333 51.0178 13.3988C57.8405 16.2248 63.3073 21.5601 66.303 28.2893L66.3134 28.3125C67.4239 30.8127 68.1821 33.4801 68.5456 36.2412C69.5092 43.5606 67.6236 50.9602 63.2967 56.9181L63.2779 56.9444C61.668 59.1562 59.737 61.1464 57.5276 62.8418C51.6722 67.3348 44.3237 69.4017 37.0026 68.6353C36.9959 68.6347 36.9892 68.6341 36.9825 68.6334C36.9763 68.6328 36.97 68.6322 36.9638 68.6315C34.2434 68.3432 31.5542 67.6661 28.9813 66.6003C22.1572 63.7737 16.6896 58.4369 13.6943 51.7058L13.6856 51.6864C12.5751 49.1863 11.817 46.5189 11.4535 43.7577C10.49 36.4391 12.375 29.0403 16.7009 23.0828C16.7075 23.0733 16.7143 23.0639 16.7211 23.0546C18.331 20.8428 20.262 18.8525 22.4714 17.1571C28.3283 12.663 35.6791 10.5961 43.0021 11.3643ZM18.2556 28.0887C15.7408 32.6795 14.7275 37.9816 15.4192 43.2356C15.6754 45.181 16.1589 47.0721 16.85 48.8745H30.2568L25.7322 41.0376C25.7246 41.0251 25.7171 41.0125 25.7098 40.9998L18.2556 28.0887ZM29.7515 39.9993L34.8756 48.8745H45.1236L50.2475 39.9996L45.1235 31.1246H34.8754L29.7515 39.9993ZM39.4428 15.2134L31.9886 28.1246C31.9867 28.1279 31.9848 28.1311 31.9829 28.1344L27.4421 35.9993L20.7387 24.3887C21.9541 22.8891 23.3499 21.5249 24.9065 20.3305C29.1109 17.1044 34.2095 15.3308 39.4428 15.2134ZM43.8882 15.5139L37.1847 27.1246H46.2481L46.2781 27.1243H61.1867C58.4683 22.651 54.3831 19.1223 49.487 17.0943C47.6742 16.3434 45.7947 15.8166 43.8882 15.5139ZM33.721 52.8746H18.8123C21.5307 57.348 25.6159 60.8767 30.512 62.9048C32.3248 63.6557 34.2043 64.1824 36.1107 64.4852L42.8142 52.8745H33.742L33.721 52.8746ZM40.5563 64.7855C45.7896 64.6681 50.8881 62.8946 55.0925 59.6684C56.6491 58.474 58.045 57.1098 59.2603 55.6102L52.5569 43.9996L48.0218 51.8546L48.0105 51.8745L40.5563 64.7855ZM54.2892 38.9991L61.7435 51.9103C64.2582 47.3195 65.2715 42.0174 64.5798 36.7633C64.3237 34.818 63.8402 32.9269 63.1491 31.1246H49.7423L54.268 38.9633C54.2752 38.9751 54.2822 38.9871 54.2892 38.9991Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreAperture = forwardRef((props, ref) => {
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

CoreAperture.displayName = 'CoreAperture'

export default CoreAperture
