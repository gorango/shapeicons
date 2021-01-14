
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M34.5809 31.0113L34.7621 30.9143C37.481 29.4596 38.5241 26.0885 37.1018 23.3524C36.3073 21.8239 34.9085 20.8113 33.3486 20.4574L33.5291 20.0527C34.7897 17.2261 33.5328 13.912 30.7148 12.6323C29.6538 12.1505 28.5213 12.0251 27.4523 12.2059C26.5459 10.3092 24.6096 9 22.3689 9C20.1282 9 18.1919 10.3092 17.2856 12.2059C16.2165 12.0251 15.084 12.1505 14.023 12.6323C11.2051 13.912 9.9481 17.2261 11.2087 20.0527L11.3892 20.4574C9.82933 20.8113 8.43056 21.8239 7.63603 23.3524C6.21376 26.0885 7.25681 29.4596 9.97575 30.9143L10.157 31.0113H34.5809Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M20.642 31.0115C20.3593 31.0115 20.1301 31.2407 20.1301 31.5234V34.8554C20.1301 35.3992 19.9858 35.9332 19.7117 36.4029L19.2225 37.2417C19.0234 37.5829 19.2696 38.0115 19.6646 38.0115H25.0487C25.4438 38.0115 25.6899 37.5829 25.4908 37.2417L24.6437 35.7893C24.3696 35.3196 24.2253 34.7856 24.2253 34.2418V31.5234C24.2253 31.2407 23.9961 31.0115 23.7134 31.0115H20.642Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M59.7248 35.6184C67.0753 35.6184 73.034 29.6597 73.034 22.3092C73.034 14.9587 67.0753 9 59.7248 9C52.3744 9 46.4156 14.9587 46.4156 22.3092C46.4156 25.667 47.6591 28.7343 49.7107 31.0759L47.4394 35.6184L59.7248 35.6184Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M10.6347 48.4669C9.29068 49.8109 8.53564 51.6337 8.53564 53.5344C8.53564 55.4351 9.29068 57.2579 10.6347 58.6019L17.8359 65.8031C17.8484 65.8158 17.8611 65.8286 17.8738 65.8413L21.4934 69.4609C21.8932 69.8607 22.5414 69.8607 22.9413 69.4609L33.8001 58.602C35.1441 57.258 35.8991 55.4352 35.8991 53.5345C35.8991 51.6339 35.1441 49.811 33.8001 48.4671C32.4561 47.1231 30.6333 46.368 28.7327 46.368C26.832 46.368 25.0092 47.1231 23.6652 48.4671L22.2175 49.9148L20.7696 48.4669C19.4256 47.123 17.6028 46.3679 15.7021 46.3679C13.8015 46.3679 11.9786 47.123 10.6347 48.4669Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M63.1 44.796C60.7824 43.8361 58.1784 43.8361 55.8608 44.796C53.5432 45.756 51.7018 47.5974 50.7418 49.915C49.7819 52.2326 49.7819 54.8366 50.7418 57.1542C51.3858 58.7088 52.4263 60.0491 53.7411 61.0529C54.6799 61.7696 55.3857 62.8121 55.3857 63.9932V66.8443C55.3857 68.5405 56.7608 69.9156 58.4571 69.9156H60.5047C62.2009 69.9156 63.576 68.5405 63.576 66.8443V63.9924C63.576 62.8115 64.2818 61.769 65.2203 61.0524C66.5348 60.0487 67.5751 58.7086 68.2189 57.1542C69.1789 54.8366 69.1789 52.2326 68.2189 49.915C67.2589 47.5974 65.4176 45.756 63.1 44.796Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M63.5761 65.0522H55.3859"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'bold':
      return (
        <>
          <g opacity="0.9"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.642 31.0114C20.3593 31.0114 20.1301 31.2405 20.1301 31.5232V34.5098C20.1301 35.0536 19.9858 35.5877 19.7117 36.0574L19.2225 36.8961C19.0234 37.2374 19.2696 37.6659 19.6646 37.6659H20.6413C20.6416 37.6659 20.6418 37.6659 20.642 37.6659H23.7134C23.7136 37.6659 23.7138 37.6659 23.7141 37.6659H25.0487C25.4438 37.6659 25.6899 37.2374 25.4908 36.8961L24.6437 35.4438C24.3696 34.9741 24.2253 34.44 24.2253 33.8962V31.5232C24.2253 31.2405 23.9961 31.0114 23.7134 31.0114H20.642Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M34.5807 31.0114L34.5806 31.0114L34.762 30.9143C37.4809 29.4596 38.5239 26.0885 37.1017 23.3524C36.3071 21.8239 34.9084 20.8113 33.3485 20.4574L33.529 20.0527C34.7896 17.2261 33.5326 13.912 30.7147 12.6323C29.6537 12.1505 28.5212 12.0251 27.4521 12.2059C26.5458 10.3092 24.6095 9 22.3688 9C20.1281 9 18.1918 10.3092 17.2854 12.2059C16.2164 12.0251 15.0839 12.1505 14.0229 12.6323C11.2049 13.912 9.94798 17.2261 11.2086 20.0527L11.3891 20.4574C9.82921 20.8113 8.43044 21.8239 7.63591 23.3524C6.21364 26.0885 7.25669 29.4596 9.97563 30.9143L10.157 31.0114L10.1569 31.0114H34.5807Z" fill="currentColor"/></g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M59.7248 35.6184C67.0753 35.6184 73.034 29.6597 73.034 22.3092C73.034 14.9587 67.0753 9 59.7248 9C52.3744 9 46.4156 14.9587 46.4156 22.3092C46.4156 25.667 47.6591 28.7343 49.7107 31.0759L47.4394 35.6184L59.7248 35.6184Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.7741 48.3163C9.43009 49.6603 8.67505 51.4831 8.67505 53.3838C8.67505 55.2844 9.43009 57.1073 10.7741 58.4512L18.0075 65.6847C18.0094 65.6866 18.0113 65.6885 18.0133 65.6904L22.3568 70.034C22.3568 70.034 22.3569 70.034 22.3569 70.034L26.7004 65.6905C26.7087 65.6822 26.7169 65.674 26.7251 65.6657L33.9396 58.4512C35.2836 57.1072 36.0386 55.2844 36.0386 53.3837C36.0386 51.483 35.2836 49.6602 33.9396 48.3162C32.5956 46.9723 30.7728 46.2172 28.8721 46.2172C26.9715 46.2172 25.1486 46.9723 23.8047 48.3162L22.7105 49.4104C22.5152 49.6057 22.1985 49.6057 22.0031 49.4104L20.909 48.3163C19.565 46.9723 17.7422 46.2173 15.8415 46.2173C13.9409 46.2173 12.118 46.9723 10.7741 48.3163Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M63.1 44.796C60.7824 43.8361 58.1784 43.8361 55.8608 44.796C53.5432 45.756 51.7018 47.5974 50.7418 49.915C49.7819 52.2326 49.7819 54.8366 50.7418 57.1542C51.3858 58.7088 52.4263 60.0491 53.7411 61.0529C54.6799 61.7696 55.3857 62.8121 55.3857 63.9932V66.8443C55.3857 68.5405 56.7608 69.9156 58.4571 69.9156H60.5047C62.2009 69.9156 63.576 68.5405 63.576 66.8443V63.9924C63.576 62.8115 64.2818 61.769 65.2203 61.0524C66.5348 60.0487 67.5751 58.7086 68.2189 57.1542C69.1789 54.8366 69.1789 52.2326 68.2189 49.915C67.2589 47.5974 65.4176 45.756 63.1 44.796Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <g opacity="0.9"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.642 31.0114C20.3593 31.0114 20.1301 31.2405 20.1301 31.5232V34.5098C20.1301 35.0536 19.9857 35.5877 19.7117 36.0574L19.2225 36.8961C19.0234 37.2374 19.2695 37.666 19.6646 37.666H20.6413C20.6415 37.666 20.6418 37.666 20.642 37.666H23.7133C23.7136 37.666 23.7138 37.666 23.7141 37.666H25.0487C25.4437 37.666 25.6899 37.2374 25.4908 36.8961L24.6436 35.4438C24.3696 34.9741 24.2252 34.44 24.2252 33.8962V31.5232C24.2252 31.2405 23.9961 31.0114 23.7133 31.0114H20.642Z" fill="#F2994A"/><path fill-rule="evenodd" clip-rule="evenodd" d="M34.5807 31.0114L34.5806 31.0113L34.762 30.9143C37.4809 29.4595 38.5239 26.0884 37.1017 23.3524C36.3071 21.8239 34.9084 20.8113 33.3485 20.4574L33.529 20.0526C34.7896 17.226 33.5326 13.9119 30.7147 12.6322C29.6537 12.1504 28.5212 12.025 27.4521 12.2059C26.5458 10.3091 24.6095 8.99995 22.3688 8.99995C20.1281 8.99995 18.1918 10.3091 17.2854 12.2059C16.2164 12.025 15.0839 12.1504 14.0229 12.6322C11.2049 13.9119 9.94798 17.226 11.2086 20.0526L11.3891 20.4574C9.82921 20.8113 8.43044 21.8239 7.63591 23.3524C6.21364 26.0884 7.25669 29.4595 9.97563 30.9143L10.157 31.0113L10.1569 31.0114H34.5807Z" fill="#219653"/></g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M59.7248 35.6184C67.0753 35.6184 73.034 29.6597 73.034 22.3092C73.034 14.9587 67.0753 9 59.7248 9C52.3744 9 46.4156 14.9587 46.4156 22.3092C46.4156 25.667 47.6591 28.7343 49.7107 31.0759L47.4394 35.6184L59.7248 35.6184Z"
            fill="#56CCF2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.7741 48.3162C9.4301 49.6602 8.67506 51.483 8.67507 53.3837C8.67506 55.2843 9.4301 57.1072 10.7741 58.4511L18.0075 65.6846C18.0094 65.6865 18.0113 65.6884 18.0133 65.6903L22.3568 70.0339C22.3569 70.0339 22.3569 70.0339 22.3569 70.0339L26.7004 65.6904C26.7087 65.6821 26.7169 65.6739 26.7251 65.6656L33.9396 58.4511C35.2836 57.1071 36.0386 55.2843 36.0386 53.3836C36.0386 51.483 35.2836 49.6601 33.9396 48.3162C32.5956 46.9722 30.7728 46.2171 28.8721 46.2171C26.9715 46.2171 25.1486 46.9722 23.8047 48.3162L22.7105 49.4103C22.5152 49.6056 22.1985 49.6057 22.0031 49.4103L20.909 48.3162C19.565 46.9722 17.7422 46.2172 15.8416 46.2172C13.9409 46.2172 12.1181 46.9722 10.7741 48.3162Z"
            fill="#EB5757"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M63.1 44.796C60.7824 43.836 58.1784 43.836 55.8608 44.796C53.5432 45.756 51.7019 47.5973 50.7419 49.9149C49.7819 52.2325 49.7819 54.8366 50.7419 57.1542C51.3858 58.7088 52.4263 60.0491 53.7411 61.0529C54.6799 61.7695 55.3858 62.8121 55.3858 63.9931V66.8442C55.3858 68.5405 56.7609 69.9156 58.4571 69.9156H60.5047C62.201 69.9156 63.576 68.5405 63.576 66.8442V63.9924C63.576 62.8115 64.2818 61.769 65.2204 61.0523C66.5349 60.0486 67.5751 58.7085 68.219 57.1542C69.1789 54.8366 69.1789 52.2325 68.219 49.9149C67.259 47.5973 65.4176 45.756 63.1 44.796Z"
            fill="#F2C94C"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M63.6089 63.5521H55.3529C55.3745 63.6967 55.3858 63.8438 55.3858 63.9932V66.8443C55.3858 68.5405 56.7609 69.9156 58.4572 69.9156H60.5047C62.201 69.9156 63.5761 68.5405 63.5761 66.8443V63.9924C63.5761 63.8433 63.5873 63.6964 63.6089 63.5521Z"
            fill="#4F4F4F"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M20.6419 31.0114C20.3592 31.0114 20.13 31.2405 20.13 31.5232V34.5098C20.13 35.0536 19.9857 35.5877 19.7117 36.0574L19.2224 36.8961C19.0233 37.2374 19.2695 37.666 19.6645 37.666H25.0486C25.4437 37.666 25.6898 37.2374 25.4907 36.8961L24.6436 35.4438C24.3696 34.9741 24.2252 34.44 24.2252 33.8962V31.5232C24.2252 31.2405 23.996 31.0114 23.7133 31.0114H20.6419Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M34.5806 31.0114L34.762 30.9143C37.4809 29.4596 38.5239 26.0885 37.1017 23.3524C36.3071 21.8239 34.9084 20.8113 33.3485 20.4574L33.529 20.0527C34.7896 17.2261 33.5326 13.912 30.7147 12.6323C29.6537 12.1505 28.5212 12.0251 27.4521 12.2059C26.5458 10.3092 24.6095 9 22.3688 9C20.1281 9 18.1918 10.3092 17.2854 12.2059C16.2164 12.0251 15.0839 12.1505 14.0229 12.6323C11.2049 13.912 9.94798 17.2261 11.2086 20.0527L11.3891 20.4574C9.82921 20.8113 8.43044 21.8239 7.63591 23.3524C6.21364 26.0885 7.25669 29.4596 9.97563 30.9143L10.157 31.0114H34.5806Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M59.7248 35.6184C67.0753 35.6184 73.034 29.6597 73.034 22.3092C73.034 14.9587 67.0753 9 59.7248 9C52.3743 9 46.4156 14.9587 46.4156 22.3092C46.4156 25.667 47.6591 28.7343 49.7106 31.0759L47.4394 35.6184L59.7248 35.6184Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M10.774 48.3163C9.43003 49.6603 8.67499 51.4831 8.67499 53.3838C8.67499 55.2845 9.43003 57.1073 10.774 58.4513L22.3496 70.0269C22.352 70.0293 22.3544 70.0316 22.3567 70.034C22.3567 70.034 22.3568 70.034 22.3567 70.034C22.3676 70.0232 22.3785 70.0123 22.3893 70.0014L33.9395 58.4512C35.2835 57.1072 36.0386 55.2844 36.0386 53.3837C36.0386 51.4831 35.2835 49.6602 33.9395 48.3163C32.5956 46.9723 30.7727 46.2173 28.8721 46.2173C26.9714 46.2173 25.1486 46.9723 23.8046 48.3163L22.7105 49.4104C22.5151 49.6057 22.1984 49.6058 22.0031 49.4104L20.9089 48.3163C19.565 46.9723 17.7421 46.2173 15.8415 46.2173C13.9408 46.2173 12.118 46.9723 10.774 48.3163Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M63.1 44.796C60.7824 43.836 58.1784 43.836 55.8608 44.796C53.5432 45.756 51.7018 47.5973 50.7418 49.9149C49.7819 52.2326 49.7819 54.8366 50.7418 57.1542C51.3858 58.7088 52.4263 60.0491 53.7411 61.0529C54.6799 61.7695 55.3857 62.8121 55.3857 63.9932V66.8443C55.3857 68.5405 56.7608 69.9156 58.4571 69.9156H60.5047C62.2009 69.9156 63.576 68.5405 63.576 66.8443V63.9924C63.576 62.8115 64.2818 61.769 65.2203 61.0524C66.5348 60.0487 67.5751 58.7085 68.2189 57.1542C69.1789 54.8366 69.1789 52.2326 68.2189 49.9149C67.2589 47.5973 65.4176 45.756 63.1 44.796Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M22.3567 70.034C22.3544 70.0316 22.352 70.0293 22.3496 70.0269L10.774 58.4513C9.43003 57.1073 8.67499 55.2845 8.67499 53.3838C8.67499 51.4831 9.43003 49.6603 10.774 48.3163C12.118 46.9723 13.9408 46.2173 15.8415 46.2173C17.7421 46.2173 19.565 46.9723 20.9089 48.3163L22.0031 49.4104C22.1984 49.6058 22.5151 49.6057 22.7105 49.4104L23.8046 48.3163C25.1486 46.9723 26.9714 46.2173 28.8721 46.2173C30.7727 46.2173 32.5956 46.9723 33.9395 48.3163C35.2835 49.6602 36.0386 51.4831 36.0386 53.3837C36.0386 55.2844 35.2835 57.1072 33.9395 58.4512L22.3893 70.0014C22.3785 70.0123 22.3676 70.0232 22.3567 70.034ZM22.3567 70.034C22.3568 70.034 22.3567 70.034 22.3567 70.034ZM63.5761 65.0521H55.3858M20.13 31.5232C20.13 31.2405 20.3592 31.0114 20.6419 31.0114H23.7133C23.996 31.0114 24.2252 31.2405 24.2252 31.5232V33.8962C24.2252 34.44 24.3696 34.9741 24.6436 35.4438L25.4907 36.8961C25.6898 37.2374 25.4437 37.666 25.0486 37.666H19.6645C19.2695 37.666 19.0233 37.2374 19.2224 36.8961L19.7117 36.0574C19.9857 35.5877 20.13 35.0536 20.13 34.5098V31.5232ZM34.5806 31.0114L34.762 30.9143C37.4809 29.4596 38.5239 26.0885 37.1017 23.3524C36.3071 21.8239 34.9084 20.8113 33.3485 20.4574L33.529 20.0527C34.7896 17.2261 33.5326 13.912 30.7147 12.6323C29.6537 12.1505 28.5212 12.0251 27.4521 12.2059C26.5458 10.3092 24.6095 9 22.3688 9C20.1281 9 18.1918 10.3092 17.2854 12.2059C16.2164 12.0251 15.0839 12.1505 14.0229 12.6323C11.2049 13.912 9.94798 17.2261 11.2086 20.0527L11.3891 20.4574C9.82921 20.8113 8.43044 21.8239 7.63591 23.3524C6.21364 26.0885 7.25669 29.4596 9.97563 30.9143L10.157 31.0114H34.5806ZM73.034 22.3092C73.034 29.6597 67.0753 35.6184 59.7248 35.6184L47.4394 35.6184L49.7106 31.0759C47.6591 28.7343 46.4156 25.667 46.4156 22.3092C46.4156 14.9587 52.3743 9 59.7248 9C67.0753 9 73.034 14.9587 73.034 22.3092ZM55.8608 44.796C58.1784 43.836 60.7824 43.836 63.1 44.796C65.4176 45.756 67.2589 47.5973 68.2189 49.9149C69.1789 52.2325 69.1789 54.8366 68.2189 57.1542C67.5751 58.7085 66.5348 60.0487 65.2203 61.0524C64.2818 61.769 63.576 62.8115 63.576 63.9924V66.8443C63.576 68.5405 62.2009 69.9156 60.5047 69.9156H58.4571C56.7608 69.9156 55.3857 68.5405 55.3857 66.8443V63.9932C55.3857 62.8121 54.6799 61.7695 53.7411 61.0529C52.4263 60.0491 51.3858 58.7088 50.7418 57.1542C49.7819 54.8366 49.7819 52.2325 50.7418 49.9149C51.7018 47.5973 53.5432 45.756 55.8608 44.796Z"
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
            d="M10.1401 33.5536H18.1132V35.0519C18.1132 35.2416 18.0628 35.4279 17.9672 35.5918L17.478 36.4305C16.5011 38.1051 17.709 40.2081 19.6477 40.2081H25.0317C26.9704 40.2081 28.1783 38.1051 27.2015 36.4305L26.3543 34.9782C26.2587 34.8143 26.2083 34.628 26.2083 34.4384V33.5536H34.5639C34.9107 33.5536 35.2407 33.4644 35.5291 33.3054L35.6887 33.22C39.3733 31.2486 40.7869 26.6801 38.8594 22.9722C38.1514 21.6102 37.0883 20.5504 35.8436 19.8482C36.5546 16.4289 34.8339 12.8562 31.5248 11.3535C30.5483 10.9101 29.5245 10.6893 28.5132 10.6706C27.1261 8.77566 24.8838 7.54224 22.352 7.54224C19.8201 7.54224 17.5778 8.77566 16.1908 10.6706C15.1794 10.6893 14.1556 10.9101 13.1791 11.3535C9.87008 12.8562 8.14936 16.4289 8.86029 19.8481C7.61568 20.5504 6.55251 21.6102 5.84452 22.9722C3.91708 26.6801 5.33061 31.2486 9.01529 33.22L9.17494 33.3054C9.46331 33.4645 9.79329 33.5536 10.1401 33.5536ZM22.352 11.5422C20.9101 11.5422 19.6598 12.3829 19.0732 13.6105C18.6881 14.4162 17.8156 14.8691 16.935 14.7201C16.2469 14.6037 15.5196 14.6838 14.8331 14.9955C13.016 15.8207 12.2055 17.9577 13.0183 19.7803L13.1988 20.1851C13.4428 20.732 13.4288 21.3594 13.1607 21.8949C12.8926 22.4304 12.3987 22.8176 11.8147 22.9501C10.8043 23.1793 9.90569 23.8321 9.39365 24.8171C8.51942 26.4989 9.08972 28.5528 10.6636 29.5536H20.5959L20.6251 29.5535H23.6964L23.7256 29.5536H34.0403C35.6142 28.5528 36.1845 26.4989 35.3103 24.8171C34.7982 23.8321 33.8996 23.1793 32.8892 22.9501C32.3052 22.8176 31.8113 22.4304 31.5432 21.8949C31.2752 21.3594 31.2612 20.732 31.5051 20.1851L31.6856 19.7803C32.4985 17.9577 31.6879 15.8207 29.8709 14.9955C29.1843 14.6838 28.4571 14.6037 27.7689 14.7201C26.8884 14.8691 26.0158 14.4162 25.6308 13.6105C25.0442 12.3829 23.7938 11.5422 22.352 11.5422ZM22.1132 35.0519V33.5536H22.2083V34.4384C22.2083 35.0449 22.3171 35.644 22.5271 36.2081H21.9796C22.068 35.8307 22.1132 35.4428 22.1132 35.0519Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M59.708 7.54224C51.2529 7.54224 44.3988 14.3964 44.3988 22.8514C44.3988 26.2201 45.4888 29.338 47.3335 31.8665L45.6337 35.2662C45.3237 35.8862 45.3568 36.6224 45.7213 37.2121C46.0857 37.8017 46.7294 38.1606 47.4226 38.1606L59.708 38.1606C68.163 38.1606 75.0172 31.3065 75.0172 22.8514C75.0172 14.3964 68.163 7.54224 59.708 7.54224ZM48.3988 22.8514C48.3988 16.6055 53.4621 11.5422 59.708 11.5422C65.9539 11.5422 71.0172 16.6055 71.0172 22.8514C71.0172 29.0973 65.9539 34.1606 59.708 34.1606L50.6586 34.1606L51.4826 32.5126C51.846 31.7858 51.7336 30.9114 51.1981 30.3002C49.4538 28.3093 48.3988 25.706 48.3988 22.8514Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M65.5592 64.5347V65.5826L65.5592 65.5945L65.5592 65.6063V67.3865C65.5592 70.1873 63.2887 72.4578 60.4878 72.4578H58.4403C55.6394 72.4578 53.3689 70.1873 53.3689 67.3865V64.5354C53.3689 64.1808 53.1411 63.6661 52.5107 63.1848C50.918 61.9689 49.6574 60.3452 48.8773 58.4618C47.7143 55.6541 47.7143 52.4995 48.8773 49.6918C50.0402 46.8842 52.2709 44.6535 55.0786 43.4905C57.8862 42.3275 61.0409 42.3275 63.8486 43.4905C66.6562 44.6535 68.8869 46.8842 70.0499 49.6918C71.2128 52.4995 71.2128 55.6541 70.0499 58.4618C69.2699 60.3449 68.0096 61.9684 66.4173 63.1842C65.7869 63.6655 65.5592 64.1801 65.5592 64.5347ZM56.6093 47.186C58.4369 46.429 60.4903 46.429 62.3178 47.186C64.1454 47.943 65.5974 49.395 66.3543 51.2225C67.1113 53.0501 67.1113 55.1035 66.3543 56.9311C65.8467 58.1567 65.0264 59.2134 63.9898 60.005C62.9449 60.8028 61.9443 62.0349 61.6476 63.5945H57.2804C56.9835 62.0351 55.9828 60.8031 54.9379 60.0054C53.901 59.2138 53.0805 58.1569 52.5728 56.9311C51.8158 55.1035 51.8158 53.0501 52.5728 51.2225C53.3298 49.395 54.7818 47.943 56.6093 47.186ZM57.3891 67.5945H61.539C61.4422 68.0866 61.0084 68.4578 60.4878 68.4578H58.4403C57.9197 68.4578 57.4859 68.0866 57.3891 67.5945Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.6853 44.9101C13.2542 44.9101 10.9227 45.8758 9.20362 47.5949C7.48457 49.3139 6.51882 51.6455 6.51882 54.0766C6.51882 56.5077 7.48457 58.8392 9.20362 60.5583L16.4048 67.7594L16.4427 67.7976L20.0624 71.4172C21.2432 72.5981 23.1578 72.5981 24.3386 71.4172L35.1975 60.5584C36.9166 58.8393 37.8823 56.5078 37.8823 54.0767C37.8823 51.6456 36.9166 49.3141 35.1975 47.595C33.4785 45.876 31.1469 44.9102 28.7158 44.9102C26.2847 44.9102 23.9532 45.876 22.2341 47.595L22.2006 47.6285L22.167 47.5949C20.4479 45.8758 18.1164 44.9101 15.6853 44.9101ZM12.032 50.4233C13.001 49.4544 14.3151 48.9101 15.6853 48.9101C17.0555 48.9101 18.3697 49.4544 19.3386 50.4233L20.7864 51.8712C21.1615 52.2462 21.6702 52.4569 22.2006 52.4569C22.7311 52.4569 23.2398 52.2462 23.6148 51.8712L25.0626 50.4234C26.0315 49.4545 27.3456 48.9102 28.7158 48.9102C30.0861 48.9102 31.4002 49.4545 32.3691 50.4234C33.338 51.3923 33.8823 52.7065 33.8823 54.0767C33.8823 55.4469 33.338 56.761 32.3691 57.73L22.2005 67.8985L19.2712 64.9692L19.2332 64.931L12.032 57.7298C11.0631 56.7609 10.5188 55.4468 10.5188 54.0766C10.5188 52.7063 11.0631 51.3922 12.032 50.4233Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreIcons = forwardRef((props, ref) => {
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

CoreIcons.displayName = 'CoreIcons'

export default CoreIcons
