
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M8.8125 66.375C8.8125 66.6511 9.03636 66.875 9.3125 66.875H46.3938C52.695 66.875 58.8086 64.7305 63.729 60.7941L69.6551 56.0533C71.2723 54.7595 71.5345 52.3996 70.2408 50.7824C68.947 49.1652 66.5871 48.903 64.9699 50.1967L59.0438 54.9376C58.2404 55.5804 57.2235 55.875 56.1945 55.875H34.8124C34.6744 55.875 34.5625 55.7631 34.5625 55.6251C34.5625 55.4896 34.6705 55.3787 34.806 55.3768C34.897 55.3756 34.988 55.375 35.0791 55.375H44.8125C46.8836 55.375 48.5625 53.6961 48.5625 51.625C48.5625 49.5539 46.8836 47.875 44.8125 47.875H35.0791C30.4929 47.875 25.9925 49.0114 21.974 51.1644C20.6071 51.8968 19.1042 52.375 17.5535 52.375H9.3125C9.03636 52.375 8.8125 52.5989 8.8125 52.875V66.375Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M32.8125 32.5903V32.8333C32.8125 36.055 35.4242 38.6667 38.6458 38.6667H41.1737C44.2879 38.6667 46.8125 36.1421 46.8125 33.0279C46.8125 30.5332 45.1732 28.335 42.7822 27.6234L40.2792 26.8785L37.2739 26.0437C34.913 25.3879 33.2792 23.2383 33.2792 20.788C33.2792 17.7755 35.7213 15.3333 38.7338 15.3333H40.5125C43.7342 15.3333 46.3458 17.945 46.3458 21.1667V21.4097M39.8125 15.3333V13M39.8125 41V38.6667"
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
            d="M8.8125 66.375C8.8125 66.6511 9.03636 66.875 9.3125 66.875H46.3938C52.695 66.875 58.8086 64.7305 63.729 60.7941L69.6551 56.0533C71.2723 54.7595 71.5345 52.3996 70.2408 50.7824C68.947 49.1652 66.5871 48.903 64.9699 50.1967L59.0438 54.9376C58.2404 55.5804 57.2235 55.875 56.1945 55.875H55.3125L34.8124 55.875C34.6744 55.875 34.5625 55.7631 34.5625 55.6251C34.5625 55.4896 34.6705 55.3787 34.806 55.3768C34.897 55.3756 34.988 55.375 35.0791 55.375H44.8125C46.8836 55.375 48.5625 53.6961 48.5625 51.625C48.5625 49.5539 46.8836 47.875 44.8125 47.875H35.0791C30.4929 47.875 25.9925 49.0114 21.974 51.1644C20.6071 51.8968 19.1042 52.375 17.5535 52.375H9.3125C9.03636 52.375 8.8125 52.5989 8.8125 52.875L8.8125 66.375Z"
            fill="currentColor"
          />
          <path
            d="M37.2739 26.0437L36.7386 27.9707H36.7386L37.2739 26.0437ZM40.2792 26.8785L40.8497 24.9616C40.838 24.9581 40.8262 24.9547 40.8145 24.9514L40.2792 26.8785ZM42.7822 27.6234L43.3527 25.7065L42.7822 27.6234ZM34.8125 32.5903C34.8125 31.4857 33.9171 30.5903 32.8125 30.5903C31.7079 30.5903 30.8125 31.4857 30.8125 32.5903H34.8125ZM44.3458 21.4097C44.3458 22.5143 45.2413 23.4097 46.3458 23.4097C47.4504 23.4097 48.3458 22.5143 48.3458 21.4097L44.3458 21.4097ZM37.8125 15.3333C37.8125 16.4379 38.7079 17.3333 39.8125 17.3333C40.9171 17.3333 41.8125 16.4379 41.8125 15.3333L37.8125 15.3333ZM41.8125 13C41.8125 11.8954 40.9171 11 39.8125 11C38.7079 11 37.8125 11.8954 37.8125 13L41.8125 13ZM37.8125 41C37.8125 42.1046 38.7079 43 39.8125 43C40.9171 43 41.8125 42.1046 41.8125 41H37.8125ZM41.8125 38.6667C41.8125 37.5621 40.9171 36.6667 39.8125 36.6667C38.7079 36.6667 37.8125 37.5621 37.8125 38.6667H41.8125ZM40.5125 13.3333H38.7338V17.3333L40.5125 17.3333V13.3333ZM38.6458 40.6667H41.1737V36.6667H38.6458V40.6667ZM36.7386 27.9707L39.7439 28.8055L40.8145 24.9514L37.8092 24.1166L36.7386 27.9707ZM39.7087 28.7954L42.2117 29.5403L43.3527 25.7065L40.8497 24.9616L39.7087 28.7954ZM34.8125 32.8333V32.5903H30.8125V32.8333H34.8125ZM44.3458 21.1667V21.4097L48.3458 21.4097V21.1667L44.3458 21.1667ZM48.8125 33.0279C48.8125 29.6484 46.5918 26.6705 43.3527 25.7065L42.2117 29.5403C43.7547 29.9995 44.8125 31.4181 44.8125 33.0279H48.8125ZM31.2792 20.788C31.2792 24.1367 33.5121 27.0745 36.7386 27.9707L37.8092 24.1166C36.314 23.7013 35.2792 22.3399 35.2792 20.788H31.2792ZM41.1737 40.6667C45.3925 40.6667 48.8125 37.2467 48.8125 33.0279H44.8125C44.8125 35.0375 43.1834 36.6667 41.1737 36.6667V40.6667ZM38.6458 36.6667C36.5287 36.6667 34.8125 34.9504 34.8125 32.8333H30.8125C30.8125 37.1596 34.3196 40.6667 38.6458 40.6667V36.6667ZM40.5125 17.3333C42.6296 17.3333 44.3458 19.0496 44.3458 21.1667L48.3458 21.1667C48.3458 16.8404 44.8387 13.3333 40.5125 13.3333V17.3333ZM38.7338 13.3333C34.6167 13.3333 31.2792 16.6709 31.2792 20.788H35.2792C35.2792 18.88 36.8259 17.3333 38.7338 17.3333V13.3333ZM41.8125 15.3333V13L37.8125 13V15.3333L41.8125 15.3333ZM41.8125 41V38.6667H37.8125V41H41.8125Z"
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
            d="M8.8125 66.375C8.8125 66.6511 9.03636 66.875 9.3125 66.875H46.3938C52.695 66.875 58.8086 64.7305 63.729 60.7941L69.6551 56.0533C71.2723 54.7595 71.5345 52.3996 70.2408 50.7824C68.947 49.1652 66.5871 48.903 64.9699 50.1967L59.0438 54.9376C58.2404 55.5804 57.2235 55.875 56.1945 55.875H55.3125L34.8124 55.875C34.6744 55.875 34.5625 55.7631 34.5625 55.6251C34.5625 55.4896 34.6705 55.3787 34.806 55.3768C34.897 55.3756 34.988 55.375 35.0791 55.375H44.8125C46.8836 55.375 48.5625 53.6961 48.5625 51.625C48.5625 49.5539 46.8836 47.875 44.8125 47.875H35.0791C30.4929 47.875 25.9925 49.0114 21.974 51.1644C20.6071 51.8968 19.1042 52.375 17.5535 52.375H9.3125C9.03636 52.375 8.8125 52.5989 8.8125 52.875L8.8125 66.375Z"
            fill="#F2C94C"
          />
          <path
            d="M37.2739 26.0437L36.7386 27.9707H36.7386L37.2739 26.0437ZM40.2792 26.8785L40.8497 24.9616C40.838 24.9581 40.8262 24.9547 40.8145 24.9514L40.2792 26.8785ZM42.7822 27.6234L43.3527 25.7065L42.7822 27.6234ZM34.8125 32.5903C34.8125 31.4857 33.9171 30.5903 32.8125 30.5903C31.7079 30.5903 30.8125 31.4857 30.8125 32.5903H34.8125ZM44.3458 21.4097C44.3458 22.5143 45.2413 23.4097 46.3458 23.4097C47.4504 23.4097 48.3458 22.5143 48.3458 21.4097L44.3458 21.4097ZM37.8125 15.3333C37.8125 16.4379 38.7079 17.3333 39.8125 17.3333C40.9171 17.3333 41.8125 16.4379 41.8125 15.3333L37.8125 15.3333ZM41.8125 13C41.8125 11.8954 40.9171 11 39.8125 11C38.7079 11 37.8125 11.8954 37.8125 13L41.8125 13ZM37.8125 41C37.8125 42.1046 38.7079 43 39.8125 43C40.9171 43 41.8125 42.1046 41.8125 41H37.8125ZM41.8125 38.6667C41.8125 37.5621 40.9171 36.6667 39.8125 36.6667C38.7079 36.6667 37.8125 37.5621 37.8125 38.6667H41.8125ZM40.5125 13.3333H38.7338V17.3333L40.5125 17.3333V13.3333ZM38.6458 40.6667H41.1737V36.6667H38.6458V40.6667ZM36.7386 27.9707L39.7439 28.8055L40.8145 24.9514L37.8092 24.1166L36.7386 27.9707ZM39.7087 28.7954L42.2117 29.5403L43.3527 25.7065L40.8497 24.9616L39.7087 28.7954ZM34.8125 32.8333V32.5903H30.8125V32.8333H34.8125ZM44.3458 21.1667V21.4097L48.3458 21.4097V21.1667L44.3458 21.1667ZM48.8125 33.0279C48.8125 29.6484 46.5918 26.6705 43.3527 25.7065L42.2117 29.5403C43.7547 29.9995 44.8125 31.4181 44.8125 33.0279H48.8125ZM31.2792 20.788C31.2792 24.1367 33.5121 27.0745 36.7386 27.9707L37.8092 24.1166C36.314 23.7013 35.2792 22.3399 35.2792 20.788H31.2792ZM41.1737 40.6667C45.3925 40.6667 48.8125 37.2467 48.8125 33.0279H44.8125C44.8125 35.0375 43.1834 36.6667 41.1737 36.6667V40.6667ZM38.6458 36.6667C36.5287 36.6667 34.8125 34.9504 34.8125 32.8333H30.8125C30.8125 37.1596 34.3196 40.6667 38.6458 40.6667V36.6667ZM40.5125 17.3333C42.6296 17.3333 44.3458 19.0496 44.3458 21.1667L48.3458 21.1667C48.3458 16.8404 44.8387 13.3333 40.5125 13.3333V17.3333ZM38.7338 13.3333C34.6167 13.3333 31.2792 16.6709 31.2792 20.788H35.2792C35.2792 18.88 36.8259 17.3333 38.7338 17.3333V13.3333ZM41.8125 15.3333V13L37.8125 13V15.3333L41.8125 15.3333ZM41.8125 41V38.6667H37.8125V41H41.8125Z"
            fill="#219653"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M8.8125 66.375C8.8125 66.6511 9.03636 66.875 9.3125 66.875H46.3938C52.695 66.875 58.8086 64.7305 63.729 60.7941L69.6551 56.0533C71.2723 54.7595 71.5345 52.3996 70.2408 50.7824C68.947 49.1652 66.5871 48.903 64.9699 50.1967L59.0438 54.9376C58.2404 55.5804 57.2235 55.875 56.1945 55.875H34.8124C34.6744 55.875 34.5625 55.7631 34.5625 55.6251C34.5625 55.4896 34.6705 55.3787 34.806 55.3768C34.897 55.3756 34.988 55.375 35.0791 55.375H44.8125C46.8836 55.375 48.5625 53.6961 48.5625 51.625C48.5625 49.5539 46.8836 47.875 44.8125 47.875H35.0791C30.4929 47.875 25.9925 49.0114 21.974 51.1644C20.6071 51.8968 19.1042 52.375 17.5535 52.375H9.3125C9.03636 52.375 8.8125 52.5989 8.8125 52.875V66.375Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M32.8125 32.5903V32.8333C32.8125 36.055 35.4242 38.6667 38.6458 38.6667H41.1737C44.2879 38.6667 46.8125 36.1421 46.8125 33.0279C46.8125 30.5332 45.1732 28.335 42.7822 27.6234L40.2792 26.8785L37.2739 26.0437C34.913 25.3879 33.2792 23.2383 33.2792 20.788C33.2792 17.7755 35.7213 15.3333 38.7338 15.3333H40.5125C43.7342 15.3333 46.3458 17.945 46.3458 21.1667V21.4097M39.8125 15.3333V13M39.8125 41V38.6667M9.3125 66.875H46.3938C52.695 66.875 58.8086 64.7305 63.729 60.7941L69.6551 56.0533C71.2723 54.7595 71.5345 52.3996 70.2408 50.7824C68.947 49.1652 66.5871 48.903 64.9699 50.1967L59.0438 54.9376C58.2404 55.5804 57.2235 55.875 56.1945 55.875H34.8124C34.6744 55.875 34.5625 55.7631 34.5625 55.6251C34.5625 55.4896 34.6705 55.3787 34.806 55.3768C34.897 55.3756 34.988 55.375 35.0791 55.375H44.8125C46.8836 55.375 48.5625 53.6961 48.5625 51.625C48.5625 49.5539 46.8836 47.875 44.8125 47.875H35.0791C30.4929 47.875 25.9925 49.0114 21.974 51.1644C20.6071 51.8968 19.1042 52.375 17.5535 52.375H9.3125C9.03636 52.375 8.8125 52.5989 8.8125 52.875V66.375C8.8125 66.6511 9.03636 66.875 9.3125 66.875Z"
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
            d="M41.8125 13C41.8125 11.8954 40.9171 11 39.8125 11C38.7079 11 37.8125 11.8954 37.8125 13V13.3897C34.1301 13.8436 31.2792 16.9829 31.2792 20.788C31.2792 24.1367 33.5121 27.0745 36.7386 27.9707L39.7262 28.8006L42.2117 29.5403C43.7547 29.9995 44.8125 31.4181 44.8125 33.0279C44.8125 35.0375 43.1834 36.6667 41.1737 36.6667H38.6458C36.5287 36.6667 34.8125 34.9504 34.8125 32.8333V32.5903C34.8125 31.4857 33.9171 30.5903 32.8125 30.5903C31.7079 30.5903 30.8125 31.4857 30.8125 32.5903V32.8333C30.8125 36.8781 33.8781 40.2068 37.8125 40.6229V41C37.8125 42.1046 38.7079 43 39.8125 43C40.9171 43 41.8125 42.1046 41.8125 41V40.6403C45.7324 40.3158 48.8125 37.0316 48.8125 33.0279C48.8125 29.6484 46.5918 26.6705 43.3527 25.7065L40.8497 24.9616C40.838 24.9581 40.8262 24.9547 40.8145 24.9514L37.8092 24.1166C36.314 23.7013 35.2792 22.3399 35.2792 20.788C35.2792 18.88 36.8259 17.3333 38.7338 17.3333H40.5125C42.6296 17.3333 44.3458 19.0496 44.3458 21.1667V21.4097C44.3458 22.5143 45.2413 23.4097 46.3458 23.4097C47.4504 23.4097 48.3458 22.5143 48.3458 21.4097V21.1667C48.3458 17.2833 45.52 14.06 41.8125 13.4407V13Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M35.0791 45.875C30.1623 45.875 25.3376 47.0933 21.0295 49.4015C19.8711 50.0221 18.6928 50.375 17.5535 50.375H9.3125C7.93179 50.375 6.8125 51.4943 6.8125 52.875V66.375C6.8125 67.7557 7.93179 68.875 9.3125 68.875H46.3938C53.1491 68.875 59.7034 66.5759 64.9784 62.3558L70.9045 57.615C73.3842 55.6312 73.7863 52.0128 71.8025 49.533C69.8187 47.0532 66.2003 46.6512 63.7205 48.635L57.7944 53.3759C57.4067 53.6861 56.8543 53.875 56.1945 53.875H50.1056C50.3997 53.1839 50.5625 52.4235 50.5625 51.625C50.5625 48.4494 47.9881 45.875 44.8125 45.875H35.0791ZM22.9185 52.9273C26.6474 50.9295 30.8234 49.875 35.0791 49.875H44.8125C45.779 49.875 46.5625 50.6585 46.5625 51.625C46.5625 52.5915 45.779 53.375 44.8125 53.375H35.0791C34.979 53.375 34.879 53.3757 34.779 53.377C33.534 53.3938 32.5625 54.4112 32.5625 55.6251C32.5625 56.8677 33.5698 57.875 34.8124 57.875H56.1945C57.5927 57.875 59.074 57.4747 60.2932 56.4993L66.2193 51.7585C66.974 51.1547 68.0753 51.2771 68.679 52.0318C69.2828 52.7865 69.1604 53.8878 68.4057 54.4915L62.4797 59.2324C57.9138 62.885 52.2408 64.875 46.3938 64.875H10.8125V54.375H17.5535C19.5157 54.375 21.3431 53.7714 22.9185 52.9273Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreHandHoldingDollar = forwardRef((props, ref) => {
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

CoreHandHoldingDollar.displayName = 'CoreHandHoldingDollar'

export default CoreHandHoldingDollar
