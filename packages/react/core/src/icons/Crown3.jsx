
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M14.5342 61.1719C14.5342 59.3862 15.7495 57.8296 17.4819 57.3965C32.3546 53.6784 47.9138 53.6784 62.7865 57.3965C64.5189 57.8296 65.7342 59.3862 65.7342 61.1719V66.2915C65.7342 68.6494 63.5183 70.3795 61.2308 69.8076C47.3795 66.3448 32.8888 66.3448 19.0375 69.8076C16.7501 70.3795 14.5342 68.6494 14.5342 66.2915V61.1719Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M18.4724 57.1541L8.66211 19.413L21.8665 32.0155L32.8807 27.1466L39.9979 9.06641"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M61.5418 57.0942L71.3367 19.4103L58.1304 32.0146L47.1147 27.145L39.998 9.06641"
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
            d="M67.0368 35.9518L63.1655 34.9455C62.6736 36.8379 63.6219 38.8086 65.4077 39.605L67.0368 35.9518ZM71.3366 19.4103L75.2079 20.4166C75.6576 18.6866 74.9048 16.8681 73.3639 15.9621C71.823 15.0561 69.868 15.2825 68.5748 16.5167L71.3366 19.4103ZM67.0372 35.952L70.9086 36.9583C71.4005 35.0658 70.4522 33.0952 68.6664 32.2988L67.0372 35.952ZM66.2623 38.9334L70.1336 39.9397L70.1336 39.9397L66.2623 38.9334ZM61.5417 57.0941L60.6248 60.9876C62.7402 61.4857 64.8663 60.2037 65.413 58.1004L61.5417 57.0941ZM18.4724 57.154L14.601 58.1603C15.1488 60.2678 17.2819 61.55 19.4001 61.0449L18.4724 57.154ZM8.66211 19.413L11.4238 16.5193C10.1307 15.2852 8.1757 15.0588 6.63476 15.9648C5.09382 16.8708 4.34106 18.6892 4.79076 20.4193L8.66211 19.413ZM21.8665 32.0155L19.1048 34.9091C20.2754 36.0263 22.0038 36.3282 23.4838 35.674L21.8665 32.0155ZM32.8807 27.1466L34.498 30.8051C35.4608 30.3794 36.2171 29.5914 36.6027 28.6118L32.8807 27.1466ZM39.9979 9.06641L43.7199 7.60125C43.1179 6.07185 41.6416 5.06641 39.9979 5.06641C38.3543 5.06641 36.878 6.07185 36.2759 7.60125L39.9979 9.06641ZM47.1146 27.145L43.3925 28.6102C43.7782 29.5898 44.5344 30.3779 45.4973 30.8035L47.1146 27.145ZM58.1303 32.0146L56.513 35.6731C57.993 36.3273 59.7214 36.0254 60.892 34.9082L58.1303 32.0146ZM70.9082 36.9581L75.2079 20.4166L67.4652 18.404L63.1655 34.9455L70.9082 36.9581ZM68.6664 32.2988L68.666 32.2986L65.4077 39.605L65.4081 39.6052L68.6664 32.2988ZM70.1336 39.9397L70.9086 36.9583L63.1659 34.9457L62.3909 37.9271L70.1336 39.9397ZM65.413 58.1004L70.1336 39.9397L62.3909 37.9271L57.6703 56.0878L65.413 58.1004ZM19.4001 61.0449C32.9505 57.8142 47.0677 57.795 60.6248 60.9876L62.4586 53.2006C47.6882 49.7223 32.3077 49.7432 17.5447 53.2631L19.4001 61.0449ZM4.79076 20.4193L14.601 58.1603L22.3437 56.1477L12.5335 18.4067L4.79076 20.4193ZM24.6282 29.1219L11.4238 16.5193L5.9004 22.3066L19.1048 34.9091L24.6282 29.1219ZM31.2635 23.4881L20.2493 28.357L23.4838 35.674L34.498 30.8051L31.2635 23.4881ZM36.2759 7.60125L29.1587 25.6814L36.6027 28.6118L43.7199 10.5316L36.2759 7.60125ZM50.8366 25.6799L43.7199 7.60125L36.2759 10.5316L43.3925 28.6102L50.8366 25.6799ZM59.7475 28.3561L48.7318 23.4866L45.4973 30.8035L56.513 35.6731L59.7475 28.3561ZM68.5748 16.5167L55.3686 29.121L60.892 34.9082L74.0983 22.3039L68.5748 16.5167Z"
            fill="currentColor"
          />
          <path
            d="M14.5342 61.1718C14.5342 59.3861 15.7495 57.8296 17.4819 57.3965C32.3546 53.6783 47.9138 53.6783 62.7865 57.3965C64.5189 57.8296 65.7342 59.3861 65.7342 61.1718V66.2914C65.7342 68.6493 63.5183 70.3794 61.2308 69.8076C47.3795 66.3447 32.8888 66.3447 19.0375 69.8076C16.7501 70.3794 14.5342 68.6493 14.5342 66.2915V61.1718Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M71.3366 19.4103L67.0368 35.9518L67.0372 35.952L66.2623 38.9334L61.5417 57.0941C47.3779 53.7587 32.6291 53.7787 18.4724 57.154L8.66211 19.413L21.8665 32.0155L32.8807 27.1466L39.9979 9.06641L47.1146 27.145L58.1303 32.0146L71.3366 19.4103Z"
            fill="#F2C94C"
          />
          <path
            d="M67.0368 35.9518L65.1011 35.4487C64.8552 36.3949 65.3294 37.3802 66.2223 37.7784L67.0368 35.9518ZM71.3366 19.4103L73.2722 19.9135C73.4971 19.0484 73.1207 18.1392 72.3502 17.6862C71.5798 17.2332 70.6023 17.3464 69.9557 17.9635L71.3366 19.4103ZM67.0372 35.952L68.9729 36.4551C69.2189 35.5089 68.7447 34.5236 67.8518 34.1254L67.0372 35.952ZM66.2623 38.9334L68.198 39.4366V39.4366L66.2623 38.9334ZM61.5417 57.0941L61.0833 59.0408C62.1409 59.2899 63.204 58.6489 63.4774 57.5972L61.5417 57.0941ZM18.4724 57.154L16.5367 57.6572C16.8106 58.7109 17.8771 59.352 18.9362 59.0995L18.4724 57.154ZM8.66211 19.413L10.043 17.9662C9.39641 17.3491 8.4189 17.2359 7.64843 17.6889C6.87796 18.1419 6.50158 19.0511 6.72643 19.9161L8.66211 19.413ZM21.8665 32.0155L20.4857 33.4623C21.0709 34.0209 21.9351 34.1718 22.6751 33.8447L21.8665 32.0155ZM32.8807 27.1466L33.6893 28.9758C34.1708 28.763 34.5489 28.369 34.7417 27.8792L32.8807 27.1466ZM39.9979 9.06641L41.8589 8.33383C41.5579 7.56913 40.8198 7.06641 39.9979 7.06641C39.1761 7.06641 38.438 7.56913 38.1369 8.33383L39.9979 9.06641ZM47.1146 27.145L45.2536 27.8776C45.4464 28.3674 45.8245 28.7615 46.3059 28.9743L47.1146 27.145ZM58.1303 32.0146L57.3217 33.8439C58.0617 34.171 58.9258 34.02 59.5111 33.4614L58.1303 32.0146ZM68.9725 36.455L73.2722 19.9135L69.4009 18.9072L65.1011 35.4487L68.9725 36.455ZM67.8518 34.1254L67.8514 34.1252L66.2223 37.7784L66.2227 37.7786L67.8518 34.1254ZM68.198 39.4366L68.9729 36.4551L65.1016 35.4489L64.3266 38.4303L68.198 39.4366ZM63.4774 57.5972L68.198 39.4366L64.3266 38.4303L59.606 56.5909L63.4774 57.5972ZM18.9362 59.0995C32.7898 55.7964 47.2228 55.7769 61.0833 59.0408L62.0001 55.1473C47.5331 51.7405 32.4684 51.7609 18.0085 55.2085L18.9362 59.0995ZM6.72643 19.9161L16.5367 57.6572L20.408 56.6509L10.5978 18.9098L6.72643 19.9161ZM23.2474 30.5687L10.043 17.9662L7.28125 20.8598L20.4857 33.4623L23.2474 30.5687ZM32.0721 25.3174L21.0579 30.1862L22.6751 33.8447L33.6893 28.9758L32.0721 25.3174ZM38.1369 8.33383L31.0197 26.414L34.7417 27.8792L41.8589 9.79899L38.1369 8.33383ZM48.9756 26.4125L41.8589 8.33383L38.1369 9.79899L45.2536 27.8776L48.9756 26.4125ZM58.9389 30.1854L47.9232 25.3158L46.3059 28.9743L57.3217 33.8439L58.9389 30.1854ZM69.9557 17.9635L56.7494 30.5678L59.5111 33.4614L72.7174 20.8571L69.9557 17.9635Z"
            fill="#F2994A"
          />
          <path
            d="M14.5342 59.695C14.5342 58.7772 15.1588 57.9773 16.0491 57.7547L28.4925 54.6438C36.136 52.7329 44.1324 52.7329 51.7759 54.6438L64.2193 57.7547C65.1096 57.9773 65.7342 58.7772 65.7342 59.695V68.3718C65.7342 69.673 64.5114 70.6277 63.2491 70.3121L51.7759 67.4438C44.1324 65.5329 36.136 65.5329 28.4925 67.4438L17.0193 70.3121C15.757 70.6277 14.5342 69.673 14.5342 68.3718V59.695Z"
            fill="#EB5757"
            stroke="#EB5757"
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
            d="M71.3366 19.4103L61.5439 57.0856L51.7752 54.6434C44.1317 52.7325 36.1353 52.7325 28.4918 54.6434L18.471 57.1486L8.66211 19.413L21.8665 32.0155L32.8807 27.1466L39.9979 9.06641L47.1146 27.145L58.1303 32.0146L71.3366 19.4103Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M14.5347 59.6948C14.5347 58.777 15.1593 57.9771 16.0496 57.7545L28.493 54.6436C36.1365 52.7328 44.1329 52.7328 51.7764 54.6436L64.2198 57.7545C65.1101 57.9771 65.7347 58.777 65.7347 59.6948V68.3717C65.7347 69.6728 64.5119 70.6275 63.2496 70.3119L51.7764 67.4436C44.1329 65.5328 36.1365 65.5328 28.493 67.4436L17.0198 70.3119C15.7575 70.6275 14.5347 69.6728 14.5347 68.3717V59.6948Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M71.3366 19.4103L61.5439 57.0856L51.7752 54.6434C44.1317 52.7325 36.1353 52.7325 28.4918 54.6434L18.471 57.1486L8.66211 19.413L21.8665 32.0155L32.8807 27.1466L39.9979 9.06641L47.1146 27.145L58.1303 32.0146L71.3366 19.4103Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M14.5347 59.6948C14.5347 58.777 15.1593 57.9771 16.0496 57.7545L28.493 54.6436C36.1365 52.7328 44.1329 52.7328 51.7764 54.6436L64.2198 57.7545C65.1101 57.9771 65.7347 58.777 65.7347 59.6948V68.3717C65.7347 69.6728 64.5119 70.6275 63.2496 70.3119L51.7764 67.4436C44.1329 65.5328 36.1365 65.5328 28.493 67.4436L17.0198 70.3119C15.7575 70.6275 14.5347 69.6728 14.5347 68.3717V59.6948Z"
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
            d="M41.8586 8.33383C41.5576 7.56913 40.8194 7.06641 39.9976 7.06641C39.1758 7.06641 38.4376 7.56913 38.1366 8.33383L31.3203 25.6495L22.2801 29.6458L10.0426 17.9662C9.39609 17.3491 8.41858 17.2359 7.64811 17.6889C6.87764 18.1419 6.50126 19.0511 6.72611 19.9161L16.0486 55.7806C13.9414 56.7087 12.5344 58.8075 12.5344 61.1717V66.2913C12.5344 69.9503 15.973 72.6351 19.5228 71.7477C33.0556 68.3645 47.2132 68.3645 60.746 71.7477C64.2957 72.6351 67.7344 69.9503 67.7344 66.2913V61.1717C67.7344 58.7172 66.2177 56.5486 63.9756 55.6794L68.9726 36.4551C68.9762 36.4413 68.9797 36.4274 68.983 36.4135L73.2719 19.9135C73.4968 19.0484 73.1204 18.1392 72.3499 17.6862C71.5794 17.2332 70.6019 17.3464 69.9554 17.9635L57.7161 29.6449L48.6743 25.648L41.8586 8.33383ZM59.0244 58.5811C59.7119 58.7263 60.3981 58.8796 61.0829 59.0408C61.0878 59.042 61.0927 59.0431 61.0976 59.0442C61.4994 59.1389 61.9008 59.2364 62.3016 59.3366C63.1436 59.5471 63.7344 60.3037 63.7344 61.1717V66.2913C63.7344 67.348 62.7413 68.1234 61.7161 67.8671C47.5463 64.3246 32.7224 64.3246 18.5527 67.8671C17.5275 68.1234 16.5344 67.348 16.5344 66.2913V61.1717C16.5344 60.3037 17.1251 59.5471 17.9672 59.3366C30.3874 56.2315 43.297 55.7762 55.8607 57.9707C56.9179 58.1554 57.9726 58.3589 59.0244 58.5811ZM60.0924 54.7187L65.0904 35.4906C65.0937 35.4766 65.0972 35.4626 65.1008 35.4487L67.6322 25.7102L59.5108 33.4614C58.9255 34.02 58.0613 34.171 57.3213 33.8439L46.3056 28.9743C45.8242 28.7615 45.446 28.3674 45.2532 27.8776L39.9976 14.5266L34.7414 27.8792C34.5486 28.369 34.1705 28.763 33.689 28.9758L22.6748 33.8447C21.9348 34.1718 21.0706 34.0209 20.4853 33.4623L12.3658 25.7129L19.9197 54.7735C31.6238 52.2359 43.6869 51.9279 55.4781 53.8496C56.813 54.0672 58.1443 54.3133 59.4713 54.588C59.6784 54.6309 59.8854 54.6744 60.0924 54.7187Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreCrown3 = forwardRef((props, ref) => {
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

CoreCrown3.displayName = 'CoreCrown3'

export default CoreCrown3
