
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M8 16C8 14.8954 8.89543 14 10 14H70C71.1046 14 72 14.8954 72 16V48C72 49.1046 71.1046 50 70 50H10C8.89543 50 8 49.1046 8 48V16Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M8 58H72"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M8 66H72"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M17.9451 50H10C8.89543 50 8 49.1046 8 48V40.0549C8.32833 40.0186 8.66199 40 9 40C13.9706 40 18 44.0294 18 49C18 49.338 17.9814 49.6717 17.9451 50Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M17.9451 14H10C8.89543 14 8 14.8954 8 16V23.9451C8.32833 23.9814 8.66199 24 9 24C13.9706 24 18 19.9706 18 15C18 14.662 17.9814 14.3283 17.9451 14Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M62.0549 14H70C71.1046 14 72 14.8954 72 16V23.9451C71.6717 23.9814 71.338 24 71 24C66.0294 24 62 19.9706 62 15C62 14.662 62.0186 14.3283 62.0549 14Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M72 40.0549V48C72 49.1046 71.1046 50 70 50H62.0549C62.0186 49.6717 62 49.338 62 49C62 44.0294 66.0294 40 71 40C71.338 40 71.6717 40.0186 72 40.0549Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M19.4151 29.22C20.3493 28.5009 21.6506 28.5009 22.5847 29.22C23.2237 29.7118 23.598 30.4724 23.598 31.2787V32.7213C23.598 33.5276 23.2237 34.2882 22.5847 34.78C21.6506 35.4992 20.3493 35.4992 19.4151 34.78C18.7762 34.2882 18.4019 33.5276 18.4019 32.7213V31.2787C18.4019 30.4724 18.7762 29.7118 19.4151 29.22Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M35.4749 23.66C38.2774 21.5026 42.1812 21.5026 44.9837 23.66C46.9005 25.1355 48.0235 27.4173 48.0235 29.8362V34.1639C48.0235 36.5828 46.9005 38.8646 44.9837 40.3401C42.1812 42.4975 38.2774 42.4975 35.4749 40.3401C33.5581 38.8646 32.4351 36.5828 32.4351 34.1639V29.8362C32.4351 27.4173 33.5581 25.1355 35.4749 23.66Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M57.4151 29.22C58.3493 28.5009 59.6506 28.5009 60.5847 29.22C61.2237 29.7118 61.598 30.4724 61.598 31.2787V32.7213C61.598 33.5276 61.2237 34.2882 60.5847 34.78C59.6506 35.4992 58.3493 35.4992 57.4151 34.78C56.7762 34.2882 56.4019 33.5276 56.4019 32.7213V31.2787C56.4019 30.4724 56.7762 29.7118 57.4151 29.22Z"
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
            d="M8 40.0549V23.9451C8.32833 23.9814 8.66199 24 9 24C13.9706 24 18 19.9706 18 15C18 14.662 17.9814 14.3283 17.9451 14H62.0549C62.0186 14.3283 62 14.662 62 15C62 19.9706 66.0294 24 71 24C71.338 24 71.6717 23.9814 72 23.9451V40.0549C71.6717 40.0186 71.338 40 71 40C66.0294 40 62 44.0294 62 49C62 49.338 62.0186 49.6717 62.0549 50H17.9451C17.9814 49.6717 18 49.338 18 49C18 44.0294 13.9706 40 9 40C8.66199 40 8.32833 40.0186 8 40.0549ZM44.9839 23.66C42.1814 21.5026 38.2776 21.5026 35.4751 23.66C33.5583 25.1355 32.4353 27.4173 32.4353 29.8362V34.1638C32.4353 36.5827 33.5583 38.8645 35.4751 40.34C38.2776 42.4974 42.1814 42.4974 44.9839 40.34C46.9007 38.8645 48.0237 36.5827 48.0237 34.1638V29.8362C48.0237 27.4173 46.9007 25.1355 44.9839 23.66ZM19.4152 29.22C20.3494 28.5009 21.6506 28.5009 22.5848 29.22C23.2237 29.7118 23.5981 30.4724 23.5981 31.2787V32.7213C23.5981 33.5276 23.2237 34.2882 22.5848 34.78C21.6506 35.4991 20.3494 35.4991 19.4152 34.78C18.7763 34.2882 18.4019 33.5276 18.4019 32.7213V31.2787C18.4019 30.4724 18.7763 29.7118 19.4152 29.22ZM60.5848 29.22C59.6506 28.5009 58.3494 28.5009 57.4152 29.22C56.7763 29.7118 56.4019 30.4724 56.4019 31.2787V32.7213C56.4019 33.5276 56.7763 34.2882 57.4152 34.78C58.3494 35.4991 59.6506 35.4991 60.5848 34.78C61.2237 34.2882 61.5981 33.5276 61.5981 32.7213V31.2787C61.5981 30.4724 61.2237 29.7118 60.5848 29.22Z"
            fill="currentColor"
          />
          <path
            d="M8 58H72"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M8 66H72"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M8 16C8 14.8954 8.89543 14 10 14H70C71.1046 14 72 14.8954 72 16V48C72 49.1046 71.1046 50 70 50H10C8.89543 50 8 49.1046 8 48V16Z"
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
            d="M8 58H72"
            stroke="#219653"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M8 66H72"
            stroke="#219653"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M8 16C8 14.8954 8.89543 14 10 14H70C71.1046 14 72 14.8954 72 16V48C72 49.1046 71.1046 50 70 50H10C8.89543 50 8 49.1046 8 48V16Z"
            fill="#6FCF97"
            stroke="#6FCF97"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.9451 14H10C8.89543 14 8 14.8954 8 16V23.9451C8.32833 23.9814 8.66199 24 9 24C13.9706 24 18 19.9706 18 15C18 14.662 17.9814 14.3283 17.9451 14ZM17.9451 50H10C8.89543 50 8 49.1046 8 48V40.0549C8.32833 40.0186 8.66199 40 9 40C13.9706 40 18 44.0294 18 49C18 49.338 17.9814 49.6717 17.9451 50ZM72 40.0549V48C72 49.1046 71.1046 50 70 50H62.0549C62.0186 49.6717 62 49.338 62 49C62 44.0294 66.0294 40 71 40C71.338 40 71.6717 40.0186 72 40.0549ZM62.0549 14H70C71.1046 14 72 14.8954 72 16V23.9451C71.6717 23.9814 71.338 24 71 24C66.0294 24 62 19.9706 62 15C62 14.662 62.0186 14.3283 62.0549 14Z"
            fill="#219653"
          />
          <path
            d="M17.9451 14L19.933 13.7802C19.8209 12.7669 18.9646 12 17.9451 12V14ZM8 23.9451H6C6 24.9646 6.7669 25.8209 7.78025 25.933L8 23.9451ZM17.9451 50V52C18.9646 52 19.8209 51.2331 19.933 50.2198L17.9451 50ZM8 40.0549L7.78025 38.067C6.7669 38.1791 6 39.0354 6 40.0549H8ZM72 40.0549H74C74 39.0354 73.2331 38.1791 72.2197 38.067L72 40.0549ZM62.0549 50L60.067 50.2198C60.1791 51.2331 61.0354 52 62.0549 52V50ZM62.0549 14V12C61.0354 12 60.1791 12.7669 60.067 13.7802L62.0549 14ZM72 23.9451L72.2197 25.933C73.2331 25.8209 74 24.9646 74 23.9451H72ZM10 16H17.9451V12H10V16ZM10 16V16V12C7.79086 12 6 13.7909 6 16H10ZM10 23.9451V16H6V23.9451H10ZM7.78025 25.933C8.18141 25.9773 8.58843 26 9 26V22C8.73555 22 8.47525 21.9854 8.21975 21.9572L7.78025 25.933ZM9 26C15.0751 26 20 21.0751 20 15H16C16 18.866 12.866 22 9 22V26ZM20 15C20 14.5884 19.9773 14.1814 19.933 13.7802L15.9572 14.2198C15.9854 14.4753 16 14.7355 16 15H20ZM17.9451 48H10V52H17.9451V48ZM10 48H6C6 50.2091 7.79086 52 10 52V48ZM10 48V40.0549H6V48H10ZM8.21975 42.0428C8.47526 42.0146 8.73556 42 9 42V38C8.58842 38 8.18141 38.0227 7.78025 38.067L8.21975 42.0428ZM9 42C12.866 42 16 45.134 16 49H20C20 42.9249 15.0751 38 9 38V42ZM16 49C16 49.2645 15.9854 49.5247 15.9572 49.7802L19.933 50.2198C19.9773 49.8186 20 49.4116 20 49H16ZM70 40.0549V48H74V40.0549H70ZM70 48V52C72.2091 52 74 50.2091 74 48H70ZM70 48H62.0549V52H70V48ZM64.0428 49.7802C64.0146 49.5247 64 49.2645 64 49H60C60 49.4116 60.0227 49.8186 60.067 50.2198L64.0428 49.7802ZM64 49C64 45.134 67.134 42 71 42V38C64.9249 38 60 42.9249 60 49H64ZM71 42C71.2645 42 71.5247 42.0146 71.7803 42.0428L72.2197 38.067C71.8186 38.0227 71.4116 38 71 38V42ZM62.0549 16H70V12H62.0549V16ZM70 16H74C74 13.7909 72.2091 12 70 12V16ZM70 16V23.9451H74V16H70ZM71.7802 21.9572C71.5247 21.9854 71.2645 22 71 22V26C71.4116 26 71.8186 25.9773 72.2197 25.933L71.7802 21.9572ZM71 22C67.134 22 64 18.866 64 15H60C60 21.0751 64.9249 26 71 26V22ZM64 15C64 14.7355 64.0146 14.4752 64.0428 14.2198L60.067 13.7802C60.0227 14.1814 60 14.5884 60 15H64Z"
            fill="#219653"
          />
          <path
            d="M35.4751 23.66C38.2776 21.5026 42.1814 21.5026 44.9839 23.66C46.9007 25.1355 48.0237 27.4173 48.0237 29.8362V34.1638C48.0237 36.5827 46.9007 38.8645 44.9839 40.34C42.1814 42.4974 38.2776 42.4974 35.4751 40.34C33.5583 38.8645 32.4353 36.5827 32.4353 34.1638V29.8362C32.4353 27.4173 33.5583 25.1355 35.4751 23.66Z"
            fill="#219653"
          />
          <path
            d="M19.4152 29.22C20.3494 28.5009 21.6506 28.5009 22.5848 29.22C23.2237 29.7118 23.5981 30.4724 23.5981 31.2787V32.7213C23.5981 33.5276 23.2237 34.2882 22.5848 34.78C21.6506 35.4991 20.3494 35.4991 19.4152 34.78C18.7763 34.2882 18.4019 33.5276 18.4019 32.7213V31.2787C18.4019 30.4724 18.7763 29.7118 19.4152 29.22Z"
            fill="#219653"
          />
          <path
            d="M57.4152 29.22C58.3494 28.5009 59.6506 28.5009 60.5848 29.22C61.2237 29.7118 61.5981 30.4724 61.5981 31.2787V32.7213C61.5981 33.5276 61.2237 34.2882 60.5848 34.78C59.6506 35.4991 58.3494 35.4991 57.4152 34.78C56.7763 34.2882 56.4019 33.5276 56.4019 32.7213V31.2787C56.4019 30.4724 56.7763 29.7118 57.4152 29.22Z"
            fill="#219653"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M8 16C8 14.8954 8.89543 14 10 14H70C71.1046 14 72 14.8954 72 16V48C72 49.1046 71.1046 50 70 50H10C8.89543 50 8 49.1046 8 48V16Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M17.9451 14H10C8.89543 14 8 14.8954 8 16V23.9451C8.32833 23.9814 8.66199 24 9 24C13.9706 24 18 19.9706 18 15C18 14.662 17.9814 14.3283 17.9451 14Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M17.9451 50H10C8.89543 50 8 49.1046 8 48V40.0549C8.32833 40.0186 8.66199 40 9 40C13.9706 40 18 44.0294 18 49C18 49.338 17.9814 49.6717 17.9451 50Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M72 40.0549V48C72 49.1046 71.1046 50 70 50H62.0549C62.0186 49.6717 62 49.338 62 49C62 44.0294 66.0294 40 71 40C71.338 40 71.6717 40.0186 72 40.0549Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M62.0549 14H70C71.1046 14 72 14.8954 72 16V23.9451C71.6717 23.9814 71.338 24 71 24C66.0294 24 62 19.9706 62 15C62 14.662 62.0186 14.3283 62.0549 14Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M35.4751 23.66C38.2776 21.5026 42.1814 21.5026 44.9839 23.66C46.9007 25.1355 48.0237 27.4173 48.0237 29.8362V34.1638C48.0237 36.5827 46.9007 38.8645 44.9839 40.34C42.1814 42.4974 38.2776 42.4974 35.4751 40.34C33.5583 38.8645 32.4353 36.5827 32.4353 34.1638V29.8362C32.4353 27.4173 33.5583 25.1355 35.4751 23.66Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M19.4152 29.22C20.3494 28.5009 21.6506 28.5009 22.5848 29.22C23.2237 29.7118 23.5981 30.4724 23.5981 31.2787V32.7213C23.5981 33.5276 23.2237 34.2882 22.5848 34.78C21.6506 35.4991 20.3494 35.4991 19.4152 34.78C18.7763 34.2882 18.4019 33.5276 18.4019 32.7213V31.2787C18.4019 30.4724 18.7763 29.7118 19.4152 29.22Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M57.4152 29.22C58.3494 28.5009 59.6506 28.5009 60.5848 29.22C61.2237 29.7118 61.5981 30.4724 61.5981 31.2787V32.7213C61.5981 33.5276 61.2237 34.2882 60.5848 34.78C59.6506 35.4991 58.3494 35.4991 57.4152 34.78C56.7763 34.2882 56.4019 33.5276 56.4019 32.7213V31.2787C56.4019 30.4724 56.7763 29.7118 57.4152 29.22Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M8 58H72M8 66H72M10 50H70M10 50C8.89543 50 8 49.1046 8 48M10 50H17.9451C17.9814 49.6717 18 49.338 18 49C18 44.0294 13.9706 40 9 40C8.66199 40 8.32833 40.0186 8 40.0549V48M8 48V16M70 50C71.1046 50 72 49.1046 72 48M70 50H62.0549C62.0186 49.6717 62 49.338 62 49C62 44.0294 66.0294 40 71 40C71.338 40 71.6717 40.0186 72 40.0549V48M72 48V16M70 14H10M70 14C71.1046 14 72 14.8954 72 16M70 14H62.0549C62.0186 14.3283 62 14.662 62 15C62 19.9706 66.0294 24 71 24C71.338 24 71.6717 23.9814 72 23.9451V16M10 14C8.89543 14 8 14.8954 8 16M10 14H17.9451C17.9814 14.3283 18 14.662 18 15C18 19.9706 13.9706 24 9 24C8.66199 24 8.32833 23.9814 8 23.9451V16M32.4353 29.8362V34.1638C32.4353 36.5827 33.5583 38.8645 35.4751 40.34C38.2776 42.4974 42.1814 42.4974 44.9839 40.34C46.9007 38.8645 48.0237 36.5827 48.0237 34.1638V29.8362C48.0237 27.4173 46.9007 25.1355 44.9839 23.66C42.1814 21.5026 38.2776 21.5026 35.4751 23.66C33.5583 25.1355 32.4353 27.4173 32.4353 29.8362ZM18.4019 31.2787V32.7213C18.4019 33.5276 18.7763 34.2882 19.4152 34.78C20.3494 35.4991 21.6506 35.4991 22.5848 34.78C23.2237 34.2882 23.5981 33.5276 23.5981 32.7213V31.2787C23.5981 30.4724 23.2237 29.7118 22.5848 29.22C21.6506 28.5009 20.3494 28.5009 19.4152 29.22C18.7763 29.7118 18.4019 30.4724 18.4019 31.2787ZM56.4019 31.2787V32.7213C56.4019 33.5276 56.7763 34.2882 57.4152 34.78C58.3494 35.4991 59.6506 35.4991 60.5848 34.78C61.2237 34.2882 61.5981 33.5276 61.5981 32.7213V31.2787C61.5981 30.4724 61.2237 29.7118 60.5848 29.22C59.6506 28.5009 58.3494 28.5009 57.4152 29.22C56.7763 29.7118 56.4019 30.4724 56.4019 31.2787Z"
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
            d="M46.2039 22.0752C42.6823 19.3642 37.7767 19.3642 34.2551 22.0752C31.8465 23.9293 30.4353 26.7966 30.4353 29.8362V34.1638C30.4353 37.2034 31.8465 40.0707 34.2551 41.9248C37.7767 44.6358 42.6823 44.6358 46.2039 41.9248C48.6125 40.0707 50.0237 37.2034 50.0237 34.1638V29.8362C50.0237 26.7966 48.6125 23.9293 46.2039 22.0752ZM36.695 25.2448C38.7784 23.641 41.6805 23.641 43.7639 25.2448C45.1888 26.3417 46.0237 28.038 46.0237 29.8362V34.1638C46.0237 35.962 45.1888 37.6583 43.7639 38.7552C41.6805 40.359 38.7784 40.359 36.695 38.7552C35.2701 37.6583 34.4353 35.962 34.4353 34.1638V29.8362C34.4353 28.038 35.2701 26.3417 36.695 25.2448Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.1952 27.6352C19.8485 26.3625 22.1515 26.3625 23.8048 27.6352C24.9355 28.5056 25.5981 29.8517 25.5981 31.2787V32.7213C25.5981 34.1483 24.9355 35.4944 23.8048 36.3648C22.1515 37.6375 19.8485 37.6375 18.1952 36.3648C17.0645 35.4944 16.4019 34.1483 16.4019 32.7213V31.2787C16.4019 29.8517 17.0645 28.5056 18.1952 27.6352ZM21.3648 30.8048C21.1498 30.6393 20.8502 30.6393 20.6352 30.8048C20.4881 30.918 20.4019 31.0931 20.4019 31.2787V32.7213C20.4019 32.9069 20.4881 33.082 20.6352 33.1952C20.8502 33.3607 21.1498 33.3607 21.3648 33.1952C21.5119 33.082 21.5981 32.9069 21.5981 32.7213V31.2787C21.5981 31.0931 21.5119 30.918 21.3648 30.8048Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M61.8048 27.6352C60.1515 26.3625 57.8485 26.3625 56.1952 27.6352C55.0645 28.5056 54.4019 29.8517 54.4019 31.2787V32.7213C54.4019 34.1483 55.0644 35.4944 56.1952 36.3648C57.8485 37.6375 60.1515 37.6375 61.8048 36.3648C62.9355 35.4944 63.5981 34.1483 63.5981 32.7213V31.2787C63.5981 29.8517 62.9355 28.5056 61.8048 27.6352ZM58.6352 30.8048C58.8502 30.6393 59.1498 30.6393 59.3648 30.8048C59.5119 30.918 59.5981 31.0931 59.5981 31.2787V32.7213C59.5981 32.9069 59.5119 33.082 59.3648 33.1952C59.1498 33.3607 58.8502 33.3607 58.6352 33.1952C58.4881 33.082 58.4019 32.9069 58.4019 32.7213V31.2787C58.4019 31.0931 58.4881 30.918 58.6352 30.8048Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 12C7.79086 12 6 13.7909 6 16V48C6 50.2091 7.79086 52 10 52H70C72.2091 52 74 50.2091 74 48V16C74 13.7909 72.2091 12 70 12H10ZM10 38.0448V25.9552C15.2771 25.4796 19.4796 21.2771 19.9552 16L60.0448 16C60.5204 21.2771 64.7229 25.4796 70 25.9552V38.0448C64.7229 38.5204 60.5204 42.7229 60.0448 48H19.9552C19.4796 42.7229 15.2771 38.5204 10 38.0448ZM10 16L15.9291 16C15.4906 19.0657 13.0657 21.4906 10 21.9291V16ZM70 21.9291C66.9343 21.4906 64.5094 19.0657 64.0709 16H70V21.9291ZM64.0709 48C64.5094 44.9343 66.9343 42.5094 70 42.0709V48H64.0709ZM10 42.0709C13.0657 42.5094 15.4906 44.9343 15.9291 48H10V42.0709Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M6 58C6 56.8954 6.89543 56 8 56H72C73.1046 56 74 56.8954 74 58C74 59.1046 73.1046 60 72 60H8C6.89543 60 6 59.1046 6 58Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M6 66C6 64.8954 6.89543 64 8 64H72C73.1046 64 74 64.8954 74 66C74 67.1046 73.1046 68 72 68H8C6.89543 68 6 67.1046 6 66Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreDollarBills = forwardRef((props, ref) => {
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

CoreDollarBills.displayName = 'CoreDollarBills'

export default CoreDollarBills
