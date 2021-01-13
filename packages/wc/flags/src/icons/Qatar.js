
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const FlagsQatar = {
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
        ${variant === "rectangle" && svg`
          <path
            d="M120 0V80H0V0H120Z"
            fill="#EB5757"
          />
          <path
            d="M30 0V80H0V0H30Z"
            fill="#F2F2F2"
          />
          <path
            d="M42 4L30 0V8L42 4Z"
            fill="#F2F2F2"
          />
          <path
            d="M42 12L30 8V16L42 12Z"
            fill="#F2F2F2"
          />
          <path
            d="M42 20L30 16V24L42 20Z"
            fill="#F2F2F2"
          />
          <path
            d="M42 28L30 24V32L42 28Z"
            fill="#F2F2F2"
          />
          <path
            d="M42 36L30 32V40L42 36Z"
            fill="#F2F2F2"
          />
          <path
            d="M42 44L30 40V48L42 44Z"
            fill="#F2F2F2"
          />
          <path
            d="M42 52L30 48V56L42 52Z"
            fill="#F2F2F2"
          />
          <path
            d="M42 60L30 56V64L42 60Z"
            fill="#F2F2F2"
          />
          <path
            d="M42 68L30 64V72L42 68Z"
            fill="#F2F2F2"
          />
          <path
            d="M42 76L30 72V80L42 76Z"
            fill="#F2F2F2"
          />
        `}
        ${variant === "square" && svg`
          <g clip-path="url(#clip0llA5)"><path d="M80 0V80H0V0H80Z" fill="#EB5757"/><path d="M10 0V80H-20V0H10Z" fill="#F2F2F2"/><path d="M22 4L10 0V8L22 4Z" fill="#F2F2F2"/><path d="M22 12L10 8V16L22 12Z" fill="#F2F2F2"/><path d="M22 20L10 16V24L22 20Z" fill="#F2F2F2"/><path d="M22 28L10 24V32L22 28Z" fill="#F2F2F2"/><path d="M22 36L10 32V40L22 36Z" fill="#F2F2F2"/><path d="M22 44L10 40V48L22 44Z" fill="#F2F2F2"/><path d="M22 52L10 48V56L22 52Z" fill="#F2F2F2"/><path d="M22 60L10 56V64L22 60Z" fill="#F2F2F2"/><path d="M22 68L10 64V72L22 68Z" fill="#F2F2F2"/><path d="M22 76L10 72V80L22 76Z" fill="#F2F2F2"/></g>
          <defs><clipPath id="clip0llA5"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
        ${variant === "circle" && svg`
          <mask id="mask0NEpG" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0NEpG)"><g clip-path="url(#clip0NEpG)"><path d="M80 0V80H0V0H80Z" fill="#EB5757"/><path d="M10 0V80H-20V0H10Z" fill="#F2F2F2"/><path d="M22 4L10 0V8L22 4Z" fill="#F2F2F2"/><path d="M22 12L10 8V16L22 12Z" fill="#F2F2F2"/><path d="M22 20L10 16V24L22 20Z" fill="#F2F2F2"/><path d="M22 28L10 24V32L22 28Z" fill="#F2F2F2"/><path d="M22 36L10 32V40L22 36Z" fill="#F2F2F2"/><path d="M22 44L10 40V48L22 44Z" fill="#F2F2F2"/><path d="M22 52L10 48V56L22 52Z" fill="#F2F2F2"/><path d="M22 60L10 56V64L22 60Z" fill="#F2F2F2"/><path d="M22 68L10 64V72L22 68Z" fill="#F2F2F2"/><path d="M22 76L10 72V80L22 76Z" fill="#F2F2F2"/></g></g>
          <defs><clipPath id="clip0NEpG"><rect width="80" height="80" fill="white"/></clipPath></defs>
        `}
      </g>
    </svg>
  `
}

define('flags-qatar', FlagsQatar)
export default FlagsQatar