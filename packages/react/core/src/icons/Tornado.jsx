
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M72 24C72 30.6274 57.6731 36 40 36C22.3269 36 8 30.6274 8 24C8 17.3726 22.3269 12 40 12C57.6731 12 72 17.3726 72 24Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M61.8357 32.7721C60.5041 27.8285 51.2356 24 39.9999 24C28.7641 24 19.4956 27.8286 18.1641 32.7722"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M64.4418 31.7456C66.0827 33.0365 67 34.4785 67 35.9999C67 41.5227 54.9117 45.9999 40 45.9999C25.0883 45.9999 13 41.5227 13 35.9999C13 34.4785 13.9173 33.0365 15.5582 31.7456"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M22.1901 43.5162C20.7869 44.5693 20 45.7513 20 47.0001C20 51.4184 29.8497 55.0001 42 55.0001C54.1503 55.0001 64 51.4184 64 47.0001C64 45.3652 62.6514 43.8448 60.3366 42.5781"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M30.9654 53.9224C29.1074 54.7709 28 55.8392 28 56.9999C28 59.7613 34.268 61.9999 42 61.9999C49.732 61.9999 56 59.7613 56 56.9999C56 55.8392 54.8926 54.7709 53.0346 53.9224"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M30.7992 60C29.6694 60.8356 29 61.8743 29 62.9999C29 65.7613 33.0294 67.9999 38 67.9999C42.9706 67.9999 47 65.7613 47 62.9999C47 62.5544 46.8951 62.1225 46.6983 61.7114"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'bold':
      return (
        <>
          <ellipse cx="40" cy="24" rx="32" ry="12" fill="currentColor"/>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M61.8357 32.7721C56.1178 34.7745 48.4405 36 39.9998 36C31.5592 36 23.8819 34.7745 18.1641 32.7722C19.4956 27.8286 28.7641 24 39.9999 24C51.2356 24 60.5041 27.8285 61.8357 32.7721Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M61.2089 29.8109C56.2645 27.4899 48.602 26 40 26C31.398 26 23.7355 27.4899 18.7911 29.8109C24.1438 31.75 31.6203 33 40 33C48.3797 33 55.8562 31.75 61.2089 29.8109ZM66.5108 34.0952C65.6135 34.5251 64.6665 34.9246 63.6808 35.2943C57.4742 37.6218 49.1011 39 40 39C30.8989 39 22.5258 37.6218 16.3192 35.2943C15.3335 34.9246 14.3865 34.5251 13.4892 34.0952C13.1681 34.7118 13 35.3486 13 36C13 41.5228 25.0883 46 40 46C54.9117 46 67 41.5228 67 36C67 35.3486 66.8319 34.7118 66.5108 34.0952Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M56.18 40.8832C52.3507 39.7082 47.4028 39 42 39C35.7269 39 30.067 39.9547 26.0593 41.4864C30.0019 42.4304 34.7873 43 40 43C46.2447 43 51.8763 42.1826 56.18 40.8832ZM63.0282 44.6414C62.1186 45.095 61.1479 45.5087 60.1338 45.8843C54.8357 47.8466 47.7168 49 40 49C32.4306 49 25.4363 47.8902 20.1716 45.9958C20.0584 46.3248 20 46.6599 20 47C20 51.4183 29.8497 55 42 55C54.1503 55 64 51.4183 64 47C64 46.179 63.6599 45.387 63.0282 44.6414Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M28.126 56.3262C28.0429 56.5466 28 56.7715 28 57C28 59.7614 34.268 62 42 62C49.732 62 56 59.7614 56 57C56 56.7715 55.9571 56.5466 55.874 56.3262C51.9056 57.3965 47.105 58 42 58C36.895 58 32.0944 57.3965 28.126 56.3262Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M43.3416 58.9755C42.9026 58.9916 42.4551 59 42 59C39.3663 59 36.9832 58.7197 35.059 58.2731C35.9806 58.0961 36.9701 58 38 58C40 58 41.8476 58.3624 43.3416 58.9755ZM46.4234 64.7647C45.1395 66.6553 41.8524 68 38 68C33.0294 68 29 65.7614 29 63C29 62.824 29.0164 62.6502 29.0483 62.479C29.6957 62.817 30.386 63.1088 31.0915 63.3608C34.0262 64.4089 37.8832 65 42 65C43.5211 65 45.0067 64.9193 46.4234 64.7647Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <ellipse cx="40" cy="24" rx="32" ry="12" fill="#56CCF2"/>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M61.8357 32.7721C56.1178 34.7745 48.4405 36 39.9998 36C31.5592 36 23.8819 34.7745 18.1641 32.7722C19.4956 27.8286 28.7641 24 39.9999 24C51.2356 24 60.5041 27.8285 61.8357 32.7721Z"
            fill="#9B51E0"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M64.4418 31.7456C58.5719 34.3477 49.8005 35.9999 40 35.9999C30.1995 35.9999 21.4281 34.3477 15.5582 31.7456C13.9173 33.0365 13 34.4785 13 35.9999C13 41.5227 25.0883 45.9999 40 45.9999C54.9117 45.9999 67 41.5227 67 35.9999C67 34.4785 66.0827 33.0365 64.4418 31.7456Z"
            fill="#56CCF2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.1901 43.5162C20.7869 44.5693 20 45.7513 20 47.0001C20 51.4183 29.8497 55.0001 42 55.0001C54.1503 55.0001 64 51.4183 64 47.0001C64 45.3652 62.6514 43.8448 60.3366 42.5781C55.3873 44.6753 48.1113 46.0001 40 46.0001C33.1762 46.0001 26.9436 45.0625 22.1901 43.5162Z"
            fill="#9B51E0"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30.9654 53.9224C29.1074 54.7709 28 55.8392 28 56.9999C28 59.7613 34.268 61.9999 42 61.9999C49.732 61.9999 56 59.7613 56 56.9999C56 55.8392 54.8926 54.7709 53.0346 53.9224C49.7909 54.6076 46.0214 54.9999 42 54.9999C37.9786 54.9999 34.2091 54.6076 30.9654 53.9224Z"
            fill="#56CCF2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30.7992 60C29.6694 60.8356 29 61.8743 29 62.9999C29 65.7613 33.0294 67.9999 38 67.9999C42.9706 67.9999 47 65.7613 47 62.9999C47 62.5544 46.8951 62.1225 46.6983 61.7114C45.2297 61.8982 43.6481 61.9999 42 61.9999C37.4198 61.9999 33.3534 61.2144 30.7992 60Z"
            fill="#9B51E0"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M72 24C72 30.6274 57.6731 36 40 36C22.3269 36 8 30.6274 8 24C8 17.3726 22.3269 12 40 12C57.6731 12 72 17.3726 72 24Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M61.8357 32.7721C56.1178 34.7745 48.4406 36 40 36C31.5594 36 23.8819 34.7745 18.1641 32.7722C19.4956 27.8286 28.7641 24 39.9999 24C51.2356 24 60.5041 27.8285 61.8357 32.7721Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M64.4418 31.7457C58.5719 34.3478 49.8005 36 40 36C30.1995 36 21.4281 34.3478 15.5582 31.7457C13.9173 33.0367 13 34.4787 13 36C13 41.5229 25.0883 46 40 46C54.9117 46 67 41.5229 67 36C67 34.4787 66.0827 33.0367 64.4418 31.7457Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M22.1901 43.5162C20.7869 44.5693 20 45.7513 20 47.0001C20 51.4184 29.8497 55.0001 42 55.0001C54.1503 55.0001 64 51.4184 64 47.0001C64 45.3652 62.6514 43.8448 60.3366 42.5781C55.3873 44.6753 48.1113 46 40 46C33.1762 46 26.9436 45.0625 22.1901 43.5162Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M30.9654 53.9225C29.1074 54.771 28 55.8393 28 57C28 59.7615 34.268 62 42 62C49.732 62 56 59.7615 56 57C56 55.8393 54.8926 54.771 53.0346 53.9225C49.7909 54.6077 46.0214 55.0001 42 55.0001C37.9786 55.0001 34.2091 54.6077 30.9654 53.9225Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M30.7992 60.0001C29.6694 60.8358 29 61.8745 29 63C29 65.7614 33.0294 68 38 68C42.9706 68 47 65.7614 47 63C47 62.5545 46.8951 62.1226 46.6983 61.7115C45.2297 61.8983 43.6481 62 42 62C37.4198 62 33.3534 61.2145 30.7992 60.0001Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M40 36C57.6731 36 72 30.6274 72 24C72 17.3726 57.6731 12 40 12C22.3269 12 8 17.3726 8 24C8 30.6274 22.3269 36 40 36ZM40 36C48.4406 36 56.1178 34.7745 61.8357 32.7721C60.5041 27.8285 51.2356 24 39.9999 24C28.7641 24 19.4956 27.8286 18.1641 32.7722C23.8819 34.7745 31.5594 36 40 36ZM40 36C49.8005 36 58.5719 34.3478 64.4418 31.7457C66.0827 33.0367 67 34.4787 67 36C67 41.5229 54.9117 46 40 46M40 36C30.1995 36 21.4281 34.3478 15.5582 31.7457C13.9173 33.0367 13 34.4787 13 36C13 41.5229 25.0883 46 40 46M40 46C48.1113 46 55.3873 44.6753 60.3366 42.5781C62.6514 43.8448 64 45.3652 64 47.0001C64 51.4184 54.1503 55.0001 42 55.0001M40 46C33.1762 46 26.9436 45.0625 22.1901 43.5162C20.7869 44.5693 20 45.7513 20 47.0001C20 51.4184 29.8497 55.0001 42 55.0001M42 55.0001C46.0214 55.0001 49.7909 54.6077 53.0346 53.9225C54.8926 54.771 56 55.8393 56 57C56 59.7615 49.732 62 42 62M42 55.0001C37.9786 55.0001 34.2091 54.6077 30.9654 53.9225C29.1074 54.771 28 55.8393 28 57C28 59.7615 34.268 62 42 62M42 62C43.6481 62 45.2297 61.8983 46.6983 61.7115C46.8951 62.1226 47 62.5545 47 63C47 65.7614 42.9706 68 38 68C33.0294 68 29 65.7614 29 63C29 61.8745 29.6694 60.8358 30.7992 60.0001C33.3534 61.2145 37.4198 62 42 62Z"
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
            d="M29.9953 56.9561C29.9954 56.9561 29.9957 56.9568 29.996 56.9581C29.9965 56.9596 29.997 56.962 29.9976 56.9653M29.9964 57.0386L29.9977 57.0321C29.9967 57.0349 29.9968 57.0369 29.9964 57.0386ZM29.9964 57.0386C29.9957 57.0413 29.9951 57.0427 29.9949 57.0427M11.8415 20.8256C10.4682 22.0432 10 23.1205 10 24C10 24.8795 10.4682 25.9568 11.8415 27.1744C13.0493 28.2452 14.8211 29.2931 17.1155 30.236C18.6057 27.8239 21.4214 25.9731 24.617 24.6786C28.786 22.9896 34.1747 22 39.9999 22C45.825 22 51.2137 22.9896 55.3828 24.6785C58.5784 25.9731 61.3941 27.8239 62.8843 30.2361C63.1353 30.133 63.38 30.0286 63.6184 29.923C65.5597 29.0636 67.0828 28.1281 68.1585 27.1744C69.5318 25.9568 70 24.8795 70 24C70 23.1205 69.5318 22.0432 68.1585 20.8256C66.7874 19.61 64.6894 18.424 61.9252 17.3874C56.4115 15.3197 48.6602 14 40 14C31.3398 14 23.5885 15.3197 18.0748 17.3874C15.3106 18.424 13.2126 19.61 11.8415 20.8256ZM67.7601 32.3146C68.9149 31.6551 69.9418 30.9391 70.8121 30.1675C72.6773 28.5138 74 26.4342 74 24C74 21.5658 72.6773 19.4862 70.8121 17.8325C68.9446 16.1768 66.3563 14.7771 63.3297 13.6421C57.2616 11.3665 49.0129 10 40 10C30.9871 10 22.7384 11.3665 16.6703 13.6421C13.6437 14.7771 11.0554 16.1768 9.18791 17.8325C7.3227 19.4862 6 21.5658 6 24C6 26.4342 7.3227 28.5138 9.18791 30.1675C10.0582 30.9391 11.0851 31.6551 12.2399 32.3146C11.4772 33.3942 11 34.6257 11 36C11 38.168 12.1932 39.9864 13.8042 41.3971C15.1004 42.5321 16.7872 43.5178 18.7327 44.3553C18.2776 45.1426 18 46.0249 18 47.0001C18 48.9068 19.0689 50.4647 20.425 51.6306C21.7876 52.802 23.6423 53.7664 25.7602 54.5365C26.0479 54.6411 26.3424 54.7429 26.6434 54.8417C26.2578 55.4564 26 56.1796 26 57C26 58.4666 26.815 59.6097 27.733 60.4085C27.2804 61.1663 27 62.0339 27 63C27 65.4369 28.7543 67.2225 30.6648 68.2839C32.6429 69.3829 35.2403 70 38 70C40.7597 70 43.3571 69.3829 45.3352 68.2839C47.1468 67.2774 48.818 65.6197 48.9861 63.3731C50.2944 63.1224 51.5017 62.8013 52.5722 62.4191C53.964 61.922 55.2319 61.2835 56.1901 60.4744C57.139 59.6731 58 58.5074 58 57C58 56.1796 57.7421 55.4564 57.3565 54.8417C57.6576 54.7429 57.9521 54.6411 58.2398 54.5365C60.3577 53.7664 62.2124 52.802 63.575 51.6306C64.9311 50.4647 66 48.9068 66 47.0001C66 45.3773 65.2443 44.0129 64.1339 42.892C64.8977 42.4263 65.5895 41.928 66.1958 41.3971C67.8068 39.9864 69 38.168 69 36C69 34.6257 68.5228 33.3942 67.7601 32.3146ZM42 60C39.2259 60 36.6975 59.697 34.6507 59.2041C33.9684 59.0398 33.3397 58.8544 32.7732 58.6521C31.6315 58.2443 30.8492 57.8054 30.3905 57.4182C30.1402 57.2068 30.0459 57.0657 30.0124 56.9995C30.0366 56.953 30.092 56.8687 30.2127 56.7458C30.4199 56.5349 30.7531 56.2839 31.2395 56.0189C32.5117 56.2668 33.8493 56.4713 35.2382 56.6283C36.7549 56.7997 38.3328 56.9144 39.9536 56.967C40.6287 56.9889 41.3113 57.0001 42 57.0001C42.7807 57.0001 43.5535 56.9857 44.3166 56.9576C46.0303 56.8945 47.6947 56.7619 49.2878 56.5663C50.489 56.4188 51.6496 56.2354 52.7605 56.0189C53.2469 56.2839 53.5801 56.5349 53.7873 56.7458C53.908 56.8687 53.9633 56.9529 53.9876 56.9995C53.9541 57.0657 53.8598 57.2068 53.6095 57.4182C53.1508 57.8054 52.3685 58.2443 51.2268 58.6521C49.9282 59.1159 48.3024 59.4908 46.4548 59.7264C46.4518 59.7267 46.4489 59.7271 46.4459 59.7275C46.2815 59.7484 46.1153 59.7682 45.9474 59.7869C45.1216 59.8788 44.2551 59.9431 43.3568 59.9756C42.912 59.9917 42.4594 60 42 60ZM31.2368 62.3496C31.0489 62.626 31 62.8507 31 63C31 63.3246 31.2604 64.0389 32.6073 64.7872C33.8865 65.4979 35.7892 66 38 66C40.2108 66 42.1135 65.4979 43.3927 64.7872C43.936 64.4854 44.3025 64.189 44.5465 63.9216C44.503 63.9243 44.4594 63.9269 44.4158 63.9295C43.6263 63.9761 42.8192 64 42 64C41.6219 64 41.2464 63.9949 40.874 63.9849C39.2603 63.9412 37.7052 63.8042 36.2518 63.5847C35.4326 63.4609 34.6456 63.3109 33.8987 63.1367C33.0148 62.9304 32.1869 62.6901 31.4278 62.4191C31.3639 62.3962 31.3002 62.3731 31.2368 62.3496ZM52.6335 51.9631C54.1992 51.6319 55.6237 51.2316 56.8729 50.7773C58.7362 50.0998 60.1033 49.3402 60.9673 48.5975C61.8377 47.8491 62 47.3024 62 47.0001C62 46.598 61.6712 45.7891 60.1658 44.8035C54.9605 46.8048 47.8044 48.0001 40 48.0001C33.5082 48.0001 27.4833 47.1734 22.6583 45.7544C22.1187 46.3183 22 46.7472 22 47.0001C22 47.3024 22.1623 47.8491 23.0327 48.5975C23.8967 49.3402 25.2638 50.0998 27.1271 50.7773C28.3763 51.2316 29.8009 51.6319 31.3666 51.9631L31.3788 51.9657C34.4735 52.6194 38.1034 53 42 53C45.8966 53 49.5265 52.6194 52.6212 51.9657L52.6335 51.9631ZM64.0489 34.0799C63.8121 34.1743 63.5723 34.267 63.3297 34.3579C60.6986 35.3446 57.6576 36.1603 54.3221 36.7679C50.2371 37.512 45.7104 37.9438 40.9541 37.9949C40.637 37.9983 40.3188 38 39.9998 38C38.8732 38 37.7587 37.9786 36.6588 37.9368C29.3512 37.6591 22.6967 36.4786 17.503 34.6598L17.4882 34.6545C17.2114 34.5575 16.9387 34.4586 16.6703 34.3579C16.4277 34.267 16.1879 34.1743 15.9511 34.0799C15.2261 34.85 15 35.5039 15 36C15 36.5934 15.3179 37.4058 16.4394 38.3878C17.5569 39.3664 19.2894 40.3388 21.6027 41.1956C26.2141 42.9035 32.7181 44 40 44C47.2819 44 53.7859 42.9035 58.3973 41.1956C60.7106 40.3388 62.4431 39.3664 63.5606 38.3878C64.6821 37.4058 65 36.5934 65 36C65 35.5039 64.7739 34.85 64.0489 34.0799ZM23.2733 32.1777C24.7898 32.5407 26.4023 32.8566 28.0953 33.119C28.9369 33.2493 29.7983 33.3665 30.6777 33.4695C32.8168 33.7202 35.0622 33.8875 37.3864 33.9596C37.7184 33.9699 38.052 33.9783 38.3872 33.9847C38.921 33.9948 39.4587 34 40 34C43.7888 34 47.4037 33.7474 50.7333 33.2901C52.3982 33.0614 53.992 32.7815 55.5008 32.4563C56.6974 32.1984 57.8405 31.912 58.9232 31.6001C57.9596 30.5074 56.3165 29.3726 53.8809 28.3859C50.2738 26.9246 45.4105 26 39.9999 26C34.5893 26 29.7259 26.9246 26.1188 28.3859C23.6832 29.3726 22.0402 30.5074 21.0766 31.6001C21.7836 31.8038 22.5165 31.9966 23.2733 32.1777ZM54.0051 57.0427C54.0047 57.0427 54.0035 57.0392 54.0023 57.0322C54.0048 57.0392 54.0054 57.0427 54.0051 57.0427ZM54.0047 56.9561C54.0045 56.9561 54.0035 56.9591 54.0024 56.9653C54.0032 56.963 54.0037 56.9612 54.0041 56.9598C54.0044 56.9588 54.0045 56.958 54.0046 56.9575C54.0048 56.9566 54.0048 56.9561 54.0047 56.9561Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreTornado = forwardRef((props, ref) => {
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

CoreTornado.displayName = 'CoreTornado'

export default CoreTornado
