
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'path':
      return (
        <>
          <path
            d="M17.6078 52.3522L12.995 51.5833C12.5301 49.566 12.2878 47.4803 12.2878 45.3601C12.2878 35.4593 17.5699 26.3105 26.1442 21.3601C34.7186 16.4097 45.2827 16.4097 53.8571 21.3601C62.4314 26.3105 67.7135 35.4593 67.7135 45.3601C67.7135 47.4401 67.4803 49.4869 67.0326 51.4686L62.3924 52.2419"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M49 41.375C49 40.9608 49.3358 40.625 49.75 40.625H54.25C54.6642 40.625 55 40.9608 55 41.375C55 41.9827 55.3242 42.5442 55.8505 42.8481L60.3923 45.4703C61.6299 46.1848 62.3923 47.5053 62.3923 48.9344V56.3156C62.3923 57.7447 61.6299 59.0652 60.3923 59.7797L55.8505 62.4019C55.3242 62.7058 55 63.2673 55 63.875C55 64.2892 54.6642 64.625 54.25 64.625H49.75C49.3358 64.625 49 64.2892 49 63.875V41.375Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M31.0001 63.875C31.0001 64.2892 30.6643 64.625 30.2501 64.625H25.7501C25.3358 64.625 25.0001 64.2892 25.0001 63.875C25.0001 63.2673 24.6759 62.7057 24.1496 62.4019L19.6078 59.7797C18.3702 59.0652 17.6078 57.7447 17.6078 56.3156V48.9344C17.6078 47.5053 18.3702 46.1848 19.6078 45.4703L24.1496 42.8481C24.6759 42.5442 25.0001 41.9827 25.0001 41.375C25.0001 40.9608 25.3358 40.625 25.7501 40.625H30.2501C30.6643 40.625 31.0001 40.9608 31.0001 41.375V63.875Z"
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
            d="M67.0326 51.4686L67.5257 54.4277C68.7284 54.2273 69.69 53.319 69.9588 52.1298L67.0326 51.4686ZM53.8571 21.3601L55.3571 18.762V18.762L53.8571 21.3601ZM26.1442 21.3601L24.6442 18.762V18.762L26.1442 21.3601ZM12.995 51.5833L10.0716 52.257C10.3443 53.4406 11.3037 54.3429 12.5018 54.5425L12.995 51.5833ZM17.1146 55.3113C18.7489 55.5837 20.2946 54.4797 20.567 52.8454C20.8394 51.211 19.7353 49.6654 18.101 49.393L17.1146 55.3113ZM61.8992 49.2827C60.2649 49.5551 59.1608 51.1008 59.4332 52.7351C59.7056 54.3694 61.2513 55.4735 62.8856 55.2011L61.8992 49.2827ZM69.9588 52.1298C70.4552 49.9331 70.7135 47.6645 70.7135 45.3601L64.7135 45.3601C64.7135 47.2156 64.5055 49.0407 64.1063 50.8073L69.9588 52.1298ZM70.7135 45.3601C70.7135 34.3875 64.8596 24.2483 55.3571 18.762L52.3571 23.9582C60.0032 28.3727 64.7135 36.5311 64.7135 45.3601L70.7135 45.3601ZM55.3571 18.762C45.8545 13.2757 34.1468 13.2757 24.6442 18.762L27.6442 23.9582C35.2904 19.5436 44.7109 19.5436 52.3571 23.9582L55.3571 18.762ZM24.6442 18.762C15.1417 24.2483 9.28784 34.3875 9.28784 45.3601H15.2878C15.2878 36.5311 19.9981 28.3727 27.6442 23.9582L24.6442 18.762ZM9.28784 45.3601C9.28784 47.7091 9.55623 50.0207 10.0716 52.257L15.9183 50.9097C15.5039 49.1112 15.2878 47.2515 15.2878 45.3601H9.28784ZM12.5018 54.5425L17.1146 55.3113L18.101 49.393L13.4882 48.6242L12.5018 54.5425ZM62.8856 55.2011L67.5257 54.4277L66.5394 48.5094L61.8992 49.2827L62.8856 55.2011Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M49 41.375C49 40.9608 49.3358 40.625 49.75 40.625H52H54.25C54.6642 40.625 55 40.9608 55 41.375C55 41.9827 55.3242 42.5442 55.8505 42.8481L60.3923 45.4703C61.6299 46.1848 62.3923 47.5053 62.3923 48.9344V56.3156C62.3923 57.7447 61.6299 59.0652 60.3923 59.7797L55.8505 62.4019C55.3242 62.7058 55 63.2673 55 63.875C55 64.2892 54.6642 64.625 54.25 64.625H52H49.75C49.3358 64.625 49 64.2892 49 63.875V62.8929V42.3571V41.375ZM31 63.875C31 64.2892 30.6642 64.625 30.25 64.625H28H25.75C25.3358 64.625 25 64.2892 25 63.875C25 63.2673 24.6758 62.7057 24.1495 62.4019L19.6077 59.7797C18.3701 59.0652 17.6077 57.7447 17.6077 56.3156V48.9344C17.6077 47.5053 18.3701 46.1848 19.6077 45.4703L24.1495 42.8481C24.6758 42.5442 25 41.9827 25 41.375C25 40.9608 25.3358 40.625 25.75 40.625H28H30.25C30.6642 40.625 31 40.9608 31 41.375V42.357L31 62.893V63.875Z"
            fill="currentColor"
          />
          <path
            d="M24.1495 42.8481L25.1495 44.5802L24.1495 42.8481ZM19.6077 59.7797L20.6077 58.0476L19.6077 59.7797ZM55.8505 62.4019L54.8505 60.6699L55.8505 62.4019ZM60.3923 59.7797L61.3923 61.5118L60.3923 59.7797ZM24.1495 62.4019L23.1495 64.1339L24.1495 62.4019ZM55.8505 42.8481L56.8505 41.116L55.8505 42.8481ZM49.75 42.625C50.4404 42.625 51 42.0654 51 41.375H47C47 39.8562 48.2312 38.625 49.75 38.625V42.625ZM52 42.625H49.75V38.625H52V42.625ZM54.25 42.625H52V38.625H54.25V42.625ZM53 41.375C53 42.0654 53.5596 42.625 54.25 42.625V38.625C55.7688 38.625 57 39.8562 57 41.375H53ZM59.3923 47.2024L54.8505 44.5801L56.8505 41.116L61.3923 43.7382L59.3923 47.2024ZM60.3923 56.3156V48.9344H64.3923V56.3156H60.3923ZM54.8505 60.6699L59.3923 58.0476L61.3923 61.5118L56.8505 64.134L54.8505 60.6699ZM54.25 62.625C53.5596 62.625 53 63.1846 53 63.875H57C57 65.3938 55.7688 66.625 54.25 66.625V62.625ZM52 62.625H54.25V66.625H52V62.625ZM49.75 62.625H52V66.625H49.75V62.625ZM51 63.875C51 63.1846 50.4404 62.625 49.75 62.625V66.625C48.2312 66.625 47 65.3938 47 63.875H51ZM51 62.8929V63.875H47V62.8929H51ZM47 62.8929V42.3571H51V62.8929H47ZM51 41.375V42.3571H47V41.375H51ZM30.25 62.625C29.5596 62.625 29 63.1846 29 63.875L33 63.875C33 65.3938 31.7688 66.625 30.25 66.625L30.25 62.625ZM28 62.625L30.25 62.625L30.25 66.625H28L28 62.625ZM25.75 62.625H28L28 66.625H25.75L25.75 62.625ZM27 63.875C27 63.1846 26.4404 62.625 25.75 62.625L25.75 66.625C24.2312 66.625 23 65.3938 23 63.875H27ZM20.6077 58.0476L25.1495 60.6698L23.1495 64.1339L18.6077 61.5118L20.6077 58.0476ZM19.6077 48.9344V56.3156H15.6077V48.9344H19.6077ZM25.1495 44.5802L20.6077 47.2023L18.6077 43.7382L23.1495 41.1161L25.1495 44.5802ZM25.75 42.625C26.4404 42.625 27 42.0654 27 41.375H23C23 39.8562 24.2312 38.625 25.75 38.625V42.625ZM28 42.625H25.75V38.625H28V42.625ZM30.25 42.625H28V38.625H30.25V42.625ZM29 41.375C29 42.0654 29.5596 42.625 30.25 42.625V38.625C31.7688 38.625 33 39.8562 33 41.375H29ZM29 42.357V41.375H33V42.357H29ZM33 42.357V62.893L29 62.893L29 42.357H33ZM29 63.875V62.893L33 62.893V63.875L29 63.875ZM23.1495 41.1161C23.057 41.1695 23 41.2682 23 41.375H27C27 42.6972 26.2946 43.919 25.1495 44.5802L23.1495 41.1161ZM15.6077 48.9344C15.6077 46.7908 16.7513 44.81 18.6077 43.7382L20.6077 47.2023C19.9889 47.5596 19.6077 48.2199 19.6077 48.9344H15.6077ZM18.6077 61.5118C16.7513 60.44 15.6077 58.4592 15.6077 56.3156H19.6077C19.6077 57.0301 19.9889 57.6904 20.6077 58.0476L18.6077 61.5118ZM56.8505 64.134C56.943 64.0806 57 63.9818 57 63.875H53C53 62.5528 53.7054 61.331 54.8505 60.6699L56.8505 64.134ZM64.3923 56.3156C64.3923 58.4592 63.2487 60.44 61.3923 61.5118L59.3923 58.0476C60.0111 57.6904 60.3923 57.0301 60.3923 56.3156H64.3923ZM23 63.875C23 63.9818 23.057 64.0805 23.1495 64.1339L25.1495 60.6698C26.2946 61.331 27 62.5528 27 63.875H23ZM61.3923 43.7382C63.2487 44.81 64.3923 46.7908 64.3923 48.9344H60.3923C60.3923 48.2199 60.0111 47.5596 59.3923 47.2024L61.3923 43.7382ZM57 41.375C57 41.2682 56.943 41.1694 56.8505 41.116L54.8505 44.5801C53.7054 43.919 53 42.6972 53 41.375H57Z"
            fill="currentColor"
          />
        </>
      )
    case 'poly':
      return (
        <>
          <path
            d="M67.0326 51.4686L67.3613 53.4413C68.1631 53.3077 68.8042 52.7022 68.9834 51.9094L67.0326 51.4686ZM53.8571 21.3601L54.8571 19.628V19.628L53.8571 21.3601ZM26.1442 21.3601L25.1442 19.628L26.1442 21.3601ZM12.995 51.5833L11.046 52.0325C11.2279 52.8215 11.8675 53.423 12.6662 53.5561L12.995 51.5833ZM17.279 54.3249C18.3685 54.5065 19.399 53.7705 19.5806 52.681C19.7622 51.5914 19.0261 50.561 17.9366 50.3794L17.279 54.3249ZM62.0636 50.2691C60.9741 50.4507 60.238 51.4812 60.4196 52.5707C60.6012 53.6603 61.6317 54.3963 62.7212 54.2147L62.0636 50.2691ZM68.9834 51.9094C69.4636 49.7844 69.7135 47.5897 69.7135 45.3601L65.7135 45.3601C65.7135 47.2905 65.4971 49.1894 65.0817 51.0277L68.9834 51.9094ZM69.7135 45.3601C69.7135 34.7447 64.0502 24.9357 54.8571 19.628L52.8571 23.0921C60.8126 27.6853 65.7135 36.1738 65.7135 45.3601L69.7135 45.3601ZM54.8571 19.628C45.6639 14.3204 34.3374 14.3204 25.1442 19.628L27.1442 23.0921C35.0998 18.499 44.9015 18.499 52.8571 23.0921L54.8571 19.628ZM25.1442 19.628C15.9511 24.9357 10.2878 34.7447 10.2878 45.3601H14.2878C14.2878 36.1738 19.1887 27.6853 27.1442 23.0921L25.1442 19.628ZM10.2878 45.3601C10.2878 47.6328 10.5475 49.8692 11.046 52.0325L14.9439 51.1342C14.5126 49.2628 14.2878 47.3277 14.2878 45.3601H10.2878ZM12.6662 53.5561L17.279 54.3249L17.9366 50.3794L13.3238 49.6106L12.6662 53.5561ZM62.7212 54.2147L67.3613 53.4413L66.7038 49.4958L62.0636 50.2691L62.7212 54.2147Z"
            fill="#F2C94C"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M49 41.375C49 40.9608 49.3358 40.625 49.75 40.625H52H54.25C54.6642 40.625 55 40.9608 55 41.375C55 41.9827 55.3242 42.5442 55.8505 42.8481L60.3923 45.4703C61.6299 46.1848 62.3923 47.5053 62.3923 48.9344V56.3156C62.3923 57.7447 61.6299 59.0652 60.3923 59.7797L55.8505 62.4019C55.3242 62.7058 55 63.2673 55 63.875C55 64.2892 54.6642 64.625 54.25 64.625H52H49.75C49.3358 64.625 49 64.2892 49 63.875V62.8929V42.3571V41.375ZM31 63.875C31 64.2892 30.6642 64.625 30.25 64.625H28H25.75C25.3358 64.625 25 64.2892 25 63.875C25 63.2673 24.6758 62.7057 24.1495 62.4019L19.6077 59.7797C18.3701 59.0652 17.6077 57.7447 17.6077 56.3156V48.9344C17.6077 47.5053 18.3701 46.1848 19.6077 45.4703L24.1495 42.8481C24.6758 42.5442 25 41.9827 25 41.375C25 40.9608 25.3358 40.625 25.75 40.625H28H30.25C30.6642 40.625 31 40.9608 31 41.375V42.357L31 62.893V63.875Z"
            fill="#EB5757"
          />
          <path
            d="M24.1495 42.8481L25.1495 44.5802L24.1495 42.8481ZM19.6077 59.7797L20.6077 58.0476L19.6077 59.7797ZM55.8505 62.4019L54.8505 60.6699L55.8505 62.4019ZM60.3923 59.7797L61.3923 61.5118L60.3923 59.7797ZM24.1495 62.4019L23.1495 64.1339L24.1495 62.4019ZM55.8505 42.8481L56.8505 41.116L55.8505 42.8481ZM49.75 42.625C50.4404 42.625 51 42.0654 51 41.375H47C47 39.8562 48.2312 38.625 49.75 38.625V42.625ZM52 42.625H49.75V38.625H52V42.625ZM54.25 42.625H52V38.625H54.25V42.625ZM53 41.375C53 42.0654 53.5596 42.625 54.25 42.625V38.625C55.7688 38.625 57 39.8562 57 41.375H53ZM59.3923 47.2024L54.8505 44.5801L56.8505 41.116L61.3923 43.7382L59.3923 47.2024ZM60.3923 56.3156V48.9344H64.3923V56.3156H60.3923ZM54.8505 60.6699L59.3923 58.0476L61.3923 61.5118L56.8505 64.134L54.8505 60.6699ZM54.25 62.625C53.5596 62.625 53 63.1846 53 63.875H57C57 65.3938 55.7688 66.625 54.25 66.625V62.625ZM52 62.625H54.25V66.625H52V62.625ZM49.75 62.625H52V66.625H49.75V62.625ZM51 63.875C51 63.1846 50.4404 62.625 49.75 62.625V66.625C48.2312 66.625 47 65.3938 47 63.875H51ZM51 62.8929V63.875H47V62.8929H51ZM47 62.8929V42.3571H51V62.8929H47ZM51 41.375V42.3571H47V41.375H51ZM30.25 62.625C29.5596 62.625 29 63.1846 29 63.875L33 63.875C33 65.3938 31.7688 66.625 30.25 66.625L30.25 62.625ZM28 62.625L30.25 62.625L30.25 66.625H28L28 62.625ZM25.75 62.625H28L28 66.625H25.75L25.75 62.625ZM27 63.875C27 63.1846 26.4404 62.625 25.75 62.625L25.75 66.625C24.2312 66.625 23 65.3938 23 63.875H27ZM20.6077 58.0476L25.1495 60.6698L23.1495 64.1339L18.6077 61.5118L20.6077 58.0476ZM19.6077 48.9344V56.3156H15.6077V48.9344H19.6077ZM25.1495 44.5802L20.6077 47.2023L18.6077 43.7382L23.1495 41.1161L25.1495 44.5802ZM25.75 42.625C26.4404 42.625 27 42.0654 27 41.375H23C23 39.8562 24.2312 38.625 25.75 38.625V42.625ZM28 42.625H25.75V38.625H28V42.625ZM30.25 42.625H28V38.625H30.25V42.625ZM29 41.375C29 42.0654 29.5596 42.625 30.25 42.625V38.625C31.7688 38.625 33 39.8562 33 41.375H29ZM29 42.357V41.375H33V42.357H29ZM33 42.357V62.893L29 62.893L29 42.357H33ZM29 63.875V62.893L33 62.893V63.875L29 63.875ZM23.1495 41.1161C23.057 41.1695 23 41.2682 23 41.375H27C27 42.6972 26.2946 43.919 25.1495 44.5802L23.1495 41.1161ZM15.6077 48.9344C15.6077 46.7908 16.7513 44.81 18.6077 43.7382L20.6077 47.2023C19.9889 47.5596 19.6077 48.2199 19.6077 48.9344H15.6077ZM18.6077 61.5118C16.7513 60.44 15.6077 58.4592 15.6077 56.3156H19.6077C19.6077 57.0301 19.9889 57.6904 20.6077 58.0476L18.6077 61.5118ZM56.8505 64.134C56.943 64.0806 57 63.9818 57 63.875H53C53 62.5528 53.7054 61.331 54.8505 60.6699L56.8505 64.134ZM64.3923 56.3156C64.3923 58.4592 63.2487 60.44 61.3923 61.5118L59.3923 58.0476C60.0111 57.6904 60.3923 57.0301 60.3923 56.3156H64.3923ZM23 63.875C23 63.9818 23.057 64.0805 23.1495 64.1339L25.1495 60.6698C26.2946 61.331 27 62.5528 27 63.875H23ZM61.3923 43.7382C63.2487 44.81 64.3923 46.7908 64.3923 48.9344H60.3923C60.3923 48.2199 60.0111 47.5596 59.3923 47.2024L61.3923 43.7382ZM57 41.375C57 41.2682 56.943 41.1694 56.8505 41.116L54.8505 44.5801C53.7054 43.919 53 42.6972 53 41.375H57Z"
            fill="#EB5757"
          />
        </>
      )
    case 'duo':
      return (
        <>
          <path
            d="M49 41.375C49 40.9608 49.3358 40.625 49.75 40.625H54.25C54.6642 40.625 55 40.9608 55 41.375C55 41.9827 55.3242 42.5442 55.8505 42.848L60.3923 45.4703C61.6299 46.1848 62.3923 47.5053 62.3923 48.9344V56.3156C62.3923 57.7447 61.6299 59.0652 60.3923 59.7797L55.8505 62.4019C55.3242 62.7058 55 63.2673 55 63.875C55 64.2892 54.6642 64.625 54.25 64.625H49.75C49.3358 64.625 49 64.2892 49 63.875V41.375Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M31 63.875C31 64.2892 30.6642 64.625 30.25 64.625H25.75C25.3358 64.625 25 64.2892 25 63.875C25 63.2673 24.6758 62.7057 24.1495 62.4019L19.6077 59.7797C18.3701 59.0652 17.6077 57.7447 17.6077 56.3156V48.9344C17.6077 47.5053 18.3701 46.1848 19.6077 45.4703L24.1495 42.8481C24.6758 42.5442 25 41.9827 25 41.375C25 40.9608 25.3358 40.625 25.75 40.625H30.25C30.6642 40.625 31 40.9608 31 41.375V63.875Z"
            fill="currentColor"
            fill-opacity="0.25"
          />
          <path
            d="M17.6078 52.3522L12.995 51.5833C12.5301 49.566 12.2878 47.4803 12.2878 45.3601C12.2878 35.4593 17.5699 26.3105 26.1442 21.3601C34.7186 16.4097 45.2827 16.4097 53.8571 21.3601C62.4314 26.3105 67.7135 35.4593 67.7135 45.3601C67.7135 47.4401 67.4803 49.4869 67.0326 51.4686L62.3924 52.2419M49.75 40.625C49.3358 40.625 49 40.9608 49 41.375V63.875C49 64.2892 49.3358 64.625 49.75 64.625H54.25C54.6642 64.625 55 64.2892 55 63.875C55 63.2673 55.3242 62.7058 55.8505 62.4019L60.3923 59.7797C61.6299 59.0652 62.3923 57.7447 62.3923 56.3156V48.9344C62.3923 47.5053 61.6299 46.1848 60.3923 45.4703L55.8505 42.848C55.3242 42.5442 55 41.9827 55 41.375C55 40.9608 54.6642 40.625 54.25 40.625H49.75ZM30.25 64.625C30.6642 64.625 31 64.2892 31 63.875V41.375C31 40.9608 30.6642 40.625 30.25 40.625H25.75C25.3358 40.625 25 40.9608 25 41.375C25 41.9827 24.6758 42.5442 24.1495 42.8481L19.6077 45.4703C18.3701 46.1848 17.6077 47.5053 17.6077 48.9344V56.3156C17.6077 57.7447 18.3701 59.0652 19.6077 59.7797L24.1495 62.4019C24.6758 62.7057 25 63.2673 25 63.875C25 64.2892 25.3358 64.625 25.75 64.625H30.25Z"
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
            d="M54.8571 19.628C45.6639 14.3203 34.3374 14.3203 25.1442 19.628C15.9511 24.9357 10.2878 34.7447 10.2878 45.36C10.2878 47.6328 10.5475 49.8691 11.046 52.0324L11.3465 53.3361L15.6077 54.0463V56.3155C15.6077 58.4591 16.7513 60.4399 18.6077 61.5117L23.0055 64.0508C23.0962 65.4876 24.2903 66.6249 25.75 66.6249H30.25C31.7688 66.6249 33 65.3937 33 63.8749V41.3749C33 39.8561 31.7688 38.6249 30.25 38.6249H25.75C24.2903 38.6249 23.0962 39.7623 23.0055 41.1991L18.6077 43.7382C16.7513 44.81 15.6077 46.7907 15.6077 48.9343V49.9912L14.6799 49.8365C14.4213 48.3732 14.2878 46.8763 14.2878 45.36C14.2878 36.1737 19.1887 27.6852 27.1442 23.0921C35.0998 18.4989 44.9015 18.4989 52.8571 23.0921C60.8126 27.6852 65.7135 36.1737 65.7135 45.36C65.7135 46.837 65.5868 48.2957 65.3413 49.7228L64.3923 49.8809V48.9343C64.3923 46.7907 63.2487 44.81 61.3923 43.7382L56.9945 41.1991C56.9038 39.7622 55.7097 38.6249 54.25 38.6249H49.75C48.2312 38.6249 47 39.8561 47 41.3749V63.8749C47 65.3937 48.2312 66.6249 49.75 66.6249H54.25C55.7097 66.6249 56.9038 65.4876 56.9945 64.0508L61.3923 61.5117C63.2487 60.4399 64.3923 58.4591 64.3923 56.3155V53.9361L68.6871 53.2203L68.9834 51.9093C69.4636 49.7843 69.7135 47.5897 69.7135 45.36C69.7135 34.7447 64.0502 24.9357 54.8571 19.628ZM60.3923 50.5476L60.0908 50.5979L60.3923 52.4069V56.3155C60.3923 57.0301 60.0111 57.6903 59.3923 58.0476L54.8505 60.6698C54.0802 61.1145 53.5089 61.8129 53.2174 62.6249H51V42.6249H53.2174C53.5089 43.4369 54.0802 44.1353 54.8505 44.58L59.3923 47.2023C60.0111 47.5595 60.3923 48.2198 60.3923 48.9343V50.5476ZM19.6077 52.5181L19.9094 50.7081L19.6077 50.6578V48.9343C19.6077 48.2198 19.9889 47.5595 20.6077 47.2023L25.1495 44.5801C25.9198 44.1354 26.4911 43.437 26.7826 42.6249H29V62.6249H26.7826C26.4911 61.8129 25.9198 61.1145 25.1495 60.6698L20.6077 58.0476C19.9889 57.6903 19.6077 57.0301 19.6077 56.3155V52.5181Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const CoreHeadphones = forwardRef((props, ref) => {
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

CoreHeadphones.displayName = 'CoreHeadphones'

export default CoreHeadphones
