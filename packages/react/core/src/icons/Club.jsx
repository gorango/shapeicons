
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M46.1865 13.6244C42.4352 11.4585 37.8135 11.4585 34.0622 13.6244C30.3109 15.7902 28 19.7927 28 24.1244C28 27.6236 29.5081 30.908 32.0653 33.183C30.0625 31.7849 27.6494 30.9997 25.1244 30.9997C20.7927 30.9997 16.7902 33.3106 14.6244 37.0618C12.4585 40.8131 12.4585 45.4349 14.6244 49.1862C16.7902 52.9375 20.7927 55.2484 25.1244 55.2484C29.456 55.2484 33.4585 52.9375 35.6244 49.1862C35.8064 48.8709 35.9731 48.5495 36.1245 48.223V54.8197L34.6607 58.0019C34.4705 58.4153 34.234 58.8058 33.9558 59.1659L30.5913 63.5199C30.2887 63.9116 30.1245 64.3925 30.1245 64.8875C30.1245 66.1227 31.1259 67.124 32.3611 67.124H47.8879C49.1232 67.124 50.1245 66.1227 50.1245 64.8875C50.1245 64.3925 49.9603 63.9116 49.6577 63.5199L46.9376 59.9998C46.2311 59.0856 45.6308 58.0941 45.1479 57.0445L44.1245 54.8197V48.2237C44.2758 48.55 44.4425 48.8712 44.6244 49.1862C46.7902 52.9375 50.7927 55.2484 55.1244 55.2484C59.456 55.2484 63.4585 52.9375 65.6244 49.1862C67.7902 45.4349 67.7902 40.8131 65.6244 37.0618C63.4585 33.3106 59.456 30.9997 55.1244 30.9997C52.5994 30.9997 50.1862 31.7849 48.1834 33.1829C50.7407 30.908 52.2487 27.6236 52.2487 24.1244C52.2487 19.7927 49.9378 15.7902 46.1865 13.6244Z"
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
            d="M45.7103 15.7249C42.2404 13.7571 37.9918 13.7571 34.5219 15.7249L34.3701 15.811C30.9126 17.7718 28.7759 21.4398 28.7759 25.4147C28.7759 28.5357 30.0932 31.4675 32.3329 33.5323C30.5546 32.376 28.4528 31.7313 26.26 31.7313H25.9126C21.9639 31.7313 18.3103 33.8218 16.3094 37.226C14.2614 40.7103 14.2614 45.0306 16.3094 48.5149C18.3103 51.9191 21.9639 54.0096 25.9126 54.0096H26.26C30.2087 54.0096 33.8623 51.9191 35.8632 48.5149C36.051 48.1953 36.2216 47.8687 36.375 47.5364V53.6157L35.0126 56.525C34.8302 56.9143 34.604 57.2815 34.3382 57.6194L31.2013 61.6069C30.9174 61.9678 30.7631 62.4136 30.7631 62.8728C30.7631 64.0035 31.6797 64.9202 32.8105 64.9202H47.4221C48.5529 64.9202 49.4695 64.0035 49.4695 62.8728C49.4695 62.4136 49.3152 61.9678 49.0313 61.6069L46.4843 58.3692C45.8265 57.5331 45.2666 56.6244 44.8154 55.661L43.8576 53.6157V47.537C44.0109 47.8691 44.1814 48.1955 44.3691 48.5149C46.37 51.9191 50.0236 54.0096 53.9722 54.0096H54.3197C58.2684 54.0096 61.922 51.9191 63.9228 48.5149C65.9708 45.0306 65.9708 40.7103 63.9228 37.226C61.922 33.8218 58.2684 31.7313 54.3197 31.7313H53.9722C51.7795 31.7313 49.6777 32.376 47.8994 33.5323C50.1391 31.4675 51.4563 28.5357 51.4563 25.4147C51.4563 21.4398 49.3197 17.7718 45.8621 15.811L45.7103 15.7249Z"
            fill="currentColor"
          />
          <path
            d="M34.5219 15.7249L35.0152 16.5947V16.5947L34.5219 15.7249ZM45.7103 15.7249L45.217 16.5947L45.7103 15.7249ZM34.3701 15.811L33.8768 14.9411V14.9411L34.3701 15.811ZM32.3329 33.5323L31.7877 34.3707C32.2234 34.654 32.8035 34.5563 33.1225 34.1459C33.4414 33.7356 33.3928 33.1493 33.0107 32.7971L32.3329 33.5323ZM16.3094 37.226L15.4473 36.7193L16.3094 37.226ZM16.3094 48.5149L15.4473 49.0216H15.4473L16.3094 48.5149ZM35.8632 48.5149L36.7253 49.0216L36.7253 49.0216L35.8632 48.5149ZM36.375 47.5364L37.375 47.5364C37.375 47.0667 37.0482 46.6604 36.5895 46.5596C36.1308 46.4589 35.6638 46.6909 35.467 47.1173L36.375 47.5364ZM36.375 53.6157L37.2806 54.0398C37.3428 53.9071 37.375 53.7623 37.375 53.6157L36.375 53.6157ZM35.0126 56.525L34.1069 56.1009L35.0126 56.525ZM34.3382 57.6194L33.5522 57.0011L34.3382 57.6194ZM31.2013 61.6069L30.4154 60.9886L30.4153 60.9886L31.2013 61.6069ZM49.0313 61.6069L49.8172 60.9886L49.8172 60.9886L49.0313 61.6069ZM46.4843 58.3692L47.2702 57.7509V57.7509L46.4843 58.3692ZM44.8154 55.661L43.9098 56.0851H43.9098L44.8154 55.661ZM43.8576 53.6157H42.8576C42.8576 53.7623 42.8898 53.9071 42.952 54.0398L43.8576 53.6157ZM43.8576 47.537L44.7655 47.1179C44.5687 46.6915 44.1017 46.4595 43.643 46.5603C43.1844 46.6611 42.8576 47.0674 42.8576 47.537H43.8576ZM44.3691 48.5149L43.507 49.0216L43.507 49.0216L44.3691 48.5149ZM63.9228 48.5149L64.7849 49.0216L63.9228 48.5149ZM63.9228 37.226L64.7849 36.7193L63.9228 37.226ZM47.8994 33.5323L47.2216 32.7971C46.8395 33.1493 46.7909 33.7356 47.1098 34.1459C47.4287 34.5563 48.0088 34.6539 48.4445 34.3706L47.8994 33.5323ZM45.8621 15.811L46.3554 14.9411V14.9411L45.8621 15.811ZM35.0152 16.5947C38.1792 14.8005 42.0531 14.8004 45.217 16.5947L46.2036 14.855C42.4278 12.7137 37.8045 12.7137 34.0286 14.855L35.0152 16.5947ZM34.8634 16.6808L35.0152 16.5947L34.0286 14.855L33.8768 14.9411L34.8634 16.6808ZM29.7759 25.4147C29.7759 21.7999 31.7191 18.4641 34.8634 16.6808L33.8768 14.9411C30.1061 17.0795 27.7759 21.0798 27.7759 25.4147H29.7759ZM33.0107 32.7971C30.9738 30.9192 29.7759 28.2528 29.7759 25.4147H27.7759C27.7759 28.8186 29.2127 32.0158 31.6551 34.2675L33.0107 32.7971ZM32.878 32.6939C30.9403 31.434 28.6497 30.7313 26.26 30.7313L26.26 32.7313C28.2559 32.7313 30.1689 33.318 31.7877 34.3707L32.878 32.6939ZM26.26 30.7313H25.9126L25.9126 32.7313H26.26L26.26 30.7313ZM25.9126 30.7313C21.6094 30.7313 17.6278 33.0095 15.4473 36.7193L17.1715 37.7327C18.9928 34.6341 22.3184 32.7313 25.9126 32.7313L25.9126 30.7313ZM15.4473 36.7193C13.2155 40.5164 13.2155 45.2245 15.4473 49.0216L17.1715 48.0082C15.3074 44.8367 15.3074 40.9042 17.1715 37.7327L15.4473 36.7193ZM15.4473 49.0216C17.6278 52.7314 21.6094 55.0096 25.9126 55.0096V53.0096C22.3184 53.0096 18.9928 51.1068 17.1715 48.0082L15.4473 49.0216ZM25.9126 55.0096H26.26V53.0096H25.9126V55.0096ZM26.26 55.0096C30.5632 55.0096 34.5448 52.7314 36.7253 49.0216L35.0011 48.0082C33.1798 51.1068 29.8542 53.0096 26.26 53.0096V55.0096ZM36.7253 49.0216C36.9299 48.6735 37.1158 48.3176 37.283 47.9554L35.467 47.1173C35.3274 47.4198 35.1721 47.7172 35.0011 48.0082L36.7253 49.0216ZM37.375 53.6157V47.5364L35.375 47.5364V53.6157L37.375 53.6157ZM35.9182 56.9491L37.2806 54.0398L35.4694 53.1916L34.1069 56.1009L35.9182 56.9491ZM35.1241 58.2377C35.4371 57.8398 35.7035 57.4075 35.9182 56.9491L34.1069 56.1009C33.957 56.4211 33.7709 56.7232 33.5522 57.0011L35.1241 58.2377ZM31.9873 62.2252L35.1241 58.2377L33.5522 57.0011L30.4154 60.9886L31.9873 62.2252ZM31.7631 62.8728C31.7631 62.6379 31.842 62.4098 31.9873 62.2252L30.4153 60.9886C29.9928 61.5257 29.7631 62.1893 29.7631 62.8728H31.7631ZM32.8105 63.9202C32.232 63.9202 31.7631 63.4512 31.7631 62.8728H29.7631C29.7631 64.5558 31.1274 65.9202 32.8105 65.9202V63.9202ZM47.4221 63.9202L32.8105 63.9202V65.9202H47.4221V63.9202ZM48.4695 62.8728C48.4695 63.4512 48.0006 63.9202 47.4221 63.9202V65.9202C49.1051 65.9202 50.4695 64.5558 50.4695 62.8728H48.4695ZM48.2453 62.2252C48.3905 62.4098 48.4695 62.6379 48.4695 62.8728H50.4695C50.4695 62.1893 50.2398 61.5257 49.8172 60.9886L48.2453 62.2252ZM45.6983 58.9875L48.2453 62.2252L49.8172 60.9886L47.2702 57.7509L45.6983 58.9875ZM43.9098 56.0851C44.3933 57.1176 44.9934 58.0914 45.6983 58.9875L47.2702 57.7509C46.6596 56.9748 46.1398 56.1313 45.721 55.2369L43.9098 56.0851ZM42.952 54.0398L43.9098 56.0851L45.721 55.2369L44.7632 53.1916L42.952 54.0398ZM42.8576 47.537V53.6157H44.8576V47.537H42.8576ZM45.2312 48.0082C45.0603 47.7174 44.9051 47.4202 44.7655 47.1179L42.9496 47.9561C43.1167 48.3181 43.3025 48.6737 43.507 49.0216L45.2312 48.0082ZM53.9722 53.0096C50.378 53.0096 47.0525 51.1068 45.2312 48.0082L43.507 49.0216C45.6875 52.7314 49.6691 55.0096 53.9722 55.0096V53.0096ZM54.3197 53.0096H53.9722V55.0096H54.3197V53.0096ZM63.0607 48.0082C61.2395 51.1068 57.9139 53.0096 54.3197 53.0096V55.0096C58.6229 55.0096 62.6044 52.7314 64.7849 49.0216L63.0607 48.0082ZM63.0607 37.7327C64.9249 40.9042 64.9249 44.8367 63.0607 48.0082L64.7849 49.0216C67.0168 45.2245 67.0168 40.5164 64.7849 36.7193L63.0607 37.7327ZM54.3197 32.7313C57.9139 32.7313 61.2395 34.6341 63.0607 37.7327L64.7849 36.7193C62.6044 33.0095 58.6229 30.7313 54.3197 30.7313V32.7313ZM53.9722 32.7313H54.3197V30.7313H53.9722V32.7313ZM48.4445 34.3706C50.0634 33.318 51.9763 32.7313 53.9722 32.7313V30.7313C51.5826 30.7313 49.292 31.434 47.3543 32.6939L48.4445 34.3706ZM50.4563 25.4147C50.4563 28.2528 49.2585 30.9192 47.2216 32.7971L48.5772 34.2675C51.0196 32.0158 52.4563 28.8185 52.4563 25.4147H50.4563ZM45.3688 16.6808C48.5132 18.4641 50.4563 21.7999 50.4563 25.4147H52.4563C52.4563 21.0798 50.1262 17.0795 46.3554 14.9411L45.3688 16.6808ZM45.217 16.5947L45.3688 16.6808L46.3554 14.9411L46.2036 14.855L45.217 16.5947Z"
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
            d="M46.1865 13.6244C42.4352 11.4585 37.8135 11.4585 34.0622 13.6244C30.3109 15.7902 28 19.7927 28 24.1244C28 27.6236 29.5081 30.908 32.0653 33.183C30.0625 31.7849 27.6494 30.9997 25.1244 30.9997C20.7927 30.9997 16.7902 33.3106 14.6244 37.0618C12.4585 40.8131 12.4585 45.4349 14.6244 49.1862C16.7902 52.9375 20.7927 55.2484 25.1244 55.2484C29.456 55.2484 33.4585 52.9375 35.6244 49.1862C35.8064 48.8709 35.9731 48.5495 36.1245 48.223V54.8197L34.6607 58.0019C34.4705 58.4153 34.234 58.8058 33.9558 59.1659L30.5913 63.5199C30.2887 63.9116 30.1245 64.3925 30.1245 64.8875C30.1245 66.1227 31.1259 67.124 32.3611 67.124H47.8879C49.1232 67.124 50.1245 66.1227 50.1245 64.8875C50.1245 64.3925 49.9603 63.9116 49.6577 63.5199L46.9376 59.9998C46.2311 59.0856 45.6308 58.0941 45.1479 57.0445L44.1245 54.8197V48.2237C44.2758 48.55 44.4425 48.8712 44.6244 49.1862C46.7902 52.9375 50.7927 55.2484 55.1244 55.2484C59.456 55.2484 63.4585 52.9375 65.6244 49.1862C67.7902 45.4349 67.7902 40.8131 65.6244 37.0618C63.4585 33.3106 59.456 30.9997 55.1244 30.9997C52.5994 30.9997 50.1862 31.7849 48.1834 33.1829C50.7407 30.908 52.2487 27.6236 52.2487 24.1244C52.2487 19.7927 49.9378 15.7902 46.1865 13.6244Z"
            fill="#4F4F4F"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M43.9116 23.3291C41.5544 21.9404 38.6293 21.9404 36.2721 23.3291C33.9759 24.6818 32.5664 27.1481 32.5664 29.8131V30.0779C32.5664 32.1881 33.4501 34.1738 34.9581 35.5806C33.7455 34.7599 32.2966 34.2999 30.7815 34.2999C28.0965 34.2999 25.6193 35.7445 24.297 38.0814L24.2315 38.1972C22.904 40.5434 22.904 43.4139 24.2315 45.7601L24.297 45.876C25.6193 48.2128 28.0966 49.6574 30.7815 49.6574C33.4665 49.6574 35.9438 48.2128 37.266 45.876L37.3315 45.7601C37.6373 45.2198 37.8726 44.6516 38.0375 44.0684C38.6636 44.3533 39.3592 44.512 40.0919 44.512C40.8245 44.512 41.5201 44.3533 42.1462 44.0684C42.3111 44.6516 42.5464 45.2198 42.8522 45.7601L42.9177 45.876C44.24 48.2128 46.7172 49.6574 49.4022 49.6574C52.0872 49.6574 54.5644 48.2128 55.8867 45.876L55.9522 45.7601C57.2797 43.4139 57.2797 40.5434 55.9522 38.1972L55.8867 38.0814C54.5644 35.7445 52.0872 34.2999 49.4022 34.2999C47.8872 34.2999 46.4382 34.7599 45.2257 35.5806C46.7336 34.1737 47.6173 32.1881 47.6173 30.0779V29.8131C47.6173 27.1481 46.2078 24.6818 43.9116 23.3291Z"
            fill="#E0E0E0"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M46.1865 13.6244C42.4352 11.4585 37.8135 11.4585 34.0622 13.6244C30.3109 15.7902 28 19.7927 28 24.1244C28 27.6236 29.5081 30.908 32.0653 33.183C30.0625 31.7849 27.6494 30.9997 25.1244 30.9997C20.7927 30.9997 16.7902 33.3106 14.6244 37.0618C12.4585 40.8131 12.4585 45.4349 14.6244 49.1862C16.7902 52.9375 20.7927 55.2484 25.1244 55.2484C29.456 55.2484 33.4585 52.9375 35.6244 49.1862C35.8064 48.8709 35.9731 48.5495 36.1245 48.223V54.8197L34.6607 58.0019C34.4705 58.4153 34.234 58.8058 33.9558 59.1659L30.5913 63.5199C30.2887 63.9116 30.1245 64.3925 30.1245 64.8875C30.1245 66.1227 31.1259 67.124 32.3611 67.124L47.888 67.124C49.1232 67.124 50.1245 66.1227 50.1245 64.8875C50.1245 64.3925 49.9603 63.9116 49.6577 63.5199L46.9376 59.9998C46.2311 59.0856 45.6308 58.0941 45.1479 57.0445L44.1245 54.8197V48.2237C44.2758 48.55 44.4425 48.8712 44.6244 49.1862C46.7902 52.9375 50.7927 55.2484 55.1244 55.2484C59.456 55.2484 63.4585 52.9375 65.6244 49.1862C67.7902 45.4349 67.7902 40.8131 65.6244 37.0618C63.4585 33.3106 59.456 30.9997 55.1244 30.9997C52.5994 30.9997 50.1862 31.7849 48.1834 33.1829C50.7407 30.908 52.2487 27.6236 52.2487 24.1244C52.2487 19.7927 49.9378 15.7902 46.1865 13.6244Z"
            fill="currentColor"
            fill-opacity="0.25"
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
            d="M35.0622 15.3564C38.1947 13.5479 42.0541 13.5479 45.1865 15.3564C48.319 17.1649 50.2487 20.5073 50.2487 24.1244C50.2487 27.046 48.9896 29.7889 46.8541 31.6887C46.063 32.3925 45.9575 33.591 46.6136 34.4221C47.2697 35.2533 48.46 35.429 49.3282 34.8229C51.0012 33.6551 53.016 32.9997 55.1244 32.9997C58.7414 32.9997 62.0838 34.9294 63.8923 38.0618C65.7008 41.1943 65.7008 45.0537 63.8923 48.1862C62.0838 51.3187 58.7414 53.2484 55.1244 53.2484C51.5073 53.2484 48.1649 51.3187 46.3564 48.1862C46.2044 47.9229 46.0652 47.6546 45.9389 47.3821C45.5439 46.5307 44.6101 46.0684 43.6936 46.2706C42.7771 46.4728 42.1245 47.2851 42.1245 48.2237V54.8197C42.1245 55.1082 42.1869 55.3933 42.3075 55.6555L43.331 57.8803C43.877 59.0674 44.556 60.1887 45.355 61.2226L48.0751 64.7428C48.1071 64.7842 48.1245 64.8351 48.1245 64.8875C48.1245 65.0181 48.0186 65.124 47.8879 65.124H32.3611C32.2304 65.124 32.1245 65.0181 32.1245 64.8875C32.1245 64.8351 32.1419 64.7842 32.1739 64.7428L35.5384 60.3888C35.9091 59.909 36.2243 59.3886 36.4777 58.8377L37.9415 55.6555C38.0621 55.3933 38.1245 55.1082 38.1245 54.8197V48.223C38.1245 47.2844 37.4719 46.4721 36.5553 46.27C35.6388 46.0678 34.705 46.5301 34.3101 47.3816C34.1837 47.6542 34.0444 47.9227 33.8923 48.1862C32.0838 51.3187 28.7414 53.2484 25.1244 53.2484C21.5073 53.2484 18.1649 51.3187 16.3564 48.1862C14.5479 45.0537 14.5479 41.1943 16.3564 38.0618C18.1649 34.9294 21.5073 32.9997 25.1244 32.9997C27.2327 32.9997 29.2475 33.6551 30.9205 34.8229C31.7888 35.429 32.979 35.2533 33.6351 34.4222C34.2912 33.591 34.1858 32.3925 33.3946 31.6887C31.2591 29.7889 30 27.046 30 24.1244C30 20.5073 31.9297 17.1649 35.0622 15.3564ZM47.1865 11.8923C42.8164 9.36923 37.4323 9.36923 33.0622 11.8923C28.6921 14.4154 26 19.0782 26 24.1244C26 25.856 26.317 27.5425 26.91 29.1128C26.3222 29.0379 25.726 28.9997 25.1244 28.9997C20.0782 28.9997 15.4154 31.6917 12.8923 36.0618C10.3692 40.4319 10.3692 45.8161 12.8923 50.1862C15.4154 54.5563 20.0782 57.2484 25.1244 57.2484C28.4614 57.2484 31.6307 56.0711 34.1245 54.0098V54.3817L32.8437 57.1661C32.7168 57.442 32.5589 57.7027 32.3732 57.943L29.0087 62.297C28.4355 63.0389 28.1245 63.9499 28.1245 64.8875C28.1245 67.2272 30.0213 69.124 32.3611 69.124H47.8879C50.2277 69.124 52.1245 67.2272 52.1245 64.8875C52.1245 63.9499 51.8135 63.0389 51.2403 62.297L48.5201 58.7769C47.9062 57.9824 47.3845 57.1208 46.9649 56.2087L46.1245 54.3817V54.01C48.6183 56.0712 51.7875 57.2484 55.1244 57.2484C60.1705 57.2484 64.8333 54.5563 67.3564 50.1862C69.8795 45.8161 69.8795 40.4319 67.3564 36.0618C64.8333 31.6917 60.1705 28.9997 55.1244 28.9997C54.5227 28.9997 53.9265 29.0379 53.3387 29.1128C53.9317 27.5425 54.2487 25.856 54.2487 24.1244C54.2487 19.0782 51.5566 14.4154 47.1865 11.8923Z"
            stroke="currentColor"
          />
        </>
      )
  }
}

const CoreClub = forwardRef((props, ref) => {
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

CoreClub.displayName = 'CoreClub'

export default CoreClub
