
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M49.0021 43.1721H55.1005C58.7537 43.1721 60.5832 38.7552 58 36.1721L40.7123 18.8844C38.6621 16.8341 35.3379 16.8341 33.2877 18.8844L16 36.1721C13.4168 38.7552 15.2463 43.1721 18.8995 43.1721L24.9999 43.1721C25.0311 46.6401 25.5892 50.1046 26.6742 53.4439C28.9085 60.3204 33.2624 66.313 39.1119 70.5629C44.9614 74.8128 52.0061 77.1018 59.2365 77.1018C61.5571 77.1018 63.8586 76.866 66.1076 76.4053C67.9193 76.0341 68.0095 73.5837 66.3994 72.6742C65.2692 72.0358 64.1721 71.3313 63.1142 70.5626C57.2647 66.3127 52.9108 60.3201 50.6765 53.4436C49.5915 50.1044 49.0334 46.64 49.0021 43.1721Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M53.0001 31.0002H55.1005C58.7537 31.0002 60.5832 26.5834 58 24.0002L40.7123 6.71249C38.6621 4.66224 35.3379 4.66224 33.2877 6.71249L16 24.0002C13.4168 26.5834 15.2463 31.0002 18.8995 31.0002H21.0001"
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
            d="M30.4593 15.8844L16.2773 30.0664C14.5615 28.6286 14.1541 25.8464 16 24.0005L33.2877 6.71283C35.3379 4.66258 38.6621 4.66258 40.7123 6.71283L58 24.0005C59.8459 25.8464 59.4386 28.6285 57.7228 30.0663L43.5408 15.8844C39.9285 12.2721 34.0717 12.272 30.4593 15.8844Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M49.0021 43.1718L55.1005 43.1718C58.7537 43.1718 60.5832 38.755 58 36.1718L40.7123 18.8841C38.6621 16.8339 35.3379 16.8339 33.2877 18.8841L16 36.1718C13.4168 38.755 15.2463 43.1718 18.8995 43.1718L24.9999 43.1718C25.0311 46.6399 25.5892 50.1044 26.6742 53.4437C28.9085 60.3201 33.2624 66.3128 39.1119 70.5627C44.9614 74.8126 52.0061 77.1016 59.2365 77.1016C61.5571 77.1016 63.8586 76.8658 66.1076 76.405C67.9193 76.0339 68.0095 73.5835 66.3994 72.6739C65.2692 72.0355 64.1721 71.331 63.1142 70.5624C57.2647 66.3125 52.9108 60.3198 50.6765 53.4433C49.5915 50.1041 49.0334 46.6398 49.0021 43.1718Z"
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
            d="M25 42.9999C25.0312 46.468 25.5893 49.9325 26.6743 53.2718C28.9086 60.1483 33.2625 66.1409 39.112 70.3908C44.9615 74.6407 52.0063 76.9297 59.2366 76.9297C61.5573 76.9297 63.8588 76.6939 66.1078 76.2332C67.9194 75.862 68.0097 73.4116 66.3995 72.5021C65.2693 71.8636 64.1723 71.1591 63.1143 70.3905C57.2648 66.1406 52.9109 60.1479 50.6766 53.2715C49.5917 49.9323 49.0335 46.4679 49.0023 42.9999L25 42.9999Z"
            fill="#56CCF2"
          />
          <path
            d="M25 42.9999L25 41.4999L23.4864 41.4999L23.5001 43.0134L25 42.9999ZM26.6743 53.2718L28.1009 52.8083L28.1009 52.8083L26.6743 53.2718ZM39.112 70.3908L39.9937 69.1773L39.9937 69.1773L39.112 70.3908ZM66.1078 76.2332L65.8067 74.7637L66.1078 76.2332ZM66.3995 72.5021L65.6617 73.8081L65.6617 73.8081L66.3995 72.5021ZM63.1143 70.3905L62.2326 71.604L62.2326 71.604L63.1143 70.3905ZM50.6766 53.2715L52.1032 52.8079L52.1032 52.8079L50.6766 53.2715ZM49.0023 42.9999L50.5022 42.9864L50.4888 41.4999L49.0023 41.4999L49.0023 42.9999ZM23.5001 43.0134C23.5326 46.6334 24.1152 50.2497 25.2478 53.7353L28.1009 52.8083C27.0635 49.6152 26.5298 46.3026 26.4999 42.9864L23.5001 43.0134ZM25.2478 53.7353C27.5799 60.9131 32.1246 67.1682 38.2304 71.6043L39.9937 69.1773C34.4005 65.1136 30.2373 59.3835 28.1009 52.8083L25.2478 53.7353ZM38.2304 71.6043C44.3361 76.0404 51.6895 78.4297 59.2366 78.4297L59.2366 75.4297C52.3231 75.4297 45.5869 73.241 39.9937 69.1773L38.2304 71.6043ZM59.2366 78.4297C61.6589 78.4297 64.0613 78.1836 66.4088 77.7026L65.8067 74.7637C63.6563 75.2042 61.4556 75.4297 59.2366 75.4297L59.2366 78.4297ZM66.4088 77.7026C68.0703 77.3623 68.9505 76.0131 69.034 74.662C69.1147 73.3555 68.4756 71.952 67.1373 71.196L65.6617 73.8081C65.9335 73.9616 66.0544 74.2382 66.0397 74.477C66.0327 74.5893 65.9976 74.6536 65.975 74.6817C65.9618 74.698 65.927 74.739 65.8067 74.7637L66.4088 77.7026ZM67.1373 71.196C66.0566 70.5856 65.0076 69.9119 63.996 69.177L62.2326 71.604C63.3369 72.4063 64.482 73.1417 65.6617 73.8081L67.1373 71.196ZM63.996 69.177C58.4028 65.1132 54.2396 59.3832 52.1032 52.8079L49.25 53.735C51.5822 60.9127 56.1269 67.1679 62.2326 71.604L63.996 69.177ZM52.1032 52.8079C51.0658 49.615 50.5321 46.3025 50.5022 42.9864L47.5023 43.0134C47.535 46.6333 48.1175 50.2495 49.25 53.735L52.1032 52.8079ZM49.0023 41.4999L25 41.4999L25 44.4999L49.0023 44.4999L49.0023 41.4999Z"
            fill="#56CCF2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M53.0001 31L55.1005 31C58.7537 31 60.5832 26.5832 58 24L40.7123 6.71231C38.6621 4.66206 35.3379 4.66206 33.2877 6.71231L16 24C13.4168 26.5832 15.2463 31 18.8995 31L21.0001 31L33.2878 18.7123C35.338 16.6621 38.6621 16.6621 40.7124 18.7123L53.0001 31Z"
            fill="#56CCF2"
          />
          <path
            d="M55.1005 31L55.1005 29.5L55.1005 31ZM53.0001 31L51.9394 32.0607C52.2207 32.342 52.6023 32.5 53.0001 32.5L53.0001 31ZM58 24L59.0607 22.9393L59.0607 22.9393L58 24ZM40.7123 6.71231L41.773 5.65165L40.7123 6.71231ZM33.2877 6.71231L34.3484 7.77297L33.2877 6.71231ZM16 24L17.0607 25.0607L17.0607 25.0607L16 24ZM21.0001 31L21.0001 32.5C21.3979 32.5 21.7794 32.342 22.0607 32.0607L21.0001 31ZM33.2878 18.7123L34.3484 19.773L33.2878 18.7123ZM40.7124 18.7123L39.6517 19.773L40.7124 18.7123ZM55.1005 29.5L53.0001 29.5L53.0001 32.5L55.1005 32.5L55.1005 29.5ZM56.9393 25.0607C58.5776 26.6989 57.4173 29.5 55.1005 29.5L55.1005 32.5C60.09 32.5 62.5888 26.4675 59.0607 22.9393L56.9393 25.0607ZM39.6517 7.77297L56.9393 25.0607L59.0607 22.9393L41.773 5.65165L39.6517 7.77297ZM34.3484 7.77297C35.8128 6.3085 38.1872 6.3085 39.6517 7.77297L41.773 5.65165C39.1369 3.01561 34.8631 3.01561 32.227 5.65165L34.3484 7.77297ZM17.0607 25.0607L34.3484 7.77297L32.227 5.65165L14.9393 22.9393L17.0607 25.0607ZM18.8995 29.5C16.5827 29.5 15.4224 26.6989 17.0607 25.0607L14.9393 22.9393C11.4112 26.4675 13.91 32.5 18.8995 32.5L18.8995 29.5ZM21.0001 29.5L18.8995 29.5L18.8995 32.5L21.0001 32.5L21.0001 29.5ZM22.0607 32.0607L34.3484 19.773L32.2271 17.6516L19.9394 29.9393L22.0607 32.0607ZM34.3484 19.773C35.8129 18.3085 38.1873 18.3085 39.6517 19.773L41.773 17.6516C39.137 15.0156 34.8631 15.0156 32.2271 17.6516L34.3484 19.773ZM39.6517 19.773L51.9394 32.0607L54.0607 29.9393L41.773 17.6516L39.6517 19.773Z"
            fill="#56CCF2"
          />
          <path
            d="M55.1005 43.1719L18.8995 43.1719C15.2463 43.1719 13.4168 38.755 16 36.1719L33.2877 18.8842C35.3379 16.8339 38.6621 16.8339 40.7123 18.8842L58 36.1719C60.5832 38.755 58.7537 43.1719 55.1005 43.1719Z"
            fill="#2F80ED"
          />
          <path
            d="M55.1005 43.1719L55.1005 41.6719L55.1005 43.1719ZM18.8995 43.1719L18.8995 44.6719L18.8995 43.1719ZM16 36.1719L17.0607 37.2325L17.0607 37.2325L16 36.1719ZM33.2877 18.8842L32.227 17.8235L33.2877 18.8842ZM40.7123 18.8842L41.773 17.8235L41.773 17.8235L40.7123 18.8842ZM58 36.1719L56.9393 37.2325L58 36.1719ZM55.1005 41.6719L18.8995 41.6719L18.8995 44.6719L55.1005 44.6719L55.1005 41.6719ZM18.8995 41.6719C16.5827 41.6719 15.4224 38.8708 17.0607 37.2325L14.9393 35.1112C11.4112 38.6393 13.91 44.6719 18.8995 44.6719L18.8995 41.6719ZM17.0607 37.2325L34.3484 19.9448L32.227 17.8235L14.9393 35.1112L17.0607 37.2325ZM34.3484 19.9448C35.8128 18.4804 38.1872 18.4804 39.6517 19.9448L41.773 17.8235C39.1369 15.1875 34.8631 15.1875 32.227 17.8235L34.3484 19.9448ZM39.6517 19.9448L56.9393 37.2325L59.0607 35.1112L41.773 17.8235L39.6517 19.9448ZM56.9393 37.2325C58.5776 38.8708 57.4173 41.6719 55.1005 41.6719L55.1005 44.6719C60.09 44.6719 62.5888 38.6393 59.0607 35.1112L56.9393 37.2325Z"
            fill="#2F80ED"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M53.0001 30.9997H55.1005C58.7537 30.9997 60.5832 26.5829 58 23.9997L40.7123 6.71201C38.6621 4.66175 35.3379 4.66175 33.2877 6.71201L16 23.9997C13.4168 26.5829 15.2463 30.9997 18.8995 30.9997H21.0001L33.2878 18.712C35.338 16.6618 38.6621 16.6618 40.7124 18.712L53.0001 30.9997Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M49.0023 43.1718H55.1007C58.7538 43.1718 60.5834 38.755 58.0002 36.1719L40.7125 18.8842C38.6622 16.8339 35.3381 16.8339 33.2879 18.8842L16.0002 36.1718C13.417 38.755 15.2465 43.1718 18.8997 43.1718L25 43.1718C25.0313 46.6399 25.5894 50.1044 26.6744 53.4437C28.9087 60.3202 33.2626 66.3128 39.1121 70.5627C44.9616 74.8126 52.0063 77.1016 59.2367 77.1016C61.5573 77.1016 63.8588 76.8658 66.1078 76.4051C67.9195 76.0339 68.0097 73.5835 66.3996 72.674C65.2694 72.0356 64.1723 71.331 63.1144 70.5624C57.2649 66.3125 52.911 60.3199 50.6767 53.4434C49.5917 50.1042 49.0336 46.6398 49.0023 43.1718Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M53.0001 30.9997H55.1005C58.7537 30.9997 60.5832 26.5829 58 23.9997L40.7123 6.71201C38.6621 4.66175 35.3379 4.66175 33.2877 6.71201L16 23.9997C13.4168 26.5829 15.2463 30.9997 18.8995 30.9997H21.0001L33.2878 18.712C35.338 16.6618 38.6621 16.6618 40.7124 18.712L53.0001 30.9997Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M49.0023 43.1718H55.1007C58.7538 43.1718 60.5834 38.755 58.0002 36.1719L40.7125 18.8842C38.6622 16.8339 35.3381 16.8339 33.2879 18.8842L16.0002 36.1718C13.417 38.755 15.2465 43.1718 18.8997 43.1718L25 43.1718C25.0313 46.6399 25.5894 50.1044 26.6744 53.4437C28.9087 60.3202 33.2626 66.3128 39.1121 70.5627C44.9616 74.8126 52.0063 77.1016 59.2367 77.1016C61.5573 77.1016 63.8588 76.8658 66.1078 76.4051C67.9195 76.0339 68.0097 73.5835 66.3996 72.674C65.2694 72.0356 64.1723 71.331 63.1144 70.5624C57.2649 66.3125 52.911 60.3199 50.6767 53.4434C49.5917 50.1042 49.0336 46.6398 49.0023 43.1718Z"
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
            d="M31.0455 11.6433C34.5492 9.7179 38.8286 9.71785 42.3324 11.6432M31.0455 11.6433L34.7268 7.962C35.8105 6.87829 37.5675 6.87829 38.6512 7.962L42.3324 11.6432M31.0455 11.6433L17.4393 25.2495M42.3324 11.6432L55.9388 25.2495M14.3767 31.4625C11.6738 29.1976 10.9527 24.7357 13.9389 21.7495L31.2266 4.46182C34.2434 1.44502 39.1346 1.44502 42.1514 4.46182L59.4391 21.7495C62.4253 24.7357 61.7042 29.1975 59.0014 31.4624C58.5785 31.8168 58.0693 32.007 57.554 32.0364L59.4393 33.9217C63.5816 38.064 60.6478 45.1467 54.7897 45.1468H51.2871C51.4962 47.5238 51.9737 49.883 52.7195 52.1785C54.7923 58.5579 58.8315 64.1173 64.2581 68.06C65.2397 68.7731 66.2574 69.4267 67.3059 70.0189C68.9909 70.9708 69.7983 72.7404 69.6962 74.394C69.5895 76.121 68.4462 77.8886 66.2936 78.3296C63.882 78.8237 61.414 79.0765 58.9257 79.0765C51.1727 79.0765 43.6187 76.6221 37.3463 72.0649C31.074 67.5078 26.4053 61.082 24.0095 53.7084C23.1021 50.9156 22.5383 48.041 22.3183 45.1467H18.5887C12.7305 45.1467 9.79677 38.064 13.9391 33.9217L15.8243 32.0365C15.309 32.0071 14.7997 31.8169 14.3767 31.4625ZM17.4393 37.4218C16.4153 38.4458 17.1405 40.1967 18.5887 40.1967L24.6891 40.1968C26.0473 40.1968 27.1517 41.2913 27.164 42.6495C27.1929 45.8669 27.7107 49.0809 28.7173 52.1788C30.7901 58.5582 34.8292 64.1176 40.2559 68.0603C45.6825 72.003 52.218 74.1265 58.9257 74.1265C60.5879 74.1265 62.2396 73.9961 63.8663 73.7399C63.0069 73.2178 62.1668 72.6591 61.3486 72.0646C55.0763 67.5075 50.4076 61.0817 48.0118 53.7081C46.8484 50.1275 46.2499 46.4127 46.2164 42.6941C46.2105 42.0338 46.4686 41.3985 46.9334 40.9296C47.3982 40.4606 48.0311 40.1968 48.6913 40.1968H54.7897C56.2379 40.1968 56.9631 38.4458 55.9391 37.4218L38.6514 20.1341C37.5677 19.0504 35.8107 19.0504 34.727 20.1341L17.4393 37.4218Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreArrowSolidCurveDouble = forwardRef((props, ref) => {
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

CoreArrowSolidCurveDouble.displayName = 'CoreArrowSolidCurveDouble'

export default CoreArrowSolidCurveDouble
