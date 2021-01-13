
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M62.1723 29.3573C65.5336 31.276 68.0257 34.4743 69.0331 38.1916C69.5761 40.1953 69.6744 42.2762 69.3452 44.2928C70.5525 44.8502 71.6656 45.6163 72.6242 46.5641C74.7696 48.6853 76 51.5996 76 54.6166C76 57.6335 74.7696 60.5478 72.6242 62.669C70.4813 64.7878 67.5662 65.9989 64.5527 65.9989H61.9979C61.9888 65.9996 61.9796 65.9999 61.9703 65.9999H31.0312C31.0287 65.9999 31.0261 65.9999 31.0236 65.9998H28.4473C25.4338 65.9998 22.5187 64.7887 20.3758 62.67C18.2304 60.5488 17 57.6345 17 54.6175C17 51.6006 18.2304 48.6862 20.3758 46.5651C22.1119 44.8486 24.3547 43.7278 26.7461 43.3641C26.7999 43.0176 26.8722 42.6727 26.963 42.331C27.6475 39.7567 29.3415 37.5546 31.6663 36.2275C33.991 34.9004 36.7669 34.551 39.364 35.2521C40.0342 35.433 40.6797 35.6801 41.2917 35.9868L42.0291 34.7241C43.9953 31.3569 47.2305 28.8995 51.0181 27.896C54.7778 26.9 58.811 27.4385 62.1723 29.3573Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M17.3112 51.9999H17.1538L17.1123 51.9997H16.9439L16.942 51.9999H13.1269C10.7156 51.9999 8.39279 51.0362 6.68274 49.3362C4.97168 47.6353 4 45.3127 4 42.9C4 40.4873 4.97168 38.1647 6.68274 36.4637C7.88873 35.2648 9.39948 34.4321 11.0311 34.0454C11.5004 32.2182 12.4435 30.5352 13.7885 29.1763C15.8021 27.1419 18.5838 26 21.4697 26C24.3555 26 27.1742 27.1419 29.2537 29.1763C31.0757 30.9589 32.2242 33.2992 32.5237 35.7911"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M28.9102 28.8519L28.919 28.8398C30.0087 27.3399 31.5453 26.2235 33.3085 25.6506C35.0717 25.0777 36.971 25.0777 38.7342 25.6506C40.4974 26.2235 42.0339 27.3399 43.1237 28.8398C43.735 29.6813 44.1881 30.6192 44.4681 31.6079"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M24.2656 17.8196L27.8831 22.7981"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M36.0212 14L36.002 20.1602"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M47.777 17.8196L44.1719 22.8142"
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
            d="M31.7514 32.8595C31.1811 31.4917 30.3363 30.2356 29.2537 29.1764C27.1742 27.142 24.3555 26.0001 21.4697 26.0001C18.5838 26.0001 15.8021 27.142 13.7885 29.1764C12.4435 30.5353 11.5004 32.2183 11.0311 34.0455C9.39948 34.4323 7.88873 35.265 6.68274 36.4638C4.97168 38.1648 4 40.4874 4 42.9001C4 45.3128 4.97168 47.6354 6.68274 49.3363C8.39279 51.0363 10.7156 52 13.1269 52H14.2442C14.7808 49.1438 16.1833 46.4916 18.2666 44.4319C19.9569 42.7606 22.0269 41.5379 24.2724 40.8567C25.2707 37.8096 27.372 35.2246 30.179 33.6222C30.6881 33.3316 31.2135 33.0772 31.7514 32.8595Z"
            fill="currentColor"
          />
          <path
            d="M33.9784 38.431C34.6807 38.7745 35.3288 39.2329 35.8921 39.7929C37.2365 41.1294 38 42.9543 38 44.85C38 46.7457 37.2365 48.5705 35.8921 49.907C34.5485 51.2427 32.7234 51.9999 30.8289 51.9999H27.8572C27.8389 51.9999 27.8212 51.9927 27.8082 51.9797C27.7924 51.964 27.7701 51.9569 27.7481 51.9602C27.6422 51.976 27.5348 51.9872 27.4261 51.9936C27.4122 51.9977 27.3976 51.9998 27.3824 51.9998H27.2403L27.2115 51.9999L27.1828 51.9998H20.4297C20.8431 50.7664 21.544 49.629 22.4851 48.6985C23.7695 47.4286 25.4315 46.5986 27.1972 46.3301L29.3728 45.9992L29.7105 43.8246C29.7482 43.5822 29.7987 43.341 29.8623 43.102C30.3401 41.3049 31.5246 39.7628 33.1535 38.833C33.4203 38.6807 33.6959 38.5466 33.9784 38.431Z"
            fill="currentColor"
          />
          <path
            d="M62.1723 29.3574C65.5336 31.2761 68.0257 34.4744 69.0331 38.1917C69.5761 40.1954 69.6744 42.2762 69.3452 44.2929C70.5525 44.8503 71.6656 45.6164 72.6242 46.5642C74.7695 48.6854 76 51.5997 76 54.6166C76 57.6336 74.7695 60.5479 72.6242 62.6691C70.4813 64.7878 67.5662 65.999 64.5527 65.999H61.9979C61.9888 65.9997 61.9796 66 61.9703 66H31.0312C31.0287 66 31.0261 66 31.0236 65.9999H28.4473C25.4338 65.9999 22.5187 64.7888 20.3758 62.6701C18.2304 60.5489 17 57.6345 17 54.6176C17 51.6007 18.2304 48.6863 20.3758 46.5652C22.1119 44.8487 24.3547 43.7279 26.7461 43.3642C26.7999 43.0176 26.8722 42.6728 26.963 42.3311C27.6475 39.7568 29.3415 37.5547 31.6663 36.2276C33.991 34.9005 36.7669 34.5511 39.364 35.2522C40.0342 35.4331 40.6797 35.6802 41.2917 35.9869L42.0291 34.7242C43.9953 31.357 47.2305 28.8996 51.0181 27.8961C54.7778 26.9001 58.811 27.4386 62.1723 29.3574Z"
            fill="currentColor"
          />
          <path
            d="M38.5213 13.9922C38.517 12.6145 37.399 11.5 36.0213 11.5C34.6437 11.5 33.5256 12.6145 33.5213 13.9922L33.5072 18.5375C33.5031 19.8512 34.7077 20.8316 36.0214 20.8315C37.335 20.8315 38.5396 19.8511 38.5355 18.5376L38.5213 13.9922Z"
            fill="currentColor"
          />
          <path
            d="M28.9669 20.013C29.7423 21.0733 29.344 22.5745 28.2813 23.3466C27.6255 23.8231 26.784 23.9732 26.055 23.768C25.9848 23.7439 25.9144 23.7203 25.8438 23.6973C25.4759 23.5536 25.1467 23.312 24.8989 22.9686L22.2385 19.2828C21.4322 18.1657 21.6816 16.6069 22.7962 15.7971C23.9107 14.9873 25.4703 15.2319 26.2836 16.3439L28.9669 20.013Z"
            fill="currentColor"
          />
          <path
            d="M40.0001 32.3166C40.8757 31.0039 41.9177 29.8225 43.0927 28.7972C42.0049 27.3188 40.4808 26.2181 38.7344 25.6507C36.9712 25.0778 35.0719 25.0778 33.3087 25.6507C32.5064 25.9114 31.751 26.2846 31.0634 26.7552C31.1616 26.8459 31.2586 26.9382 31.3544 27.0319C32.8184 28.4641 33.9411 30.182 34.664 32.0559C36.4269 31.7814 38.2439 31.8643 40.0001 32.3166Z"
            fill="currentColor"
          />
          <path
            d="M47.144 22.9682C46.3752 24.0333 44.8245 24.1184 43.7617 23.3463C42.699 22.5742 42.3006 21.073 43.076 20.0127L45.7591 16.3439C46.5723 15.2319 48.1319 14.9873 49.2465 15.7971C50.3611 16.6069 50.6104 18.1657 49.8042 19.2828L49.795 19.2954L47.144 22.9682Z"
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
            d="M38.0212 13.9938C38.0177 12.8916 37.1233 12 36.0212 12C34.919 12 34.0246 12.8916 34.0212 13.9938L34.0057 18.9578C34.0024 20.0234 34.9557 20.8316 36.0212 20.8315C37.0868 20.8315 38.04 20.0234 38.0367 18.9578L38.0212 13.9938ZM28.8103 20.6461C29.4393 21.5062 29.1431 22.7203 28.2811 23.3466C27.4191 23.973 26.1728 23.8795 25.5492 23.0155L22.6438 18.9902C21.9987 18.0965 22.1983 16.8494 23.0899 16.2016C23.9815 15.5538 25.2292 15.7494 25.8798 16.639L28.8103 20.6461ZM42.0317 34.7241C42.7048 33.5715 43.5265 32.5255 44.4682 31.608C44.1882 30.6193 43.7351 29.6813 43.1237 28.8398C42.034 27.34 40.4974 26.2236 38.7342 25.6507C36.971 25.0778 35.0717 25.0778 33.3085 25.6507C31.5453 26.2236 30.0087 27.34 28.919 28.8398L28.9102 28.852C29.0277 28.9574 29.1432 29.0656 29.2564 29.1764C31.0785 30.9589 32.227 33.2992 32.5265 35.7911C34.659 34.8316 37.082 34.6354 39.3666 35.2521C39.7017 35.3426 40.0307 35.4496 40.3523 35.5723C40.674 35.695 40.9883 35.8335 41.2944 35.9869L42.0317 34.7241ZM51.0208 27.8961C52.9932 27.3735 55.0409 27.2733 57.0274 27.5732C57.0119 27.4492 56.9845 27.3249 56.9444 27.2016C56.6038 26.1534 55.4795 25.5783 54.4302 25.9156L54.4183 25.9195L49.7046 27.4348C49.0581 27.6427 48.631 28.1878 48.4916 28.8183C49.2992 28.4377 50.1453 28.128 51.0208 27.8961ZM15.0211 28.1124C16.1669 27.2664 17.4743 26.6573 18.8594 26.3166L17.6121 25.9156C16.5629 25.5783 15.4385 26.1534 15.0979 27.2016C14.9991 27.5057 14.9771 27.8163 15.0211 28.1124ZM46.4934 23.0151C45.8698 23.8791 44.6236 23.9726 43.7616 23.3463C42.8995 22.72 42.6033 21.5059 43.2323 20.6458L46.1625 16.639C46.8131 15.7494 48.0608 15.5538 48.9524 16.2016C49.8441 16.8494 50.0436 18.0965 49.3986 18.9902L49.3912 19.0003L46.4934 23.0151Z"
            fill="#F2C94C"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M29.2537 29.1763C27.1742 27.1419 24.3555 26 21.4697 26C18.5838 26 15.8021 27.1419 13.7885 29.1763C12.4435 30.5352 11.5004 32.2182 11.0311 34.0454C9.39948 34.4321 7.88873 35.2648 6.68274 36.4637C4.97168 38.1647 4 40.4873 4 42.9C4 45.3127 4.97168 47.6353 6.68274 49.3362C8.39279 51.0362 10.7156 51.9999 13.1269 51.9999H16.942L16.9439 51.9997H17.1123L17.1539 51.9999H17.3112C17.8029 49.955 18.8614 48.0624 20.3758 46.5651C22.1119 44.8486 24.3547 43.7278 26.7461 43.3641C26.7999 43.0175 26.8722 42.6727 26.963 42.331C27.6475 39.7567 29.3415 37.5545 31.6663 36.2275C31.9459 36.0678 32.2321 35.9223 32.5237 35.7911C32.2242 33.2992 31.0757 30.9589 29.2537 29.1763Z"
            fill="#56CCF2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M62.1723 29.3573C65.5336 31.276 68.0257 34.4743 69.0331 38.1916C69.5761 40.1953 69.6744 42.2762 69.3452 44.2928C70.5525 44.8502 71.6656 45.6163 72.6242 46.5641C74.7696 48.6853 76 51.5996 76 54.6166C76 57.6335 74.7696 60.5478 72.6242 62.669C70.4813 64.7878 67.5662 65.9989 64.5527 65.9989H61.9979C61.9888 65.9996 61.9796 65.9999 61.9703 65.9999H31.0312C31.0287 65.9999 31.0261 65.9999 31.0236 65.9998H28.4473C25.4338 65.9998 22.5187 64.7887 20.3758 62.67C18.2304 60.5488 17 57.6344 17 54.6175C17 51.6006 18.2304 48.6862 20.3758 46.5651C22.1119 44.8486 24.3547 43.7278 26.7461 43.3641C26.7999 43.0176 26.8722 42.6727 26.963 42.331C27.6475 39.7567 29.3415 37.5546 31.6663 36.2275C33.991 34.9004 36.7669 34.551 39.364 35.2521C40.0342 35.433 40.6797 35.6801 41.2917 35.9868L42.0291 34.7241C43.9953 31.3569 47.2305 28.8995 51.0181 27.896C54.7778 26.9 58.811 27.4385 62.1723 29.3573Z"
            fill="#2F80ED"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M36.0406 20.16L36.0213 14L36.0021 20.1602L36.0217 20.1538L36.0406 20.16Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M24.2656 17.8197L27.9021 22.7921L27.8831 22.7982L27.8711 22.8148L24.2656 17.8197Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M47.777 17.8197L44.172 22.8143L44.1603 22.7982L44.1407 22.7919L47.777 17.8197Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M38.7344 25.6507C36.9712 25.0778 35.0719 25.0778 33.3087 25.6507C31.5455 26.2236 30.0089 27.34 28.9192 28.8398L28.9104 28.852C29.0279 28.9574 29.1433 29.0656 29.2566 29.1764C31.0786 30.9589 32.2271 33.2992 32.5266 35.7911C34.6592 34.8316 37.0822 34.6354 39.3668 35.2521C39.7019 35.3426 40.0308 35.4496 40.3525 35.5723C40.6741 35.695 40.9885 35.8335 41.2945 35.9869L42.0319 34.7241C42.7049 33.5715 43.5267 32.5255 44.4683 31.608C44.1883 30.6193 43.7352 29.6813 43.1239 28.8398C42.0341 27.34 40.4976 26.2236 38.7344 25.6507Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M29.2537 29.1764C27.1742 27.142 24.3555 26.0001 21.4697 26.0001C18.5838 26.0001 15.8021 27.142 13.7885 29.1764C12.4435 30.5353 11.5004 32.2183 11.0311 34.0455C9.39948 34.4323 7.88873 35.265 6.68274 36.4638C4.97168 38.1648 4 40.4874 4 42.9001C4 45.3128 4.97168 47.6354 6.68274 49.3363C8.39279 51.0363 10.7156 52 13.1269 52H16.942L16.9439 51.9998H17.1123L17.1538 52H17.3112C17.8029 49.9551 18.8614 48.0625 20.3758 46.5652C22.1119 44.8487 24.3547 43.7279 26.7461 43.3642C26.7999 43.0176 26.8722 42.6728 26.963 42.3311C27.6475 39.7568 29.3415 37.5547 31.6663 36.2276C31.9459 36.0679 32.2321 35.9225 32.5237 35.7912C32.2242 33.2993 31.0757 30.959 29.2537 29.1764Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M62.1723 29.3574C65.5336 31.2761 68.0257 34.4744 69.0331 38.1917C69.5761 40.1954 69.6744 42.2762 69.3452 44.2929C70.5525 44.8503 71.6656 45.6164 72.6242 46.5642C74.7695 48.6854 76 51.5997 76 54.6166C76 57.6336 74.7695 60.5479 72.6242 62.6691C70.4813 64.7878 67.5662 65.999 64.5527 65.999H61.9979C61.9888 65.9997 61.9796 66 61.9703 66H31.0312C31.0287 66 31.0261 66 31.0236 65.9999H28.4473C25.4338 65.9999 22.5187 64.7888 20.3758 62.6701C18.2304 60.5489 17 57.6345 17 54.6176C17 51.6007 18.2304 48.6863 20.3758 46.5652C22.1119 44.8487 24.3547 43.7279 26.7461 43.3642C26.7999 43.0176 26.8722 42.6728 26.963 42.3311C27.6475 39.7568 29.3415 37.5547 31.6663 36.2276C33.991 34.9005 36.7669 34.5511 39.364 35.2522C40.0342 35.4331 40.6797 35.6802 41.2917 35.9869L42.0291 34.7242C43.9953 31.357 47.2305 28.8996 51.0181 27.8961C54.7778 26.9001 58.811 27.4386 62.1723 29.3574Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M20.3758 46.5652C18.8614 48.0625 17.8029 49.9551 17.3112 52H17.1538L17.1123 51.9998H16.9439L16.942 52H13.1269C10.7156 52 8.39279 51.0363 6.68274 49.3363C4.97168 47.6354 4 45.3128 4 42.9001C4 40.4874 4.97168 38.1648 6.68274 36.4638C7.88873 35.265 9.39948 34.4323 11.0311 34.0455C11.5004 32.2183 12.4435 30.5353 13.7885 29.1764C15.8021 27.142 18.5838 26.0001 21.4697 26.0001C24.3555 26.0001 27.1742 27.142 29.2537 29.1764C31.0757 30.959 32.2242 33.2993 32.5237 35.7912C32.2321 35.9225 31.9459 36.0679 31.6663 36.2276M20.3758 46.5652C22.1119 44.8487 24.3547 43.7279 26.7461 43.3642C26.7999 43.0176 26.8722 42.6728 26.963 42.3311C27.6475 39.7568 29.3415 37.5547 31.6663 36.2276M20.3758 46.5652C18.2304 48.6863 17 51.6007 17 54.6176C17 57.6345 18.2304 60.5489 20.3758 62.6701C22.5187 64.7888 25.4338 65.9999 28.4473 65.9999H31.0236C31.0261 66 31.0287 66 31.0312 66H61.9703C61.9796 66 61.9888 65.9997 61.9979 65.999H64.5527C67.5662 65.999 70.4813 64.7878 72.6242 62.6691C74.7696 60.5479 76 57.6336 76 54.6166C76 51.5997 74.7696 48.6854 72.6242 46.5642C71.6656 45.6164 70.5525 44.8503 69.3452 44.2929C69.6744 42.2762 69.5761 40.1954 69.0331 38.1917C68.0257 34.4744 65.5336 31.2761 62.1723 29.3574C58.811 27.4386 54.7778 26.9001 51.0181 27.8961C47.2305 28.8996 43.9953 31.357 42.0291 34.7242L41.2917 35.9869C40.6797 35.6802 40.0342 35.4331 39.364 35.2522C36.7669 34.5511 33.991 34.9005 31.6663 36.2276M36.0213 14L36.0406 20.16L36.0217 20.1538L36.0021 20.1602L36.0213 14ZM27.9021 22.7921L24.2656 17.8197L27.8711 22.8148L27.8831 22.7982L27.9021 22.7921ZM44.172 22.8143L47.777 17.8197L44.1407 22.7919L44.1603 22.7982L44.172 22.8143ZM33.3087 25.6507C35.0719 25.0778 36.9712 25.0778 38.7344 25.6507C40.4976 26.2236 42.0341 27.34 43.1239 28.8398C43.7352 29.6813 44.1883 30.6193 44.4683 31.608C43.5267 32.5255 42.7049 33.5715 42.0319 34.7241L41.2945 35.9869C40.9885 35.8335 40.6741 35.695 40.3525 35.5723C40.0308 35.4496 39.7019 35.3426 39.3668 35.2521C37.0822 34.6354 34.6592 34.8316 32.5266 35.7911C32.2271 33.2992 31.0786 30.9589 29.2566 29.1764C29.1433 29.0656 29.0279 28.9574 28.9104 28.852L28.9192 28.8398C30.0089 27.34 31.5455 26.2236 33.3087 25.6507Z"
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
            d="M31.0118 67.9999H28.4473C24.9013 67.9999 21.4827 66.577 18.9696 64.0923C16.4486 61.5997 15 58.175 15 54.6176C15 54.4113 15.0049 54.2053 15.0146 54H13.1269C10.1841 54 7.35527 52.825 5.27271 50.7547C3.18626 48.6806 2 45.8484 2 42.9001C2 39.9518 3.18626 37.1196 5.27271 35.0454C6.45819 33.867 7.88466 32.9793 9.43533 32.4328C10.0545 30.6976 11.0475 29.1027 12.367 27.7695C14.764 25.3477 18.061 24.0001 21.4697 24.0001C24.0193 24.0001 26.5206 24.7536 28.6466 26.1389C29.7965 25.0601 31.1754 24.2409 32.6906 23.7486C34.8555 23.0452 37.1875 23.0452 39.3524 23.7486C41.5173 24.452 43.4039 25.8227 44.7419 27.6643C44.9149 27.9024 45.0775 28.1467 45.2297 28.3967C46.8185 27.2966 48.601 26.4675 50.506 25.9628C54.7761 24.8315 59.3491 25.4429 63.1638 27.6205C66.981 29.7995 69.8152 33.4314 70.9635 37.6686C71.4529 39.4743 71.625 41.3343 71.49 43.1688C72.406 43.7197 73.2603 44.3807 74.0304 45.142C76.5514 47.6346 78 51.0593 78 54.6166C78 58.174 76.5514 61.5987 74.0304 64.0913C71.5173 66.576 68.0987 67.999 64.5527 67.999H62.0406C62.0171 67.9997 61.9937 68 61.9703 68H31.0312M31.0118 67.9999C31.0183 68 31.0247 68 31.0312 68M31.0118 67.9999L31.0312 68M31.0416 64H61.9332C61.9548 63.9993 61.9763 63.999 61.9979 63.999H64.5527C67.0337 63.999 69.4452 62.9997 71.218 61.2469C72.9877 59.4971 74 57.0931 74 54.6166C74 52.1402 72.9877 49.7362 71.218 47.9864C70.4265 47.2038 69.5061 46.57 68.5068 46.1087C67.691 45.732 67.2265 44.8575 67.3713 43.9706C67.6551 42.2322 67.5702 40.4397 67.1027 38.7148C66.2362 35.5175 64.0862 32.7528 61.1808 31.0943C58.2729 29.4344 54.7795 28.9687 51.5303 29.8294C49.4009 30.3936 47.4748 31.4882 45.9209 32.9828C45.9024 33.0023 45.8835 33.0215 45.8641 33.0404C45.05 33.8336 44.3402 34.7373 43.759 35.7327L43.0216 36.9954C42.6593 37.616 42.011 37.9721 41.3364 37.9867C41.0197 37.994 40.6971 37.9261 40.3955 37.7749C39.9025 37.5278 39.3826 37.3288 38.8428 37.183C38.0939 36.9809 37.3271 36.8874 36.5658 36.8995C35.4574 36.9175 34.3605 37.1591 33.3473 37.615C33.3292 37.6231 33.3107 37.6311 33.2924 37.6387C33.0768 37.7376 32.865 37.8462 32.6578 37.9645C30.7969 39.0268 29.4426 40.7889 28.8959 42.845C28.8232 43.1182 28.7654 43.394 28.7224 43.6711C28.5884 44.534 27.9101 45.2102 27.0468 45.3415C25.0725 45.6417 23.2169 46.5686 21.782 47.9874C20.6751 49.0818 19.8646 50.432 19.4127 51.8959C19.142 52.7726 19 53.69 19 54.6176C19 57.0941 20.0123 59.4981 21.782 61.2478C23.5548 63.0006 25.9663 63.9999 28.4473 63.9999H31.0236M31.0416 64C31.0356 64 31.0296 63.9999 31.0236 63.9999M31.0416 64L31.0236 63.9999M38.0213 13.9938C38.0179 12.8916 37.1235 12 36.0213 12C34.9192 12 34.0248 12.8916 34.0213 13.9938L34.0021 20.154C34.0001 20.7953 34.3058 21.3987 34.8241 21.7764C35.1794 22.0354 35.605 22.1668 36.0342 22.16C36.4546 22.1613 36.8704 22.03 37.2187 21.7761C37.7369 21.3984 38.0425 20.795 38.0405 20.1537L38.0213 14.0062V13.9938ZM25.88 16.639C25.2294 15.7494 23.9817 15.5538 23.0901 16.2016C22.1984 16.8494 21.9989 18.0965 22.6439 18.9902L26.2494 23.9854C26.6247 24.5054 27.2266 24.8138 27.868 24.8148C28.3068 24.8155 28.7276 24.6722 29.0704 24.4154C29.4123 24.1692 29.6723 23.818 29.8051 23.4072C30.0024 22.7969 29.895 22.1291 29.5164 21.6115L25.88 16.639ZM49.3987 18.9902C50.0438 18.0965 49.8442 16.8494 48.9526 16.2016C48.061 15.5538 46.8133 15.7494 46.1627 16.639L46.1553 16.6491L42.5264 21.6113C42.1478 22.1289 42.0405 22.7967 42.2377 23.4069C42.3726 23.8245 42.639 24.1805 42.9892 24.4271C43.3289 24.6762 43.7433 24.815 44.175 24.8143C44.8164 24.8133 45.4183 24.5048 45.7937 23.9848L49.3914 19.0003L49.3987 18.9902ZM33.9267 27.5528C35.2882 27.1104 36.7548 27.1104 38.1163 27.5528C39.4779 27.9952 40.6644 28.8572 41.5058 30.0154C41.7615 30.3673 41.9813 30.741 42.1635 31.131C41.525 31.8594 40.9475 32.646 40.4397 33.4841C40.2575 33.4256 40.0735 33.3713 39.888 33.3212C38.7333 33.0095 37.5487 32.8714 36.3727 32.9028C35.5755 32.9239 34.7823 33.0229 34.0049 33.1985C33.5058 31.6121 32.7055 30.126 31.6421 28.8255C32.3099 28.2603 33.0848 27.8263 33.9267 27.5528ZM30.2822 34.7248C27.7385 36.308 25.8762 38.7876 25.0702 41.6704C22.7842 42.2675 20.6703 43.4614 18.9696 45.143C17.575 46.5218 16.5086 48.186 15.834 50H13.1269C11.2471 50 9.43031 49.2476 8.09277 47.918C6.75711 46.5902 6 44.7771 6 42.9001C6 41.023 6.7571 39.21 8.09277 37.8822C9.0352 36.9453 10.2169 36.2939 11.4924 35.9916C12.2152 35.8203 12.7835 35.2625 12.9682 34.543C13.3505 33.0547 14.1177 31.6868 15.2099 30.5833C16.8401 28.9364 19.1067 28.0001 21.4697 28.0001C23.834 28.0001 26.1503 28.9382 27.855 30.606C29.0278 31.7534 29.8592 33.1804 30.2822 34.7248Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreCloudyMostly = forwardRef((props, ref) => {
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

CoreCloudyMostly.displayName = 'CoreCloudyMostly'

export default CoreCloudyMostly
