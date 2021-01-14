
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'color':
      return (
        <>
          <path
            d="M39.6091 61.9998C39.3651 61.9998 39.1373 61.9349 38.9256 61.8212L36.7611 60.5381C36.4356 60.3593 36.5984 60.2944 36.6961 60.262C37.1354 60.1158 37.2168 60.0832 37.6725 59.8235C37.7214 59.7909 37.7866 59.8072 37.8353 59.8397L39.4954 60.8304C39.5604 60.8629 39.6418 60.8629 39.6905 60.8304L46.1842 57.0785C46.2493 57.046 46.282 56.9809 46.282 56.8999V49.4123C46.282 49.3309 46.2493 49.2661 46.1842 49.2335L39.6905 45.4979C39.6255 45.4653 39.5441 45.4653 39.4954 45.4979L33.0017 49.2335C32.9366 49.266 32.9039 49.3472 32.9039 49.4122V56.8997C32.9039 56.9648 32.9366 57.0459 33.0017 57.0785L34.7756 58.1017C35.7359 58.5889 36.338 58.0205 36.338 57.452V50.0618C36.338 49.9644 36.4194 49.8669 36.5333 49.8669H37.3633C37.461 49.8669 37.5586 49.9481 37.5586 50.0618V57.452C37.5586 58.7351 36.8587 59.4823 35.6381 59.4823C35.2639 59.4823 34.971 59.4823 34.1409 59.0761L32.4321 58.1017C32.0089 57.8581 31.7485 57.4032 31.7485 56.916V49.4285C31.7485 48.9412 32.0089 48.4863 32.4321 48.2428L38.9256 44.4908C39.3326 44.2635 39.886 44.2635 40.2928 44.4908L46.7864 48.2428C47.2095 48.4863 47.47 48.9412 47.47 49.4285V56.916C47.47 57.4032 47.2095 57.8581 46.7864 58.1017L40.2928 61.8536C40.0812 61.9512 39.8371 61.9998 39.6093 61.9998H39.6091ZM41.611 56.8511C38.763 56.8511 38.1771 55.5517 38.1771 54.4473C38.1771 54.3498 38.2584 54.2524 38.3724 54.2524H39.2187C39.3162 54.2524 39.3976 54.3173 39.3976 54.4148C39.5279 55.2756 39.9022 55.6979 41.6273 55.6979C42.9943 55.6979 43.5804 55.3893 43.5804 54.6584C43.5804 54.2361 43.4175 53.9276 41.2856 53.7164C39.5116 53.5376 38.4049 53.1479 38.4049 51.7349C38.4049 50.4192 39.5117 49.6395 41.3669 49.6395C43.45 49.6395 44.4754 50.3543 44.6057 51.9133C44.6057 51.9623 44.5894 52.0109 44.5568 52.0596C44.5242 52.0921 44.4755 52.1246 44.4266 52.1246H43.5803C43.4989 52.1246 43.4175 52.0596 43.4013 51.9784C43.206 51.0852 42.7015 50.7927 41.3669 50.7927C39.8697 50.7927 39.6905 51.3126 39.6905 51.7023C39.6905 52.1733 39.9022 52.3195 41.9202 52.5793C43.922 52.8393 44.8661 53.2128 44.8661 54.6096C44.8497 56.039 43.678 56.8511 41.611 56.8511Z"
            fill="#539E43"
          />
          <path
            d="M19.4611 32.7155C19.4611 32.4232 19.2983 32.1469 19.038 32.0007L12.1375 28.0377C12.0234 27.9726 11.8933 27.9402 11.7632 27.9239H11.698C11.5679 27.9239 11.4376 27.9726 11.3237 28.0377L4.42315 32.0007C4.16264 32.1469 4 32.423 4 32.7155L4.01633 43.3702C4.01633 43.5164 4.09773 43.6625 4.22784 43.7276C4.35809 43.8088 4.52074 43.8088 4.6348 43.7276L8.73605 41.3887C8.99642 41.2425 9.1592 40.9664 9.1592 40.6741V35.6877C9.1592 35.3954 9.32184 35.1193 9.58235 34.9731L11.3237 33.9661C11.4539 33.8848 11.6004 33.8522 11.7468 33.8522C11.8933 33.8522 12.0397 33.8848 12.1538 33.9661L13.8951 34.9731C14.1556 35.1193 14.3183 35.3953 14.3183 35.6877V40.6741C14.3183 40.9664 14.481 41.2425 14.7414 41.3887L18.8427 43.7276C18.9729 43.8088 19.1356 43.8088 19.2658 43.7276C19.3961 43.6625 19.4775 43.5164 19.4775 43.3702L19.4611 32.7155ZM52.6293 18.0488C52.4991 17.9837 52.3364 17.9837 52.2223 18.0488C52.0922 18.13 52.0108 18.2599 52.0108 18.406V28.9635C52.0108 29.0609 51.9621 29.1583 51.8644 29.2234C51.7668 29.272 51.669 29.272 51.5715 29.2234L49.8463 28.2326C49.7198 28.1608 49.5768 28.123 49.4313 28.123C49.2857 28.123 49.1427 28.1608 49.0162 28.2326L42.1157 32.2119C41.8553 32.3581 41.6925 32.6342 41.6925 32.9265V40.8689C41.6925 41.1612 41.8553 41.4375 42.1157 41.5836L49.0162 45.5629C49.1427 45.6348 49.2857 45.6726 49.4313 45.6726C49.5768 45.6726 49.7198 45.6348 49.8463 45.5629L56.7469 41.5836C57.0072 41.4375 57.17 41.1613 57.17 40.8689V21.0698C57.17 20.7612 57.0072 20.4852 56.7469 20.3389L52.6294 18.0488H52.6293ZM51.9946 38.254C51.9946 38.3352 51.9621 38.4001 51.8969 38.4326L49.5371 39.7969C49.5041 39.8129 49.4679 39.8213 49.4313 39.8213C49.3946 39.8213 49.3584 39.8129 49.3254 39.7969L46.9657 38.4326C46.9005 38.4001 46.8679 38.3189 46.8679 38.254V35.5253C46.8679 35.444 46.9005 35.3791 46.9657 35.3467L49.3254 33.9822C49.3584 33.9662 49.3946 33.9578 49.4313 33.9578C49.4679 33.9578 49.5041 33.9662 49.5371 33.9822L51.8969 35.3467C51.9621 35.379 51.9946 35.4603 51.9946 35.5253V38.254ZM75.593 35.4603C75.8536 35.3142 76 35.038 76 34.7456V32.8129C76 32.5205 75.8372 32.2444 75.593 32.0982L68.7414 28.1352C68.6149 28.0634 68.4719 28.0256 68.3264 28.0256C68.1809 28.0256 68.0379 28.0634 67.9114 28.1352L61.0109 32.1144C60.7504 32.2606 60.5877 32.5367 60.5877 32.8292V40.7715C60.5877 41.0638 60.7504 41.3399 61.0109 41.4861L67.8626 45.3842C68.1231 45.5303 68.4322 45.5303 68.6763 45.3842L72.8263 43.078C72.9566 43.013 73.0379 42.8668 73.0379 42.7207C73.0379 42.5745 72.9566 42.4284 72.8263 42.3633L65.8932 38.384C65.7631 38.3029 65.6817 38.1729 65.6817 38.0267V35.5417C65.6817 35.3956 65.7631 35.2494 65.8932 35.1843L68.0579 33.9499C68.1212 33.9101 68.1946 33.889 68.2694 33.889C68.3443 33.889 68.4176 33.9101 68.481 33.9499L70.6455 35.1843C70.7757 35.2656 70.8571 35.3954 70.8571 35.5417V37.4908C70.8571 37.6369 70.9385 37.7831 71.0686 37.848C71.1989 37.9292 71.3615 37.9292 71.4918 37.848L75.593 35.4603Z"
            fill="black"
          />
          <path
            d="M68.2205 35.0868C68.2446 35.071 68.2729 35.0625 68.3018 35.0625C68.3307 35.0625 68.359 35.071 68.3831 35.0868L69.7015 35.8502C69.7503 35.8825 69.7829 35.9313 69.7829 35.9963V37.5231C69.7829 37.588 69.7503 37.6368 69.7015 37.6692L68.3831 38.4326C68.359 38.4485 68.3307 38.4569 68.3018 38.4569C68.2729 38.4569 68.2446 38.4485 68.2205 38.4326L66.9022 37.6692C66.8533 37.6368 66.8208 37.588 66.8208 37.5231V35.9963C66.8208 35.9313 66.8533 35.8825 66.9022 35.8502L68.2205 35.0868Z"
            fill="#539E43"
          />
          <path
            d="M31 28.1677C30.8735 28.0959 30.7305 28.0581 30.585 28.0581C30.4395 28.0581 30.2965 28.0959 30.17 28.1677L23.3183 32.1143C23.0578 32.2604 22.9114 32.5366 22.9114 32.8289V40.7389C22.9114 41.0312 23.0742 41.3074 23.3183 41.4535L30.17 45.4004C30.2965 45.4722 30.4395 45.51 30.585 45.51C30.7305 45.51 30.8735 45.4722 31 45.4004L37.8518 41.4535C38.1121 41.3074 38.2587 41.0312 38.2587 40.7389V32.829C38.2587 32.5367 38.0958 32.2606 37.8518 32.1144L31 28.1677Z"
            fill="black"
          />
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="22" y="28" width="17" height="18"><path d="M31 28.1677C30.8735 28.0959 30.7305 28.0581 30.585 28.0581C30.4395 28.0581 30.2965 28.0959 30.17 28.1677L23.3183 32.1143C23.0578 32.2604 22.9114 32.5366 22.9114 32.8289V40.7389C22.9114 41.0312 23.0742 41.3074 23.3183 41.4535L30.17 45.4004C30.2965 45.4722 30.4395 45.51 30.585 45.51C30.7305 45.51 30.8735 45.4722 31 45.4004L37.8518 41.4535C38.1121 41.3074 38.2587 41.0312 38.2587 40.7389V32.829C38.2587 32.5367 38.0958 32.2606 37.8518 32.1144L31 28.1677Z" fill="black"/></mask>
          <g mask="url(#mask0)"><path d="M31 28.1677C30.8735 28.0959 30.7305 28.0581 30.585 28.0581C30.4395 28.0581 30.2965 28.0959 30.17 28.1677L23.3183 32.1143C23.0578 32.2604 22.9114 32.5366 22.9114 32.8289V40.7389C22.9114 41.0312 23.0742 41.3074 23.3183 41.4535L30.17 45.4004C30.2965 45.4722 30.4395 45.51 30.585 45.51C30.7305 45.51 30.8735 45.4722 31 45.4004L37.8518 41.4535C38.1121 41.3074 38.2587 41.0312 38.2587 40.7389V32.829C38.2587 32.5367 38.0958 32.2606 37.8518 32.1144L31 28.1677Z" fill="url(#paint0_linear)"/><path d="M37.868 32.1149L30.9838 28.1681C30.9162 28.1341 30.8453 28.1068 30.7722 28.0869L23.0579 41.2756C23.1218 41.3535 23.1989 41.4194 23.2858 41.4705L30.17 45.4174C30.3653 45.5311 30.5932 45.5635 30.8047 45.4985L38.0471 32.2774C37.9983 32.2125 37.9331 32.1636 37.868 32.115V32.1149Z" fill="url(#paint1_linear)"/><path fill-rule="evenodd" clip-rule="evenodd" d="M37.8842 41.4534C38.0795 41.3397 38.226 41.1448 38.2912 40.9337L30.7394 28.07C30.5441 28.0375 30.3324 28.0537 30.1536 28.1673L23.3181 32.098L30.6905 45.514C30.7977 45.4964 30.9019 45.4636 30.9997 45.4166L37.8841 41.4536L37.8842 41.4534Z" fill="url(#paint2_linear)"/><path fill-rule="evenodd" clip-rule="evenodd" d="M37.8843 41.4535L31.0163 45.4003C30.9193 45.4497 30.8148 45.4826 30.707 45.4977L30.8373 45.7414L38.4539 41.3399V41.2424L38.2585 40.9175C38.226 41.1449 38.0796 41.3398 37.8843 41.4535Z" fill="url(#paint3_linear)"/><path fill-rule="evenodd" clip-rule="evenodd" d="M37.8843 41.4535L31.0163 45.4003C30.9193 45.4497 30.8148 45.4826 30.707 45.4977L30.8373 45.7414L38.4539 41.3399V41.2424L38.2585 40.9175C38.226 41.1449 38.0796 41.3398 37.8843 41.4535Z" fill="url(#paint4_linear)"/></g>
          <defs><linearGradient id="paint0_linear" x1="33.3764" y1="31.1099" x2="25.8878" y2="42.9004" gradientUnits="userSpaceOnUse"><stop stop-color="#41873F"/><stop offset="0.3288" stop-color="#418B3D"/><stop offset="0.6352" stop-color="#419637"/><stop offset="0.9319" stop-color="#3FA92D"/><stop offset="1" stop-color="#3FAE2A"/></linearGradient><linearGradient id="paint1_linear" x1="29.5448" y1="37.711" x2="48.3361" y2="27.481" gradientUnits="userSpaceOnUse"><stop offset="0.1376" stop-color="#41873F"/><stop offset="0.4032" stop-color="#54A044"/><stop offset="0.7136" stop-color="#66B848"/><stop offset="0.9081" stop-color="#6CC04A"/></linearGradient><linearGradient id="paint2_linear" x1="22.6609" y1="36.784" x2="38.5156" y2="36.784" gradientUnits="userSpaceOnUse"><stop offset="0.09192" stop-color="#6CC04A"/><stop offset="0.2864" stop-color="#66B848"/><stop offset="0.5968" stop-color="#54A044"/><stop offset="0.8624" stop-color="#41873F"/></linearGradient><linearGradient id="paint3_linear" x1="22.6611" y1="43.3427" x2="38.5156" y2="43.3427" gradientUnits="userSpaceOnUse"><stop offset="0.09192" stop-color="#6CC04A"/><stop offset="0.2864" stop-color="#66B848"/><stop offset="0.5968" stop-color="#54A044"/><stop offset="0.8624" stop-color="#41873F"/></linearGradient><linearGradient id="paint4_linear" x1="40.8254" y1="30.7357" x2="36.8244" y2="51.743" gradientUnits="userSpaceOnUse"><stop stop-color="#41873F"/><stop offset="0.3288" stop-color="#418B3D"/><stop offset="0.6352" stop-color="#419637"/><stop offset="0.9319" stop-color="#3FA92D"/><stop offset="1" stop-color="#3FAE2A"/></linearGradient></defs>
        </>
      )
    case 'solid':
      return (
        <>
          <path
            d="M19.4611 36.7155C19.4611 36.4232 19.2983 36.1469 19.038 36.0007L12.1375 32.0377C12.0234 31.9726 11.8933 31.9402 11.7632 31.9239H11.698C11.5679 31.9239 11.4376 31.9726 11.3237 32.0377L4.42315 36.0007C4.16264 36.1469 4 36.423 4 36.7155L4.01633 47.3702C4.01633 47.5164 4.09773 47.6625 4.22784 47.7276C4.35809 47.8088 4.52074 47.8088 4.6348 47.7276L8.73605 45.3887C8.99642 45.2425 9.1592 44.9664 9.1592 44.6741V39.6877C9.1592 39.3954 9.32184 39.1193 9.58235 38.9731L11.3237 37.9661C11.4539 37.8848 11.6004 37.8522 11.7468 37.8522C11.8933 37.8522 12.0397 37.8848 12.1538 37.9661L13.8951 38.9731C14.1556 39.1193 14.3183 39.3953 14.3183 39.6877V44.6741C14.3183 44.9664 14.481 45.2425 14.7414 45.3887L18.8427 47.7276C18.9729 47.8088 19.1356 47.8088 19.2658 47.7276C19.3961 47.6625 19.4775 47.5164 19.4775 47.3702L19.4611 36.7155ZM52.6293 22.0488C52.4991 21.9837 52.3364 21.9837 52.2223 22.0488C52.0922 22.13 52.0108 22.2599 52.0108 22.406V32.9635C52.0108 33.0609 51.9621 33.1583 51.8644 33.2234C51.7668 33.272 51.669 33.272 51.5715 33.2234L49.8463 32.2326C49.7198 32.1608 49.5768 32.123 49.4313 32.123C49.2857 32.123 49.1427 32.1608 49.0162 32.2326L42.1157 36.2119C41.8553 36.3581 41.6925 36.6342 41.6925 36.9265V44.8689C41.6925 45.1612 41.8553 45.4375 42.1157 45.5836L49.0162 49.5629C49.1427 49.6348 49.2857 49.6726 49.4313 49.6726C49.5768 49.6726 49.7198 49.6348 49.8463 49.5629L56.7469 45.5836C57.0072 45.4375 57.17 45.1613 57.17 44.8689V25.0698C57.17 24.7612 57.0072 24.4852 56.7469 24.3389L52.6293 22.0488ZM51.9946 42.254C51.9946 42.3352 51.9621 42.4001 51.8969 42.4326L49.5371 43.7969C49.5041 43.8129 49.4679 43.8213 49.4313 43.8213C49.3946 43.8213 49.3584 43.8129 49.3254 43.7969L46.9657 42.4326C46.9005 42.4001 46.8679 42.3189 46.8679 42.254V39.5253C46.8679 39.444 46.9005 39.3791 46.9657 39.3467L49.3254 37.9822C49.3584 37.9662 49.3946 37.9578 49.4313 37.9578C49.4679 37.9578 49.5041 37.9662 49.5371 37.9822L51.8969 39.3467C51.9621 39.379 51.9946 39.4603 51.9946 39.5253V42.254ZM75.593 39.4603C75.8536 39.3142 76 39.038 76 38.7456V36.8129C76 36.5205 75.8372 36.2444 75.593 36.0982L68.7414 32.1352C68.6149 32.0634 68.4719 32.0256 68.3264 32.0256C68.1809 32.0256 68.0379 32.0634 67.9114 32.1352L61.0109 36.1144C60.7504 36.2606 60.5877 36.5367 60.5877 36.8292V44.7715C60.5877 45.0638 60.7504 45.3399 61.0109 45.4861L67.8626 49.3842C68.1231 49.5303 68.4322 49.5303 68.6763 49.3842L72.8263 47.078C72.9566 47.013 73.0379 46.8668 73.0379 46.7207C73.0379 46.5745 72.9566 46.4284 72.8263 46.3633L65.8932 42.384C65.7631 42.3029 65.6817 42.1729 65.6817 42.0267V39.5417C65.6817 39.3956 65.7631 39.2494 65.8932 39.1843L68.0579 37.9499C68.1212 37.9101 68.1946 37.889 68.2694 37.889C68.3443 37.889 68.4176 37.9101 68.481 37.9499L70.6455 39.1843C70.7757 39.2656 70.8571 39.3954 70.8571 39.5417V41.4908C70.8571 41.6369 70.9385 41.7831 71.0686 41.848C71.1989 41.9292 71.3615 41.9292 71.4918 41.848L75.593 39.4603Z"
            fill="currentColor"
          />
          <path
            d="M68.2206 39.0866C68.2448 39.0707 68.273 39.0623 68.302 39.0623C68.3309 39.0623 68.3591 39.0707 68.3833 39.0866L69.7016 39.85C69.7505 39.8823 69.783 39.9311 69.783 39.9961V41.5229C69.783 41.5878 69.7505 41.6366 69.7016 41.669L68.3833 42.4324C68.3591 42.4483 68.3309 42.4567 68.302 42.4567C68.273 42.4567 68.2448 42.4483 68.2206 42.4324L66.9023 41.669C66.8535 41.6366 66.8209 41.5878 66.8209 41.5229V39.9961C66.8209 39.9311 66.8535 39.8823 66.9023 39.85L68.2206 39.0866Z"
            fill="currentColor"
          />
          <path
            d="M31 32.1677C30.8735 32.0959 30.7305 32.0581 30.585 32.0581C30.4395 32.0581 30.2965 32.0959 30.17 32.1677L23.3183 36.1143C23.0578 36.2604 22.9114 36.5366 22.9114 36.8289V44.7389C22.9114 45.0312 23.0742 45.3074 23.3183 45.4535L30.17 49.4004C30.2965 49.4722 30.4395 49.51 30.585 49.51C30.7305 49.51 30.8735 49.4722 31 49.4004L37.8518 45.4535C38.1121 45.3074 38.2587 45.0312 38.2587 44.7389V36.829C38.2587 36.5367 38.0958 36.2606 37.8518 36.1144L31 32.1677Z"
            fill="currentColor"
          />
        </>
      )
    case 'path':
      return (
        <>
          <path
            d="M19.4611 36.7155C19.4611 36.4232 19.2983 36.1469 19.038 36.0007L12.1375 32.0377C12.0234 31.9726 11.8933 31.9402 11.7632 31.9239H11.698C11.5679 31.9239 11.4376 31.9726 11.3237 32.0377L4.42315 36.0007C4.16264 36.1469 4 36.423 4 36.7155L4.01633 47.3702C4.01633 47.5164 4.09773 47.6625 4.22784 47.7276C4.35809 47.8088 4.52074 47.8088 4.6348 47.7276L8.73605 45.3887C8.99642 45.2425 9.1592 44.9664 9.1592 44.6741V39.6877C9.1592 39.3954 9.32184 39.1193 9.58235 38.9731L11.3237 37.9661C11.4539 37.8848 11.6004 37.8522 11.7468 37.8522C11.8933 37.8522 12.0397 37.8848 12.1538 37.9661L13.8951 38.9731C14.1556 39.1193 14.3183 39.3953 14.3183 39.6877V44.6741C14.3183 44.9664 14.481 45.2425 14.7414 45.3887L18.8427 47.7276C18.9729 47.8088 19.1356 47.8088 19.2658 47.7276C19.3961 47.6625 19.4775 47.5164 19.4775 47.3702L19.4611 36.7155ZM52.6293 22.0488C52.4992 21.9837 52.3364 21.9837 52.2223 22.0488C52.0922 22.13 52.0108 22.2599 52.0108 22.406V32.9635C52.0108 33.0609 51.9621 33.1583 51.8644 33.2234C51.7668 33.272 51.669 33.272 51.5715 33.2234L49.8463 32.2326C49.7198 32.1608 49.5768 32.123 49.4313 32.123C49.2857 32.123 49.1427 32.1608 49.0162 32.2326L42.1157 36.2119C41.8553 36.3581 41.6925 36.6342 41.6925 36.9265V44.8689C41.6925 45.1612 41.8553 45.4375 42.1157 45.5836L49.0162 49.5629C49.1427 49.6348 49.2857 49.6726 49.4313 49.6726C49.5768 49.6726 49.7198 49.6348 49.8463 49.5629L56.7469 45.5836C57.0072 45.4375 57.17 45.1613 57.17 44.8689V25.0698C57.17 24.7612 57.0072 24.4852 56.7469 24.3389L52.6293 22.0488ZM51.9946 42.254C51.9946 42.3352 51.9621 42.4001 51.8969 42.4326L49.5371 43.7969C49.5041 43.8129 49.4679 43.8213 49.4313 43.8213C49.3946 43.8213 49.3584 43.8129 49.3254 43.7969L46.9657 42.4326C46.9005 42.4001 46.8679 42.3189 46.8679 42.254V39.5253C46.8679 39.444 46.9005 39.3791 46.9657 39.3467L49.3254 37.9822C49.3584 37.9662 49.3946 37.9578 49.4313 37.9578C49.4679 37.9578 49.5041 37.9662 49.5371 37.9822L51.8969 39.3467C51.9621 39.379 51.9946 39.4603 51.9946 39.5253V42.254ZM75.593 39.4603C75.8536 39.3142 76 39.038 76 38.7456V36.8129C76 36.5205 75.8372 36.2444 75.593 36.0982L68.7414 32.1352C68.6149 32.0634 68.4719 32.0256 68.3264 32.0256C68.1809 32.0256 68.0379 32.0634 67.9114 32.1352L61.0109 36.1144C60.7504 36.2606 60.5877 36.5367 60.5877 36.8292V44.7715C60.5877 45.0638 60.7504 45.3399 61.0109 45.4861L67.8626 49.3842C68.1231 49.5303 68.4321 49.5303 68.6763 49.3842L72.8263 47.078C72.9566 47.013 73.0379 46.8668 73.0379 46.7207C73.0379 46.5745 72.9566 46.4284 72.8263 46.3633L65.8932 42.384C65.7631 42.3029 65.6817 42.1729 65.6817 42.0267V39.5417C65.6817 39.3956 65.7631 39.2494 65.8932 39.1843L68.0579 37.9499C68.1212 37.9101 68.1946 37.889 68.2694 37.889C68.3443 37.889 68.4176 37.9101 68.481 37.9499L70.6455 39.1843C70.7757 39.2656 70.8571 39.3954 70.8571 39.5417V41.4908C70.8571 41.6369 70.9385 41.7831 71.0686 41.848C71.1989 41.9292 71.3615 41.9292 71.4918 41.848L75.593 39.4603Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
          <path
            d="M31 32.1677C30.8735 32.0959 30.7305 32.0581 30.585 32.0581C30.4395 32.0581 30.2965 32.0959 30.17 32.1677L23.3183 36.1143C23.0578 36.2604 22.9114 36.5366 22.9114 36.8289V44.7389C22.9114 45.0312 23.0742 45.3074 23.3183 45.4535L30.17 49.4004C30.2965 49.4722 30.4395 49.51 30.585 49.51C30.7305 49.51 30.8735 49.4722 31 49.4004L37.8518 45.4535C38.1121 45.3074 38.2587 45.0312 38.2587 44.7389V36.829C38.2587 36.5367 38.0958 36.2606 37.8518 36.1144L31 32.1677Z"
            stroke="currentColor"
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
          />
        </>
      )
  }
}

const BrandsNode = forwardRef((props, ref) => {
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

BrandsNode.displayName = 'BrandsNode'

export default BrandsNode
