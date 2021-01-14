
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M17.732 49.7466C17.357 49.3716 16.8484 49.161 16.3181 49.161H6.14648C5.04191 49.161 4.14648 48.2656 4.14648 47.161V33.1678C4.14648 32.0632 5.04191 31.1678 6.14648 31.1678H16.3185C16.8488 31.1678 17.3574 30.9572 17.7324 30.5823L28.7325 19.5863C29.9926 18.3267 32.1465 19.2191 32.1465 21.0008V59.3284C32.1465 61.1101 29.9926 62.0025 28.7325 60.7429L17.732 49.7466Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M37.3618 27.7177C38.8926 28.578 40.2561 29.6553 41.395 30.9091C42.9518 32.623 44.0488 34.6229 44.6044 36.7602C45.16 38.8975 45.16 41.1172 44.6044 43.2545C44.0488 45.3917 42.9518 47.3916 41.395 49.1056C40.2568 50.3586 38.8942 51.4353 37.3645 52.2955"
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
            d="M17.732 49.7466C17.357 49.3716 16.8484 49.161 16.3181 49.161H6.14648C5.04191 49.161 4.14648 48.2656 4.14648 47.161V33.1678C4.14648 32.0632 5.04191 31.1678 6.14648 31.1678H16.3185C16.8488 31.1678 17.3574 30.9572 17.7324 30.5823L28.7325 19.5863C29.9926 18.3267 32.1465 19.2191 32.1465 21.0008V21.1698V58.1559V59.3284C32.1465 61.1101 29.9926 62.0025 28.7325 60.7429L17.732 49.7466Z"
            fill="currentColor"
          />
          <path
            d="M32.1465 21.1698H34.1465V21.1698L32.1465 21.1698ZM28.7325 60.7429L27.3186 62.1574L28.7325 60.7429ZM17.7324 30.5823L19.1464 31.9968L17.7324 30.5823ZM17.732 49.7466L16.3181 51.161L17.732 49.7466ZM16.3181 47.161H6.14648V51.161H16.3181V47.161ZM6.14648 47.161V33.1678H2.14648V47.161H6.14648ZM6.14648 33.1678H16.3185V29.1678H6.14648V33.1678ZM19.1464 31.9968L30.1465 21.0008L27.3186 18.1718L16.3185 29.1678L19.1464 31.9968ZM30.1465 21.0008V21.1698L34.1465 21.1698V21.0008L30.1465 21.0008ZM30.1465 21.1698V58.1559H34.1465V21.1698H30.1465ZM30.1465 58.1559V59.3284H34.1465V58.1559H30.1465ZM30.1465 59.3284L19.146 48.3321L16.3181 51.161L27.3186 62.1574L30.1465 59.3284ZM30.1465 59.3284L27.3186 62.1574C29.8387 64.6765 34.1465 62.8917 34.1465 59.3284H30.1465ZM30.1465 21.0008L30.1465 21.0008L34.1465 21.0008C34.1465 17.4375 29.8387 15.6527 27.3186 18.1718L30.1465 21.0008ZM16.3185 33.1678C17.3791 33.1678 18.3963 32.7466 19.1464 31.9968L16.3185 29.1678H16.3185V33.1678ZM6.14648 33.1678V33.1678V29.1678C3.93734 29.1678 2.14648 30.9587 2.14648 33.1678H6.14648ZM6.14648 47.161H6.14648H2.14648C2.14648 49.3702 3.93734 51.161 6.14648 51.161V47.161ZM16.3181 51.161L19.146 48.3321C18.3959 47.5823 17.3787 47.161 16.3181 47.161V51.161Z"
            fill="currentColor"
          />
          <path
            d="M41.3948 30.9091L43.2454 29.2282L43.2454 29.2282L41.3948 30.9091ZM44.6043 36.7602L42.1847 37.3892L44.6043 36.7602ZM38.5866 25.5383C37.383 24.8618 35.8589 25.2891 35.1824 26.4927C34.5058 27.6963 34.9331 29.2205 36.1367 29.897L38.5866 25.5383ZM41.3948 49.1056L43.2454 50.7865L43.2454 50.7865L41.3948 49.1056ZM36.1391 50.1164C34.9356 50.7931 34.5085 52.3173 35.1853 53.5208C35.862 54.7243 37.3863 55.1513 38.5897 54.4746L36.1391 50.1164ZM44.6043 43.2545L42.1847 42.6254L44.6043 43.2545ZM39.5443 32.59C40.8428 34.0195 41.7358 35.6626 42.1847 37.3892L47.0238 36.1312C46.3615 33.5832 45.0606 31.2265 43.2454 29.2282L39.5443 32.59ZM36.1367 29.897C37.444 30.6318 38.5938 31.5435 39.5443 32.59L43.2454 29.2282C41.9182 27.767 40.3408 26.5243 38.5866 25.5383L36.1367 29.897ZM39.5443 47.4247C38.5943 48.4705 37.4454 49.3818 36.1391 50.1164L38.5897 54.4746C40.3427 53.4889 41.919 52.2468 43.2454 50.7865L39.5443 47.4247ZM42.1847 42.6254C41.7358 44.352 40.8428 45.9951 39.5443 47.4247L43.2454 50.7865C45.0606 48.7881 46.3615 46.4314 47.0238 43.8835L42.1847 42.6254ZM47.0238 43.8835C47.6867 41.3337 47.6867 38.6809 47.0238 36.1312L42.1847 37.3892C42.6331 39.114 42.6331 40.9007 42.1847 42.6254L47.0238 43.8835Z"
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
            d="M17.732 49.7466C17.357 49.3716 16.8484 49.161 16.3181 49.161H6.14648C5.04191 49.161 4.14648 48.2656 4.14648 47.161V33.1678C4.14648 32.0632 5.04191 31.1678 6.14648 31.1678H16.3185C16.8488 31.1678 17.3574 30.9572 17.7324 30.5823L28.7325 19.5863C29.9926 18.3267 32.1465 19.2191 32.1465 21.0008V21.1698V58.1559V59.3284C32.1465 61.1101 29.9926 62.0025 28.7325 60.7429L17.732 49.7466Z"
            fill="#EB5757"
          />
          <path
            d="M32.1465 21.1698H34.1465V21.1698L32.1465 21.1698ZM28.7325 60.7429L27.3186 62.1574L28.7325 60.7429ZM17.7324 30.5823L19.1464 31.9968L17.7324 30.5823ZM17.732 49.7466L16.3181 51.161L17.732 49.7466ZM16.3181 47.161H6.14648V51.161H16.3181V47.161ZM6.14648 47.161V33.1678H2.14648V47.161H6.14648ZM6.14648 33.1678H16.3185V29.1678H6.14648V33.1678ZM19.1464 31.9968L30.1465 21.0008L27.3186 18.1718L16.3185 29.1678L19.1464 31.9968ZM30.1465 21.0008V21.1698L34.1465 21.1698V21.0008L30.1465 21.0008ZM30.1465 21.1698V58.1559H34.1465V21.1698H30.1465ZM30.1465 58.1559V59.3284H34.1465V58.1559H30.1465ZM30.1465 59.3284L19.146 48.3321L16.3181 51.161L27.3186 62.1574L30.1465 59.3284ZM30.1465 59.3284V59.3284L27.3186 62.1574C29.8387 64.6765 34.1465 62.8917 34.1465 59.3284H30.1465ZM30.1465 21.0008L30.1465 21.0008L34.1465 21.0008C34.1465 17.4375 29.8387 15.6527 27.3186 18.1718L30.1465 21.0008ZM16.3185 33.1678C17.3791 33.1678 18.3963 32.7466 19.1464 31.9968L16.3185 29.1678H16.3185V33.1678ZM6.14648 33.1678V33.1678V29.1678C3.93734 29.1678 2.14648 30.9587 2.14648 33.1678H6.14648ZM6.14648 47.161H6.14648H2.14648C2.14648 49.3702 3.93734 51.161 6.14648 51.161V47.161ZM16.3181 51.161L19.146 48.3321C18.3959 47.5823 17.3787 47.161 16.3181 47.161V51.161Z"
            fill="#EB5757"
          />
          <path
            d="M41.3948 30.9091L42.8753 29.5643V29.5643L41.3948 30.9091ZM44.6043 36.7602L42.6686 37.2634L44.6043 36.7602ZM38.3417 25.9742C37.3788 25.433 36.1594 25.7748 35.6182 26.7377C35.077 27.7006 35.4188 28.9199 36.3817 29.4611L38.3417 25.9742ZM41.3948 49.1056L42.8753 50.4503L42.8753 50.4503L41.3948 49.1056ZM36.3841 50.5522C35.4213 51.0936 35.0797 52.313 35.6211 53.2757C36.1625 54.2385 37.3819 54.5801 38.3447 54.0388L36.3841 50.5522ZM44.6043 43.2545L42.6686 42.7512L42.6686 42.7512L44.6043 43.2545ZM39.9144 32.2538C41.2645 33.7402 42.1984 35.4547 42.6686 37.2634L46.5399 36.257C45.8989 33.7912 44.6388 31.5058 42.8753 29.5643L39.9144 32.2538ZM36.3817 29.4611C37.7337 30.221 38.9262 31.1659 39.9144 32.2538L42.8753 29.5643C41.5857 28.1447 40.0512 26.9351 38.3417 25.9742L36.3817 29.4611ZM39.9144 47.7608C38.9268 48.8481 37.7351 49.7925 36.3841 50.5522L38.3447 54.0388C40.053 53.0782 41.5865 51.8691 42.8753 50.4503L39.9144 47.7608ZM42.6686 42.7512C42.1984 44.56 41.2645 46.2744 39.9144 47.7609L42.8753 50.4503C44.6388 48.5088 45.8989 46.2235 46.5399 43.7577L42.6686 42.7512ZM46.5399 43.7577C47.1814 41.2904 47.1814 38.7242 46.5399 36.257L42.6686 37.2634C43.1385 39.0707 43.1385 40.944 42.6686 42.7512L46.5399 43.7577Z"
            fill="#F2994A"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M17.732 49.7466C17.357 49.3716 16.8484 49.161 16.3181 49.161H6.14648C5.04191 49.161 4.14648 48.2656 4.14648 47.161V33.1678C4.14648 32.0632 5.04191 31.1678 6.14648 31.1678H16.3185C16.8488 31.1678 17.3574 30.9572 17.7324 30.5823L28.7325 19.5863C29.9926 18.3267 32.1465 19.2191 32.1465 21.0008V59.3284C32.1465 61.1101 29.9926 62.0025 28.7325 60.7429L17.732 49.7466Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M37.3618 27.7176C38.8925 28.578 40.256 29.6552 41.3949 30.909C42.9517 32.623 44.0487 34.6229 44.6043 36.7602C45.16 38.8974 45.16 41.1171 44.6043 43.2544C44.0487 45.3917 42.9517 47.3916 41.3949 49.1055C40.2567 50.3586 38.8941 51.4353 37.3645 52.2954M32.1465 59.3284C32.1465 61.1101 29.9926 62.0025 28.7325 60.7429L17.732 49.7466C17.357 49.3716 16.8484 49.161 16.3181 49.161H6.14648C5.04191 49.161 4.14648 48.2656 4.14648 47.161V33.1678C4.14648 32.0632 5.04191 31.1678 6.14648 31.1678H16.3185C16.8488 31.1678 17.3574 30.9572 17.7324 30.5823L28.7325 19.5863C29.9926 18.3267 32.1465 19.2191 32.1465 21.0008V59.3284Z"
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
            d="M34.1465 21.0008C34.1465 17.4375 29.8387 15.6527 27.3186 18.1719L16.3185 29.1678H6.14648C3.93734 29.1678 2.14648 30.9587 2.14648 33.1678V47.1611C2.14648 49.3702 3.93734 51.1611 6.14648 51.1611H16.3181L27.3186 62.1575C29.8387 64.6766 34.1465 62.8917 34.1465 59.3285V21.0008ZM19.1464 31.9968L30.1465 21.0008L30.1465 59.3285L19.146 48.3321C18.3959 47.5823 17.3787 47.1611 16.3181 47.1611H6.14648V33.1678H16.3185C17.3791 33.1678 18.3963 32.7466 19.1464 31.9968Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M46.54 43.7577C47.1814 41.2904 47.1814 38.7243 46.54 36.257C45.899 33.7912 44.6389 31.5059 42.8753 29.5644C41.5858 28.1447 40.0512 26.9351 38.3417 25.9742C37.3788 25.433 36.1595 25.7748 35.6183 26.7377C35.0771 27.7006 35.4189 28.9199 36.3818 29.4611C37.7338 30.221 38.9263 31.1659 39.9145 32.2538C41.2646 33.7402 42.1985 35.4547 42.6687 37.2634C43.1385 39.0707 43.1385 40.944 42.6687 42.7513C42.1985 44.56 41.2646 46.2745 39.9145 47.7609C38.9268 48.8482 37.7352 49.7925 36.3842 50.5522C35.4214 51.0936 35.0798 52.313 35.6212 53.2758C36.1626 54.2386 37.382 54.5802 38.3448 54.0388C40.053 53.0782 41.5866 51.8692 42.8753 50.4503C44.6389 48.5088 45.899 46.2235 46.54 43.7577Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreVolume1 = forwardRef((props, ref) => {
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

CoreVolume1.displayName = 'CoreVolume1'

export default CoreVolume1
