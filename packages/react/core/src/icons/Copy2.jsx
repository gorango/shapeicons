
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M30 17H23C20.2386 17 18 19.2386 18 22V61C18 63.7614 20.2386 66 23 66H57C59.7614 66 62 63.7614 62 61V22C62 19.2386 59.7614 17 57 17H50"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M30 17C30 14.7909 31.7909 13 34 13H46C48.2091 13 50 14.7909 50 17C50 19.2091 48.2091 21 46 21H34C31.7909 21 30 19.2091 30 17Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M46 43.166L70.0007 43.166"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M45.9999 32.8209L45.9999 53.5072C45.9999 55.5947 43.476 56.6401 41.9999 55.164L32.8283 45.9924C31.2662 44.4303 31.2662 41.8977 32.8283 40.3356L41.9999 31.164C43.476 29.6879 45.9999 30.7333 45.9999 32.8209Z"
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
            d="M18 22C18 19.2386 20.2386 17 23 17H28C28 13.6863 30.6863 11 34 11H46C49.3137 11 52 13.6863 52 17H57C59.7614 17 62 19.2386 62 22V37.166L51 37.166V32.8209C51 26.2789 43.0904 23.0026 38.4645 27.6285L29.2929 36.8001C25.7782 40.3148 25.7782 46.0133 29.2929 49.528L38.4645 58.6996C43.0904 63.3255 51 60.0492 51 53.5072V49.166H62V61C62 63.7614 59.7614 66 57 66H23C20.2386 66 18 63.7614 18 61V22ZM34 15C32.8954 15 32 15.8954 32 17C32 18.1046 32.8954 19 34 19H46C47.1046 19 48 18.1046 48 17C48 15.8954 47.1046 15 46 15H34Z"
            fill="currentColor"
          />
          <path
            d="M70.0007 39.8327C71.8416 39.8327 73.334 41.3251 73.334 43.166C73.334 45.007 71.8416 46.4994 70.0007 46.4994H47.3333V53.5072C47.3333 56.7826 43.3732 58.4229 41.0572 56.1069L31.8856 46.9353C29.8028 44.8525 29.8028 41.4756 31.8856 39.3928L41.0572 30.2212C43.3732 27.9052 47.3333 29.5455 47.3333 32.8209V39.8327H70.0007Z"
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
            d="M30 16.644L23 16.644C20.2386 16.644 18 18.8826 18 21.644L18 61C18 63.7614 20.2386 66 23 66H57C59.7614 66 62 63.7614 62 61L62 21.644C62 18.8826 59.7614 16.644 57 16.644L50 16.644C50 18.5911 48.4216 20.1695 46.4746 20.1695H33.5254C31.5784 20.1695 30 18.5911 30 16.644Z"
            fill="#F2C94C"
          />
          <path
            d="M30 16.644H32C32 15.5395 31.1046 14.644 30 14.644V16.644ZM50 16.644V14.644C48.8954 14.644 48 15.5395 48 16.644H50ZM23 18.644H30V14.644L23 14.644V18.644ZM20 21.644C20 19.9872 21.3431 18.644 23 18.644V14.644C19.134 14.644 16 17.778 16 21.644H20ZM20 61L20 21.644H16L16 61H20ZM23 64C21.3431 64 20 62.6568 20 61H16C16 64.866 19.134 68 23 68V64ZM57 64L23 64V68H57V64ZM60 61C60 62.6568 58.6569 64 57 64V68C60.866 68 64 64.866 64 61H60ZM60 21.644L60 61H64L64 21.644H60ZM57 18.644C58.6569 18.644 60 19.9872 60 21.644H64C64 17.7781 60.866 14.644 57 14.644V18.644ZM50 18.644H57V14.644L50 14.644V18.644ZM48 16.644C48 17.4865 47.317 18.1695 46.4746 18.1695V22.1695C49.5262 22.1695 52 19.6956 52 16.644L48 16.644ZM46.4746 18.1695H33.5254V22.1695H46.4746V18.1695ZM33.5254 18.1695C32.683 18.1695 32 17.4865 32 16.644L28 16.644C28 19.6956 30.4738 22.1695 33.5254 22.1695V18.1695Z"
            fill="#F2C94C"
          />
          <rect
            x="30"
            y="13.1187"
            width="20"
            height="7.05085"
            rx="3.52542"
            fill="#F2994A"
          />
          <path
            d="M40.0005 41.1661C38.8959 41.1661 38.0005 42.0616 38.0005 43.1661C38.0005 44.2707 38.8959 45.1661 40.0005 45.1661L40.0005 41.1661ZM70.0008 45.1661C71.1053 45.1661 72.0008 44.2707 72.0008 43.1661C72.0008 42.0616 71.1053 41.1661 70.0008 41.1661L70.0008 45.1661ZM40.0005 45.1661L70.0008 45.1661L70.0008 41.1661L40.0005 41.1661L40.0005 45.1661Z"
            fill="#EB5757"
          />
          <path
            d="M40 31.8811L40 54.4471C40 55.8062 38.2204 56.3166 37.5 55.1641L31.325 45.2841C30.5143 43.987 30.5143 42.3411 31.325 41.0441L37.5 31.1641C38.2204 30.0115 40 30.5219 40 31.8811Z"
            fill="#EB5757"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M30 16.6441H23C20.2386 16.6441 18 18.8826 18 21.6441V61C18 63.7614 20.2386 66 23 66H57C59.7614 66 62 63.7614 62 61V21.6441C62 18.8827 59.7614 16.6441 57 16.6441H50C50 18.5911 48.4216 20.1695 46.4746 20.1695H33.5254C31.5784 20.1695 30 18.5911 30 16.6441Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M30 16.6441C30 14.697 31.5784 13.1187 33.5254 13.1187H46.4746C48.4216 13.1187 50 14.697 50 16.6441C50 18.5911 48.4216 20.1695 46.4746 20.1695H33.5254C31.5784 20.1695 30 18.5911 30 16.6441Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M40 31.8811L40 54.4471C40 55.8062 38.2204 56.3166 37.5 55.1641L31.325 45.2841C30.5143 43.987 30.5143 42.3412 31.325 41.0441L37.5 31.1641C38.2204 30.0115 40 30.5219 40 31.8811Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M30 16.6441H23C20.2386 16.6441 18 18.8826 18 21.6441V61C18 63.7614 20.2386 66 23 66H57C59.7614 66 62 63.7614 62 61V21.6441C62 18.8827 59.7614 16.6441 57 16.6441H50M30 16.6441C30 18.5911 31.5784 20.1695 33.5254 20.1695H46.4746C48.4216 20.1695 50 18.5911 50 16.6441M30 16.6441C30 14.697 31.5784 13.1187 33.5254 13.1187H46.4746C48.4216 13.1187 50 14.697 50 16.6441M40.0004 43.1662L70.0007 43.1662M40 54.4471L40 31.8811C40 30.5219 38.2204 30.0115 37.5 31.1641L31.325 41.0441C30.5143 42.3412 30.5143 43.987 31.325 45.2841L37.5 55.1641C38.2204 56.3166 40 55.8062 40 54.4471Z"
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M64 61V45.166H70.0007C71.1052 45.166 72.0007 44.2706 72.0007 43.166C72.0007 42.0614 71.1052 41.166 70.0007 41.166H64V22C64 18.134 60.866 15 57 15H51.6586C50.8349 12.6696 48.6124 11 46 11H34C31.3876 11 29.1651 12.6696 28.3414 15H23C19.134 15 16 18.134 16 22V61C16 64.866 19.134 68 23 68H57C60.866 68 64 64.866 64 61ZM28.3414 19H23C21.3431 19 20 20.3431 20 22V61C20 62.6569 21.3431 64 23 64H57C58.6569 64 60 62.6569 60 61V45.166H48V53.5072C48 57.3765 43.3218 59.3143 40.5858 56.5783L31.4142 47.4067C29.0711 45.0636 29.0711 41.2646 31.4142 38.9214L40.5858 29.7498C43.3218 27.0138 48 28.9516 48 32.8209V41.166L60 41.166V22C60 20.3431 58.6569 19 57 19H51.6586C50.8349 21.3304 48.6124 23 46 23H34C31.5147 23 29.3824 21.489 28.4715 19.3355C28.4249 19.2253 28.3815 19.1134 28.3414 19ZM44 32.8209C44 32.7163 43.9726 32.6611 43.9477 32.6258C43.9165 32.5815 43.863 32.5349 43.7882 32.5039C43.7134 32.4729 43.6426 32.468 43.5891 32.4773C43.5466 32.4847 43.4882 32.5043 43.4142 32.5783L34.2426 41.7498C33.4616 42.5309 33.4616 43.7972 34.2426 44.5783L43.4142 53.7498C43.4882 53.8238 43.5466 53.8434 43.5891 53.8508C43.6426 53.8601 43.7134 53.8552 43.7882 53.8242C43.863 53.7932 43.9165 53.7466 43.9477 53.7023C43.9726 53.667 44 53.6118 44 53.5072V32.8209ZM48 17C48 15.8954 47.1046 15 46 15H34C32.8954 15 32 15.8954 32 17C32 18.1046 32.8954 19 34 19H46C47.1046 19 48 18.1046 48 17Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreCopy2 = forwardRef((props, ref) => {
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

CoreCopy2.displayName = 'CoreCopy2'

export default CoreCopy2
