
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreChevronSquare = {
  size: '40',
  color: 'currentColor',
  variant: '',
  colors: ['#000000', '#C4C4C4'],
  strokeWidth: '3',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  rotate: '0',
  flip: '',
  render: ({ size, color, variant, strokeWidth, strokeLinecap, strokeLinejoin, rotate, flip }) => html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="${size}"
      height="${size}"
      viewBox="0 0 80 80"
      transform="${transform(rotate, flip)}"
    >
      <slot></slot>
      <g>        
        ${variant === "path" && svg`
          <path
            d="M16 18C16 16.8954 16.8954 16 18 16L62 16C63.1046 16 64 16.8954 64 18V62C64 63.1046 63.1046 64 62 64L18 64C16.8954 64 16 63.1046 16 62L16 18Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M27.9814 44.0921L36.7995 35.2741C38.5568 33.5167 41.4061 33.5167 43.1634 35.2741L51.9814 44.0921"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18 16C16.8954 16 16 16.8954 16 18L16 62C16 63.1046 16.8954 64 18 64L62 64C63.1046 64 64 63.1046 64 62V18C64 16.8954 63.1046 16 62 16L18 16ZM38.9208 37.3951C39.5066 36.8093 40.4563 36.8093 41.0421 37.3951L49.8601 46.2131C51.0317 47.3847 52.9312 47.3847 54.1028 46.2131C55.2743 45.0415 55.2743 43.142 54.1028 41.9705L45.2847 33.1525C42.3558 30.2235 37.6071 30.2235 34.6781 33.1525L25.8601 41.9705C24.6886 43.142 24.6886 45.0415 25.8601 46.2131C27.0317 47.3847 28.9312 47.3847 30.1028 46.2131L38.9208 37.3951Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <rect
            x="16"
            y="16"
            width="48"
            height="48"
            rx="2"
            fill="#6FCF97"
            stroke="#219653"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M51.9814 44.0918L43.1634 35.2738C41.4061 33.5164 38.5568 33.5164 36.7995 35.2738L27.9814 44.0918"
            stroke="#F2994A"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M16 18C16 16.8954 16.8954 16 18 16H62C63.1046 16 64 16.8954 64 18V62C64 63.1046 63.1046 64 62 64H18C16.8954 64 16 63.1046 16 62V18Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M27.9814 44.0918L36.7995 35.2738C38.5568 33.5164 41.4061 33.5164 43.1634 35.2738L51.9814 44.0918M18 64H62C63.1046 64 64 63.1046 64 62V18C64 16.8954 63.1046 16 62 16H18C16.8954 16 16 16.8954 16 18V62C16 63.1046 16.8954 64 18 64Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            d="M38.2137 36.688C39.19 35.7117 40.7729 35.7117 41.7492 36.688L50.5672 45.506C51.3483 46.2871 52.6146 46.2871 53.3957 45.506C54.1767 44.725 54.1767 43.4586 53.3957 42.6776L44.5776 33.8596C42.0392 31.3212 37.9237 31.3212 35.3853 33.8596L26.5672 42.6776C25.7862 43.4586 25.7862 44.725 26.5672 45.506C27.3483 46.2871 28.6146 46.2871 29.3957 45.506L38.2137 36.688Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18 14C15.7909 14 14 15.7909 14 18L14 62C14 64.2091 15.7909 66 18 66H62C64.2091 66 66 64.2091 66 62V18C66 15.7909 64.2091 14 62 14L18 14ZM18 18L62 18L62 62L18 62L18 18Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-chevron-square', CoreChevronSquare)
export default CoreChevronSquare