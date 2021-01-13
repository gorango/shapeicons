
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const CoreToggle = {
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
            d="M14 26L13.6569 26.3431C10.0348 29.9652 8 34.8777 8 40C8 45.1223 10.0348 50.0348 13.6569 53.6569L14 54C17.8417 57.8417 23.0522 60 28.4853 60H51.5147C56.9478 60 62.1583 57.8417 66 54L66.3431 53.6569C69.9652 50.0348 72 45.1223 72 40C72 34.8777 69.9652 29.9652 66.3431 26.3431L66 26C62.1583 22.1583 56.9478 20 51.5147 20H28.4853C23.0522 20 17.8417 22.1583 14 26Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M21.0718 28C25.3589 25.5248 30.641 25.5248 34.9282 28C39.2154 30.4752 41.8564 35.0495 41.8564 40C41.8564 44.9504 39.2154 49.5248 34.9282 52C30.641 54.4752 25.3589 54.4752 21.0718 52C16.7846 49.5248 14.1436 44.9504 14.1436 40C14.1436 35.0495 16.7846 30.4752 21.0718 28Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "bold" && svg`
          <path
            d="M14 26L13.6569 26.3431C10.0348 29.9652 8 34.8777 8 40C8 45.1223 10.0348 50.0348 13.6569 53.6569L14 54C17.8417 57.8417 23.0522 60 28.4853 60L51.5147 60C56.9478 60 62.1583 57.8417 66 54L66.3431 53.6569C69.9652 50.0348 72 45.1223 72 40C72 34.8777 69.9652 29.9652 66.3431 26.3431L66 26C62.1583 22.1583 56.9478 20 51.5147 20L28.4853 20C23.0522 20 17.8417 22.1583 14 26Z"
            stroke="currentColor"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M21.0718 28C25.359 25.5248 30.641 25.5248 34.9282 28C39.2154 30.4752 41.8564 35.0496 41.8564 40C41.8564 44.9504 39.2154 49.5248 34.9282 52C30.641 54.4752 25.359 54.4752 21.0718 52C16.7846 49.5248 14.1436 44.9504 14.1436 40C14.1436 35.0496 16.7846 30.4752 21.0718 28Z"
            fill="currentColor"
          />
        `}
        ${variant === "poly" && svg`
          <path
            d="M14 26L13.6569 26.3431C10.0348 29.9652 8 34.8777 8 40C8 45.1223 10.0348 50.0348 13.6569 53.6569L14 54C17.8417 57.8417 23.0522 60 28.4853 60L51.5147 60C56.9478 60 62.1583 57.8417 66 54L66.3431 53.6569C69.9652 50.0348 72 45.1223 72 40C72 34.8777 69.9652 29.9652 66.3431 26.3431L66 26C62.1583 22.1583 56.9478 20 51.5147 20L28.4853 20C23.0522 20 17.8417 22.1583 14 26Z"
            fill="#F2C94C"
            stroke="#F2C94C"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M21.0718 28C25.359 25.5248 30.641 25.5248 34.9282 28C39.2154 30.4752 41.8564 35.0496 41.8564 40C41.8564 44.9504 39.2154 49.5248 34.9282 52C30.641 54.4752 25.359 54.4752 21.0718 52C16.7846 49.5248 14.1436 44.9504 14.1436 40C14.1436 35.0496 16.7846 30.4752 21.0718 28Z"
            fill="#EB5757"
            stroke="#EB5757"
            stroke-width="${strokeWidth}"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "duo" && svg`
          <path
            d="M14 26L13.6569 26.3431C10.0348 29.9652 8 34.8777 8 40C8 45.1223 10.0348 50.0348 13.6569 53.6569L14 54C17.8417 57.8417 23.0522 60 28.4853 60H51.5147C56.9478 60 62.1583 57.8417 66 54L66.3431 53.6569C69.9652 50.0348 72 45.1223 72 40C72 34.8777 69.9652 29.9652 66.3431 26.3431L66 26C62.1583 22.1583 56.9478 20 51.5147 20H28.4853C23.0522 20 17.8417 22.1583 14 26Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M21.0718 28C25.359 25.5248 30.641 25.5248 34.9282 28C39.2154 30.4752 41.8564 35.0496 41.8564 40C41.8564 44.9504 39.2154 49.5248 34.9282 52C30.641 54.4752 25.359 54.4752 21.0718 52C16.7846 49.5248 14.1436 44.9504 14.1436 40C14.1436 35.0496 16.7846 30.4752 21.0718 28Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M14 26L13.6569 26.3431C10.0348 29.9652 8 34.8777 8 40C8 45.1223 10.0348 50.0348 13.6569 53.6569L14 54C17.8417 57.8417 23.0522 60 28.4853 60H51.5147C56.9478 60 62.1583 57.8417 66 54L66.3431 53.6569C69.9652 50.0348 72 45.1223 72 40C72 34.8777 69.9652 29.9652 66.3431 26.3431L66 26C62.1583 22.1583 56.9478 20 51.5147 20H28.4853C23.0522 20 17.8417 22.1583 14 26Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            d="M21.0718 28C25.359 25.5248 30.641 25.5248 34.9282 28C39.2154 30.4752 41.8564 35.0496 41.8564 40C41.8564 44.9504 39.2154 49.5248 34.9282 52C30.641 54.4752 25.359 54.4752 21.0718 52C16.7846 49.5248 14.1436 44.9504 14.1436 40C14.1436 35.0496 16.7846 30.4752 21.0718 28Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
        ${variant === "outline" && svg`
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M35.9282 26.2679C31.0222 23.4355 24.9778 23.4355 20.0718 26.2679C15.1658 29.1004 12.1436 34.3351 12.1436 40C12.1436 45.6649 15.1658 50.8996 20.0718 53.732C24.9778 56.5645 31.0222 56.5645 35.9282 53.732C40.8342 50.8996 43.8564 45.6649 43.8564 40C43.8564 34.3351 40.8342 29.1004 35.9282 26.2679ZM22.0718 29.7321C25.7402 27.6141 30.2598 27.6141 33.9282 29.7321C37.5966 31.85 39.8564 35.7641 39.8564 40C39.8564 44.2359 37.5966 48.15 33.9282 50.2679C30.2598 52.3859 25.7402 52.3859 22.0718 50.2679C18.4034 48.15 16.1436 44.2359 16.1436 40C16.1436 35.7641 18.4034 31.85 22.0718 29.7321Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M28.4853 18C22.5218 18 16.8026 20.369 12.5858 24.5858L12.2426 24.9289C8.24554 28.926 6 34.3473 6 40C6 45.6527 8.24555 51.074 12.2426 55.0711L12.5858 55.4142C16.8026 59.631 22.5218 62 28.4853 62H51.5147C57.4782 62 63.1974 59.631 67.4142 55.4142L67.7574 55.0711C71.7545 51.074 74 45.6527 74 40C74 34.3473 71.7545 28.926 67.7574 24.9289L67.4142 24.5858C63.1974 20.369 57.4782 18 51.5147 18H28.4853ZM15.4142 27.4142C18.8809 23.9476 23.5827 22 28.4853 22H51.5147C56.4173 22 61.1191 23.9476 64.5858 27.4142L64.9289 27.7574C68.1759 31.0043 70 35.4081 70 40C70 44.5919 68.1759 48.9957 64.9289 52.2426L64.5858 52.5858C61.1191 56.0524 56.4173 58 51.5147 58H28.4853C23.5827 58 18.8809 56.0524 15.4142 52.5858L15.0711 52.2426C11.8241 48.9957 10 44.5919 10 40C10 35.4081 11.8241 31.0043 15.0711 27.7574L15.4142 27.4142Z"
            stroke="currentColor"
            stroke-linecap="${strokeLinecap}"
            stroke-linejoin="${strokeLinejoin}"
          />
        `}
      </g>
    </svg>
  `
}

define('core-toggle', CoreToggle)
export default CoreToggle