
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M37.2842 48.1342V39.6755H41.6499C43.4389 39.6755 44.9488 39.0761 46.1797 37.8939L46.4752 37.5941C48.7237 35.1464 48.576 31.3334 46.1797 29.0689C44.9816 27.87 43.3404 27.2206 41.6499 27.2539H34.6418V48.1342H37.2842ZM37.2844 37.1112V29.8181H41.7164C42.6685 29.8181 43.5713 30.1844 44.2443 30.8505C45.6724 32.2491 45.7053 34.5803 44.3264 36.0289C43.6534 36.7449 42.7013 37.1445 41.7164 37.1112H37.2844ZM58.8003 34.9632C57.6679 33.9142 56.1251 33.3813 54.172 33.3813C51.6609 33.3813 49.7735 34.3138 48.5262 36.162L50.8567 37.644C51.7102 36.3785 52.8754 35.7458 54.3526 35.7458C55.2881 35.7458 56.1907 36.0954 56.8965 36.7282C57.5858 37.3276 57.9797 38.1935 57.9797 39.1093V39.7253C56.9621 39.1592 55.682 38.8595 54.1064 38.8595C52.2682 38.8595 50.7911 39.2924 49.6914 40.1749C48.5918 41.0574 48.0338 42.223 48.0338 43.7049C48.001 45.0536 48.5754 46.3358 49.593 47.2016C50.6269 48.1341 51.9399 48.6003 53.4827 48.6003C55.3045 48.6003 56.7488 47.7844 57.8484 46.1526H57.9633V48.1341H60.4908V39.3257C60.4908 37.4775 59.9328 36.0122 58.8003 34.9632ZM51.6287 45.5033C51.087 45.1037 50.7587 44.4543 50.7587 43.7549C50.7587 42.9723 51.1199 42.3229 51.8257 41.8068C52.548 41.2906 53.4508 41.0242 54.5178 41.0242C55.9951 41.0075 57.1442 41.3405 57.9649 42.0066C57.9649 43.1388 57.5217 44.1213 56.6517 44.9538C55.8638 45.753 54.7968 46.2026 53.6806 46.2026C52.9419 46.2193 52.2197 45.9695 51.6287 45.5033ZM66.1699 54.4117L74.9997 33.8478H72.1276L68.0409 44.1047H67.9917L63.8065 33.8478H60.9343L66.7279 47.2185L63.4454 54.4117H66.1699Z"
            fill="#3C4043"
          />
          <path
            d="M28.1615 37.8436C28.1615 37.0277 28.0959 36.2118 27.9646 35.4126H16.8206V40.0249H23.205C22.9424 41.5068 22.0889 42.8389 20.8416 43.6715V46.6686H24.6493C26.8813 44.5873 28.1615 41.5068 28.1615 37.8436Z"
            fill="#4285F4"
          />
          <path
            d="M16.8212 49.5661C20.0052 49.5661 22.6968 48.5004 24.6499 46.6688L20.8423 43.6717C19.7754 44.4043 18.4132 44.8206 16.8212 44.8206C13.7357 44.8206 11.1261 42.7059 10.1906 39.8752H6.26807V42.9723C8.27038 47.0185 12.3571 49.5661 16.8212 49.5661Z"
            fill="#34A853"
          />
          <path
            d="M10.1912 39.8751C9.69879 38.3931 9.69879 36.778 10.1912 35.2794V32.199H6.26806C4.57731 35.5791 4.57731 39.5753 6.26806 42.9555L10.1912 39.8751Z"
            fill="#FBBC04"
          />
          <path
            d="M16.8212 30.3344C18.5117 30.3011 20.1365 30.9505 21.351 32.1327L24.732 28.7026C22.582 26.6712 19.759 25.5556 16.8212 25.5889C12.3571 25.5889 8.27038 28.1531 6.26807 32.1993L10.1906 35.2964C11.1261 32.449 13.7357 30.3344 16.8212 30.3344Z"
            fill="#EA4335"
          />
        </>
      )
    case 'solid':
      return (
        <>
          <path
            d="M21.3509 32.1327C20.1364 30.9505 18.5116 30.3011 16.8211 30.3344C13.7356 30.3344 11.126 32.449 10.1905 35.2964L10.1867 35.2933C9.69879 36.788 9.70031 38.3978 10.1912 39.8751C11.1268 42.7056 13.7357 44.8206 16.8211 44.8206C18.4128 44.8206 19.7748 44.4045 20.8415 43.6721C22.0888 42.8396 22.9423 41.5069 23.2049 40.025H16.8205V35.4127H27.9645C28.0958 36.2119 28.1614 37.0278 28.1614 37.8437C28.1614 41.5068 26.8813 44.5871 24.6494 46.6685C22.6963 48.5001 20.0051 49.5661 16.8211 49.5661C12.357 49.5661 8.27028 47.0185 6.26797 42.9723V42.9554C4.57731 39.5753 4.57734 35.5791 6.26806 32.1991C8.27041 28.153 12.357 25.5889 16.8211 25.5889C19.7589 25.5556 22.5819 26.6712 24.7319 28.7026L21.3509 32.1327Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M37.2843 48.1342V39.6756H41.6499C43.4389 39.6756 44.9488 39.0761 46.1798 37.8939L46.4752 37.5942C48.7237 35.1465 48.576 31.3334 46.1798 29.0689C44.9817 27.87 43.3404 27.2207 41.6499 27.254H34.6419V48.1342H37.2843ZM37.2844 37.1113V29.8182H41.7164C42.6685 29.8182 43.5713 30.1845 44.2443 30.8505C45.6724 32.2492 45.7053 34.5803 44.3264 36.029C43.6534 36.7449 42.7013 37.1446 41.7164 37.1113H37.2844Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M58.8003 34.9632C57.6679 33.9142 56.1251 33.3814 54.172 33.3814C51.6609 33.3814 49.7735 34.3138 48.5262 36.1621L50.8567 37.644C51.7102 36.3786 52.8755 35.7458 54.3526 35.7458C55.2881 35.7458 56.1908 36.0955 56.8965 36.7282C57.5858 37.3277 57.9797 38.1935 57.9797 39.1093V39.7254C56.9621 39.1593 55.682 38.8595 54.1064 38.8595C52.2682 38.8595 50.7911 39.2925 49.6915 40.175C48.5918 41.0575 48.0338 42.223 48.0338 43.705C48.001 45.0537 48.5754 46.3358 49.593 47.2017C50.627 48.1341 51.9399 48.6003 53.4827 48.6003C55.3045 48.6003 56.7488 47.7845 57.8484 46.1527H57.9633V48.1341H60.4908V39.3258C60.4908 37.4775 59.9328 36.0122 58.8003 34.9632ZM51.6288 45.5033C51.0871 45.1037 50.7588 44.4543 50.7588 43.755C50.7588 42.9724 51.1199 42.323 51.8257 41.8068C52.548 41.2906 53.4508 41.0242 54.5178 41.0242C55.9951 41.0076 57.1442 41.3406 57.9649 42.0066C57.9649 43.1389 57.5217 44.1213 56.6517 44.9538C55.8638 45.7531 54.7968 46.2027 53.6806 46.2027C52.942 46.2193 52.2197 45.9696 51.6288 45.5033Z"
            fill="currentColor"
          />
          <path
            d="M66.1699 54.4117L74.9998 33.8478H72.1276L68.0409 44.1048H67.9917L63.8065 33.8478H60.9344L66.7279 47.2185L63.4454 54.4117H66.1699Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M21.3509 32.1327C20.1364 30.9505 18.5116 30.3011 16.8211 30.3344C13.7356 30.3344 11.126 32.449 10.1905 35.2964L10.1867 35.2933C9.69879 36.788 9.70031 38.3978 10.1912 39.8751C11.1268 42.7056 13.7357 44.8206 16.8211 44.8206C18.4128 44.8206 19.7748 44.4045 20.8415 43.6721C22.0888 42.8396 22.9423 41.5069 23.2049 40.025H16.8205V35.4127H27.9645C28.0958 36.2119 28.1614 37.0278 28.1614 37.8437C28.1614 41.5068 26.8813 44.5871 24.6494 46.6685C22.6963 48.5001 20.0051 49.5661 16.8211 49.5661C12.357 49.5661 8.27028 47.0185 6.26797 42.9723V42.9554C4.57731 39.5753 4.57734 35.5791 6.26806 32.1991C8.27041 28.153 12.357 25.5889 16.8211 25.5889C19.7589 25.5556 22.5819 26.6712 24.7319 28.7026L21.3509 32.1327Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M37.2843 48.1342V39.6756H41.6499C43.4389 39.6756 44.9488 39.0761 46.1798 37.8939L46.4752 37.5942C48.7237 35.1465 48.576 31.3334 46.1798 29.0689C44.9817 27.87 43.3404 27.2207 41.6499 27.254H34.6419V48.1342H37.2843ZM37.2844 37.1113V29.8182H41.7164C42.6685 29.8182 43.5713 30.1845 44.2443 30.8505C45.6724 32.2492 45.7053 34.5803 44.3264 36.029C43.6534 36.7449 42.7013 37.1446 41.7164 37.1113H37.2844Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M58.8003 34.9632C57.6679 33.9142 56.1251 33.3814 54.172 33.3814C51.6609 33.3814 49.7735 34.3138 48.5262 36.1621L50.8567 37.644C51.7102 36.3786 52.8755 35.7458 54.3526 35.7458C55.2881 35.7458 56.1908 36.0955 56.8965 36.7282C57.5858 37.3277 57.9797 38.1935 57.9797 39.1093V39.7254C56.9621 39.1593 55.682 38.8595 54.1064 38.8595C52.2682 38.8595 50.7911 39.2925 49.6915 40.175C48.5918 41.0575 48.0338 42.223 48.0338 43.705C48.001 45.0537 48.5754 46.3358 49.593 47.2017C50.627 48.1341 51.9399 48.6003 53.4827 48.6003C55.3045 48.6003 56.7488 47.7845 57.8484 46.1527H57.9633V48.1341H60.4908V39.3258C60.4908 37.4775 59.9328 36.0122 58.8003 34.9632ZM51.6288 45.5033C51.0871 45.1037 50.7588 44.4543 50.7588 43.755C50.7588 42.9724 51.1199 42.323 51.8257 41.8068C52.548 41.2906 53.4508 41.0242 54.5178 41.0242C55.9951 41.0076 57.1442 41.3406 57.9649 42.0066C57.9649 43.1389 57.5217 44.1213 56.6517 44.9538C55.8638 45.7531 54.7968 46.2027 53.6806 46.2027C52.942 46.2193 52.2197 45.9696 51.6288 45.5033Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M66.1699 54.4117L74.9998 33.8478H72.1276L68.0409 44.1048H67.9917L63.8065 33.8478H60.9344L66.7279 47.2185L63.4454 54.4117H66.1699Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsGooglePay = forwardRef((props, ref) => {
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

BrandsGooglePay.displayName = 'BrandsGooglePay'

export default BrandsGooglePay
