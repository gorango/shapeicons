
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <path
            d="M21.1274 49.4816C21.5181 46.2469 22.8447 44.4358 25.3448 42.5792C28.922 40.0647 33.3903 41.487 33.3903 41.487V33.0491C34.4766 33.0214 35.5634 33.0858 36.6378 33.2416V44.1003C36.6378 44.1003 32.1708 42.678 28.5937 45.1937C26.095 47.049 24.7656 48.8614 24.3763 52.0962C24.364 53.8527 24.6937 56.1487 26.2116 58.134C25.8363 57.9416 25.4538 57.7223 25.064 57.4762C21.7202 55.2308 21.1111 51.8622 21.1274 49.4816ZM55.0879 17.4475C52.6272 14.751 51.6966 12.0285 51.3602 10.116H54.4557C54.4557 10.116 53.8385 15.1306 58.3368 20.062L58.3992 20.1283C57.1868 19.3657 56.075 18.4656 55.0879 17.4475ZM70.0001 25.0923V35.7326C70.0001 35.7326 66.0499 35.5779 63.1266 34.8342C59.0449 33.7941 56.4213 32.1988 56.4213 32.1988C56.4213 32.1988 54.609 31.0612 54.4625 30.9819V52.9543C54.4625 54.1777 54.1275 57.233 53.106 59.7813C51.7726 63.1149 49.7147 65.303 49.3362 65.7503C49.3362 65.7503 46.8335 68.7081 42.418 70.6999C38.438 72.4967 34.9435 72.4512 33.899 72.4967C33.899 72.4967 27.8584 72.7359 22.4229 69.2034C21.2475 68.4248 20.1503 67.543 19.1455 66.5693L19.1726 66.5888C24.6096 70.1213 30.6488 69.8821 30.6488 69.8821C31.6947 69.8366 35.1891 69.8821 39.1678 68.0853C43.5792 66.0935 46.086 63.1357 46.086 63.1357C46.4604 62.6884 48.5278 60.5003 49.8558 57.1654C50.8745 54.6185 51.2123 51.5618 51.2123 50.3384V28.3686C51.3588 28.4492 53.1698 29.5869 53.1698 29.5869C53.1698 29.5869 55.7946 31.1834 59.8764 32.2222C62.8011 32.9659 66.7499 33.1206 66.7499 33.1206V24.7828C68.101 25.0858 69.2527 25.1677 70.0001 25.0923Z"
            fill="#EE1D52"
          />
          <path
            d="M66.7509 24.7828V33.118C66.7509 33.118 62.8021 32.9633 59.8774 32.2196C55.7957 31.1795 53.1708 29.5843 53.1708 29.5843C53.1708 29.5843 51.3598 28.4466 51.2133 28.366V50.341C51.2133 51.5644 50.8783 54.6211 49.8568 57.168C48.5234 60.5029 46.4655 62.691 46.087 63.1383C46.087 63.1383 43.5829 66.0961 39.1688 68.0879C35.1901 69.8847 31.6957 69.8392 30.6498 69.8847C30.6498 69.8847 24.6106 70.1239 19.1737 66.5914L19.1465 66.5719C18.5725 66.0161 18.0322 65.4292 17.5282 64.8142C15.7932 62.6988 14.7297 60.1974 14.4625 59.4836C14.462 59.4806 14.462 59.4775 14.4625 59.4745C14.0324 58.2341 13.129 55.2555 13.2524 52.3705C13.4708 47.2805 15.2615 44.1562 15.7349 43.3735C16.9887 41.2392 18.6195 39.3296 20.5546 37.7296C22.2622 36.3491 24.1978 35.2506 26.2818 34.4793C28.5348 33.5737 30.9473 33.0883 33.39 33.0491V41.487C33.39 41.487 28.9216 40.0699 25.3458 42.5792C22.8458 44.4358 21.5191 46.2469 21.1284 49.4816C21.1121 51.8622 21.7212 55.2308 25.0623 57.4775C25.4521 57.7245 25.8346 57.9438 26.2099 58.1353C26.7936 58.8941 27.5041 59.5552 28.3125 60.092C31.5763 62.158 34.3111 62.3023 37.8082 60.9605C40.1401 60.0634 41.8954 58.0417 42.7093 55.8016C43.2207 54.4026 43.2139 52.9946 43.2139 51.5384V10.116H51.3531C51.6895 12.0285 52.6201 14.751 55.0808 17.4475C56.0679 18.4656 57.1797 19.3657 58.392 20.1283C58.7502 20.4989 60.5815 22.3308 62.9323 23.4554C64.1479 24.0367 65.4292 24.4821 66.7509 24.7828Z"
            fill="black"
          />
          <path
            d="M11.2231 56.8923V56.8988L11.4251 57.4462C11.4019 57.3825 11.3269 57.1888 11.2231 56.8923Z"
            fill="#69C9D0"
          />
          <path
            d="M26.282 34.4791C24.198 35.2504 22.2624 36.3489 20.5548 37.7295C18.6191 39.333 16.9887 41.2466 15.7364 43.3851C15.263 44.1652 13.4724 47.292 13.254 52.382C13.1306 55.2671 14.034 58.2457 14.464 59.486C14.4636 59.489 14.4636 59.4921 14.464 59.4951C14.7353 60.2024 15.7948 62.7038 17.5298 64.8257C18.0337 65.4407 18.5741 66.0276 19.1481 66.5835C17.3089 65.3643 15.6687 63.8904 14.2809 62.2098C12.5608 60.1127 11.5 57.6372 11.2233 56.9065C11.223 56.9013 11.223 56.8961 11.2233 56.8909V56.8818C10.7919 55.6428 9.88578 52.6629 10.0119 49.774C10.2303 44.6839 12.0209 41.5597 12.4944 40.777C13.7463 38.6383 15.3767 36.7246 17.3127 35.1214C19.02 33.7403 20.9556 32.6418 23.04 31.871C24.3401 31.354 25.6944 30.9726 27.0797 30.7334C29.1673 30.3841 31.2995 30.3539 33.397 30.6437V33.049C30.952 33.0873 28.5371 33.5727 26.282 34.4791Z"
            fill="#69C9D0"
          />
          <path
            d="M51.3601 10.1159H43.221V51.5396C43.221 52.9958 43.221 54.3999 42.7163 55.8028C41.8943 58.0416 40.1457 60.0634 37.8152 60.9605C34.3168 62.3074 31.582 62.1579 28.3196 60.092C27.5097 59.5575 26.7974 58.8986 26.2115 58.1418C28.9911 59.5628 31.4789 59.5381 34.5609 58.3524C36.8901 57.4553 38.6413 55.4336 39.4607 53.1934C39.9735 51.7945 39.9667 50.3864 39.9667 48.9316V7.5H51.2054C51.2054 7.5 51.0793 8.52971 51.3601 10.1159ZM66.7512 22.4776V24.7828C65.4317 24.4816 64.1528 24.0362 62.9394 23.4553C60.5885 22.3307 58.7572 20.4988 58.3991 20.1283C58.8146 20.3898 59.2458 20.6277 59.6905 20.8407C62.5487 22.2085 65.3635 22.6167 66.7512 22.4776Z"
            fill="#69C9D0"
          />
        </>
      )
    case 'solid':
      return (
        <>
          <path
            d="M21.1274 49.4816C21.5181 46.2469 22.8447 44.4358 25.3448 42.5792C28.922 40.0647 33.3903 41.487 33.3903 41.487V33.0491C34.4766 33.0214 35.5634 33.0858 36.6378 33.2416V44.1003C36.6378 44.1003 32.1708 42.678 28.5937 45.1937C26.095 47.049 24.7656 48.8614 24.3763 52.0962C24.364 53.8527 24.6937 56.1487 26.2116 58.134C25.8363 57.9416 25.4538 57.7223 25.064 57.4762C21.7202 55.2308 21.1111 51.8622 21.1274 49.4816ZM55.0879 17.4475C52.6272 14.751 51.6966 12.0285 51.3602 10.116H54.4557C54.4557 10.116 53.8385 15.1306 58.3368 20.062L58.3992 20.1283C57.1868 19.3657 56.075 18.4656 55.0879 17.4475ZM70.0001 25.0923V35.7326C70.0001 35.7326 66.0499 35.5779 63.1266 34.8342C59.0449 33.7941 56.4213 32.1988 56.4213 32.1988C56.4213 32.1988 54.609 31.0612 54.4625 30.9819V52.9543C54.4625 54.1777 54.1275 57.233 53.106 59.7813C51.7725 63.1149 49.7147 65.303 49.3362 65.7503C49.3362 65.7503 46.8335 68.7081 42.418 70.6999C38.438 72.4967 34.9436 72.4512 33.899 72.4967C33.899 72.4967 27.8584 72.7359 22.4229 69.2034C21.2475 68.4248 20.1503 67.543 19.1455 66.5693L19.1726 66.5888C24.6096 70.1213 30.6488 69.8821 30.6488 69.8821C31.6947 69.8366 35.1891 69.8821 39.1678 68.0853C43.5792 66.0935 46.086 63.1357 46.086 63.1357C46.4604 62.6884 48.5278 60.5003 49.8558 57.1654C50.8745 54.6185 51.2123 51.5618 51.2123 50.3384V28.3686C51.3588 28.4492 53.1698 29.5869 53.1698 29.5869C53.1698 29.5869 55.7946 31.1834 59.8764 32.2222C62.8011 32.9659 66.7499 33.1206 66.7499 33.1206V24.7828C68.101 25.0858 69.2527 25.1677 70.0001 25.0923Z"
            fill="currentColor"
          />
          <path
            d="M66.7509 24.7828V33.118C66.7509 33.118 62.8021 32.9633 59.8774 32.2196C55.7957 31.1795 53.1708 29.5843 53.1708 29.5843C53.1708 29.5843 51.3598 28.4466 51.2133 28.366V50.341C51.2133 51.5644 50.8783 54.6211 49.8568 57.168C48.5234 60.5029 46.4655 62.691 46.087 63.1383C46.087 63.1383 43.5829 66.0961 39.1688 68.0879C35.1901 69.8847 31.6957 69.8392 30.6498 69.8847C30.6498 69.8847 24.6106 70.1239 19.1737 66.5914L19.1465 66.5719C18.5725 66.0161 18.0322 65.4292 17.5282 64.8142C15.7932 62.6988 14.7297 60.1974 14.4625 59.4836C14.462 59.4806 14.462 59.4775 14.4625 59.4745C14.0324 58.2341 13.129 55.2555 13.2524 52.3705C13.4708 47.2805 15.2615 44.1562 15.7349 43.3735C16.9887 41.2392 18.6195 39.3296 20.5546 37.7296C22.2622 36.349 24.1978 35.2506 26.2818 34.4793C28.5348 33.5737 30.9476 33.0883 33.3903 33.0491V41.487C33.3903 41.487 28.9216 40.0699 25.3458 42.5792C22.8458 44.4358 21.5191 46.2469 21.1284 49.4816C21.1121 51.8622 21.7212 55.2308 25.0623 57.4775C25.4521 57.7245 25.8346 57.9438 26.2099 58.1353C26.7936 58.8941 27.5041 59.5552 28.3125 60.092C31.5763 62.158 34.3111 62.3023 37.8082 60.9605C40.1401 60.0634 41.8954 58.0417 42.7093 55.8016C43.2207 54.4026 43.2139 52.9946 43.2139 51.5384V10.116H51.3531C51.6895 12.0285 52.6201 14.751 55.0808 17.4475C56.0679 18.4656 57.1797 19.3657 58.392 20.1283C58.7502 20.4989 60.5815 22.3308 62.9323 23.4554C64.1479 24.0367 65.4292 24.4821 66.7509 24.7828Z"
            fill="currentColor"
          />
          <path
            d="M11.2231 56.8924V56.8989L11.4251 57.4463C11.4019 57.3825 11.3269 57.1888 11.2231 56.8924Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M33.3903 41.487C33.3903 41.487 28.922 40.0647 25.3448 42.5792C22.8447 44.4358 21.5181 46.2469 21.1274 49.4816C21.1111 51.8622 21.7202 55.2308 25.064 57.4762C25.4538 57.7223 25.8363 57.9416 26.2116 58.134C24.6937 56.1487 24.364 53.8527 24.3763 52.0962C24.7656 48.8614 26.095 47.049 28.5937 45.1937C32.1708 42.678 36.6378 44.1003 36.6378 44.1003V33.2416C35.5634 33.0858 34.4766 33.0214 33.3903 33.0491M33.3903 41.487V33.0491M33.3903 41.487C33.3903 41.487 28.9216 40.0699 25.3458 42.5792C22.8458 44.4358 21.5191 46.2469 21.1284 49.4816C21.1121 51.8622 21.7212 55.2308 25.0623 57.4775C25.4521 57.7245 25.8346 57.9438 26.2099 58.1353C26.7936 58.8941 27.5041 59.5552 28.3125 60.092C31.5763 62.158 34.3111 62.3023 37.8082 60.9605C40.1401 60.0634 41.8954 58.0417 42.7093 55.8016C43.2207 54.4026 43.2139 52.9946 43.2139 51.5384V10.116H51.3531C51.6895 12.0285 52.6201 14.751 55.0808 17.4475C56.0679 18.4656 57.1797 19.3657 58.392 20.1283C58.7502 20.4989 60.5815 22.3308 62.9323 23.4554C64.1479 24.0367 65.4292 24.4821 66.7509 24.7828M33.3903 33.0491C30.9476 33.0883 28.5348 33.5737 26.2818 34.4793M51.3602 10.116C51.6966 12.0285 52.6272 14.751 55.0879 17.4475C56.075 18.4656 57.1868 19.3657 58.3992 20.1283M51.3602 10.116H54.4557C54.4557 10.116 53.8385 15.1306 58.3368 20.062L58.3992 20.1283M51.3602 10.116L43.221 10.1159V51.5396C43.221 52.9958 43.221 54.3999 42.7163 55.8028C41.8943 58.0416 40.1457 60.0634 37.8152 60.9605C34.3168 62.3074 31.582 62.1579 28.3196 60.092C27.5097 59.5575 26.7974 58.8986 26.2115 58.1418C28.9911 59.5628 31.4789 59.5381 34.5609 58.3524C36.8901 57.4553 38.6413 55.4336 39.4607 53.1934C39.9735 51.7945 39.9667 50.3864 39.9667 48.9316V7.5H51.2054C51.2054 7.5 51.0794 8.5298 51.3602 10.116ZM58.3992 20.1283C58.7573 20.4989 60.5885 22.3307 62.9394 23.4553C64.1528 24.0362 65.4315 24.4817 66.7509 24.7828M58.3992 20.1283C58.8147 20.3898 59.2458 20.6277 59.6905 20.8407C62.5487 22.2085 65.3635 22.6167 66.7512 22.4776L66.7509 24.7828M66.7509 24.7828V33.118C66.7509 33.118 62.8021 32.9633 59.8774 32.2196C55.7957 31.1795 53.1708 29.5843 53.1708 29.5843C53.1708 29.5843 51.3598 28.4466 51.2133 28.366V50.341C51.2133 51.5644 50.8783 54.6211 49.8568 57.168C48.5234 60.5029 46.4655 62.691 46.087 63.1383C46.087 63.1383 43.5829 66.0961 39.1688 68.0879C35.1901 69.8847 31.6957 69.8392 30.6498 69.8847C30.6498 69.8847 24.6106 70.1239 19.1737 66.5914L19.1465 66.5719C18.5725 66.0161 18.0322 65.4292 17.5282 64.8142C15.7932 62.6988 14.7297 60.1974 14.4625 59.4836C14.462 59.4806 14.462 59.4775 14.4625 59.4745C14.0324 58.2341 13.129 55.2555 13.2524 52.3705C13.4708 47.2805 15.2615 44.1562 15.7349 43.3735C16.9887 41.2392 18.6195 39.3296 20.5546 37.7296M20.5546 37.7296C22.2622 36.349 24.1978 35.2506 26.2818 34.4793M20.5546 37.7296C18.6189 39.3332 16.9887 41.2466 15.7364 43.3851C15.263 44.1652 13.4724 47.292 13.254 52.382C13.1306 55.2671 14.034 58.2457 14.464 59.486C14.4636 59.489 14.4636 59.4921 14.464 59.4951C14.7353 60.2024 15.7948 62.7039 17.5298 64.8257C18.0337 65.4407 18.5741 66.0276 19.1481 66.5835C17.3089 65.3643 15.6687 63.8904 14.2809 62.2098C12.5608 60.1127 11.5 57.6372 11.2233 56.9065C11.223 56.9013 11.223 56.8961 11.2233 56.8909V56.8818C10.7919 55.6428 9.88578 52.6629 10.0119 49.774C10.2303 44.6839 12.0209 41.5597 12.4944 40.777C13.7463 38.6383 15.3767 36.7246 17.3127 35.1214C19.02 33.7403 20.9556 32.6418 23.04 31.871C24.3401 31.354 25.6944 30.9726 27.0797 30.7334C29.1673 30.3841 31.2995 30.3539 33.397 30.6437V33.049C30.952 33.0873 28.5369 33.5729 26.2818 34.4793M70.0001 25.0923V35.7326C70.0001 35.7326 66.0499 35.5779 63.1266 34.8342C59.0449 33.7941 56.4213 32.1988 56.4213 32.1988C56.4213 32.1988 54.609 31.0612 54.4625 30.9819V52.9543C54.4625 54.1777 54.1275 57.233 53.106 59.7813C51.7726 63.1149 49.7147 65.303 49.3362 65.7503C49.3362 65.7503 46.8335 68.7081 42.418 70.6999C38.438 72.4967 34.9435 72.4512 33.899 72.4967C33.899 72.4967 27.8584 72.7359 22.4229 69.2034C21.2475 68.4248 20.1503 67.543 19.1455 66.5693L19.1726 66.5888C24.6096 70.1213 30.6488 69.8821 30.6488 69.8821C31.6947 69.8366 35.1891 69.8821 39.1678 68.0853C43.5792 66.0935 46.086 63.1357 46.086 63.1357C46.4604 62.6884 48.5278 60.5003 49.8558 57.1654C50.8745 54.6185 51.2123 51.5618 51.2123 50.3384V28.3686C51.3588 28.4492 53.1698 29.5869 53.1698 29.5869C53.1698 29.5869 55.7946 31.1834 59.8764 32.2222C62.8011 32.9659 66.7499 33.1206 66.7499 33.1206V24.7828C68.101 25.0858 69.2527 25.1677 70.0001 25.0923ZM11.2231 56.8924V56.8989L11.4251 57.4463C11.4019 57.3825 11.3269 57.1888 11.2231 56.8924Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsTiktok = forwardRef((props, ref) => {
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

BrandsTiktok.displayName = 'BrandsTiktok'

export default BrandsTiktok
