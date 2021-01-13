
import { forwardRef } from 'react'
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
            d="M37.3613 27.7177C38.8921 28.578 40.2556 29.6553 41.3945 30.9091C42.9513 32.623 44.0483 34.6229 44.6039 36.7602C45.1595 38.8975 45.1595 41.1172 44.6039 43.2544C44.0483 45.3917 42.9513 47.3916 41.3945 49.1056C40.2563 50.3586 38.8937 51.4353 37.364 52.2955"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M48.1191 19.668C50.0325 20.9434 51.7646 22.426 53.2718 24.0853C55.9962 27.0847 57.916 30.5845 58.8883 34.3248C59.8607 38.065 59.8606 41.9495 58.8883 45.6897C57.9159 49.4299 55.9962 52.9298 53.2718 55.9292C51.7652 57.5878 50.034 59.0698 48.1215 60.3448"
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
            d="M41.3947 30.9091L39.5441 32.59L41.3947 30.9091ZM44.6041 36.7602L42.1846 37.3892L42.1846 37.3892L44.6041 36.7602ZM38.5865 25.5383C37.3829 24.8618 35.8587 25.2891 35.1822 26.4927C34.5057 27.6963 34.933 29.2205 36.1366 29.897L38.5865 25.5383ZM41.3947 49.1056L43.2452 50.7865L43.2452 50.7865L41.3947 49.1056ZM36.1389 50.1164C34.9354 50.7931 34.5084 52.3173 35.1851 53.5208C35.8619 54.7243 37.3861 55.1513 38.5896 54.4746L36.1389 50.1164ZM44.6041 43.2544L47.0237 43.8835L44.6041 43.2544ZM53.2719 24.0853L51.4213 25.7662L53.2719 24.0853ZM58.8884 34.3248L56.4688 34.9538L58.8884 34.3248ZM49.5058 17.5878C48.357 16.822 46.8048 17.1326 46.039 18.2814C45.2732 19.4303 45.5838 20.9825 46.7327 21.7483L49.5058 17.5878ZM53.2719 55.9292L51.4213 54.2483L51.4213 54.2483L53.2719 55.9292ZM46.7349 58.2647C45.586 59.0307 45.2756 60.5828 46.0416 61.7316C46.8075 62.8804 48.3596 63.1908 49.5084 62.4249L46.7349 58.2647ZM58.8884 45.6897L56.4688 45.0607L58.8884 45.6897ZM39.5441 32.59C40.8426 34.0195 41.7357 35.6626 42.1846 37.3892L47.0237 36.1312C46.3613 33.5832 45.0604 31.2265 43.2452 29.2282L39.5441 32.59ZM36.1366 29.897C37.4439 30.6318 38.5936 31.5435 39.5441 32.59L43.2452 29.2282C41.918 27.767 40.3407 26.5243 38.5865 25.5383L36.1366 29.897ZM39.5441 47.4247C38.5942 48.4705 37.4452 49.3818 36.1389 50.1164L38.5896 54.4746C40.3425 53.4889 41.9188 52.2468 43.2452 50.7865L39.5441 47.4247ZM42.1846 42.6254C41.7357 44.352 40.8426 45.9951 39.5441 47.4247L43.2452 50.7865C45.0604 48.7881 46.3613 46.4314 47.0237 43.8835L42.1846 42.6254ZM47.0237 43.8835C47.6866 41.3337 47.6866 38.6809 47.0237 36.1312L42.1846 37.3892C42.6329 39.114 42.6329 40.9006 42.1846 42.6254L47.0237 43.8835ZM51.4213 25.7662C53.8874 28.4812 55.6032 31.6242 56.4688 34.9538L61.308 33.6957C60.2289 29.5449 58.1053 25.6882 55.1224 22.4044L51.4213 25.7662ZM46.7327 21.7483C48.4817 22.9141 50.0567 24.2638 51.4213 25.7662L55.1224 22.4044C53.4727 20.5882 51.5836 18.9727 49.5058 17.5878L46.7327 21.7483ZM51.4213 54.2483C50.0572 55.75 48.483 57.0993 46.7349 58.2647L49.5084 62.4249C51.5852 61.0404 53.4734 59.4255 55.1224 57.6101L51.4213 54.2483ZM56.4688 45.0607C55.6032 48.3903 53.8874 51.5333 51.4213 54.2483L55.1224 57.6101C58.1053 54.3262 60.2289 50.4696 61.308 46.3187L56.4688 45.0607ZM61.308 46.3187C62.3876 42.166 62.3876 37.8485 61.308 33.6957L56.4688 34.9538C57.334 38.2815 57.334 41.733 56.4688 45.0607L61.308 46.3187Z"
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
            d="M41.3947 30.9091L39.9142 32.2538L39.9142 32.2538L41.3947 30.9091ZM44.6041 36.7602L42.6685 37.2634L42.6685 37.2634L44.6041 36.7602ZM38.3415 25.9742C37.3786 25.433 36.1593 25.7748 35.6181 26.7377C35.0769 27.7006 35.4187 28.9199 36.3816 29.4611L38.3415 25.9742ZM41.3947 49.1056L42.8751 50.4503L42.8751 50.4503L41.3947 49.1056ZM36.384 50.5522C35.4212 51.0936 35.0796 52.3129 35.621 53.2757C36.1624 54.2385 37.3817 54.5801 38.3445 54.0388L36.384 50.5522ZM44.6041 43.2544L46.5398 43.7577L44.6041 43.2544ZM53.2719 24.0853L51.7914 25.43L53.2719 24.0853ZM58.8884 34.3248L56.9528 34.828L56.9528 34.828L58.8884 34.3248ZM49.2285 18.0038C48.3094 17.3912 47.0677 17.6397 46.4551 18.5588C45.8424 19.4779 46.0909 20.7196 47.01 21.3322L49.2285 18.0038ZM53.2719 55.9292L51.7914 54.5845L51.7914 54.5845L53.2719 55.9292ZM47.0122 58.6808C46.0932 59.2935 45.8448 60.5352 46.4576 61.4543C47.0703 62.3733 48.312 62.6216 49.2311 62.0089L47.0122 58.6808ZM58.8884 45.6897L56.9528 45.1865L58.8884 45.6897ZM39.9142 32.2538C41.2644 33.7402 42.1982 35.4547 42.6685 37.2634L46.5398 36.257C45.8987 33.7912 44.6386 31.5058 42.8751 29.5643L39.9142 32.2538ZM36.3816 29.4611C37.7336 30.221 38.926 31.1659 39.9142 32.2538L42.8751 29.5643C41.5856 28.1447 40.051 26.935 38.3415 25.9742L36.3816 29.4611ZM39.9142 47.7608C38.9266 48.8481 37.735 49.7925 36.384 50.5522L38.3445 54.0388C40.0528 53.0782 41.5864 51.8691 42.8751 50.4503L39.9142 47.7608ZM42.6685 42.7512C42.1982 44.56 41.2644 46.2744 39.9142 47.7608L42.8751 50.4503C44.6386 48.5088 45.8987 46.2235 46.5398 43.7577L42.6685 42.7512ZM46.5398 43.7577C47.1812 41.2904 47.1812 38.7242 46.5398 36.257L42.6685 37.2634C43.1383 39.0707 43.1383 40.944 42.6685 42.7512L46.5398 43.7577ZM51.7914 25.43C54.3092 28.2019 56.0658 31.4163 56.9528 34.828L60.8241 33.8215C59.7663 29.7528 57.6835 25.9675 54.7523 22.7406L51.7914 25.43ZM47.01 21.3322C48.7919 22.5199 50.3983 23.8962 51.7914 25.43L54.7523 22.7406C53.1311 20.9557 51.2734 19.3669 49.2285 18.0038L47.01 21.3322ZM51.7914 54.5845C50.3989 56.1176 48.7932 57.4934 47.0122 58.6808L49.2311 62.0089C51.275 60.6463 53.1318 59.058 54.7523 57.2739L51.7914 54.5845ZM56.9528 45.1865C56.0658 48.5982 54.3092 51.8126 51.7914 54.5845L54.7523 57.2739C57.6835 54.0469 59.7663 50.2617 60.8241 46.1929L56.9528 45.1865ZM60.8241 46.1929C61.8822 42.1227 61.8822 37.8918 60.8241 33.8215L56.9528 34.828C57.8393 38.2382 57.8393 41.7763 56.9528 45.1865L60.8241 46.1929Z"
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
            d="M37.3618 27.7176C38.8925 28.578 40.256 29.6552 41.3949 30.909C42.9517 32.623 44.0487 34.6229 44.6043 36.7602C45.16 38.8974 45.16 41.1171 44.6043 43.2544C44.0487 45.3917 42.9517 47.3916 41.3949 49.1055C40.2567 50.3586 38.8941 51.4353 37.3645 52.2954M48.1195 19.668C50.0329 20.9434 51.7649 22.426 53.2721 24.0853C55.9966 27.0847 57.9163 30.5845 58.8886 34.3247C59.861 38.065 59.861 41.9495 58.8886 45.6897C57.9163 49.4299 55.9966 52.9297 53.2721 55.9292C51.7655 57.5878 50.0343 59.0698 48.1219 60.3448M32.1465 59.3284C32.1465 61.1101 29.9926 62.0025 28.7325 60.7429L17.732 49.7466C17.357 49.3716 16.8484 49.161 16.3181 49.161H6.14648C5.04191 49.161 4.14648 48.2656 4.14648 47.161V33.1678C4.14648 32.0632 5.04191 31.1678 6.14648 31.1678H16.3185C16.8488 31.1678 17.3574 30.9572 17.7324 30.5823L28.7325 19.5863C29.9926 18.3267 32.1465 19.2191 32.1465 21.0008V59.3284Z"
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
            d="M34.1465 21.0008C34.1465 17.4375 29.8387 15.6527 27.3186 18.1719L16.3185 29.1678H6.14648C3.93734 29.1678 2.14648 30.9587 2.14648 33.1678V47.1611C2.14648 49.3702 3.93734 51.1611 6.14648 51.1611H16.3181L27.3186 62.1575C29.8387 64.6766 34.1465 62.8917 34.1465 59.3285V21.0008ZM19.1464 31.9968L30.1465 21.0008L30.1465 59.3285L19.146 48.3321C18.3959 47.5823 17.3787 47.1611 16.3181 47.1611H6.14648V33.1678H16.3185C17.3791 33.1678 18.3963 32.7466 19.1464 31.9968Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M60.8243 46.193C61.8824 42.1227 61.8824 37.8918 60.8243 33.8216C59.7665 29.7528 57.6837 25.9676 54.7525 22.7406C53.1313 20.9558 51.2736 19.3669 49.2287 18.0039C48.3096 17.3912 47.0679 17.6397 46.4553 18.5588C45.8426 19.4779 46.0911 20.7196 47.0102 21.3322C48.7921 22.52 50.3985 23.8963 51.7917 25.43C54.3094 28.2019 56.066 31.4163 56.953 34.828C57.8395 38.2382 57.8395 41.7763 56.953 45.1865C56.066 48.5982 54.3094 51.8126 51.7917 54.5845C50.3991 56.1176 48.7934 57.4934 47.0124 58.6808C46.0934 59.2935 45.8451 60.5353 46.4578 61.4543C47.0705 62.3733 48.3123 62.6217 49.2313 62.0089C51.2752 60.6463 53.132 59.058 54.7525 57.2739C57.6837 54.047 59.7665 50.2617 60.8243 46.193Z"
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

const CoreVolume2 = forwardRef((props, ref) => {
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

CoreVolume2.displayName = 'CoreVolume2'

export default CoreVolume2
