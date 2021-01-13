
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <circle
            cx="40"
            cy="40"
            r="35"
            fill="#3C60A7"
          />
          <path
            d="M19.9182 37.2736C19.9117 35.2713 21.3926 34.019 23.0954 33.9799C23.5059 33.9751 23.9968 34.1729 24.407 34.3381C24.5574 34.3987 24.697 34.4549 24.8177 34.4952C25.2418 34.6387 25.3397 34.606 25.5158 34.6191C25.9007 34.6452 26.39 34.6256 26.4813 34.2278H26.9054L25.9072 37.6128H25.5158C25.3527 36.2757 24.8242 34.9973 23.6108 35.0104C22.9584 35.0234 22.306 35.2778 22.0972 36.1909C21.8428 37.2932 22.3973 37.9585 23.8196 39.3347C24.7395 40.2348 25.444 41.0044 25.4505 42.1458C25.4636 44.3438 23.689 45.5244 21.8819 45.5309C21.1147 45.5347 20.6693 45.3633 20.3059 45.2235C20.0422 45.1221 19.8218 45.0372 19.5528 45.0482C19.5138 45.0497 19.4682 45.0506 19.4179 45.0515C19.0308 45.0583 18.3643 45.0701 18.2545 45.4395H17.8305L18.9461 41.3892H19.3702C18.9657 43.0915 19.9899 44.5004 21.4578 44.5004C22.4495 44.5004 23.3694 43.6329 23.3955 43.0785C23.4373 41.9946 23.2469 41.8198 22.642 41.2644C22.3987 41.0411 22.0884 40.7563 21.6992 40.3261L21.5369 40.1462C20.7171 39.2395 19.9243 38.3627 19.9182 37.2736Z"
            fill="white"
          />
          <path
            d="M27.2382 35.1017L27.3621 34.4364H31.0742L30.8916 35.1017C30.2505 35.1017 30.2551 35.4445 30.2583 35.6863C30.2585 35.7028 30.2587 35.7189 30.2587 35.7344V40.75L30.3501 40.6913L32.7966 36.7388V35.7996C32.8031 35.2843 32.5552 35.1147 31.981 35.1017L32.105 34.4364H35.9151L35.7911 35.1017C35.2431 35.1017 35.0474 35.1147 35.0669 35.8257C35.0735 35.9692 35.0669 36.1518 35.0669 36.3409V40.5087L35.1257 40.6001L37.9375 36.0083C38.0614 35.7735 38.1006 35.6235 38.0875 35.4343C38.0663 35.0674 37.7327 35.0777 37.2036 35.094C37.0837 35.0977 36.9539 35.1017 36.8153 35.1017L36.9393 34.4364H40.3579L40.2078 35.1017C39.562 35.1147 39.3728 35.4279 39.1183 35.8844C39.1183 35.8844 33.5729 45.0352 33.312 45.433C33.051 45.8309 32.7966 45.433 32.7966 45.433L32.8292 38.6042V38.3955C32.8292 38.3955 28.8169 45.0417 28.569 45.4395C28.3212 45.8374 28.145 45.4395 28.145 45.4395V36.3409C28.145 35.1015 27.9086 35.1015 27.2585 35.1017H27.2382Z"
            fill="white"
          />
          <path
            d="M40.7494 35.1017L40.8733 34.4364H45.3031L45.153 35.1017C44.3571 35.1147 43.8287 35.1865 43.6134 35.917L41.4996 43.7177C41.4806 43.7834 41.4587 43.8451 41.4376 43.9043C41.394 44.0273 41.3539 44.1402 41.3496 44.259L41.3478 44.2939C41.3342 44.5577 41.3235 44.7618 42.0737 44.7743L41.9237 45.4395H37.4809L37.6048 44.7743C38.4333 44.7808 39.0531 44.5069 39.1771 43.9916L41.2647 36.2235C41.3365 35.9366 41.4278 35.7083 41.4148 35.5582C41.3822 35.2061 41.0625 35.0887 40.7494 35.1017Z"
            fill="white"
          />
          <path
            d="M45.7729 35.1017L45.9229 34.4364H53.569L52.7862 37.365H52.3621C52.4665 35.5648 51.7032 35.3561 50.4244 35.3691C50.3824 35.3699 50.3424 35.3704 50.3044 35.3709C49.6819 35.3789 49.5793 35.3802 49.3089 36.3084L48.6434 38.9694H49.0675C49.4002 38.9825 50.3266 38.9694 50.7637 37.8542L51.1877 37.9128L50.4049 41.1479H49.8895C49.8769 41.0603 49.8734 40.9561 49.8711 40.8361C49.8685 40.7061 49.8671 40.5576 49.8569 40.3913C49.8308 39.8956 49.5698 39.7782 48.6499 39.7847H48.4412L47.4756 43.1111C47.4315 43.3261 47.364 43.5738 47.3167 43.7476L47.2929 43.8351C47.0842 44.6308 47.5017 44.7743 48.5325 44.7743L48.3498 45.4395H43.633L43.8156 44.7743C44.4093 44.7547 44.8986 44.5395 45.0552 43.8351L47.0776 36.2823C47.1429 36.0083 47.0842 36.0866 47.1364 35.917C47.3576 35.2119 46.582 35.1582 45.9438 35.1141C45.8854 35.11 45.8281 35.106 45.7729 35.1017Z"
            fill="white"
          />
          <path
            d="M53.3603 37.365L54.1758 34.4364H61.7045L60.9216 37.365H60.4649C60.5627 35.9953 60.2496 35.3691 58.6839 35.3691L56.6288 43.1959C56.5855 43.3887 56.535 43.5649 56.4919 43.716C56.4635 43.8152 56.4381 43.9036 56.4201 43.9786C56.2961 44.4678 56.6875 44.8852 57.3269 44.8265L57.2029 45.433H52.2121L52.3621 44.7678L52.4088 44.7668C53.3459 44.7481 54.0868 44.7333 54.2345 43.4372L56.4396 35.3691C55.598 35.3691 55.063 35.5453 54.5672 35.9757C54.1239 36.371 54.0822 36.5187 53.8965 37.1765C53.8799 37.2351 53.8622 37.2977 53.843 37.365H53.3603Z"
            fill="white"
          />
          <path
            d="M34.6755 44.9243C34.7472 44.5264 35.0213 44.2004 35.2822 44.2004C35.5432 44.2004 35.7128 44.5264 35.6476 44.9243C35.5758 45.3222 35.3018 45.6483 35.0408 45.6483C34.7733 45.6483 34.6103 45.3222 34.6755 44.9243Z"
            fill="white"
          />
          <path
            d="M42.4129 44.9243C42.4847 44.5264 42.7587 44.2004 43.0197 44.2004C43.2806 44.2004 43.4503 44.5264 43.3851 44.9243C43.3133 45.3222 43.0392 45.6483 42.7783 45.6483C42.5108 45.6483 42.3477 45.3222 42.4129 44.9243Z"
            fill="white"
          />
          <path
            d="M49.0675 44.9243C49.1393 44.5264 49.4132 44.2004 49.6742 44.2004C49.9352 44.2004 50.0722 44.5264 50.0069 44.9243C49.9352 45.3222 49.6612 45.6483 49.4002 45.6483C49.1393 45.6483 49.0022 45.3222 49.0675 44.9243Z"
            fill="white"
          />
          <path
            d="M25.2744 44.9504C25.3397 44.5525 25.5875 44.2264 25.8485 44.2264C26.1095 44.2329 26.2791 44.5525 26.2138 44.9504C26.1421 45.3483 25.8681 45.6744 25.6071 45.6744C25.3461 45.6744 25.2092 45.3483 25.2744 44.9504Z"
            fill="white"
          />
          <path
            d="M57.9532 44.9504C58.0249 44.5525 58.299 44.2264 58.5599 44.2264C58.8209 44.2329 58.9905 44.5525 58.9252 44.9504C58.8535 45.3483 58.5795 45.6744 58.3185 45.6744C58.051 45.6744 57.888 45.3483 57.9532 44.9504Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30.2662 63.0368C33.3521 64.3413 36.6271 65 40 65C43.3729 65 46.6479 64.3347 49.7338 63.0238C52.7087 61.7649 55.3836 59.9648 57.6801 57.6689C59.9765 55.3731 61.7771 52.6989 63.0363 49.7247C64.341 46.6397 65 43.3655 65 39.9935C65 36.6215 64.341 33.3472 63.0363 30.2622C61.7771 27.2881 59.9765 24.6139 57.6801 22.318C55.3836 20.0222 52.7087 18.222 49.7338 16.9632C46.6479 15.6587 43.3729 15 40 15C36.6271 15 33.3521 15.6587 30.2662 16.9632C27.2847 18.222 24.6164 20.0352 22.3199 22.3311C20.0235 24.6269 18.2229 27.3011 16.9637 30.2753C15.659 33.3603 15 36.6345 15 40.0066C15 43.3785 15.659 46.6528 16.9637 49.7378C18.2229 52.7119 20.0235 55.3861 22.3199 57.682C24.6164 59.9778 27.2913 61.778 30.2662 63.0368ZM40.6133 63.5651V56.9514H48.0245C47.2742 57.9363 46.4392 58.8821 45.5193 59.7822C43.3142 61.9345 41.2526 63.1934 40.6133 63.5651ZM34.4872 59.7365C33.5869 58.856 32.7649 57.9233 32.0341 56.9514H39.3085V63.4999C38.5712 63.0694 36.5945 61.8106 34.4872 59.7365ZM36.9207 63.4933C31.8515 62.8411 27.1542 60.5779 23.4421 56.9514H30.4227C31.3361 58.269 32.4061 59.5213 33.6065 60.7018C34.846 61.9215 36.0334 62.8542 36.9207 63.4933ZM46.4001 60.741C47.62 59.5539 48.703 58.282 49.6359 56.9514H56.5514C52.8523 60.5648 48.1746 62.8281 43.1184 63.4869C44.0449 62.8216 45.1997 61.9084 46.4001 60.741ZM57.7975 55.647H50.4906C50.5036 55.621 50.5167 55.6013 50.5363 55.5753C51.8476 53.3968 52.7675 51.0749 53.2698 48.6617H62.0773C61.0791 51.1988 59.6373 53.5599 57.7975 55.647ZM48.9444 55.647H40.6133V48.6551H51.9324C51.4497 50.8205 50.6081 52.9142 49.4272 54.8774C49.2706 55.1382 49.1141 55.3926 48.9444 55.647ZM39.3085 55.647H31.1143C30.9917 55.4632 30.875 55.2764 30.7602 55.0906C30.704 54.9995 30.6482 54.9088 30.5923 54.8186C29.4376 52.8685 28.6156 50.8009 28.1459 48.6617H39.3085V55.647ZM29.5747 55.647H22.2025C20.3562 53.5599 18.9209 51.1988 17.9227 48.6551H26.815C27.3043 51.0423 28.2046 53.3447 29.4898 55.5035C29.5159 55.5557 29.5486 55.6013 29.5747 55.647ZM62.5404 47.3572H17.453C16.6962 45.0092 16.2983 42.5372 16.2983 40C16.2983 37.4759 16.6897 35.0169 17.4465 32.682H62.5535C63.3103 35.0105 63.7017 37.4759 63.7017 40C63.7017 42.5372 63.3038 45.0156 62.5404 47.3572ZM62.0903 31.371H53.0545C52.5652 28.9773 51.6714 26.6619 50.3862 24.49C50.3672 24.4662 50.3516 24.4389 50.337 24.4133C50.3316 24.4038 50.3263 24.3945 50.321 24.3856H57.8301C59.6699 26.4727 61.0986 28.8338 62.0903 31.371ZM51.7236 31.371H40.6133V24.379H48.7878C48.9505 24.6328 49.1145 24.8886 49.2641 25.1487C50.4253 27.1185 51.2539 29.2121 51.7236 31.371ZM39.3085 31.371H27.9697C28.4525 29.1991 29.3006 27.0988 30.4945 25.1226C30.6446 24.8748 30.8012 24.6335 30.9643 24.3856H39.3085V31.371ZM26.6323 31.371H17.9097C18.9014 28.8338 20.3301 26.4727 22.1699 24.3856H29.4246C29.4115 24.3987 29.405 24.4117 29.3985 24.4247C28.0611 26.6162 27.1346 28.9512 26.6323 31.371ZM56.5971 23.0811H49.4859C48.5661 21.7441 47.4961 20.4722 46.2957 19.2721C45.1083 18.0916 43.9666 17.1654 43.0467 16.4936C48.1485 17.1458 52.8719 19.4286 56.5971 23.0811ZM47.881 23.0811H40.6133V16.4349C41.3374 16.8654 43.2816 18.1242 45.3758 20.1983C46.2957 21.1179 47.1373 22.0767 47.881 23.0811ZM39.3085 23.0811H31.8972C32.6605 22.0832 33.5152 21.1179 34.4611 20.2113C36.5618 18.1699 38.5386 16.9241 39.3085 16.4741V23.0811ZM30.2792 23.0811H23.4029C27.1085 19.4482 31.7993 17.1719 36.862 16.5067C35.929 17.1719 34.7808 18.0785 33.5804 19.2395C32.3343 20.4461 31.2318 21.731 30.2792 23.0811Z"
            fill="white"
          />
        </>
      )
    case 'solid':
      return (
        <>
          <path
            d="M40.6133 56.9514V63.5651C41.2526 63.1934 43.3142 61.9345 45.5193 59.7822C46.4392 58.8821 47.2742 57.9363 48.0245 56.9514H40.6133Z"
            fill="currentColor"
          />
          <path
            d="M32.0341 56.9514C32.7649 57.9233 33.5869 58.856 34.4872 59.7365C36.5945 61.8106 38.5712 63.0694 39.3085 63.4999V56.9514H32.0341Z"
            fill="currentColor"
          />
          <path
            d="M23.4421 56.9514C27.1542 60.5779 31.8515 62.8411 36.9207 63.4933C36.0334 62.8542 34.846 61.9215 33.6065 60.7018C32.4061 59.5213 31.3361 58.269 30.4227 56.9514H23.4421Z"
            fill="currentColor"
          />
          <path
            d="M49.6359 56.9514C48.703 58.282 47.62 59.5539 46.4001 60.741C45.1997 61.9084 44.0449 62.8216 43.1184 63.4869C48.1746 62.8281 52.8523 60.5648 56.5514 56.9514H49.6359Z"
            fill="currentColor"
          />
          <path
            d="M50.4906 55.647H57.7975C59.6373 53.5599 61.0791 51.1988 62.0773 48.6617H53.2698C52.7675 51.0749 51.8476 53.3968 50.5363 55.5753C50.5167 55.6013 50.5036 55.621 50.4906 55.647Z"
            fill="currentColor"
          />
          <path
            d="M40.6133 55.647H48.9444C49.1141 55.3926 49.2706 55.1382 49.4272 54.8774C50.6081 52.9142 51.4497 50.8205 51.9324 48.6551H40.6133V55.647Z"
            fill="currentColor"
          />
          <path
            d="M31.1143 55.647H39.3085V48.6617H28.1459C28.6156 50.8009 29.4376 52.8685 30.5923 54.8186C30.6482 54.9088 30.704 54.9995 30.7602 55.0906C30.875 55.2764 30.9917 55.4632 31.1143 55.647Z"
            fill="currentColor"
          />
          <path
            d="M22.2025 55.647H29.5747C29.5704 55.6396 29.566 55.6322 29.5615 55.6248L29.5591 55.6209L29.5426 55.5943C29.5245 55.5655 29.5059 55.5358 29.4898 55.5035C28.2046 53.3447 27.3043 51.0423 26.815 48.6551H17.9227C18.9209 51.1988 20.3562 53.5599 22.2025 55.647Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.453 47.3572H62.5404C63.3038 45.0156 63.7017 42.5372 63.7017 40C63.7017 37.4759 63.3103 35.0105 62.5535 32.682H17.4465C16.6897 35.0169 16.2983 37.4759 16.2983 40C16.2983 42.5372 16.6962 45.0092 17.453 47.3572ZM19.9182 37.2736C19.9117 35.2713 21.3926 34.019 23.0954 33.9799C23.5057 33.9751 23.9962 34.1726 24.4063 34.3378L24.4079 34.3384C24.5579 34.3989 24.6972 34.455 24.8177 34.4952C25.1542 34.609 25.2853 34.612 25.4131 34.6149C25.4464 34.6156 25.4794 34.6164 25.5158 34.6191C25.9007 34.6452 26.39 34.6256 26.4813 34.2278H26.9054L25.9072 37.6128H25.5158C25.3527 36.2757 24.8242 34.9973 23.6108 35.0104C22.9584 35.0234 22.306 35.2778 22.0972 36.1909C21.8428 37.2932 22.3973 37.9585 23.8196 39.3347C24.7395 40.2348 25.444 41.0044 25.4505 42.1458C25.4636 44.3438 23.689 45.5244 21.8819 45.5309C21.1147 45.5347 20.6693 45.3633 20.3059 45.2235C20.0423 45.1221 19.8217 45.0372 19.5528 45.0482C19.5138 45.0497 19.4682 45.0506 19.4179 45.0515C19.0308 45.0583 18.3643 45.0701 18.2545 45.4395H17.8305L18.9461 41.3892H19.3702C18.9657 43.0915 19.9899 44.5004 21.4578 44.5004C22.4495 44.5004 23.3694 43.6329 23.3955 43.0785C23.4373 41.9946 23.2469 41.8198 22.642 41.2644C22.3987 41.0411 22.0884 40.7563 21.6992 40.3261L21.5369 40.1462C20.7171 39.2395 19.9243 38.3627 19.9182 37.2736ZM27.2382 35.1017L27.3621 34.4364H31.0742L30.8916 35.1017C30.2505 35.1017 30.2551 35.4445 30.2583 35.6862L30.2583 35.6876C30.2585 35.7037 30.2587 35.7193 30.2587 35.7344V40.75L30.3501 40.6913L32.7966 36.7388V35.7996C32.8031 35.2843 32.5552 35.1147 31.981 35.1017L32.105 34.4364H35.9151L35.7911 35.1017C35.2431 35.1017 35.0474 35.1147 35.0669 35.8257C35.0712 35.9198 35.0699 36.0307 35.0684 36.1493C35.0677 36.2112 35.0669 36.2762 35.0669 36.3409V40.5087L35.1257 40.6001L37.9375 36.0083C38.0614 35.7735 38.1006 35.6235 38.0875 35.4343C38.0663 35.0674 37.7327 35.0777 37.2036 35.094C37.0838 35.0977 36.9539 35.1017 36.8153 35.1017L36.9393 34.4364H40.3579L40.2078 35.1017C39.562 35.1147 39.3728 35.4279 39.1183 35.8844C39.1183 35.8844 33.5729 45.0352 33.312 45.433C33.051 45.8309 32.7966 45.433 32.7966 45.433L32.8292 38.6042V38.3955C32.8292 38.3955 28.8169 45.0417 28.569 45.4395C28.3212 45.8374 28.145 45.4395 28.145 45.4395V36.3409C28.145 35.1015 27.9086 35.1015 27.2585 35.1017H27.2382ZM40.8733 34.4364L40.7494 35.1017C41.0625 35.0887 41.3822 35.2061 41.4148 35.5582C41.4238 35.662 41.383 35.8031 41.3332 35.9751C41.3109 36.0519 41.2869 36.1349 41.2647 36.2235L39.1771 43.9916C39.0531 44.5069 38.4333 44.7808 37.6048 44.7743L37.4809 45.4395H41.9237L42.0737 44.7743C41.3236 44.7618 41.3342 44.5577 41.3478 44.2939L41.3496 44.259C41.3539 44.1402 41.394 44.0273 41.4376 43.9043C41.4587 43.8451 41.4806 43.7834 41.4996 43.7177L43.6134 35.917C43.8287 35.1865 44.3571 35.1147 45.153 35.1017L45.3031 34.4364H40.8733ZM45.7729 35.1017L45.9229 34.4364H53.569L52.7862 37.365H52.3621C52.4665 35.5648 51.7032 35.3561 50.4244 35.3691C50.3824 35.3699 50.3424 35.3704 50.3044 35.3709C49.6819 35.3789 49.5793 35.3802 49.3089 36.3084L48.6434 38.9694H49.0675C49.4002 38.9825 50.3266 38.9694 50.7637 37.8542L51.1877 37.9128L50.4049 41.1479H49.8895C49.8769 41.0603 49.8734 40.9561 49.8711 40.8361L49.8699 40.7746C49.8678 40.6599 49.8655 40.5319 49.8569 40.3913C49.8308 39.8956 49.5698 39.7782 48.6499 39.7847H48.4412L47.4756 43.1111C47.4315 43.3261 47.364 43.5738 47.3167 43.7476L47.2929 43.8351C47.0842 44.6308 47.5017 44.7743 48.5325 44.7743L48.3498 45.4395H43.633L43.8156 44.7743C44.4093 44.7547 44.8986 44.5395 45.0552 43.8351L47.0776 36.2823C47.1121 36.1376 47.112 36.0911 47.1119 36.0545C47.1118 36.0218 47.1118 35.997 47.1364 35.917C47.3576 35.2119 46.582 35.1582 45.9438 35.1141C45.8854 35.11 45.8281 35.106 45.7729 35.1017ZM54.1758 34.4364L53.3603 37.365H53.843L53.8728 37.2604L53.8965 37.1765C54.0822 36.5187 54.1239 36.371 54.5672 35.9757C55.063 35.5453 55.598 35.3691 56.4396 35.3691L54.2345 43.4372C54.0868 44.7332 53.3459 44.7481 52.4088 44.7668L52.3621 44.7678L52.2121 45.433H57.2029L57.3269 44.8265C56.6875 44.8852 56.2961 44.4678 56.4201 43.9786C56.4378 43.905 56.4625 43.8187 56.4902 43.7217L56.4924 43.714C56.5355 43.5634 56.5857 43.3878 56.6288 43.1959L58.6839 35.3691C60.2496 35.3691 60.5627 35.9953 60.4649 37.365H60.9216L61.7045 34.4364H54.1758ZM34.6755 44.9243C34.7472 44.5264 35.0213 44.2004 35.2822 44.2004C35.5432 44.2004 35.7128 44.5264 35.6476 44.9243C35.5758 45.3222 35.3018 45.6483 35.0408 45.6483C34.7733 45.6483 34.6103 45.3222 34.6755 44.9243ZM43.0197 44.2004C42.7587 44.2004 42.4847 44.5264 42.4129 44.9243C42.3477 45.3222 42.5108 45.6483 42.7783 45.6483C43.0392 45.6483 43.3133 45.3222 43.3851 44.9243C43.4503 44.5264 43.2806 44.2004 43.0197 44.2004ZM49.0675 44.9243C49.1393 44.5264 49.4132 44.2004 49.6742 44.2004C49.9352 44.2004 50.0722 44.5264 50.0069 44.9243C49.9352 45.3222 49.6612 45.6483 49.4002 45.6483C49.1393 45.6483 49.0022 45.3222 49.0675 44.9243ZM25.8485 44.2264C25.5875 44.2264 25.3397 44.5525 25.2744 44.9504C25.2092 45.3483 25.3461 45.6744 25.6071 45.6744C25.8681 45.6744 26.1421 45.3483 26.2138 44.9504C26.2791 44.5525 26.1095 44.2329 25.8485 44.2264ZM57.9532 44.9504C58.0249 44.5525 58.299 44.2264 58.5599 44.2264C58.8209 44.2329 58.9905 44.5525 58.9252 44.9504C58.8535 45.3483 58.5795 45.6744 58.3185 45.6744C58.051 45.6744 57.888 45.3483 57.9532 44.9504Z"
            fill="currentColor"
          />
          <path
            d="M53.0545 31.371H62.0903C61.0986 28.8338 59.6699 26.4727 57.8301 24.3856H50.321C50.3263 24.3945 50.3316 24.4038 50.337 24.4133C50.3516 24.4389 50.3672 24.4662 50.3862 24.49C51.6714 26.6619 52.5652 28.9773 53.0545 31.371Z"
            fill="currentColor"
          />
          <path
            d="M40.6133 31.371H51.7236C51.2539 29.2121 50.4253 27.1185 49.2641 25.1487C49.115 24.8894 48.9515 24.6344 48.7894 24.3815L48.7878 24.379H40.6133V31.371Z"
            fill="currentColor"
          />
          <path
            d="M27.9697 31.371H39.3085V24.3856H30.9643C30.8012 24.6335 30.6446 24.8748 30.4945 25.1226C29.3006 27.0988 28.4525 29.1991 27.9697 31.371Z"
            fill="currentColor"
          />
          <path
            d="M17.9097 31.371H26.6323C27.1346 28.9512 28.0611 26.6162 29.3985 24.4247C29.405 24.4117 29.4115 24.3987 29.4246 24.3856H22.1699C20.3301 26.4727 18.9014 28.8338 17.9097 31.371Z"
            fill="currentColor"
          />
          <path
            d="M49.4859 23.0811H56.5971C52.8719 19.4286 48.1485 17.1458 43.0467 16.4936C43.9666 17.1654 45.1083 18.0916 46.2957 19.2721C47.4961 20.4722 48.5661 21.7441 49.4859 23.0811Z"
            fill="currentColor"
          />
          <path
            d="M40.6133 23.0811H47.881C47.1373 22.0767 46.2957 21.1179 45.3758 20.1983C43.2816 18.1242 41.3374 16.8654 40.6133 16.4349V23.0811Z"
            fill="currentColor"
          />
          <path
            d="M31.8972 23.0811H39.3085V16.4741C38.5386 16.9241 36.5618 18.1699 34.4611 20.2113C33.5152 21.1179 32.6605 22.0832 31.8972 23.0811Z"
            fill="currentColor"
          />
          <path
            d="M23.4029 23.0811H30.2792C31.2318 21.731 32.3343 20.4461 33.5804 19.2395C34.7808 18.0785 35.929 17.1719 36.862 16.5067C31.7993 17.1719 27.1085 19.4482 23.4029 23.0811Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 75C59.33 75 75 59.33 75 40C75 20.67 59.33 5 40 5C20.67 5 5 20.67 5 40C5 59.33 20.67 75 40 75ZM40 65C36.6271 65 33.3521 64.3413 30.2662 63.0368C27.2913 61.778 24.6164 59.9778 22.3199 57.682C20.0235 55.3861 18.2229 52.7119 16.9637 49.7378C15.659 46.6528 15 43.3785 15 40.0066C15 36.6345 15.659 33.3603 16.9637 30.2753C18.2229 27.3011 20.0235 24.6269 22.3199 22.3311C24.6164 20.0352 27.2847 18.222 30.2662 16.9632C33.3521 15.6587 36.6271 15 40 15C43.3729 15 46.6479 15.6587 49.7338 16.9632C52.7087 18.222 55.3836 20.0222 57.6801 22.318C59.9765 24.6139 61.7771 27.2881 63.0363 30.2622C64.341 33.3472 65 36.6215 65 39.9935C65 43.3655 64.341 46.6397 63.0363 49.7247C61.7771 52.6989 59.9765 55.3731 57.6801 57.6689C55.3836 59.9648 52.7087 61.7649 49.7338 63.0238C46.6479 64.3347 43.3729 65 40 65Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M40.6133 56.9514V63.5651C41.2526 63.1934 43.3142 61.9345 45.5193 59.7822C46.4392 58.8821 47.2742 57.9363 48.0245 56.9514H40.6133Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M32.0341 56.9514C32.7649 57.9233 33.5869 58.856 34.4872 59.7365C36.5945 61.8106 38.5712 63.0694 39.3085 63.4999V56.9514H32.0341Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M23.4421 56.9514C27.1542 60.5779 31.8515 62.8411 36.9207 63.4933C36.0334 62.8542 34.846 61.9215 33.6065 60.7018C32.4061 59.5213 31.3361 58.269 30.4227 56.9514H23.4421Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M49.6359 56.9514C48.703 58.282 47.62 59.5539 46.4001 60.741C45.1997 61.9084 44.0449 62.8216 43.1184 63.4869C48.1746 62.8281 52.8523 60.5648 56.5514 56.9514H49.6359Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M50.4906 55.647H57.7975C59.6373 53.5599 61.0791 51.1988 62.0773 48.6617H53.2698C52.7675 51.0749 51.8476 53.3968 50.5363 55.5753C50.5167 55.6013 50.5036 55.621 50.4906 55.647Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40.6133 55.647H48.9444C49.1141 55.3926 49.2706 55.1382 49.4272 54.8774C50.6081 52.9142 51.4497 50.8205 51.9324 48.6551H40.6133V55.647Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M31.1143 55.647H39.3085V48.6617H28.1459C28.6156 50.8009 29.4376 52.8685 30.5923 54.8186C30.6482 54.9088 30.704 54.9995 30.7602 55.0906C30.875 55.2764 30.9917 55.4632 31.1143 55.647Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M22.2025 55.647H29.5747C29.5704 55.6396 29.566 55.6322 29.5615 55.6248L29.5591 55.6209L29.5426 55.5943C29.5245 55.5655 29.5059 55.5358 29.4898 55.5035C28.2046 53.3447 27.3043 51.0423 26.815 48.6551H17.9227C18.9209 51.1988 20.3562 53.5599 22.2025 55.647Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.453 47.3572H62.5404C63.3038 45.0156 63.7017 42.5372 63.7017 40C63.7017 37.4759 63.3103 35.0105 62.5535 32.682H17.4465C16.6897 35.0169 16.2983 37.4759 16.2983 40C16.2983 42.5372 16.6962 45.0092 17.453 47.3572ZM19.9182 37.2736C19.9117 35.2713 21.3926 34.019 23.0954 33.9799C23.5057 33.9751 23.9962 34.1726 24.4063 34.3378L24.4079 34.3384C24.5579 34.3989 24.6972 34.455 24.8177 34.4952C25.1542 34.609 25.2853 34.612 25.4131 34.6149C25.4464 34.6156 25.4794 34.6164 25.5158 34.6191C25.9007 34.6452 26.39 34.6256 26.4813 34.2278H26.9054L25.9072 37.6128H25.5158C25.3527 36.2757 24.8242 34.9973 23.6108 35.0104C22.9584 35.0234 22.306 35.2778 22.0972 36.1909C21.8428 37.2932 22.3973 37.9585 23.8196 39.3347C24.7395 40.2348 25.444 41.0044 25.4505 42.1458C25.4636 44.3438 23.689 45.5244 21.8819 45.5309C21.1147 45.5347 20.6693 45.3633 20.3059 45.2235C20.0423 45.1221 19.8217 45.0372 19.5528 45.0482C19.5138 45.0497 19.4682 45.0506 19.4179 45.0515C19.0308 45.0583 18.3643 45.0701 18.2545 45.4395H17.8305L18.9461 41.3892H19.3702C18.9657 43.0915 19.9899 44.5004 21.4578 44.5004C22.4495 44.5004 23.3694 43.6329 23.3955 43.0785C23.4373 41.9946 23.2469 41.8198 22.642 41.2644C22.3987 41.0411 22.0884 40.7563 21.6992 40.3261L21.5369 40.1462C20.7171 39.2395 19.9243 38.3627 19.9182 37.2736ZM27.2382 35.1017L27.3621 34.4364H31.0742L30.8916 35.1017C30.2505 35.1017 30.2551 35.4445 30.2583 35.6862L30.2583 35.6876C30.2585 35.7037 30.2587 35.7193 30.2587 35.7344V40.75L30.3501 40.6913L32.7966 36.7388V35.7996C32.8031 35.2843 32.5552 35.1147 31.981 35.1017L32.105 34.4364H35.9151L35.7911 35.1017C35.2431 35.1017 35.0474 35.1147 35.0669 35.8257C35.0712 35.9198 35.0699 36.0307 35.0684 36.1493C35.0677 36.2112 35.0669 36.2762 35.0669 36.3409V40.5087L35.1257 40.6001L37.9375 36.0083C38.0614 35.7735 38.1006 35.6235 38.0875 35.4343C38.0663 35.0674 37.7327 35.0777 37.2036 35.094C37.0838 35.0977 36.9539 35.1017 36.8153 35.1017L36.9393 34.4364H40.3579L40.2078 35.1017C39.562 35.1147 39.3728 35.4279 39.1183 35.8844C39.1183 35.8844 33.5729 45.0352 33.312 45.433C33.051 45.8309 32.7966 45.433 32.7966 45.433L32.8292 38.6042V38.3955C32.8292 38.3955 28.8169 45.0417 28.569 45.4395C28.3212 45.8374 28.145 45.4395 28.145 45.4395V36.3409C28.145 35.1015 27.9086 35.1015 27.2585 35.1017H27.2382ZM40.8733 34.4364L40.7494 35.1017C41.0625 35.0887 41.3822 35.2061 41.4148 35.5582C41.4238 35.662 41.383 35.8031 41.3332 35.9751C41.3109 36.0519 41.2869 36.1349 41.2647 36.2235L39.1771 43.9916C39.0531 44.5069 38.4333 44.7808 37.6048 44.7743L37.4809 45.4395H41.9237L42.0737 44.7743C41.3236 44.7618 41.3342 44.5577 41.3478 44.2939L41.3496 44.259C41.3539 44.1402 41.394 44.0273 41.4376 43.9043C41.4587 43.8451 41.4806 43.7834 41.4996 43.7177L43.6134 35.917C43.8287 35.1865 44.3571 35.1147 45.153 35.1017L45.3031 34.4364H40.8733ZM45.7729 35.1017L45.9229 34.4364H53.569L52.7862 37.365H52.3621C52.4665 35.5648 51.7032 35.3561 50.4244 35.3691C50.3824 35.3699 50.3424 35.3704 50.3044 35.3709C49.6819 35.3789 49.5793 35.3802 49.3089 36.3084L48.6434 38.9694H49.0675C49.4002 38.9825 50.3266 38.9694 50.7637 37.8542L51.1877 37.9128L50.4049 41.1479H49.8895C49.8769 41.0603 49.8734 40.9561 49.8711 40.8361L49.8699 40.7746C49.8678 40.6599 49.8655 40.5319 49.8569 40.3913C49.8308 39.8956 49.5698 39.7782 48.6499 39.7847H48.4412L47.4756 43.1111C47.4315 43.3261 47.364 43.5738 47.3167 43.7476L47.2929 43.8351C47.0842 44.6308 47.5017 44.7743 48.5325 44.7743L48.3498 45.4395H43.633L43.8156 44.7743C44.4093 44.7547 44.8986 44.5395 45.0552 43.8351L47.0776 36.2823C47.1121 36.1376 47.112 36.0911 47.1119 36.0545C47.1118 36.0218 47.1118 35.997 47.1364 35.917C47.3576 35.2119 46.582 35.1582 45.9438 35.1141C45.8854 35.11 45.8281 35.106 45.7729 35.1017ZM54.1758 34.4364L53.3603 37.365H53.843L53.8728 37.2604L53.8965 37.1765C54.0822 36.5187 54.1239 36.371 54.5672 35.9757C55.063 35.5453 55.598 35.3691 56.4396 35.3691L54.2345 43.4372C54.0868 44.7332 53.3459 44.7481 52.4088 44.7668L52.3621 44.7678L52.2121 45.433H57.2029L57.3269 44.8265C56.6875 44.8852 56.2961 44.4678 56.4201 43.9786C56.4378 43.905 56.4625 43.8187 56.4902 43.7217L56.4924 43.714C56.5355 43.5634 56.5857 43.3878 56.6288 43.1959L58.6839 35.3691C60.2496 35.3691 60.5627 35.9953 60.4649 37.365H60.9216L61.7045 34.4364H54.1758ZM34.6755 44.9243C34.7472 44.5264 35.0213 44.2004 35.2822 44.2004C35.5432 44.2004 35.7128 44.5264 35.6476 44.9243C35.5758 45.3222 35.3018 45.6483 35.0408 45.6483C34.7733 45.6483 34.6103 45.3222 34.6755 44.9243ZM43.0197 44.2004C42.7587 44.2004 42.4847 44.5264 42.4129 44.9243C42.3477 45.3222 42.5108 45.6483 42.7783 45.6483C43.0392 45.6483 43.3133 45.3222 43.3851 44.9243C43.4503 44.5264 43.2806 44.2004 43.0197 44.2004ZM49.0675 44.9243C49.1393 44.5264 49.4132 44.2004 49.6742 44.2004C49.9352 44.2004 50.0722 44.5264 50.0069 44.9243C49.9352 45.3222 49.6612 45.6483 49.4002 45.6483C49.1393 45.6483 49.0022 45.3222 49.0675 44.9243ZM25.8485 44.2264C25.5875 44.2264 25.3397 44.5525 25.2744 44.9504C25.2092 45.3483 25.3461 45.6744 25.6071 45.6744C25.8681 45.6744 26.1421 45.3483 26.2138 44.9504C26.2791 44.5525 26.1095 44.2329 25.8485 44.2264ZM57.9532 44.9504C58.0249 44.5525 58.299 44.2264 58.5599 44.2264C58.8209 44.2329 58.9905 44.5525 58.9252 44.9504C58.8535 45.3483 58.5795 45.6744 58.3185 45.6744C58.051 45.6744 57.888 45.3483 57.9532 44.9504Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M53.0545 31.371H62.0903C61.0986 28.8338 59.6699 26.4727 57.8301 24.3856H50.321C50.3263 24.3945 50.3316 24.4038 50.337 24.4133C50.3516 24.4389 50.3672 24.4662 50.3862 24.49C51.6714 26.6619 52.5652 28.9773 53.0545 31.371Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40.6133 31.371H51.7236C51.2539 29.2121 50.4253 27.1185 49.2641 25.1487C49.115 24.8894 48.9515 24.6344 48.7894 24.3815L48.7878 24.379H40.6133V31.371Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M27.9697 31.371H39.3085V24.3856H30.9643C30.8012 24.6335 30.6446 24.8748 30.4945 25.1226C29.3006 27.0988 28.4525 29.1991 27.9697 31.371Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M17.9097 31.371H26.6323C27.1346 28.9512 28.0611 26.6162 29.3985 24.4247C29.405 24.4117 29.4115 24.3987 29.4246 24.3856H22.1699C20.3301 26.4727 18.9014 28.8338 17.9097 31.371Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M49.4859 23.0811H56.5971C52.8719 19.4286 48.1485 17.1458 43.0467 16.4936C43.9666 17.1654 45.1083 18.0916 46.2957 19.2721C47.4961 20.4722 48.5661 21.7441 49.4859 23.0811Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M40.6133 23.0811H47.881C47.1373 22.0767 46.2957 21.1179 45.3758 20.1983C43.2816 18.1242 41.3374 16.8654 40.6133 16.4349V23.0811Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M31.8972 23.0811H39.3085V16.4741C38.5386 16.9241 36.5618 18.1699 34.4611 20.2113C33.5152 21.1179 32.6605 22.0832 31.8972 23.0811Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M23.4029 23.0811H30.2792C31.2318 21.731 32.3343 20.4461 33.5804 19.2395C34.7808 18.0785 35.929 17.1719 36.862 16.5067C31.7993 17.1719 27.1085 19.4482 23.4029 23.0811Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40 75C59.33 75 75 59.33 75 40C75 20.67 59.33 5 40 5C20.67 5 5 20.67 5 40C5 59.33 20.67 75 40 75ZM40 65C36.6271 65 33.3521 64.3413 30.2662 63.0368C27.2913 61.778 24.6164 59.9778 22.3199 57.682C20.0235 55.3861 18.2229 52.7119 16.9637 49.7378C15.659 46.6528 15 43.3785 15 40.0066C15 36.6345 15.659 33.3603 16.9637 30.2753C18.2229 27.3011 20.0235 24.6269 22.3199 22.3311C24.6164 20.0352 27.2847 18.222 30.2662 16.9632C33.3521 15.6587 36.6271 15 40 15C43.3729 15 46.6479 15.6587 49.7338 16.9632C52.7087 18.222 55.3836 20.0222 57.6801 22.318C59.9765 24.6139 61.7771 27.2881 63.0363 30.2622C64.341 33.3472 65 36.6215 65 39.9935C65 43.3655 64.341 46.6397 63.0363 49.7247C61.7771 52.6989 59.9765 55.3731 57.6801 57.6689C55.3836 59.9648 52.7087 61.7649 49.7338 63.0238C46.6479 64.3347 43.3729 65 40 65Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsSwift = forwardRef((props, ref) => {
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

BrandsSwift.displayName = 'BrandsSwift'

export default BrandsSwift
