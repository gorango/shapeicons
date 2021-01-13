
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M30.4297 16.5675C36.4829 13.6787 43.5171 13.6787 49.5702 16.5675C55.6838 19.4852 60.1348 25.0426 61.6552 31.6439C63.1393 38.088 61.6842 44.8684 57.68 50.131L55.6926 52.743C54.7305 54.0075 53.6625 55.1879 52.5001 56.2712L40.4937 67.4617C40.2282 67.7512 39.7717 67.7512 39.5062 67.4617L27.4998 56.2712C26.3374 55.1879 25.2694 54.0075 24.3073 52.743L22.3199 50.131C18.3157 44.8684 16.8606 38.088 18.3447 31.6439C19.8651 25.0426 24.3161 19.4852 30.4297 16.5675Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M35.769 25.7387C38.4461 24.466 41.5539 24.466 44.231 25.7387L44.325 25.7833C46.981 27.046 48.9153 29.4521 49.5777 32.3174C50.2455 35.2055 49.5326 38.2583 47.6699 40.5641C45.8219 42.8518 43.0241 44.1993 40.0833 44.1993H39.9168C36.9759 44.1993 34.1782 42.8518 32.3302 40.5641C30.4674 38.2583 29.7546 35.2055 30.4223 32.3174C31.0848 29.4521 33.0191 27.046 35.6751 25.7833L35.769 25.7387Z"
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
            d="M49.5702 16.5675C43.5171 13.6787 36.4829 13.6787 30.4297 16.5675C24.3161 19.4852 19.8651 25.0426 18.3447 31.6439C16.8606 38.088 18.3157 44.8684 22.3199 50.131L24.3073 52.743C25.2694 54.0075 26.3374 55.1879 27.4998 56.2712L39.5062 67.4617C39.7717 67.7512 40.2282 67.7512 40.4937 67.4617L52.5001 56.2712C53.6625 55.1879 54.7305 54.0075 55.6926 52.743L57.68 50.131C61.6842 44.8684 63.1393 38.088 61.6552 31.6439C60.1348 25.0426 55.6838 19.4852 49.5702 16.5675ZM44.231 25.7389C41.5539 24.4662 38.4461 24.4662 35.769 25.7389L35.6751 25.7835C33.019 27.0462 31.0848 29.4523 30.4223 32.3176C29.7545 35.2056 30.4674 38.2584 32.3301 40.5643C34.1782 42.8519 36.9759 44.1994 39.9167 44.1994H40.0832C43.0241 44.1994 45.8218 42.8519 47.6698 40.5643C49.5326 38.2584 50.2454 35.2056 49.5777 32.3176C48.9152 29.4523 46.9809 27.0462 44.3249 25.7835L44.231 25.7389Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M30.4297 16.5674C36.4829 13.6785 43.5171 13.6785 49.5703 16.5674C55.6838 19.4851 60.1349 25.0425 61.6552 31.6438C63.1394 38.0879 61.6843 44.8682 57.6801 50.1309L55.6676 52.7758C54.7221 54.0185 53.6743 55.1799 52.5351 56.2479L40.5 67.5312C40.2188 67.7949 39.7812 67.7949 39.5 67.5312L27.4649 56.2479C26.3257 55.1799 25.2779 54.0185 24.3324 52.7758L22.3199 50.1309C18.3157 44.8682 16.8606 38.0879 18.3448 31.6438C19.8651 25.0425 24.3162 19.4851 30.4297 16.5674Z"
            fill="#EB5757"
            stroke="#EB5757"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M35.769 25.739C38.4461 24.4663 41.5539 24.4663 44.231 25.739L44.3249 25.7836C46.981 27.0463 48.9152 29.4524 49.5777 32.3177C50.2455 35.2057 49.5326 38.2585 47.6699 40.5644C45.8218 42.852 43.0241 44.1995 40.0833 44.1995H39.9168C36.9759 44.1995 34.1782 42.852 32.3302 40.5644C30.4674 38.2585 29.7546 35.2057 30.4223 32.3177C31.0848 29.4524 33.0191 27.0463 35.6751 25.7836L35.769 25.739Z"
            fill="#F2F2F2"
            stroke="#F2F2F2"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M30.4297 16.5675C36.4829 13.6787 43.5171 13.6787 49.5702 16.5675C55.6838 19.4852 60.1348 25.0426 61.6552 31.6439C63.1393 38.088 61.6842 44.8684 57.68 50.131L55.6676 52.7759C54.7221 54.0186 53.6742 55.18 52.5351 56.248L40.5 67.5314C40.2188 67.795 39.7812 67.795 39.5 67.5314L27.4648 56.248C26.3257 55.18 25.2779 54.0186 24.3323 52.7759L22.3199 50.131C18.3157 44.8684 16.8606 38.088 18.3447 31.6439C19.8651 25.0426 24.3161 19.4852 30.4297 16.5675Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M35.769 25.7389C38.4461 24.4662 41.5539 24.4662 44.231 25.7389L44.3249 25.7835C46.9809 27.0462 48.9152 29.4523 49.5777 32.3176C50.2454 35.2056 49.5326 38.2584 47.6698 40.5643C45.8218 42.8519 43.0241 44.1994 40.0832 44.1994H39.9167C36.9759 44.1994 34.1782 42.8519 32.3301 40.5643C30.4674 38.2584 29.7545 35.2056 30.4223 32.3176C31.0848 29.4523 33.019 27.0462 35.6751 25.7835L35.769 25.7389Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M30.4297 16.5675C36.4829 13.6787 43.5171 13.6787 49.5702 16.5675C55.6838 19.4852 60.1348 25.0426 61.6552 31.6439C63.1393 38.088 61.6842 44.8684 57.68 50.131L55.6676 52.7759C54.7221 54.0186 53.6742 55.18 52.5351 56.248L40.5 67.5314C40.2188 67.795 39.7812 67.795 39.5 67.5314L27.4648 56.248C26.3257 55.18 25.2779 54.0186 24.3323 52.7759L22.3199 50.131C18.3157 44.8684 16.8606 38.088 18.3447 31.6439C19.8651 25.0426 24.3161 19.4852 30.4297 16.5675Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M35.769 25.7389C38.4461 24.4662 41.5539 24.4662 44.231 25.7389L44.3249 25.7835C46.9809 27.0462 48.9152 29.4523 49.5777 32.3176C50.2454 35.2056 49.5326 38.2584 47.6698 40.5643C45.8218 42.8519 43.0241 44.1994 40.0832 44.1994H39.9167C36.9759 44.1994 34.1782 42.8519 32.3301 40.5643C30.4674 38.2584 29.7545 35.2056 30.4223 32.3176C31.0848 29.4523 33.019 27.0462 35.6751 25.7835L35.769 25.7389Z"
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
            d="M45.0898 23.9326C41.8694 22.4016 38.1308 22.4016 34.9104 23.9326L34.8165 23.9772C31.6094 25.5019 29.2738 28.4072 28.4738 31.867C27.6664 35.3594 28.5285 39.0408 30.7745 41.8211C32.999 44.5748 36.3667 46.1994 39.9169 46.1994H40.0834C43.6335 46.1994 47.0012 44.5748 49.2257 41.8211C51.4717 39.0408 52.3339 35.3594 51.5264 31.867C50.7265 28.4072 48.3908 25.5019 45.1837 23.9772L45.0898 23.9326ZM36.6278 27.5451C38.7616 26.5307 41.2386 26.5307 43.3724 27.5451L43.4663 27.5898C45.5712 28.5905 47.1042 30.4973 47.6292 32.7681C48.1572 35.0518 47.5937 37.476 46.1142 39.3075C44.6426 41.1291 42.4149 42.1994 40.0834 42.1994H39.9169C37.5853 42.1994 35.3576 41.1291 33.886 39.3075C32.4065 37.476 31.843 35.0518 32.371 32.7681C32.896 30.4973 34.429 28.5905 36.5339 27.5898L36.6278 27.5451Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M50.4318 14.7625C43.8338 11.6137 36.1664 11.6137 29.5684 14.7625C22.9036 17.9433 18.0529 24.0006 16.3959 31.195C14.7786 38.2171 16.3639 45.6058 20.7284 51.342L22.7158 53.9541C23.7466 55.3089 24.8909 56.5735 26.1363 57.7343L38.1035 68.8882C39.1463 69.9424 40.8539 69.9424 41.8967 68.8882L53.8639 57.7343C55.1093 56.5735 56.2536 55.3089 57.2844 53.9541L59.2718 51.342C63.6363 45.6058 65.2215 38.2171 63.6043 31.195C61.9473 24.0006 57.0966 17.9433 50.4318 14.7625ZM51.1366 54.8081L40.0001 65.1878L28.8635 54.8082C27.7842 53.8022 26.7925 52.7062 25.8991 51.532L23.9117 48.92C20.2678 44.1309 18.9428 37.9589 20.2939 32.0928C21.6776 26.0847 25.7289 21.0271 31.2912 18.3725C36.7996 15.7437 43.2006 15.7437 48.7089 18.3725C54.2713 21.0271 58.3226 26.0847 59.7063 32.0928C61.0574 37.9589 59.7324 44.1309 56.0885 48.92L54.1011 51.532C53.2077 52.7062 52.216 53.8022 51.1366 54.8081Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreMapMarker2 = forwardRef((props, ref) => {
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

CoreMapMarker2.displayName = 'CoreMapMarker2'

export default CoreMapMarker2
