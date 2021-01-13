
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M10 43.6656C13.0711 43.6656 16.1421 42.494 18.4853 40.1509L21 37.6361C21.5523 37.0839 22.4477 37.0839 23 37.6361L25.5147 40.1509C30.201 44.8371 37.799 44.8372 42.4853 40.1509L45 37.6361C45.5523 37.0839 46.4477 37.0839 47 37.6361L49.5147 40.1509C51.8579 42.494 54.9289 43.6656 58 43.6656"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M22 27.9371C25.0711 27.9371 28.1421 26.7655 30.4853 24.4223L33 21.9076C33.5523 21.3553 34.4477 21.3553 35 21.9076L37.5147 24.4223C42.201 29.1086 49.799 29.1086 54.4853 24.4223L57 21.9076C57.5523 21.3553 58.4477 21.3553 59 21.9076L61.5147 24.4223C63.8579 26.7655 66.9289 27.9371 70 27.9371"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M22 59.3941C25.0711 59.3941 28.1421 58.2225 30.4853 55.8794L33 53.3647C33.5523 52.8124 34.4477 52.8124 35 53.3647L37.5147 55.8794C42.201 60.5657 49.799 60.5657 54.4853 55.8794L57 53.3647C57.5523 52.8124 58.4477 52.8124 59 53.3647L61.5147 55.8794C63.8579 58.2225 66.9289 59.3941 70 59.3941"
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
            d="M31 23.5002L33.1213 25.6215L33.1213 25.6215L31 23.5002ZM30.4853 24.0149L28.364 21.8936L28.364 21.8936L30.4853 24.0149ZM32.5 22.0002L34.6213 24.1215V24.1215L32.5 22.0002ZM31.5 23.0002L29.3787 20.8788L29.3787 20.8788L31.5 23.0002ZM22 24.5296C20.3431 24.5296 19 25.8727 19 27.5296C19 29.1864 20.3431 30.5296 22 30.5296V24.5296ZM37.5147 24.0149L39.636 21.8935V21.8935L37.5147 24.0149ZM55 23.5002L57.1213 25.6215L57.1213 25.6215L55 23.5002ZM54.4853 24.0149L52.364 21.8935L52.364 21.8936L54.4853 24.0149ZM56.5 22.0002L58.6213 24.1215V24.1215L56.5 22.0002ZM55.5 23.0002L53.3787 20.8788V20.8788L55.5 23.0002ZM61.5147 24.0149L59.3934 26.1362L59.3934 26.1362L61.5147 24.0149ZM70 30.5296C71.6569 30.5296 73 29.1864 73 27.5296C73 25.8727 71.6569 24.5296 70 24.5296V30.5296ZM59 21.5002L61.1213 19.3788L59 21.5002ZM35 21.5002L37.1213 19.3788L35 21.5002ZM28.8787 21.3788L28.364 21.8936L32.6066 26.1362L33.1213 25.6215L28.8787 21.3788ZM30.8787 19.3788L30.3787 19.8788L34.6213 24.1215L35.1213 23.6215L30.8787 19.3788ZM30.3787 19.8788L29.8787 20.3788L34.1213 24.6215L34.6213 24.1215L30.3787 19.8788ZM29.8787 20.3788L29.3787 20.8788L33.6213 25.1215L34.1213 24.6215L29.8787 20.3788ZM29.3787 20.8788L28.8787 21.3788L33.1213 25.6215L33.6213 25.1215L29.3787 20.8788ZM22 30.5296C25.8342 30.5296 29.6783 29.0645 32.6066 26.1362L28.364 21.8936C26.606 23.6515 24.3079 24.5296 22 24.5296V30.5296ZM39.636 21.8935L37.1213 19.3788L32.8787 23.6215L35.3934 26.1362L39.636 21.8935ZM52.8787 21.3788L52.364 21.8935L56.6066 26.1362L57.1213 25.6215L52.8787 21.3788ZM54.8787 19.3788L54.3787 19.8788L58.6213 24.1215L59.1213 23.6215L54.8787 19.3788ZM54.3787 19.8788L53.8787 20.3788L58.1213 24.6215L58.6213 24.1215L54.3787 19.8788ZM53.8787 20.3788L53.3787 20.8788L57.6213 25.1215L58.1213 24.6215L53.8787 20.3788ZM53.3787 20.8788L52.8787 21.3788L57.1213 25.6215L57.6213 25.1215L53.3787 20.8788ZM35.3934 26.1362C41.2513 31.9941 50.7487 31.9941 56.6066 26.1362L52.364 21.8936C48.8492 25.4083 43.1508 25.4083 39.636 21.8935L35.3934 26.1362ZM63.636 21.8935L61.1213 19.3788L56.8787 23.6215L59.3934 26.1362L63.636 21.8935ZM59.3934 26.1362C62.3217 29.0645 66.1658 30.5296 70 30.5296V24.5296C67.6921 24.5296 65.394 23.6515 63.636 21.8935L59.3934 26.1362ZM59.1213 23.6215C58.502 24.2408 57.498 24.2408 56.8787 23.6215L61.1213 19.3788C59.3975 17.655 56.6025 17.655 54.8787 19.3788L59.1213 23.6215ZM35.1213 23.6215C34.502 24.2408 33.498 24.2408 32.8787 23.6215L37.1213 19.3788C35.3975 17.655 32.6025 17.655 30.8787 19.3788L35.1213 23.6215Z"
            fill="currentColor"
          />
          <path
            d="M31 54.9572L33.1213 57.0785L33.1213 57.0785L31 54.9572ZM30.4853 55.4719L28.364 53.3506L28.364 53.3506L30.4853 55.4719ZM32.5 53.4572L34.6213 55.5785V55.5785L32.5 53.4572ZM31.5 54.4572L29.3787 52.3359L29.3787 52.3359L31.5 54.4572ZM22 55.9866C20.3431 55.9866 19 57.3298 19 58.9866C19 60.6435 20.3431 61.9866 22 61.9866V55.9866ZM37.5147 55.4719L39.636 53.3506V53.3506L37.5147 55.4719ZM55 54.9572L57.1213 57.0785L57.1213 57.0785L55 54.9572ZM54.4853 55.4719L52.364 53.3506L52.364 53.3506L54.4853 55.4719ZM56.5 53.4572L58.6213 55.5785V55.5785L56.5 53.4572ZM55.5 54.4572L53.3787 52.3359V52.3359L55.5 54.4572ZM61.5147 55.4719L59.3934 57.5932L59.3934 57.5932L61.5147 55.4719ZM70 61.9866C71.6569 61.9866 73 60.6435 73 58.9866C73 57.3298 71.6569 55.9866 70 55.9866V61.9866ZM59 52.9572L61.1213 50.8359L59 52.9572ZM35 52.9572L37.1213 50.8359L35 52.9572ZM28.8787 52.8359L28.364 53.3506L32.6066 57.5932L33.1213 57.0785L28.8787 52.8359ZM30.8787 50.8359L30.3787 51.3359L34.6213 55.5785L35.1213 55.0785L30.8787 50.8359ZM30.3787 51.3359L29.8787 51.8359L34.1213 56.0785L34.6213 55.5785L30.3787 51.3359ZM29.8787 51.8359L29.3787 52.3359L33.6213 56.5785L34.1213 56.0785L29.8787 51.8359ZM29.3787 52.3359L28.8787 52.8359L33.1213 57.0785L33.6213 56.5785L29.3787 52.3359ZM22 61.9866C25.8342 61.9866 29.6783 60.5216 32.6066 57.5932L28.364 53.3506C26.606 55.1085 24.3079 55.9866 22 55.9866V61.9866ZM39.636 53.3506L37.1213 50.8359L32.8787 55.0785L35.3934 57.5932L39.636 53.3506ZM52.8787 52.8359L52.364 53.3506L56.6066 57.5932L57.1213 57.0785L52.8787 52.8359ZM54.8787 50.8359L54.3787 51.3359L58.6213 55.5785L59.1213 55.0785L54.8787 50.8359ZM54.3787 51.3359L53.8787 51.8359L58.1213 56.0785L58.6213 55.5785L54.3787 51.3359ZM53.8787 51.8359L53.3787 52.3359L57.6213 56.5785L58.1213 56.0785L53.8787 51.8359ZM53.3787 52.3359L52.8787 52.8359L57.1213 57.0785L57.6213 56.5785L53.3787 52.3359ZM35.3934 57.5932C41.2513 63.4511 50.7487 63.4511 56.6066 57.5932L52.364 53.3506C48.8492 56.8653 43.1508 56.8653 39.636 53.3506L35.3934 57.5932ZM63.636 53.3506L61.1213 50.8359L56.8787 55.0785L59.3934 57.5932L63.636 53.3506ZM59.3934 57.5932C62.3217 60.5216 66.1658 61.9866 70 61.9866V55.9866C67.6921 55.9866 65.394 55.1085 63.636 53.3506L59.3934 57.5932ZM59.1213 55.0785C58.502 55.6978 57.498 55.6978 56.8787 55.0785L61.1213 50.8359C59.3975 49.112 56.6025 49.112 54.8787 50.8359L59.1213 55.0785ZM35.1213 55.0785C34.502 55.6978 33.498 55.6978 32.8787 55.0785L37.1213 50.8359C35.3975 49.112 32.6025 49.112 30.8787 50.8359L35.1213 55.0785Z"
            fill="currentColor"
          />
          <path
            d="M19 39.2287L21.1213 41.35L21.1213 41.35L19 39.2287ZM18.4853 39.7434L16.364 37.6221L16.364 37.6221L18.4853 39.7434ZM20.5 37.7287L22.6213 39.85V39.85L20.5 37.7287ZM19.5 38.7287L17.3787 36.6073L17.3787 36.6073L19.5 38.7287ZM10 40.2581C8.34315 40.2581 7 41.6013 7 43.2581C7 44.915 8.34315 46.2581 10 46.2581L10 40.2581ZM25.5147 39.7434L27.636 37.6221V37.6221L25.5147 39.7434ZM43 39.2287L45.1213 41.35L45.1213 41.35L43 39.2287ZM42.4853 39.7434L40.364 37.6221L40.364 37.6221L42.4853 39.7434ZM44.5 37.7287L46.6213 39.85V39.85L44.5 37.7287ZM43.5 38.7287L41.3787 36.6073V36.6073L43.5 38.7287ZM49.5147 39.7434L47.3934 41.8647L47.3934 41.8647L49.5147 39.7434ZM58 46.2581C59.6569 46.2581 61 44.915 61 43.2581C61 41.6013 59.6569 40.2581 58 40.2581V46.2581ZM47 37.2287L49.1213 35.1073L47 37.2287ZM23 37.2287L25.1213 35.1073L23 37.2287ZM16.8787 37.1073L16.364 37.6221L20.6066 41.8647L21.1213 41.35L16.8787 37.1073ZM18.8787 35.1073L18.3787 35.6073L22.6213 39.85L23.1213 39.35L18.8787 35.1073ZM18.3787 35.6073L17.8787 36.1073L22.1213 40.35L22.6213 39.85L18.3787 35.6073ZM17.8787 36.1073L17.3787 36.6073L21.6213 40.85L22.1213 40.35L17.8787 36.1073ZM17.3787 36.6073L16.8787 37.1073L21.1213 41.35L21.6213 40.85L17.3787 36.6073ZM10 46.2581C13.8342 46.2581 17.6783 44.7931 20.6066 41.8647L16.364 37.6221C14.606 39.38 12.3079 40.2581 10 40.2581L10 46.2581ZM27.636 37.6221L25.1213 35.1073L20.8787 39.35L23.3934 41.8647L27.636 37.6221ZM40.8787 37.1073L40.364 37.6221L44.6066 41.8647L45.1213 41.35L40.8787 37.1073ZM42.8787 35.1073L42.3787 35.6073L46.6213 39.85L47.1213 39.35L42.8787 35.1073ZM42.3787 35.6073L41.8787 36.1073L46.1213 40.35L46.6213 39.85L42.3787 35.6073ZM41.8787 36.1073L41.3787 36.6073L45.6213 40.85L46.1213 40.35L41.8787 36.1073ZM41.3787 36.6073L40.8787 37.1073L45.1213 41.35L45.6213 40.85L41.3787 36.6073ZM23.3934 41.8647C29.2513 47.7226 38.7487 47.7226 44.6066 41.8647L40.364 37.6221C36.8492 41.1368 31.1508 41.1368 27.636 37.6221L23.3934 41.8647ZM51.636 37.6221L49.1213 35.1073L44.8787 39.35L47.3934 41.8647L51.636 37.6221ZM47.3934 41.8647C50.3217 44.7931 54.1658 46.2581 58 46.2581V40.2581C55.6921 40.2581 53.394 39.38 51.636 37.6221L47.3934 41.8647ZM47.1213 39.35C46.502 39.9693 45.498 39.9693 44.8787 39.35L49.1213 35.1073C47.3975 33.3835 44.6025 33.3835 42.8787 35.1073L47.1213 39.35ZM23.1213 39.35C22.502 39.9693 21.498 39.9693 20.8787 39.35L25.1213 35.1073C23.3975 33.3835 20.6025 33.3835 18.8787 35.1073L23.1213 39.35Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M31 23.5002L32.4142 24.9144L32.4142 24.9144L31 23.5002ZM30.4853 24.0149L29.0711 22.6007L29.0711 22.6007L30.4853 24.0149ZM32.5 22.0002L33.9142 23.4144L33.9142 23.4144L32.5 22.0002ZM31.5 23.0002L30.0858 21.5859L30.0858 21.5859L31.5 23.0002ZM22 25.5296C20.8954 25.5296 20 26.425 20 27.5296C20 28.6342 20.8954 29.5296 22 29.5296V25.5296ZM37.5147 24.0149L38.9289 22.6007V22.6007L37.5147 24.0149ZM55 23.5002L56.4142 24.9144L56.4142 24.9144L55 23.5002ZM54.4853 24.0149L53.0711 22.6007L53.0711 22.6007L54.4853 24.0149ZM56.5 22.0002L57.9142 23.4144V23.4144L56.5 22.0002ZM55.5 23.0002L54.0858 21.5859V21.5859L55.5 23.0002ZM61.5147 24.0149L60.1005 25.4291V25.4291L61.5147 24.0149ZM70 29.5296C71.1046 29.5296 72 28.6342 72 27.5296C72 26.425 71.1046 25.5296 70 25.5296V29.5296ZM59 21.5002L60.4142 20.0859L59 21.5002ZM35 21.5002L36.4142 20.0859L35 21.5002ZM29.5858 22.0859L29.0711 22.6007L31.8995 25.4291L32.4142 24.9144L29.5858 22.0859ZM31.5858 20.0859L31.0858 20.5859L33.9142 23.4144L34.4142 22.9144L31.5858 20.0859ZM31.0858 20.5859L30.5858 21.0859L33.4142 23.9144L33.9142 23.4144L31.0858 20.5859ZM30.5858 21.0859L30.0858 21.5859L32.9142 24.4144L33.4142 23.9144L30.5858 21.0859ZM30.0858 21.5859L29.5858 22.0859L32.4142 24.9144L32.9142 24.4144L30.0858 21.5859ZM22 29.5296C25.5798 29.5296 29.1662 28.1624 31.8995 25.4291L29.0711 22.6007C27.1181 24.5537 24.5623 25.5296 22 25.5296V29.5296ZM38.9289 22.6007L36.4142 20.0859L33.5858 22.9144L36.1005 25.4291L38.9289 22.6007ZM53.5858 22.0859L53.0711 22.6007L55.8995 25.4291L56.4142 24.9144L53.5858 22.0859ZM55.5858 20.0859L55.0858 20.5859L57.9142 23.4144L58.4142 22.9144L55.5858 20.0859ZM55.0858 20.5859L54.5858 21.0859L57.4142 23.9144L57.9142 23.4144L55.0858 20.5859ZM54.5858 21.0859L54.0858 21.5859L56.9142 24.4144L57.4142 23.9144L54.5858 21.0859ZM54.0858 21.5859L53.5858 22.0859L56.4142 24.9144L56.9142 24.4144L54.0858 21.5859ZM36.1005 25.4291C41.5678 30.8964 50.4321 30.8964 55.8995 25.4291L53.0711 22.6007C49.1658 26.5059 42.8342 26.5059 38.9289 22.6007L36.1005 25.4291ZM62.9289 22.6007L60.4142 20.0859L57.5858 22.9144L60.1005 25.4291L62.9289 22.6007ZM60.1005 25.4291C62.8338 28.1624 66.4202 29.5296 70 29.5296V25.5296C67.4377 25.5296 64.8819 24.5537 62.9289 22.6007L60.1005 25.4291ZM58.4142 22.9144C58.1854 23.1431 57.8145 23.1431 57.5858 22.9144L60.4142 20.0859C59.0809 18.7526 56.9191 18.7526 55.5858 20.0859L58.4142 22.9144ZM34.4142 22.9144C34.1854 23.1431 33.8145 23.1431 33.5858 22.9144L36.4142 20.0859C35.0809 18.7526 32.9191 18.7526 31.5858 20.0859L34.4142 22.9144Z"
            fill="#56CCF2"
          />
          <path
            d="M31 54.9572L32.4142 56.3714L32.4142 56.3714L31 54.9572ZM30.4853 55.4719L29.0711 54.0577L29.0711 54.0577L30.4853 55.4719ZM32.5 53.4572L33.9142 54.8714L33.9142 54.8714L32.5 53.4572ZM31.5 54.4572L30.0858 53.043L30.0858 53.043L31.5 54.4572ZM22 56.9866C20.8954 56.9866 20 57.8821 20 58.9866C20 60.0912 20.8954 60.9866 22 60.9866V56.9866ZM37.5147 55.4719L38.9289 54.0577V54.0577L37.5147 55.4719ZM55 54.9572L56.4142 56.3714L56.4142 56.3714L55 54.9572ZM54.4853 55.4719L53.0711 54.0577L53.0711 54.0577L54.4853 55.4719ZM56.5 53.4572L57.9142 54.8714V54.8714L56.5 53.4572ZM55.5 54.4572L54.0858 53.043V53.043L55.5 54.4572ZM61.5147 55.4719L60.1005 56.8861V56.8861L61.5147 55.4719ZM70 60.9866C71.1046 60.9866 72 60.0912 72 58.9866C72 57.8821 71.1046 56.9866 70 56.9866V60.9866ZM59 52.9572L60.4142 51.543L59 52.9572ZM35 52.9572L36.4142 51.543L35 52.9572ZM29.5858 53.543L29.0711 54.0577L31.8995 56.8861L32.4142 56.3714L29.5858 53.543ZM31.5858 51.543L31.0858 52.043L33.9142 54.8714L34.4142 54.3714L31.5858 51.543ZM31.0858 52.043L30.5858 52.543L33.4142 55.3714L33.9142 54.8714L31.0858 52.043ZM30.5858 52.543L30.0858 53.043L32.9142 55.8714L33.4142 55.3714L30.5858 52.543ZM30.0858 53.043L29.5858 53.543L32.4142 56.3714L32.9142 55.8714L30.0858 53.043ZM22 60.9866C25.5798 60.9866 29.1662 59.6194 31.8995 56.8861L29.0711 54.0577C27.1181 56.0107 24.5623 56.9866 22 56.9866V60.9866ZM38.9289 54.0577L36.4142 51.543L33.5858 54.3714L36.1005 56.8861L38.9289 54.0577ZM53.5858 53.543L53.0711 54.0577L55.8995 56.8861L56.4142 56.3714L53.5858 53.543ZM55.5858 51.543L55.0858 52.043L57.9142 54.8714L58.4142 54.3714L55.5858 51.543ZM55.0858 52.043L54.5858 52.543L57.4142 55.3714L57.9142 54.8714L55.0858 52.043ZM54.5858 52.543L54.0858 53.043L56.9142 55.8714L57.4142 55.3714L54.5858 52.543ZM54.0858 53.043L53.5858 53.543L56.4142 56.3714L56.9142 55.8714L54.0858 53.043ZM36.1005 56.8861C41.5678 62.3535 50.4321 62.3535 55.8995 56.8861L53.0711 54.0577C49.1658 57.9629 42.8342 57.9629 38.9289 54.0577L36.1005 56.8861ZM62.9289 54.0577L60.4142 51.543L57.5858 54.3714L60.1005 56.8861L62.9289 54.0577ZM60.1005 56.8861C62.8338 59.6194 66.4202 60.9866 70 60.9866V56.9866C67.4377 56.9866 64.8819 56.0107 62.9289 54.0577L60.1005 56.8861ZM58.4142 54.3714C58.1854 54.6002 57.8145 54.6002 57.5858 54.3714L60.4142 51.543C59.0809 50.2096 56.9191 50.2096 55.5858 51.543L58.4142 54.3714ZM34.4142 54.3714C34.1854 54.6002 33.8145 54.6002 33.5858 54.3714L36.4142 51.543C35.0809 50.2096 32.9191 50.2096 31.5858 51.543L34.4142 54.3714Z"
            fill="#56CCF2"
          />
          <path
            d="M19 39.2287L20.4142 40.6429L20.4142 40.6429L19 39.2287ZM18.4853 39.7434L17.0711 38.3292L17.0711 38.3292L18.4853 39.7434ZM20.5 37.7287L21.9142 39.1429L21.9142 39.1429L20.5 37.7287ZM19.5 38.7287L18.0858 37.3145L18.0858 37.3145L19.5 38.7287ZM10 41.2581C8.89543 41.2581 8 42.1535 8 43.2581C8 44.3627 8.89543 45.2581 10 45.2581L10 41.2581ZM25.5147 39.7434L26.9289 38.3292V38.3292L25.5147 39.7434ZM43 39.2287L44.4142 40.6429L44.4142 40.6429L43 39.2287ZM42.4853 39.7434L41.0711 38.3292L41.0711 38.3292L42.4853 39.7434ZM44.5 37.7287L45.9142 39.1429V39.1429L44.5 37.7287ZM43.5 38.7287L42.0858 37.3145V37.3145L43.5 38.7287ZM49.5147 39.7434L48.1005 41.1576V41.1576L49.5147 39.7434ZM58 45.2581C59.1046 45.2581 60 44.3627 60 43.2581C60 42.1535 59.1046 41.2581 58 41.2581V45.2581ZM47 37.2287L48.4142 35.8145L47 37.2287ZM23 37.2287L24.4142 35.8145L23 37.2287ZM17.5858 37.8145L17.0711 38.3292L19.8995 41.1576L20.4142 40.6429L17.5858 37.8145ZM19.5858 35.8145L19.0858 36.3145L21.9142 39.1429L22.4142 38.6429L19.5858 35.8145ZM19.0858 36.3145L18.5858 36.8145L21.4142 39.6429L21.9142 39.1429L19.0858 36.3145ZM18.5858 36.8145L18.0858 37.3145L20.9142 40.1429L21.4142 39.6429L18.5858 36.8145ZM18.0858 37.3145L17.5858 37.8145L20.4142 40.6429L20.9142 40.1429L18.0858 37.3145ZM10 45.2581C13.5798 45.2581 17.1662 43.8909 19.8995 41.1576L17.0711 38.3292C15.1181 40.2822 12.5623 41.2581 10 41.2581L10 45.2581ZM26.9289 38.3292L24.4142 35.8145L21.5858 38.6429L24.1005 41.1576L26.9289 38.3292ZM41.5858 37.8144L41.0711 38.3292L43.8995 41.1576L44.4142 40.6429L41.5858 37.8144ZM43.5858 35.8145L43.0858 36.3145L45.9142 39.1429L46.4142 38.6429L43.5858 35.8145ZM43.0858 36.3145L42.5858 36.8145L45.4142 39.6429L45.9142 39.1429L43.0858 36.3145ZM42.5858 36.8145L42.0858 37.3145L44.9142 40.1429L45.4142 39.6429L42.5858 36.8145ZM42.0858 37.3145L41.5858 37.8145L44.4142 40.6429L44.9142 40.1429L42.0858 37.3145ZM24.1005 41.1576C29.5678 46.6249 38.4321 46.6249 43.8995 41.1576L41.0711 38.3292C37.1658 42.2344 30.8342 42.2344 26.9289 38.3292L24.1005 41.1576ZM50.9289 38.3292L48.4142 35.8145L45.5858 38.6429L48.1005 41.1576L50.9289 38.3292ZM48.1005 41.1576C50.8338 43.8909 54.4202 45.2581 58 45.2581V41.2581C55.4377 41.2581 52.8819 40.2822 50.9289 38.3292L48.1005 41.1576ZM46.4142 38.6429C46.1854 38.8716 45.8145 38.8716 45.5858 38.6429L48.4142 35.8145C47.0809 34.4811 44.9191 34.4811 43.5858 35.8145L46.4142 38.6429ZM22.4142 38.6429C22.1854 38.8716 21.8145 38.8716 21.5858 38.6429L24.4142 35.8145C23.0809 34.4811 20.9191 34.4811 19.5858 35.8145L22.4142 38.6429Z"
            fill="#2F80ED"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M22 27.9371C25.0711 27.9371 28.1421 26.7655 30.4853 24.4223L33 21.9076C33.5523 21.3553 34.4477 21.3553 35 21.9076L37.5147 24.4223C42.201 29.1086 49.799 29.1086 54.4853 24.4223L57 21.9076C57.5523 21.3553 58.4477 21.3553 59 21.9076L61.5147 24.4223C63.8579 26.7655 66.9289 27.9371 70 27.9371M22 59.3941C25.0711 59.3941 28.1421 58.2225 30.4853 55.8794L33 53.3647C33.5523 52.8124 34.4477 52.8124 35 53.3647L37.5147 55.8794C42.201 60.5657 49.799 60.5657 54.4853 55.8794L57 53.3647C57.5523 52.8124 58.4477 52.8124 59 53.3647L61.5147 55.8794C63.8579 58.2225 66.9289 59.3941 70 59.3941M10 43.6656C13.0711 43.6656 16.1421 42.494 18.4853 40.1509L21 37.6361C21.5523 37.0839 22.4477 37.0839 23 37.6361L25.5147 40.1509C30.201 44.8371 37.799 44.8372 42.4853 40.1509L45 37.6361C45.5523 37.0839 46.4477 37.0839 47 37.6361L49.5147 40.1509C51.8579 42.494 54.9289 43.6656 58 43.6656"
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
            d="M22 39.0571L24.1005 41.1576C29.5678 46.6249 38.4321 46.6249 43.8995 41.1576L46 39.0571L48.1005 41.1576C50.8338 43.8909 54.4202 45.2581 58 45.2581C59.1046 45.2581 60 44.3627 60 43.2581C60 42.1535 59.1046 41.2581 58 41.2581C55.4377 41.2581 52.8819 40.2822 50.9289 38.3292L48.4142 35.8145C47.0809 34.4811 44.9191 34.4811 43.5858 35.8145L41.0711 38.3292C37.1658 42.2344 30.8342 42.2344 26.9289 38.3292L24.4142 35.8145C23.0809 34.4811 20.9191 34.4811 19.5858 35.8145L17.0711 38.3292C15.1181 40.2822 12.5623 41.2581 10 41.2581C8.89543 41.2581 8 42.1535 8 43.2581C8 44.3627 8.89543 45.2581 10 45.2581C13.5798 45.2581 17.1662 43.8909 19.8995 41.1576L22 39.0571Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M22 60.9866C25.5798 60.9866 29.1662 59.6194 31.8995 56.8861L34 54.7856L36.1005 56.8861C41.5678 62.3535 50.4322 62.3535 55.8995 56.8861L58 54.7856L60.1005 56.8861C62.8338 59.6194 66.4202 60.9866 70 60.9866C71.1046 60.9866 72 60.0912 72 58.9866C72 57.882 71.1046 56.9866 70 56.9866C67.4377 56.9866 64.8819 56.0107 62.9289 54.0577L60.4142 51.543C59.0809 50.2096 56.9191 50.2096 55.5858 51.543L53.0711 54.0577C49.1658 57.9629 42.8342 57.9629 38.9289 54.0577L36.4142 51.543C35.0809 50.2096 32.9191 50.2096 31.5858 51.543L29.0711 54.0577C27.1181 56.0107 24.5623 56.9866 22 56.9866C20.8954 56.9866 20 57.882 20 58.9866C20 60.0912 20.8954 60.9866 22 60.9866Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M22 29.5296C25.5798 29.5296 29.1662 28.1624 31.8995 25.4291L34 23.3286L36.1005 25.4291C41.5678 30.8964 50.4322 30.8964 55.8995 25.4291L58 23.3286L60.1005 25.4291C62.8338 28.1624 66.4202 29.5296 70 29.5296C71.1046 29.5296 72 28.6342 72 27.5296C72 26.425 71.1046 25.5296 70 25.5296C67.4377 25.5296 64.8819 24.5537 62.9289 22.6007L60.4142 20.0859C59.0809 18.7526 56.9191 18.7526 55.5858 20.0859L53.0711 22.6007C49.1658 26.5059 42.8342 26.5059 38.9289 22.6007L36.4142 20.0859C35.0809 18.7526 32.9191 18.7526 31.5858 20.0859L29.0711 22.6007C27.1181 24.5537 24.5623 25.5296 22 25.5296C20.8954 25.5296 20 26.425 20 27.5296C20 28.6342 20.8954 29.5296 22 29.5296Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreWaves1 = forwardRef((props, ref) => {
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

CoreWaves1.displayName = 'CoreWaves1'

export default CoreWaves1
