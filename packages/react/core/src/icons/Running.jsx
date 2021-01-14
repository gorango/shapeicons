
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M38.3383 24.8379C40.391 24.1537 42.6102 24.1537 44.6629 24.8379L45.641 25.1639C48.8844 26.2451 51.3507 28.9083 52.18 32.2251L53.0325 35.6347C53.0862 35.8495 53.2792 36.0002 53.5006 36.0002H56.5006C58.7097 36.0002 60.5006 37.791 60.5006 40.0002C60.5006 42.2093 58.7097 44.0002 56.5006 44.0002H53.5006C50.3191 44.0002 47.4714 42.2304 46.0218 39.5219L44.6542 42.8198L46.1643 43.3644C51.0569 45.1288 53.7801 50.3491 52.4279 55.3713L50.363 63.0401C49.7887 65.1733 47.5938 66.437 45.4606 65.8626C43.3275 65.2882 42.0638 63.0933 42.6382 60.9602L44.703 53.2913C44.9735 52.2869 44.4288 51.2428 43.4503 50.89L36.535 48.3961C33.0294 47.1318 31.3531 43.1414 32.9042 39.7528L35.4272 34.241L30.7655 35.7949C28.6697 36.4935 26.4045 35.3608 25.7059 33.2651C25.0073 31.1693 26.1399 28.904 28.2357 28.2054L38.3383 24.8379Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M32.4804 41.0078L29.0732 48.6289C28.9723 48.8548 28.7479 49.0002 28.5005 49.0002H22.5005C20.2913 49.0002 18.5005 50.7911 18.5005 53.0002C18.5005 55.2094 20.2913 57.0002 22.5005 57.0002H28.5005C31.9031 57.0002 34.9878 55.0003 36.3766 51.894L37.7453 48.8324L36.536 48.3963C33.456 47.2856 31.788 44.0703 32.4804 41.0078Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M46.1551 24.8705C47.6373 25.5843 49.3639 25.5843 50.8461 24.8705C52.3283 24.1567 53.4048 22.8068 53.7709 21.203C54.1369 19.5991 53.7527 17.9158 52.727 16.6296C51.7013 15.3434 50.1457 14.5942 48.5006 14.5942C46.8555 14.5942 45.2999 15.3434 44.2742 16.6296C43.2484 17.9158 42.8642 19.5991 43.2303 21.203C43.5964 22.8068 44.6729 24.1567 46.1551 24.8705Z"
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
            d="M32.4804 41.0078L29.0732 48.6289C28.9723 48.8548 28.7479 49.0002 28.5005 49.0002H22.5005C20.2913 49.0002 18.5005 50.7911 18.5005 53.0002C18.5005 55.2094 20.2913 57.0002 22.5005 57.0002H28.5005C31.9031 57.0002 34.9878 55.0003 36.3766 51.894L37.7453 48.8324L36.536 48.3963C33.456 47.2856 31.788 44.0703 32.4804 41.0078Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M38.3383 24.8379C40.391 24.1537 42.6102 24.1537 44.6629 24.8379L45.641 25.1639C48.8844 26.2451 51.3507 28.9083 52.18 32.2251L53.0325 35.6347C53.0862 35.8495 53.2792 36.0002 53.5006 36.0002H56.5006C58.7097 36.0002 60.5006 37.791 60.5006 40.0002C60.5006 42.2093 58.7097 44.0002 56.5006 44.0002H53.5006C50.3191 44.0002 47.4714 42.2304 46.0218 39.5219L44.6542 42.8198L46.1643 43.3644C51.0569 45.1288 53.7801 50.3491 52.4279 55.3713L50.363 63.0401C49.7887 65.1733 47.5938 66.437 45.4606 65.8626C43.3275 65.2882 42.0638 63.0933 42.6382 60.9602L44.703 53.2913C44.9735 52.2869 44.4288 51.2428 43.4503 50.89L37.9964 48.9231L36.535 48.3961C33.0294 47.1318 31.3531 43.1414 32.9042 39.7528L35.4272 34.241L30.7655 35.7949C28.6697 36.4935 26.4045 35.3608 25.7059 33.2651C25.0073 31.1693 26.1399 28.904 28.2357 28.2054L38.3383 24.8379Z"
            fill="currentColor"
          />
          <path
            d="M46.155 24.8705C47.6372 25.5843 49.3638 25.5843 50.846 24.8705C52.3282 24.1567 53.4047 22.8068 53.7708 21.2029C54.1368 19.599 53.7526 17.9157 52.7269 16.6295C51.7012 15.3433 50.1456 14.5942 48.5005 14.5942C46.8554 14.5942 45.2998 15.3433 44.2741 16.6295C43.2483 17.9157 42.8641 19.599 43.2302 21.2029C43.5963 22.8068 44.6728 24.1567 46.155 24.8705Z"
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
            d="M32.4804 41.0078L29.0732 48.6289C28.9723 48.8548 28.7479 49.0002 28.5005 49.0002H22.5005C20.2913 49.0002 18.5005 50.7911 18.5005 53.0002C18.5005 55.2094 20.2913 57.0002 22.5005 57.0002H28.5005C31.9031 57.0002 34.9878 55.0003 36.3766 51.894L37.7453 48.8324L36.536 48.3963C33.456 47.2856 31.788 44.0703 32.4804 41.0078Z"
            fill="#F2C94C"
          />
          <path
            d="M29.0732 48.6289L28.6168 48.4248V48.4248L29.0732 48.6289ZM32.4804 41.0078L32.9681 41.1181L32.024 40.8037L32.4804 41.0078ZM36.3766 51.894L35.9201 51.69L36.3766 51.894ZM37.7453 48.8324L38.2018 49.0365L38.4216 48.5448L37.915 48.3621L37.7453 48.8324ZM36.536 48.3963L36.7057 47.926L36.536 48.3963ZM29.5297 48.833L32.9369 41.2119L32.024 40.8037L28.6168 48.4248L29.5297 48.833ZM28.5005 49.5002C28.9451 49.5002 29.3482 49.2389 29.5297 48.833L28.6168 48.4248C28.5963 48.4707 28.5507 48.5002 28.5005 48.5002V49.5002ZM22.5005 49.5002H28.5005V48.5002H22.5005V49.5002ZM19.0005 53.0002C19.0005 51.0672 20.5675 49.5002 22.5005 49.5002V48.5002C20.0152 48.5002 18.0005 50.5149 18.0005 53.0002H19.0005ZM22.5005 56.5002C20.5675 56.5002 19.0005 54.9332 19.0005 53.0002H18.0005C18.0005 55.4855 20.0152 57.5002 22.5005 57.5002V56.5002ZM28.5005 56.5002H22.5005V57.5002H28.5005V56.5002ZM35.9201 51.69C34.6119 54.6162 31.7059 56.5002 28.5005 56.5002V57.5002C32.1003 57.5002 35.3638 55.3844 36.833 52.0981L35.9201 51.69ZM37.2889 48.6284L35.9201 51.69L36.833 52.0981L38.2018 49.0365L37.2889 48.6284ZM37.915 48.3621L36.7057 47.926L36.3664 48.8667L37.5757 49.3028L37.915 48.3621ZM36.7057 47.926C33.8681 46.9027 32.3301 43.9399 32.9681 41.1181L31.9927 40.8975C31.2459 44.2007 33.0439 47.6685 36.3664 48.8667L36.7057 47.926Z"
            fill="#F2C94C"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M38.3383 24.8379C40.391 24.1537 42.6102 24.1537 44.6629 24.8379L45.641 25.1639C48.8844 26.2451 51.3507 28.9083 52.18 32.2251L53.0325 35.6347C53.0862 35.8495 53.2792 36.0002 53.5006 36.0002H56.5006C58.7097 36.0002 60.5006 37.791 60.5006 40.0002C60.5006 42.2093 58.7097 44.0002 56.5006 44.0002H53.5006C50.3191 44.0002 47.4714 42.2304 46.0218 39.5219L44.6542 42.8198L46.1643 43.3644C51.0569 45.1288 53.7801 50.3491 52.4279 55.3713L50.363 63.0401C49.7887 65.1733 47.5938 66.437 45.4606 65.8626C43.3275 65.2882 42.0638 63.0933 42.6382 60.9602L44.703 53.2913C44.9735 52.2869 44.4288 51.2428 43.4503 50.89L37.9964 48.9231L36.535 48.3961C33.0294 47.1318 31.3531 43.1414 32.9042 39.7528L35.4272 34.241L30.7655 35.7949C28.6697 36.4935 26.4045 35.3608 25.7059 33.2651C25.0073 31.1693 26.1399 28.904 28.2357 28.2054L38.3383 24.8379Z"
            fill="#F2C94C"
          />
          <path
            d="M44.6629 24.8379L44.821 24.3635V24.3635L44.6629 24.8379ZM38.3383 24.8379L38.1802 24.3635V24.3635L38.3383 24.8379ZM45.641 25.1639L45.4828 25.6382L45.641 25.1639ZM52.18 32.2251L51.695 32.3464L52.18 32.2251ZM53.0325 35.6347L52.5475 35.756L53.0325 35.6347ZM46.0218 39.5219L46.4626 39.2859L45.9644 38.355L45.5599 39.3303L46.0218 39.5219ZM44.6542 42.8198L44.1924 42.6283L43.9916 43.1124L44.4846 43.2902L44.6542 42.8198ZM46.1643 43.3644L46.3339 42.894L46.1643 43.3644ZM52.4279 55.3713L51.9451 55.2413L52.4279 55.3713ZM50.363 63.0401L49.8802 62.9101L50.363 63.0401ZM45.4606 65.8626L45.5906 65.3798L45.4606 65.8626ZM42.6382 60.9602L43.121 61.0902L42.6382 60.9602ZM44.703 53.2913L44.2202 53.1613V53.1613L44.703 53.2913ZM43.4503 50.89L43.6199 50.4196L43.4503 50.89ZM37.9964 48.9231L37.8268 49.3935L37.9964 48.9231ZM36.535 48.3961L36.7047 47.9257L36.535 48.3961ZM32.9042 39.7528L33.3588 39.961L32.9042 39.7528ZM35.4272 34.241L35.8819 34.4491L36.3608 33.4027L35.2691 33.7666L35.4272 34.241ZM30.7655 35.7949L30.6074 35.3205L30.7655 35.7949ZM25.7059 33.2651L25.2315 33.4232H25.2315L25.7059 33.2651ZM28.2357 28.2054L28.3938 28.6798L28.2357 28.2054ZM44.821 24.3635C42.6657 23.6451 40.3355 23.6451 38.1802 24.3635L38.4964 25.3122C40.4465 24.6622 42.5547 24.6622 44.5048 25.3122L44.821 24.3635ZM45.7991 24.6896L44.821 24.3635L44.5048 25.3122L45.4828 25.6382L45.7991 24.6896ZM52.6651 32.1038C51.7943 28.6212 49.2047 25.8248 45.7991 24.6896L45.4828 25.6382C48.5641 26.6653 50.9071 29.1954 51.695 32.3464L52.6651 32.1038ZM53.5176 35.5134L52.6651 32.1038L51.695 32.3464L52.5475 35.756L53.5176 35.5134ZM53.5006 35.5002C53.5086 35.5002 53.5157 35.5056 53.5176 35.5134L52.5475 35.756C52.6568 36.1933 53.0498 36.5002 53.5006 36.5002V35.5002ZM56.5006 35.5002H53.5006V36.5002H56.5006V35.5002ZM61.0006 40.0002C61.0006 37.5149 58.9859 35.5002 56.5006 35.5002V36.5002C58.4336 36.5002 60.0006 38.0672 60.0006 40.0002H61.0006ZM56.5006 44.5002C58.9859 44.5002 61.0006 42.4854 61.0006 40.0002H60.0006C60.0006 41.9331 58.4336 43.5002 56.5006 43.5002V44.5002ZM53.5006 44.5002H56.5006V43.5002H53.5006V44.5002ZM45.581 39.7578C47.1159 42.6258 50.1313 44.5002 53.5006 44.5002V43.5002C50.507 43.5002 47.8268 41.8349 46.4626 39.2859L45.581 39.7578ZM45.1161 43.0113L46.4837 39.7134L45.5599 39.3303L44.1924 42.6283L45.1161 43.0113ZM46.3339 42.894L44.8238 42.3495L44.4846 43.2902L45.9946 43.8347L46.3339 42.894ZM52.9107 55.5013C54.3306 50.228 51.4711 44.7467 46.3339 42.894L45.9946 43.8347C50.6426 45.5109 53.2297 50.4702 51.9451 55.2413L52.9107 55.5013ZM50.8458 63.1701L52.9107 55.5013L51.9451 55.2413L49.8802 62.9101L50.8458 63.1701ZM45.3306 66.3454C47.7304 66.9916 50.1997 65.5699 50.8458 63.1701L49.8802 62.9101C49.3777 64.7767 47.4571 65.8824 45.5906 65.3798L45.3306 66.3454ZM42.1554 60.8302C41.5092 63.23 42.9308 65.6992 45.3306 66.3454L45.5906 65.3798C43.7241 64.8772 42.6184 62.9567 43.121 61.0902L42.1554 60.8302ZM44.2202 53.1613L42.1554 60.8302L43.121 61.0902L45.1858 53.4213L44.2202 53.1613ZM43.2807 51.3603C44.0146 51.625 44.4231 52.408 44.2202 53.1613L45.1858 53.4213C45.5239 52.1658 44.8431 50.8607 43.6199 50.4196L43.2807 51.3603ZM37.8268 49.3935L43.2807 51.3603L43.6199 50.4196L38.166 48.4528L37.8268 49.3935ZM36.3654 48.8664L37.8268 49.3935L38.166 48.4528L36.7047 47.9257L36.3654 48.8664ZM32.4495 39.5447C30.7767 43.1992 32.5846 47.503 36.3654 48.8664L36.7047 47.9257C33.4742 46.7607 31.9294 43.0835 33.3588 39.961L32.4495 39.5447ZM34.9726 34.0329L32.4495 39.5447L33.3588 39.961L35.8819 34.4491L34.9726 34.0329ZM30.9236 36.2692L35.5853 34.7153L35.2691 33.7666L30.6074 35.3205L30.9236 36.2692ZM25.2315 33.4232C26.0174 35.7809 28.5659 37.0551 30.9236 36.2692L30.6074 35.3205C28.7736 35.9318 26.7915 34.9408 26.1802 33.1069L25.2315 33.4232ZM28.0776 27.7311C25.7198 28.517 24.4456 31.0654 25.2315 33.4232L26.1802 33.1069C25.5689 31.2731 26.56 29.291 28.3938 28.6798L28.0776 27.7311ZM38.1802 24.3635L28.0776 27.7311L28.3938 28.6798L38.4964 25.3122L38.1802 24.3635Z"
            fill="#F2C94C"
          />
          <path
            d="M46.155 24.8705C47.6372 25.5843 49.3638 25.5843 50.846 24.8705C52.3282 24.1567 53.4047 22.8068 53.7708 21.2029C54.1368 19.599 53.7526 17.9157 52.7269 16.6295C51.7012 15.3433 50.1456 14.5942 48.5005 14.5942C46.8554 14.5942 45.2998 15.3433 44.2741 16.6295C43.2483 17.9157 42.8641 19.599 43.2302 21.2029C43.5963 22.8068 44.6728 24.1567 46.155 24.8705Z"
            fill="#F2994A"
            stroke="#F2994A"
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
            d="M32.4804 41.0079L29.0732 48.6289C28.9723 48.8548 28.7479 49.0003 28.5005 49.0003H22.5005C20.2913 49.0003 18.5005 50.7911 18.5005 53.0003C18.5005 55.2094 20.2913 57.0003 22.5005 57.0003H28.5005C31.9031 57.0003 34.9878 55.0004 36.3766 51.8941L37.7453 48.8325L36.536 48.3964C33.456 47.2856 31.788 44.0703 32.4804 41.0079Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M38.3383 24.8379C40.391 24.1537 42.6102 24.1537 44.6629 24.8379L45.641 25.164C48.8844 26.2451 51.3507 28.9084 52.18 32.2252L53.0325 35.6348C53.0862 35.8495 53.2792 36.0002 53.5006 36.0002H56.5006C58.7097 36.0002 60.5006 37.7911 60.5006 40.0002C60.5006 42.2093 58.7097 44.0002 56.5006 44.0002H53.5006C50.3191 44.0002 47.4714 42.2304 46.0218 39.5219L44.6542 42.8199L46.1643 43.3644C51.0569 45.1289 53.7801 50.3492 52.4279 55.3713L50.363 63.0402C49.7887 65.1733 47.5938 66.437 45.4606 65.8626C43.3275 65.2883 42.0638 63.0934 42.6382 60.9602L44.703 53.2914C44.9735 52.2869 44.4288 51.2429 43.4503 50.89L36.535 48.3961C33.0294 47.1319 31.3531 43.1414 32.9042 39.7529L35.4272 34.241L30.7655 35.7949C28.6697 36.4935 26.4045 35.3609 25.7059 33.2651C25.0073 31.1693 26.1399 28.9041 28.2357 28.2055L38.3383 24.8379Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M46.155 24.8705C47.6372 25.5843 49.3638 25.5843 50.846 24.8705C52.3282 24.1567 53.4047 22.8068 53.7708 21.203C54.1368 19.5991 53.7526 17.9158 52.7269 16.6296C51.7012 15.3434 50.1456 14.5942 48.5005 14.5942C46.8554 14.5942 45.2998 15.3434 44.2741 16.6296C43.2483 17.9158 42.8641 19.5991 43.2302 21.203C43.5963 22.8068 44.6728 24.1567 46.155 24.8705Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M32.4804 41.0079L29.0732 48.6289C28.9723 48.8548 28.7479 49.0003 28.5005 49.0003H22.5005C20.2913 49.0003 18.5005 50.7911 18.5005 53.0003C18.5005 55.2094 20.2913 57.0003 22.5005 57.0003H28.5005C31.9031 57.0003 34.9878 55.0004 36.3766 51.8941L37.7453 48.8325L36.536 48.3964C33.456 47.2856 31.788 44.0703 32.4804 41.0079Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M38.3383 24.8379C40.391 24.1537 42.6102 24.1537 44.6629 24.8379L45.641 25.164C48.8844 26.2451 51.3507 28.9084 52.18 32.2252L53.0325 35.6348C53.0862 35.8495 53.2792 36.0002 53.5006 36.0002H56.5006C58.7097 36.0002 60.5006 37.7911 60.5006 40.0002C60.5006 42.2093 58.7097 44.0002 56.5006 44.0002H53.5006C50.3191 44.0002 47.4714 42.2304 46.0218 39.5219L44.6542 42.8199L46.1643 43.3644C51.0569 45.1289 53.7801 50.3492 52.4279 55.3713L50.363 63.0402C49.7887 65.1733 47.5938 66.437 45.4606 65.8626C43.3275 65.2883 42.0638 63.0934 42.6382 60.9602L44.703 53.2914C44.9735 52.2869 44.4288 51.2429 43.4503 50.89L36.535 48.3961C33.0294 47.1319 31.3531 43.1414 32.9042 39.7529L35.4272 34.241L30.7655 35.7949C28.6697 36.4935 26.4045 35.3609 25.7059 33.2651C25.0073 31.1693 26.1399 28.9041 28.2357 28.2055L38.3383 24.8379Z"
            stroke="currentColor"
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M46.155 24.8705C47.6372 25.5843 49.3638 25.5843 50.846 24.8705C52.3282 24.1567 53.4047 22.8068 53.7708 21.203C54.1368 19.5991 53.7526 17.9158 52.7269 16.6296C51.7012 15.3434 50.1456 14.5942 48.5005 14.5942C46.8554 14.5942 45.2998 15.3434 44.2741 16.6296C43.2483 17.9158 42.8641 19.5991 43.2302 21.203C43.5963 22.8068 44.6728 24.1567 46.155 24.8705Z"
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
            d="M51.5211 26.7619C51.5856 26.733 51.6499 26.7032 51.7137 26.6725C53.7443 25.6946 55.2191 23.8453 55.7206 21.648C56.2221 19.4507 55.6958 17.1447 54.2906 15.3826C52.8854 13.6205 50.7543 12.5942 48.5005 12.5942C46.2467 12.5942 44.1156 13.6205 42.7104 15.3826C41.3052 17.1447 40.7788 19.4507 41.2804 21.648C41.3328 21.8776 41.3958 22.1034 41.469 22.3248C40.1979 22.3282 38.9273 22.5334 37.7059 22.9406L27.6032 26.3081C24.4596 27.356 22.7606 30.7539 23.8085 33.8976C24.8564 37.0412 28.2543 38.7402 31.398 37.6923L31.6928 37.594L31.0856 38.9205C30.868 39.3958 30.6988 39.8802 30.5756 40.3682L27.6106 47.0003H22.5005C19.1868 47.0003 16.5005 49.6866 16.5005 53.0003C16.5005 56.314 19.1868 59.0003 22.5005 59.0003H28.5005C32.6919 59.0003 36.4917 56.5368 38.2024 52.7104L38.8134 51.3439L42.7718 52.7714L40.7069 60.4402C39.8454 63.64 41.7409 66.9323 44.9406 67.7939C48.1404 68.6554 51.4327 66.7599 52.2943 63.5602L54.3591 55.8913C55.3064 52.3733 54.5871 48.7743 52.6562 45.9664C52.9352 45.9888 53.2168 46.0002 53.5006 46.0002H56.5006C59.8143 46.0002 62.5006 43.3139 62.5006 40.0002C62.5006 36.6865 59.8143 34.0002 56.5006 34.0002H54.6854L54.1203 31.74C53.6524 29.8687 52.7503 28.1707 51.5211 26.7619ZM47.0228 23.0686C47.9566 23.5183 49.0444 23.5183 49.9782 23.0686C50.912 22.6189 51.5903 21.7684 51.8209 20.7579C52.0515 19.7474 51.8095 18.6869 51.1633 17.8766C50.517 17.0662 49.537 16.5942 48.5005 16.5942C47.464 16.5942 46.4839 17.0662 45.8377 17.8766C45.1915 18.6869 44.9494 19.7474 45.1801 20.7579C45.4107 21.7684 46.0889 22.6189 47.0228 23.0686ZM44.1288 49.0086L37.2145 46.515C35.1044 45.754 33.9564 43.5488 34.4312 41.4489C34.4968 41.1577 34.5931 40.8684 34.7227 40.5853L39.1617 30.888L30.1331 33.8976C29.0852 34.2469 27.9525 33.6805 27.6032 32.6327C27.2539 31.5848 27.8203 30.4521 28.8681 30.1028L38.9708 26.7353C40.6129 26.1879 42.3883 26.1879 44.0304 26.7353L45.0085 27.0613C47.6033 27.9262 49.5763 30.0568 50.2398 32.7103L51.0923 36.1199C51.3686 37.225 52.3615 38.0002 53.5006 38.0002H56.5006C57.6052 38.0002 58.5006 38.8956 58.5006 40.0002C58.5006 41.1048 57.6052 42.0002 56.5006 42.0002H53.5006C51.0704 42.0002 48.8932 40.6486 47.7851 38.5782L45.7922 34.8544L42.0038 43.9901L45.4858 45.2458C49.3999 46.6574 51.5785 50.8336 50.4967 54.8514L48.4318 62.5202C48.1446 63.5868 47.0472 64.2186 45.9806 63.9314C44.914 63.6442 44.2822 62.5468 44.5694 61.4802L46.6342 53.8114C47.1751 51.8025 46.0858 49.7144 44.1288 49.0086Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreRunning = forwardRef((props, ref) => {
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

CoreRunning.displayName = 'CoreRunning'

export default CoreRunning
