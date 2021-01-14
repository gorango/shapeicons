
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M63 53V34.4641L57 31L63 27.5359V22.2426C63 19.5261 61.9209 16.9209 60 15C58.0791 13.0791 55.4739 12 52.7574 12H13C14.2806 12 15.5087 12.5087 16.4142 13.4142L17 14C18.2806 15.2806 19 17.0174 19 18.8284V47.1133L24 50L19 52.8867V57.7574C19 60.4739 20.0791 63.0791 22 65C23.8918 66.8918 26.4475 67.9672 29.1195 67.9993"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M35.8284 65.1716L36 65C37.9209 63.0791 39 60.4739 39 57.7574V54C39 53.4477 39.4477 53 40 53H74C74.5523 53 75 53.4477 75 54V57.7574C75 60.4739 73.9209 63.0791 72 65C70.0791 66.9209 67.4739 68 64.7574 68H29C31.5612 68 34.0174 66.9826 35.8284 65.1716Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M11.8284 12H12.1716C13.9821 12 15.7185 12.719 16.9989 13.9989L17 14C18.2806 15.2806 19 17.0174 19 18.8284V29C19 29.5523 18.5523 30 18 30H13.7321L12 27L10.2679 30H6C5.44772 30 5 29.5523 5 29V18.8284C5 17.0174 5.71942 15.2806 7 14C8.28058 12.7194 10.0174 12 11.8284 12Z"
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
            d="M17 14L16.4142 13.4142C15.5087 12.5087 14.2806 12 13 12H52.7574C55.4739 12 58.0791 13.0791 60 15C61.9209 16.9209 63 19.5261 63 22.2426V27.5359L57 31L63 34.4641V47H40C36.134 47 33 50.134 33 54V57.7574C33 58.8826 32.553 59.9617 31.7574 60.7574L31.5858 60.9289C30.9 61.6147 29.9699 62 29 62V67.9971C26.3714 67.9349 23.8636 66.8636 22 65C20.0791 63.0791 19 60.4739 19 57.7574V52.8868L24 50L19 47.1132V18.8284C19 17.0174 18.2806 15.2806 17 14ZM63 59V62H44.4362C44.7005 61.0234 44.8743 60.0192 44.9524 59H63Z"
            fill="currentColor"
          />
          <path
            d="M17 14L15.5858 15.4142H15.5858L17 14ZM13 10C11.8954 10 11 10.8954 11 12C11 13.1046 11.8954 14 13 14V10ZM60 15L58.5858 16.4142V16.4142L60 15ZM63 27.5359L64 29.2679C64.6188 28.9107 65 28.2504 65 27.5359H63ZM57 31L56 29.268C55.3812 29.6252 55 30.2855 55 31C55 31.7145 55.3812 32.3748 56 32.732L57 31ZM63 34.4641H65C65 33.7496 64.6188 33.0893 64 32.7321L63 34.4641ZM63 47V49C64.1046 49 65 48.1046 65 47H63ZM31.7574 60.7574L30.3431 59.3431L30.3431 59.3432L31.7574 60.7574ZM31.5858 60.9289L33 62.3432L33 62.3431L31.5858 60.9289ZM29 62V60C27.8954 60 27 60.8954 27 62H29ZM29 67.9971L28.9527 69.9966C29.4912 70.0093 30.012 69.8043 30.3974 69.428C30.7827 69.0516 31 68.5358 31 67.9971H29ZM22 65L23.4142 63.5858V63.5858L22 65ZM19 52.8868L18 51.1547C17.3812 51.512 17 52.1722 17 52.8868H19ZM24 50L25 51.7321C25.6188 51.3748 26 50.7145 26 50C26 49.2855 25.6188 48.6252 25 48.2679L24 50ZM19 47.1132H17C17 47.8278 17.3812 48.488 18 48.8453L19 47.1132ZM63 62V64C64.1046 64 65 63.1046 65 62H63ZM63 59H65C65 57.8954 64.1046 57 63 57V59ZM44.4362 62L42.5056 61.4775C42.3429 62.0786 42.4695 62.7211 42.8479 63.2155C43.2264 63.71 43.8135 64 44.4362 64V62ZM44.9524 59V57C43.9072 57 43.0382 57.8049 42.9583 58.8471L44.9524 59ZM15 14.8284L15.5858 15.4142L18.4142 12.5858L17.8284 12L15 14.8284ZM13 14C13.7501 14 14.4696 14.298 15 14.8284L17.8284 12C16.5478 10.7194 14.811 10 13 10V14ZM52.7574 10H13V14H52.7574V10ZM61.4142 13.5858C59.1183 11.2898 56.0043 10 52.7574 10V14C54.9434 14 57.04 14.8684 58.5858 16.4142L61.4142 13.5858ZM65 22.2426C65 18.9957 63.7102 15.8817 61.4142 13.5858L58.5858 16.4142C60.1316 17.96 61 20.0566 61 22.2426H65ZM65 27.5359V22.2426H61V27.5359H65ZM58 32.732L64 29.2679L62 25.8038L56 29.268L58 32.732ZM64 32.7321L58 29.268L56 32.732L62 36.1962L64 32.7321ZM65 47V34.4641H61V47H65ZM40 49H63V45H40V49ZM35 54C35 51.2386 37.2386 49 40 49V45C35.0294 45 31 49.0294 31 54H35ZM35 57.7574V54H31V57.7574H35ZM33.1716 62.1716C34.3423 61.0008 35 59.413 35 57.7574H31C31 58.3521 30.7637 58.9226 30.3431 59.3431L33.1716 62.1716ZM33 62.3431L33.1716 62.1716L30.3431 59.3432L30.1716 59.5147L33 62.3431ZM29 64C30.5003 64 31.9391 63.404 33 62.3432L30.1716 59.5147C29.8609 59.8254 29.4394 60 29 60V64ZM31 67.9971V62H27V67.9971H31ZM20.5858 66.4142C22.8133 68.6417 25.8107 69.9222 28.9527 69.9966L29.0473 65.9977C26.932 65.9476 24.9139 65.0855 23.4142 63.5858L20.5858 66.4142ZM17 57.7574C17 61.0043 18.2898 64.1183 20.5858 66.4142L23.4142 63.5858C21.8684 62.04 21 59.9434 21 57.7574H17ZM17 52.8868V57.7574H21V52.8868H17ZM23 48.2679L18 51.1547L20 54.6188L25 51.7321L23 48.2679ZM18 48.8453L23 51.7321L25 48.2679L20 45.3812L18 48.8453ZM17 18.8284V47.1132H21V18.8284H17ZM15.5858 15.4142C16.4913 16.3197 17 17.5478 17 18.8284H21C21 16.487 20.0699 14.2414 18.4142 12.5858L15.5858 15.4142ZM65 62V59H61V62H65ZM44.4362 64H63V60H44.4362V64ZM42.9583 58.8471C42.8898 59.7407 42.7374 60.6212 42.5056 61.4775L46.3667 62.5225C46.6636 61.4255 46.8588 60.2977 46.9466 59.1529L42.9583 58.8471ZM63 57H44.9524V61H63V57Z"
            fill="currentColor"
          />
          <path
            d="M35.8284 65.1716L36 65C37.9209 63.0791 39 60.4739 39 57.7574V54C39 53.4477 39.4477 53 40 53H74C74.5523 53 75 53.4477 75 54V57.7574C75 60.4739 73.9209 63.0791 72 65C70.0791 66.9209 67.4739 68 64.7574 68H29C31.5612 68 34.0174 66.9826 35.8284 65.1716Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13 18C12.6893 18 12.3913 17.8766 12.1716 17.6569L12.7574 18.2426C12.9127 18.398 13 18.6087 13 18.8284V25.8819C12.7289 25.6396 12.3744 25.5 12 25.5C11.4641 25.5 10.9689 25.7859 10.701 26.25L8.5359 30H6C5.44772 30 5 29.5523 5 29V18.8284C5 17.0174 5.71942 15.2806 7 14C8.28058 12.7194 10.0174 12 11.8284 12H12.1716C12.4499 12 12.7265 12.017 13 12.0504V16.8284V18Z"
            fill="currentColor"
          />
          <path
            d="M13.5858 16.2426C12.8047 15.4616 11.5384 15.4616 10.7574 16.2426C9.97631 17.0237 9.97631 18.29 10.7574 19.0711L13.5858 16.2426ZM13 18V20C14.1046 20 15 19.1046 15 18H13ZM13 25.8819L11.6669 27.3728C12.2548 27.8985 13.0967 28.0296 13.8166 27.7076C14.5365 27.3856 15 26.6706 15 25.8819H13ZM10.701 26.25L12.433 27.25V27.25L10.701 26.25ZM8.5359 30V32C9.25043 32 9.91068 31.6188 10.2679 31L8.5359 30ZM7 14L8.41421 15.4142L8.41421 15.4142L7 14ZM13 12.0504H15C15 11.0397 14.2459 10.1878 13.2426 10.0652L13 12.0504ZM10.7574 19.0711C11.3521 19.6659 12.1588 20 13 20V16C13.2197 16 13.4304 16.0873 13.5858 16.2426L10.7574 19.0711ZM14.1716 16.8284L13.5858 16.2426L10.7574 19.0711L11.3431 19.6569L14.1716 16.8284ZM15 18.8284C15 18.0783 14.702 17.3589 14.1716 16.8284L11.3431 19.6569C11.1234 19.4371 11 19.1391 11 18.8284H15ZM15 25.8819V18.8284H11V25.8819H15ZM12 27.5C11.8749 27.5 11.7567 27.4531 11.6669 27.3728L14.3331 24.391C13.7012 23.826 12.874 23.5 12 23.5V27.5ZM12.433 27.25C12.3437 27.4047 12.1786 27.5 12 27.5V23.5C10.7496 23.5 9.59413 24.1671 8.96891 25.25L12.433 27.25ZM10.2679 31L12.433 27.25L8.96891 25.25L6.80385 29L10.2679 31ZM6 32H8.5359V28H6V32ZM3 29C3 30.6569 4.34315 32 6 32V28C6.55229 28 7 28.4477 7 29H3ZM3 18.8284V29H7V18.8284H3ZM5.58579 12.5858C3.93014 14.2414 3 16.487 3 18.8284H7C7 17.5478 7.50871 16.3197 8.41421 15.4142L5.58579 12.5858ZM11.8284 10C9.48698 10 7.24144 10.9301 5.58579 12.5858L8.41421 15.4142C9.31972 14.5087 10.5478 14 11.8284 14V10ZM12.1716 10H11.8284V14H12.1716V10ZM13.2426 10.0652C12.889 10.022 12.5314 10 12.1716 10V14C12.3685 14 12.5641 14.012 12.7574 14.0356L13.2426 10.0652ZM15 16.8284V12.0504H11V16.8284H15ZM15 18V16.8284H11V18H15Z"
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
            d="M17 14L16.4142 13.4142C15.5087 12.5087 14.2806 12 13 12H52.7574C55.4739 12 58.0791 13.0791 60 15C61.9209 16.9209 63 19.5261 63 22.2426V27.5359L57 31L63 34.4641V53H40C39.4477 53 39 53.4477 39 54V57.7574C39 60.4739 37.9209 63.0791 36 65L35.8284 65.1716C34.0456 66.9544 31.6375 67.9681 29.1195 67.9993C26.4475 67.9672 23.8918 66.8918 22 65C20.0791 63.0791 19 60.4739 19 57.7574V52.8868L24 50L19 47.1132V18.8284C19 17.0174 18.2806 15.2806 17 14Z"
            fill="#F2C94C"
          />
          <path
            d="M35.8284 65.1716L36 65C37.9209 63.0791 39 60.4739 39 57.7574V54C39 53.4477 39.4477 53 40 53H74C74.5523 53 75 53.4477 75 54V57.7574C75 60.4739 73.9209 63.0791 72 65C70.0791 66.9209 67.4739 68 64.7574 68H29C31.5612 68 34.0174 66.9826 35.8284 65.1716Z"
            fill="#F2994A"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.8284 12H12.1716C13.9821 12 15.7185 12.719 16.9989 13.9989L17 14C18.2806 15.2806 19 17.0174 19 18.8284V29C19 29.5523 18.5523 30 18 30H13.7321L12 27L10.2679 30H6C5.44772 30 5 29.5523 5 29V18.8284C5 17.0174 5.71942 15.2806 7 14C8.28058 12.7194 10.0174 12 11.8284 12Z"
            fill="#F2994A"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M17 14L16.4142 13.4142C15.5087 12.5087 14.2806 12 13 12H52.7574C55.4739 12 58.0791 13.0791 60 15C61.9209 16.9209 63 19.5261 63 22.2426V27.5359L57 31L63 34.4641V53H40C39.4477 53 39 53.4477 39 54V57.7574C39 60.4739 37.9209 63.0791 36 65L35.8284 65.1716C34.0456 66.9544 31.6375 67.9681 29.1195 67.9993C26.4475 67.9672 23.8918 66.8918 22 65C20.0791 63.0791 19 60.4739 19 57.7574V52.8868L24 50L19 47.1132V18.8284C19 17.0174 18.2806 15.2806 17 14Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M35.8284 65.1716L36 65C37.9209 63.0791 39 60.4739 39 57.7574V54C39 53.4477 39.4477 53 40 53H74C74.5523 53 75 53.4477 75 54V57.7574C75 60.4739 73.9209 63.0791 72 65C70.0791 66.9209 67.4739 68 64.7574 68H29C31.5612 68 34.0174 66.9826 35.8284 65.1716Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M11.8284 12H12.1716C13.9821 12 15.7185 12.719 16.9989 13.9989L17 14C18.2806 15.2806 19 17.0174 19 18.8284V29C19 29.5523 18.5523 30 18 30H13.7321L12 27L10.2679 30H6C5.44772 30 5 29.5523 5 29V18.8284C5 17.0174 5.71942 15.2806 7 14C8.28058 12.7194 10.0174 12 11.8284 12Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M17 14L16.4142 13.4142C15.5087 12.5087 14.2806 12 13 12H52.7574C55.4739 12 58.0791 13.0791 60 15C61.9209 16.9209 63 19.5261 63 22.2426V27.5359L57 31L63 34.4641V53H40M17 14C18.2806 15.2806 19 17.0174 19 18.8284M17 14L16.9989 13.9989C15.7185 12.719 13.9821 12 12.1716 12H11.8284C10.0174 12 8.28058 12.7194 7 14C5.71942 15.2806 5 17.0174 5 18.8284V29C5 29.5523 5.44772 30 6 30H10.2679L12 27L13.7321 30H18C18.5523 30 19 29.5523 19 29V18.8284M40 53C39.4477 53 39 53.4477 39 54V57.7574C39 60.4739 37.9209 63.0791 36 65L35.8284 65.1716M40 53H74C74.5523 53 75 53.4477 75 54V57.7574C75 60.4739 73.9209 63.0791 72 65C70.0791 66.9209 67.4739 68 64.7574 68H29C31.5612 68 34.0174 66.9826 35.8284 65.1716M35.8284 65.1716C34.0456 66.9544 31.6375 67.9681 29.1195 67.9993C26.4475 67.9672 23.8918 66.8918 22 65C20.0791 63.0791 19 60.4739 19 57.7574V52.8868L24 50L19 47.1132V18.8284"
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
            d="M15.5859 15.4143C16.4913 16.3198 17 17.5479 17 18.8284V28H14.8868L13.7321 26C13.3748 25.3812 12.7145 25 12 25C11.2855 25 10.6252 25.3812 10.2679 26L9.11325 28H7V18.8284C7 17.5478 7.50871 16.3197 8.41421 15.4142C9.31972 14.5087 10.5478 14 11.8284 14H12.1716C13.4517 14 14.6794 14.5083 15.5848 15.4132L15.5859 15.4143ZM15.5859 15.4143C15.5859 15.4143 15.5858 15.4143 15.5859 15.4143ZM5.58579 12.5858C7.24144 10.9301 9.48698 10 11.8284 10H12.1716C12.3591 10 12.546 10.006 12.7321 10.0178C12.8197 10.0061 12.9091 10 13 10H52.7574C56.0043 10 59.1183 11.2898 61.4142 13.5858C63.7102 15.8817 65 18.9957 65 22.2426V27.5359C65 28.2504 64.6188 28.9107 64 29.2679L61 31L64 32.7321C64.6188 33.0893 65 33.7496 65 34.4641V51H74C75.6569 51 77 52.3431 77 54V57.7574C77 61.0043 75.7102 64.1183 73.4142 66.4142C71.1183 68.7102 68.0043 70 64.7574 70H29V69.9976C25.8409 69.935 22.8245 68.6529 20.5858 66.4142C18.2898 64.1183 17 61.0043 17 57.7574V52.8868C17 52.1722 17.3812 51.512 18 51.1547L20 50L18 48.8453C17.3812 48.488 17 47.8278 17 47.1132V32H13.7321C13.0175 32 12.3573 31.6188 12 31C11.6427 31.6188 10.9825 32 10.2679 32H6C4.34315 32 3 30.6569 3 29V18.8284C3 16.487 3.93014 14.2414 5.58579 12.5858ZM19.5626 14C20.4935 15.4249 21 17.1006 21 18.8284V45.9585L25 48.2679C25.6188 48.6252 26 49.2855 26 50C26 50.7145 25.6188 51.3748 25 51.7321L21 54.0415V57.7574C21 59.9434 21.8684 62.04 23.4142 63.5858C24.9309 65.1024 26.9777 65.967 29.119 65.9991C30.8582 65.9721 32.5301 65.3539 33.864 64.2566C34.0546 64.0999 34.2382 63.9333 34.4142 63.7574L34.5858 63.5858C36.1316 62.04 37 59.9434 37 57.7574V54C37 52.3431 38.3431 51 40 51H61V35.6188L56 32.732C55.3812 32.3748 55 31.7145 55 31C55 30.2855 55.3812 29.6252 56 29.268L61 26.3812V22.2426C61 20.0566 60.1316 17.96 58.5858 16.4142C57.04 14.8684 54.9434 14 52.7574 14H19.5626ZM37.8095 66H64.7574C66.9434 66 69.04 65.1316 70.5858 63.5858C72.1316 62.04 73 59.9434 73 57.7574V55H41V57.7574C41 60.5984 40.0125 63.3377 38.2275 65.5162C38.0927 65.6808 37.9533 65.8421 37.8095 66Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreScrollOld = forwardRef((props, ref) => {
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

CoreScrollOld.displayName = 'CoreScrollOld'

export default CoreScrollOld
