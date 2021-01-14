
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M60.7508 37.9344C63.4989 39.5165 65.5122 42.1301 66.334 45.1887C66.7764 46.8349 66.8563 48.5405 66.5882 50.1926C67.5707 50.6491 68.4757 51.2766 69.2565 52.0552C71.0102 53.8039 72.0005 56.1833 72.0005 58.6599C72.0005 61.1365 71.0102 63.5159 69.2565 65.2646C67.5033 67.0128 65.1238 67.9992 62.6479 67.9992H60.6094C60.6018 67.9998 60.5942 68.0001 60.5865 68.0001H35.4157C35.4129 68.0001 35.4101 68.0001 35.4073 68H33.3531C30.8772 68 28.4977 67.0136 26.7445 65.2654C24.9908 63.5167 24.0005 61.1372 24.0005 58.6607C24.0005 56.1841 24.9908 53.8047 26.7445 52.0559C28.158 50.6464 29.9787 49.7321 31.9288 49.4308C31.9726 49.1456 32.0315 48.8619 32.1056 48.5809C32.6612 46.4737 34.0414 44.66 35.9324 43.5714C37.8233 42.4828 40.0885 42.1976 42.1964 42.7715C42.7409 42.9197 43.2657 43.1222 43.7635 43.3736L44.3759 42.3158C45.9677 39.5665 48.5889 37.5603 51.6618 36.7392C54.7291 35.9197 58.0027 36.3522 60.7508 37.9344Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M35.0558 44.1551C33.5084 43.3758 32.1399 42.2527 31.0652 40.8521C29.19 38.4083 28.3624 35.3196 28.7644 32.2656C29.1665 29.2116 30.7653 26.4425 33.2091 24.5673C33.4945 24.3483 33.7886 24.1436 34.0905 23.9535C35.1631 23.278 35.1861 21.51 33.9293 21.3445C30.0424 20.8328 26.1115 21.8861 23.0011 24.2727C19.8908 26.6594 17.856 30.1838 17.3443 34.0707C16.8326 37.9576 17.8859 41.8886 20.2725 44.9989C22.4164 47.7929 25.4784 49.719 28.8965 50.4528"
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
            d="M21.7836 22.686C25.3148 19.9765 29.7776 18.7807 34.1904 19.3617C34.9975 19.4679 35.7097 19.861 36.2043 20.4865C36.6759 21.0828 36.8629 21.7768 36.8824 22.3947C36.9201 23.5891 36.3438 24.898 35.1563 25.6459C34.9064 25.8032 34.6629 25.9727 34.4266 26.154C32.4037 27.7063 31.0802 29.9986 30.7473 32.5267C30.4145 35.0548 31.0996 37.6116 32.6519 39.6346C32.6686 39.6563 32.6853 39.6779 32.702 39.6994C33.3447 40.5222 33.2462 41.701 32.476 42.4058C31.3224 43.4615 30.4007 44.7502 29.7734 46.1839C29.5646 46.661 29.1779 47.0379 28.6956 47.2344C27.3226 47.7936 26.0508 48.5991 24.9483 49.6218C24.2605 50.2599 23.2216 50.334 22.4501 49.8002C21.0298 48.8173 19.7568 47.6122 18.6858 46.2164C15.9763 42.6853 14.7805 38.2225 15.3614 33.8097C15.9424 29.3969 18.2525 25.3956 21.7836 22.686Z"
            fill="currentColor"
          />
          <path
            d="M60.751 37.9343C63.499 39.5164 65.5123 42.1301 66.3342 45.1886C66.7765 46.8348 66.8564 48.5404 66.5883 50.1925C67.5708 50.649 68.4758 51.2765 69.2566 52.0551C71.0103 53.8038 72.0006 56.1832 72.0006 58.6598C72.0006 61.1364 71.0103 63.5158 69.2566 65.2645C67.5034 67.0127 65.1239 67.9992 62.648 67.9992H60.6095C60.602 67.9997 60.5943 68 60.5866 68H35.4159C35.4131 68 35.4103 68 35.4075 67.9999H33.3532C30.8774 67.9999 28.4978 67.0135 26.7446 65.2653C24.9909 63.5166 24.0006 61.1371 24.0006 58.6606C24.0006 56.184 24.9909 53.8046 26.7446 52.0559C28.1581 50.6463 29.9788 49.732 31.9289 49.4307C31.9727 49.1455 32.0317 48.8618 32.1057 48.5808C32.6613 46.4736 34.0416 44.66 35.9325 43.5713C37.8234 42.4827 40.0886 42.1975 42.1965 42.7714C42.741 42.9196 43.2658 43.1221 43.7636 43.3735L44.376 42.3157C45.9678 39.5664 48.589 37.5602 51.662 36.7392C54.7292 35.9196 58.0029 36.3522 60.751 37.9343Z"
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
            d="M23.0011 24.2727C26.1114 21.8861 30.0424 20.8328 33.9294 21.3445C35.1861 21.51 35.1631 23.278 34.0905 23.9535C33.7886 24.1436 33.4945 24.3483 33.2091 24.5673C30.7653 26.4425 29.1665 29.2116 28.7644 32.2656C28.3624 35.3196 29.19 38.4083 31.0652 40.8521C32.1399 42.2528 33.5084 43.3758 35.0558 44.1551C33.6164 45.2548 32.5713 46.8147 32.1057 48.5808C32.0316 48.8618 31.9727 49.1455 31.9289 49.4307C30.8645 49.5952 29.8387 49.9423 28.8966 50.4528C25.4784 49.719 22.4164 47.7929 20.2725 44.9989C17.8859 41.8886 16.8326 37.9576 17.3443 34.0707C17.856 30.1838 19.8908 26.6594 23.0011 24.2727Z"
            fill="#F2C94C"
          />
          <path
            d="M33.9294 21.3445L34.1904 19.3616L34.1904 19.3616L33.9294 21.3445ZM23.0011 24.2727L21.7836 22.686L23.0011 24.2727ZM34.0905 23.9535L33.0247 22.2612L33.0247 22.2612L34.0905 23.9535ZM33.2091 24.5673L34.4266 26.154L34.4266 26.154L33.2091 24.5673ZM28.7644 32.2656L30.7473 32.5267L30.7473 32.5267L28.7644 32.2656ZM31.0652 40.8521L32.6519 39.6346H32.6519L31.0652 40.8521ZM35.0558 44.1551L36.2699 45.7444C36.8174 45.3261 37.1111 44.6555 37.0472 43.9695C36.9832 43.2835 36.5707 42.6787 35.9554 42.3688L35.0558 44.1551ZM32.1057 48.5808L30.1718 48.071V48.071L32.1057 48.5808ZM31.9289 49.4307L32.2343 51.4072C33.0966 51.274 33.773 50.5971 33.9056 49.7347L31.9289 49.4307ZM28.8966 50.4528L28.4768 52.4083C28.9432 52.5084 29.43 52.4385 29.8495 52.2112L28.8966 50.4528ZM20.2725 44.9989L18.6858 46.2164H18.6858L20.2725 44.9989ZM17.3443 34.0707L15.3614 33.8096V33.8096L17.3443 34.0707ZM34.1904 19.3616C29.7776 18.7807 25.3147 19.9765 21.7836 22.686L24.2187 25.8594C26.9082 23.7957 30.3073 22.8849 33.6683 23.3274L34.1904 19.3616ZM35.1563 25.6459C36.3437 24.898 36.9201 23.5891 36.8824 22.3947C36.8629 21.7767 36.6759 21.0828 36.2043 20.4865C35.7097 19.861 34.9975 19.4679 34.1904 19.3616L33.6683 23.3274C33.4895 23.3039 33.2458 23.1939 33.0668 22.9675C32.9109 22.7704 32.8867 22.5916 32.8844 22.5208C32.8813 22.4207 32.9098 22.3335 33.0247 22.2612L35.1563 25.6459ZM34.4266 26.154C34.6629 25.9727 34.9064 25.8032 35.1563 25.6459L33.0247 22.2612C32.6708 22.484 32.326 22.7239 31.9916 22.9806L34.4266 26.154ZM30.7473 32.5267C31.0802 29.9986 32.4037 27.7063 34.4266 26.154L31.9916 22.9805C29.127 25.1787 27.2529 28.4247 26.7816 32.0046L30.7473 32.5267ZM32.6519 39.6346C31.0996 37.6116 30.4145 35.0548 30.7473 32.5267L26.7816 32.0046C26.3103 35.5845 27.2804 39.205 29.4785 42.0696L32.6519 39.6346ZM35.9554 42.3688C34.6743 41.7237 33.5416 40.794 32.6519 39.6346L29.4785 42.0696C30.7383 43.7115 32.3425 45.028 34.1562 45.9414L35.9554 42.3688ZM34.0396 49.0907C34.3916 47.7555 35.1827 46.575 36.2699 45.7444L33.8417 42.5658C32.05 43.9345 30.7511 45.8738 30.1718 48.071L34.0396 49.0907ZM33.9056 49.7347C33.9389 49.5185 33.9835 49.3035 34.0396 49.0907L30.1718 48.071C30.0797 48.4202 30.0066 48.7726 29.9521 49.1267L33.9056 49.7347ZM29.8495 52.2112C30.5909 51.8094 31.3978 51.5365 32.2343 51.4072L31.6234 47.4542C30.3311 47.6539 29.0864 48.0751 27.9436 48.6944L29.8495 52.2112ZM18.6858 46.2164C21.1198 49.3885 24.5961 51.5751 28.4768 52.4083L29.3164 48.4974C26.3607 47.8629 23.713 46.1973 21.8592 43.7814L18.6858 46.2164ZM15.3614 33.8096C14.7804 38.2225 15.9763 42.6853 18.6858 46.2164L21.8592 43.7814C19.7955 41.0919 18.8847 37.6928 19.3272 34.3318L15.3614 33.8096ZM21.7836 22.686C18.2525 25.3956 15.9424 29.3968 15.3614 33.8096L19.3272 34.3318C19.7697 30.9707 21.5292 27.9232 24.2187 25.8594L21.7836 22.686Z"
            fill="#F2C94C"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M60.7508 37.9344C63.4989 39.5165 65.5122 42.1301 66.334 45.1887C66.7764 46.8349 66.8563 48.5405 66.5882 50.1926C67.5707 50.6491 68.4757 51.2766 69.2565 52.0552C71.0102 53.8039 72.0005 56.1833 72.0005 58.6599C72.0005 61.1365 71.0102 63.5159 69.2565 65.2646C67.5033 67.0128 65.1238 67.9992 62.6479 67.9992L60.6094 67.9992C60.6018 67.9998 60.5942 68.0001 60.5865 68.0001H35.4157C35.4129 68.0001 35.4101 68.0001 35.4074 68L33.3531 68C30.8772 68 28.4977 67.0136 26.7445 65.2654C24.9908 63.5167 24.0005 61.1372 24.0005 58.6607C24.0005 56.1841 24.9908 53.8047 26.7445 52.0559C28.158 50.6464 29.9787 49.7321 31.9288 49.4308C31.9726 49.1456 32.0315 48.8619 32.1056 48.5809C32.6612 46.4737 34.0414 44.66 35.9324 43.5714C37.8233 42.4828 40.0885 42.1976 42.1964 42.7715C42.7409 42.9197 43.2657 43.1222 43.7635 43.3736L44.3759 42.3158C45.9677 39.5665 48.5889 37.5603 51.6618 36.7392C54.7291 35.9197 58.0027 36.3522 60.7508 37.9344Z"
            fill="#9B51E0"
          />
          <path
            d="M66.334 45.1887L68.2655 44.6697V44.6697L66.334 45.1887ZM60.7508 37.9344L61.7487 36.2011V36.2011L60.7508 37.9344ZM66.5882 50.1926L64.614 49.8722C64.4705 50.7567 64.9328 51.6287 65.7454 52.0063L66.5882 50.1926ZM69.2565 52.0552L67.8443 53.4714V53.4714L69.2565 52.0552ZM69.2565 65.2646L67.8443 63.8484V63.8484L69.2565 65.2646ZM62.6479 67.9992V69.9992V67.9992ZM60.6094 67.9992V65.9992C60.5578 65.9992 60.5063 66.0012 60.455 66.0052L60.6094 67.9992ZM35.4074 68L35.4636 66.0008C35.4449 66.0003 35.4261 66 35.4074 66L35.4074 68ZM33.3531 68V70H33.3531L33.3531 68ZM26.7445 65.2654L28.1567 63.8492H28.1567L26.7445 65.2654ZM26.7445 52.0559L25.3323 50.6397L25.3323 50.6397L26.7445 52.0559ZM31.9288 49.4308L32.2342 51.4073C33.0965 51.274 33.7729 50.5972 33.9055 49.7348L31.9288 49.4308ZM32.1056 48.5809L34.0395 49.0907V49.0907L32.1056 48.5809ZM35.9324 43.5714L34.9345 41.8381L35.9324 43.5714ZM42.1964 42.7715L42.7217 40.8417L42.7217 40.8417L42.1964 42.7715ZM43.7635 43.3736L42.8618 45.1588C43.8082 45.6368 44.9631 45.2932 45.4943 44.3757L43.7635 43.3736ZM44.3759 42.3158L42.6451 41.3137V41.3137L44.3759 42.3158ZM51.6618 36.7392L51.1455 34.807H51.1455L51.6618 36.7392ZM68.2655 44.6697C67.3055 41.0969 64.9553 38.0472 61.7487 36.2011L59.7529 39.6676C62.0425 40.9858 63.7189 43.1634 64.4025 45.7077L68.2655 44.6697ZM68.5624 50.5129C68.8753 48.5841 68.7821 46.5923 68.2655 44.6697L64.4025 45.7077C64.7706 47.0775 64.8372 48.4969 64.614 49.8722L68.5624 50.5129ZM70.6687 50.639C69.7211 49.694 68.6228 48.9327 67.431 48.3788L65.7454 52.0063C66.5185 52.3655 67.2303 52.8592 67.8443 53.4714L70.6687 50.639ZM74.0005 58.6599C74.0005 55.6504 72.7976 52.7618 70.6687 50.639L67.8443 53.4714C69.2227 54.8459 70.0005 56.7162 70.0005 58.6599H74.0005ZM70.6687 66.6808C72.7976 64.5579 74.0005 61.6694 74.0005 58.6599H70.0005C70.0005 60.6035 69.2227 62.4738 67.8443 63.8484L70.6687 66.6808ZM62.6479 69.9992C65.6547 69.9992 68.5417 68.8018 70.6687 66.6808L67.8443 63.8484C66.4649 65.2238 64.5928 65.9992 62.6479 65.9992V69.9992ZM60.6094 69.9992L62.6479 69.9992V65.9992L60.6094 65.9992V69.9992ZM60.455 66.0052C60.4985 66.0018 60.5424 66.0001 60.5865 66.0001V70.0001C60.6459 70.0001 60.7051 69.9978 60.7638 69.9933L60.455 66.0052ZM60.5865 66.0001H35.4157V70.0001H60.5865V66.0001ZM35.4157 66.0001C35.432 66.0001 35.448 66.0003 35.4636 66.0008L35.3511 69.9992C35.3723 69.9998 35.3939 70.0001 35.4157 70.0001V66.0001ZM33.3531 70L35.4074 70L35.4074 66L33.3531 66L33.3531 70ZM25.3323 66.6816C27.4593 68.8026 30.3463 70 33.3531 70V66C31.4082 66 29.536 65.2246 28.1567 63.8492L25.3323 66.6816ZM22.0005 58.6607C22.0005 61.6701 23.2034 64.5587 25.3323 66.6816L28.1567 63.8492C26.7782 62.4746 26.0005 60.6043 26.0005 58.6607H22.0005ZM25.3323 50.6397C23.2034 52.7626 22.0005 55.6512 22.0005 58.6607H26.0005C26.0005 56.717 26.7782 54.8467 28.1567 53.4722L25.3323 50.6397ZM31.6233 47.4542C29.2565 47.82 27.0476 48.9293 25.3323 50.6397L28.1567 53.4722C29.2684 52.3636 30.7009 51.6442 32.2342 51.4073L31.6233 47.4542ZM30.1717 48.071C30.0796 48.4202 30.0065 48.7726 29.952 49.1267L33.9055 49.7348C33.9388 49.5186 33.9834 49.3036 34.0395 49.0907L30.1717 48.071ZM34.9345 41.8381C32.5776 43.195 30.8625 45.4508 30.1717 48.071L34.0395 49.0907C34.4598 47.4965 35.5053 46.1251 36.9302 45.3047L34.9345 41.8381ZM42.7217 40.8417C40.1051 40.1293 37.2911 40.4814 34.9345 41.8381L36.9302 45.3047C38.3554 44.4842 40.0719 44.2659 41.671 44.7012L42.7217 40.8417ZM44.6651 41.5883C44.0482 41.2768 43.3974 41.0256 42.7217 40.8417L41.671 44.7012C42.0844 44.8138 42.4832 44.9676 42.8618 45.1588L44.6651 41.5883ZM42.6451 41.3137L42.0326 42.3715L45.4943 44.3757L46.1067 43.3179L42.6451 41.3137ZM51.1455 34.807C47.5612 35.7647 44.5029 38.105 42.6451 41.3137L46.1067 43.3179C47.4326 41.028 49.6166 39.3559 52.1781 38.6715L51.1455 34.807ZM61.7487 36.2011C58.5428 34.3554 54.7247 33.8507 51.1455 34.807L52.1781 38.6715C54.7334 37.9887 57.4627 38.3491 59.7529 39.6676L61.7487 36.2011Z"
            fill="#9B51E0"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M23.0011 24.2727C26.1115 21.8861 30.0424 20.8328 33.9293 21.3445C35.1861 21.51 35.1631 23.278 34.0905 23.9535C33.7886 24.1436 33.4945 24.3483 33.2091 24.5673C30.7653 26.4425 29.1665 29.2116 28.7644 32.2656C28.3624 35.3196 29.19 38.4083 31.0652 40.8521C32.1399 42.2527 33.5084 43.3758 35.0558 44.1551C33.6164 45.2547 32.5714 46.8146 32.1057 48.5808C32.0316 48.8618 31.9727 49.1455 31.9289 49.4307C30.8645 49.5952 29.8387 49.9423 28.8965 50.4528C25.4784 49.719 22.4164 47.7929 20.2725 44.9989C17.8859 41.8886 16.8326 37.9576 17.3443 34.0707C17.856 30.1838 19.8908 26.6594 23.0011 24.2727Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M60.7509 37.9343C63.499 39.5164 65.5123 42.1301 66.3342 45.1886C66.7765 46.8348 66.8564 48.5404 66.5883 50.1925C67.5708 50.649 68.4758 51.2765 69.2566 52.0551C71.0103 53.8038 72.0006 56.1832 72.0006 58.6598C72.0006 61.1364 71.0103 63.5158 69.2566 65.2645C67.5034 67.0127 65.1239 67.9991 62.648 67.9991H60.6095C60.6019 67.9997 60.5943 68 60.5866 68H35.4159C35.4131 68 35.4103 68 35.4075 67.9999H33.3532C30.8773 67.9999 28.4978 67.0135 26.7446 65.2653C24.9909 63.5166 24.0006 61.1371 24.0006 58.6606C24.0006 56.184 24.9909 53.8046 26.7446 52.0559C28.1581 50.6463 29.9788 49.732 31.9289 49.4307C31.9727 49.1455 32.0316 48.8618 32.1057 48.5808C32.6613 46.4736 34.0416 44.66 35.9325 43.5713C37.8234 42.4827 40.0886 42.1975 42.1965 42.7714C42.741 42.9196 43.2658 43.1221 43.7636 43.3735L44.376 42.3157C45.9678 39.5664 48.589 37.5602 51.6619 36.7391C54.7292 35.9196 58.0029 36.3522 60.7509 37.9343Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M32.1057 48.5808C32.5714 46.8146 33.6164 45.2547 35.0558 44.1551C33.5084 43.3758 32.1399 42.2527 31.0652 40.8521C29.19 38.4083 28.3624 35.3196 28.7644 32.2656C29.1665 29.2116 30.7653 26.4425 33.2091 24.5673C33.4945 24.3483 33.7886 24.1436 34.0905 23.9535C35.1631 23.278 35.1861 21.51 33.9293 21.3445C30.0424 20.8328 26.1115 21.8861 23.0011 24.2727C19.8908 26.6594 17.856 30.1838 17.3443 34.0707C16.8326 37.9576 17.8859 41.8886 20.2725 44.9989C22.4164 47.7929 25.4784 49.719 28.8965 50.4528C29.8387 49.9423 30.8645 49.5952 31.9289 49.4307M32.1057 48.5808C32.0316 48.8618 31.9727 49.1455 31.9289 49.4307M32.1057 48.5808C32.6613 46.4736 34.0416 44.66 35.9325 43.5713C37.8234 42.4827 40.0886 42.1975 42.1965 42.7714C42.741 42.9196 43.2658 43.1221 43.7636 43.3735L44.376 42.3157C45.9678 39.5664 48.589 37.5602 51.6619 36.7391C54.7292 35.9196 58.0029 36.3522 60.7509 37.9343C63.499 39.5164 65.5123 42.1301 66.3342 45.1886C66.7765 46.8348 66.8564 48.5404 66.5883 50.1925C67.5708 50.649 68.4758 51.2765 69.2566 52.0551C71.0103 53.8038 72.0006 56.1832 72.0006 58.6598C72.0006 61.1364 71.0103 63.5158 69.2566 65.2645C67.5034 67.0127 65.1239 67.9991 62.648 67.9991H60.6095C60.6019 67.9997 60.5943 68 60.5866 68H35.4159C35.4131 68 35.4103 68 35.4075 67.9999H33.3532C30.8773 67.9999 28.4978 67.0135 26.7446 65.2653C24.9909 63.5166 24.0006 61.1371 24.0006 58.6606C24.0006 56.184 24.9909 53.8046 26.7446 52.0559C28.1581 50.6463 29.9788 49.732 31.9289 49.4307"
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
            d="M34.1904 19.3619C29.7776 18.7809 25.3148 19.9768 21.7836 22.6863C18.2525 25.3958 15.9424 29.3971 15.3614 33.8099C14.7805 38.2227 15.9763 42.6856 18.6858 46.2167C20.3258 48.354 22.4391 50.044 24.8304 51.174C23.0154 53.2345 22.0006 55.8966 22.0006 58.6608C22.0006 61.6703 23.2035 64.5589 25.3324 66.6818C27.4594 68.8028 30.3464 70.0002 33.3532 70.0002H35.3926L35.4159 70.0003H60.5866C60.6079 70.0003 60.6291 70 60.6503 69.9994H62.648C65.6548 69.9994 68.5418 68.802 70.6688 66.681C72.7977 64.5581 74.0006 61.6695 74.0006 58.6601C74.0006 55.6506 72.7977 52.762 70.6688 50.6391C70.0737 50.0457 69.4192 49.5246 68.7194 49.0819C68.8041 47.6097 68.6554 46.1201 68.2657 44.6699C67.3056 41.097 64.9554 38.0473 61.7488 36.2012C58.5429 34.3555 54.7248 33.8509 51.1457 34.8072C47.7204 35.7224 44.7754 37.9003 42.8995 40.8919C42.8405 40.8747 42.7813 40.858 42.7219 40.8419C40.1245 40.1348 37.3327 40.4764 34.9868 41.8085C34.1011 41.2244 33.31 40.4925 32.6519 39.6348C31.0996 37.6118 30.4145 35.0551 30.7473 32.527C31.0802 29.9988 32.4037 27.7065 34.4266 26.1542C34.6629 25.9729 34.9064 25.8035 35.1563 25.6461C36.3438 24.8983 36.9201 23.5893 36.8824 22.3949C36.8629 21.777 36.6759 21.083 36.2043 20.4867C35.7097 19.8612 34.9975 19.4682 34.1904 19.3619ZM36.2699 45.7446C35.2507 46.5233 34.4917 47.6095 34.1108 48.8424C34.0854 48.9246 34.0617 49.0074 34.0397 49.0909C33.9835 49.3037 33.9389 49.5187 33.9056 49.7349C33.773 50.5973 33.0966 51.2742 32.2344 51.4075C31.3979 51.5367 30.5909 51.8097 29.8495 52.2115C29.2328 52.5456 28.6617 52.9688 28.1568 53.4723C26.7784 54.8469 26.0006 56.7172 26.0006 58.6608C26.0006 60.6045 26.7784 62.4748 28.1568 63.8493C29.5362 65.2248 31.4083 66.0002 33.3532 66.0002H35.4075L35.4292 66.0003H60.55C60.5698 65.9997 60.5897 65.9994 60.6095 65.9994H62.648C64.5929 65.9994 66.4651 65.224 67.8444 63.8486C69.2229 62.474 70.0006 60.6037 70.0006 58.6601C70.0006 56.7164 69.2229 54.8461 67.8444 53.4716C67.2304 52.8593 66.5186 52.3657 65.7455 52.0065C64.9329 51.6288 64.4706 50.7569 64.6142 49.8724C64.8373 48.497 64.7708 47.0777 64.4027 45.7079C63.719 43.1636 62.0426 40.9859 59.7531 39.6678C57.4629 38.3493 54.7336 37.9889 52.1782 38.6716C49.6167 39.356 47.4327 41.0282 46.1069 43.3181L45.4944 44.3759C44.9632 45.2934 43.8083 45.6369 42.862 45.159C42.4834 44.9678 42.0845 44.8139 41.6711 44.7014C40.0721 44.2661 38.3556 44.4843 36.9304 45.3049C36.7 45.4375 36.4795 45.5846 36.2699 45.7446ZM31.903 44.5145C31.0021 43.8114 30.186 42.992 29.4785 42.0699C27.2804 39.2052 26.3103 35.5847 26.7816 32.0048C27.2359 28.5538 28.9939 25.4129 31.6862 23.2221C28.9975 23.2881 26.3791 24.2019 24.2187 25.8597C21.5292 27.9234 19.7697 30.971 19.3272 34.332C18.8847 37.693 19.7955 41.0922 21.8592 43.7816C23.5747 46.0172 25.97 47.6103 28.66 48.3385C29.178 48.1032 29.7134 47.9069 30.2617 47.7514C30.6131 46.5758 31.1722 45.4803 31.903 44.5145Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreNight = forwardRef((props, ref) => {
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

CoreNight.displayName = 'CoreNight'

export default CoreNight
