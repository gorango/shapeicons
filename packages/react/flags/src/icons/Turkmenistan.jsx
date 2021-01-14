
import React, { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g filter="url(#filter0_d)"><path d="M124 0H4V80H124V0Z" fill="#219653"/><path d="M44 0H24V80H44V0Z" fill="#EB5757"/><path d="M28 14.3431L31.5146 12H36.4854L40 14.3431V17.6568L36.4852 20H31.5148L28 17.6568V14.3431Z" fill="#219653" stroke="#F2C94C" stroke-linejoin="round"/><path d="M35.5 25L34 24L32.5 25H30V26.6667L28 28L30 29.3333V31H32.5L34 32L35.5 31H38V29.3333L40 28L38 26.6667V25H35.5Z" fill="#219653" stroke="#F2C94C" stroke-linejoin="round"/><path d="M28 38.343L31.5145 36H36.4847L40 38.3435V41.6567L36.485 44H31.5141L28 41.6572V38.343Z" fill="#219653" stroke="#F2C94C" stroke-linejoin="round"/><path d="M31 39C31 38.4477 31.4477 38 32 38H36C36.5523 38 37 38.4477 37 39V41C37 41.5523 36.5523 42 36 42H32C31.4477 42 31 41.5523 31 41V39Z" fill="#EB5757"/><path d="M35.5 49L34 48L32.5 49H30V50.6667L28 52L30 53.3333V55H32.5L34 56L35.5 55H38V53.3333L40 52L38 50.6667V49H35.5Z" fill="#219653" stroke="#F2C94C" stroke-linejoin="round"/><path d="M28 62.3431L31.5146 60H36.4854L40 62.3431V65.6568L36.4852 68H31.5148L28 65.6568V62.3431Z" fill="#F2F2F2" stroke="#219653" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M90.4449 34.9648C93.1329 24.9331 87.2684 14.6246 77.321 11.7808C79.3944 11.6628 81.5217 11.8684 83.6373 12.4352C94.3066 15.2941 100.638 26.2608 97.7794 36.9301C94.9206 47.5994 83.9538 53.9311 73.2845 51.0723C71.1689 50.5054 69.2239 49.6197 67.4872 48.4808C77.5239 50.9917 87.7569 44.9966 90.4449 34.9648ZM73.7401 18.8564L75.3229 16.419L75.475 19.3212L78.2821 20.0734L75.569 21.1149L75.7211 24.0171L73.8922 21.7586L71.179 22.8L72.7618 20.3627L70.9329 18.1042L73.7401 18.8564ZM82.9116 26.7346L81.3288 29.172L78.5216 28.4198L80.3506 30.6783L78.7677 33.1156L81.4809 32.0742L83.3098 34.3327L83.1577 31.4305L85.8708 30.389L83.0637 29.6368L82.9116 26.7346ZM74.6181 38.7619L76.2009 36.3246L76.353 39.2267L79.1601 39.9789L76.447 41.0204L76.5991 43.9226L74.7702 41.6641L72.057 42.7055L73.6398 40.2682L71.8109 38.0097L74.6181 38.7619ZM64.6098 33.2187L63.027 35.656L60.2198 34.9039L62.0487 37.1624L60.4659 39.5997L63.1791 38.5582L65.008 40.8167L64.8559 37.9146L67.569 36.8731L64.7619 36.1209L64.6098 33.2187ZM62.0103 23.9956L63.5931 21.5583L63.7452 24.4605L66.5523 25.2126L63.8392 26.2541L63.9913 29.1563L62.1624 26.8978L59.4492 27.9392L61.032 25.5019L59.2031 23.2434L62.0103 23.9956Z" fill="#F2F2F2"/></g>
          <defs><filter id="filter0_d" x="0" y="0" width="128" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g filter="url(#filter0_d)"><path d="M84 0H4V80H84V0Z" fill="#219653"/><path d="M24 0H4V80H24V0Z" fill="#EB5757"/><path d="M8 14.3431L11.5146 12H16.4854L20 14.3431V17.6568L16.4852 20H11.5148L8 17.6568V14.3431Z" fill="#219653" stroke="#F2C94C" stroke-linejoin="round"/><path d="M15.5 25L14 24L12.5 25H10V26.6667L8 28L10 29.3333V31H12.5L14 32L15.5 31H18V29.3333L20 28L18 26.6667V25H15.5Z" fill="#219653" stroke="#F2C94C" stroke-linejoin="round"/><path d="M8 38.343L11.5145 36H16.4847L20 38.3435V41.6567L16.485 44H11.5141L8 41.6572V38.343Z" fill="#219653" stroke="#F2C94C" stroke-linejoin="round"/><path d="M11 39C11 38.4477 11.4477 38 12 38H16C16.5523 38 17 38.4477 17 39V41C17 41.5523 16.5523 42 16 42H12C11.4477 42 11 41.5523 11 41V39Z" fill="#EB5757"/><path d="M15.5 49L14 48L12.5 49H10V50.6667L8 52L10 53.3333V55H12.5L14 56L15.5 55H18V53.3333L20 52L18 50.6667V49H15.5Z" fill="#219653" stroke="#F2C94C" stroke-linejoin="round"/><path d="M8 62.3431L11.5146 60H16.4854L20 62.3431V65.6568L16.4852 68H11.5148L8 65.6568V62.3431Z" fill="#F2F2F2" stroke="#219653" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M70.4449 34.9648C73.1329 24.9331 67.2684 14.6246 57.321 11.7808C59.3944 11.6628 61.5217 11.8684 63.6373 12.4352C74.3066 15.2941 80.6383 26.2608 77.7794 36.9301C74.9206 47.5994 63.9538 53.9311 53.2845 51.0723C51.1689 50.5054 49.2239 49.6197 47.4872 48.4808C57.5239 50.9917 67.7569 44.9966 70.4449 34.9648ZM53.7401 18.8564L55.3229 16.419L55.475 19.3212L58.2821 20.0734L55.569 21.1149L55.7211 24.0171L53.8922 21.7586L51.179 22.8L52.7618 20.3627L50.9329 18.1042L53.7401 18.8564ZM62.9116 26.7346L61.3288 29.172L58.5216 28.4198L60.3506 30.6783L58.7677 33.1156L61.4809 32.0742L63.3098 34.3327L63.1577 31.4305L65.8708 30.389L63.0637 29.6368L62.9116 26.7346ZM54.6181 38.7619L56.2009 36.3246L56.353 39.2267L59.1601 39.9789L56.447 41.0204L56.5991 43.9226L54.7702 41.6641L52.057 42.7055L53.6398 40.2682L51.8109 38.0097L54.6181 38.7619ZM44.6098 33.2187L43.027 35.656L40.2198 34.9039L42.0487 37.1624L40.4659 39.5997L43.1791 38.5582L45.008 40.8167L44.8559 37.9146L47.569 36.8731L44.7619 36.1209L44.6098 33.2187ZM42.0103 23.9956L43.5931 21.5583L43.7452 24.4605L46.5523 25.2126L43.8392 26.2541L43.9913 29.1563L42.1624 26.8978L39.4492 27.9392L41.032 25.5019L39.2031 23.2434L42.0103 23.9956Z" fill="#F2F2F2"/></g>
          <defs><filter id="filter0_d" x="0" y="0" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0)"><g filter="url(#filter0_d)"><path d="M80 0H0V80H80V0Z" fill="#219653"/><path d="M20 0H0V80H20V0Z" fill="#EB5757"/><path d="M4 14.3431L7.51465 12H12.4854L16 14.3431V17.6568L12.4852 20H7.51479L4 17.6568V14.3431Z" fill="#219653" stroke="#F2C94C" stroke-linejoin="round"/><path d="M11.5 25L10 24L8.5 25H6V26.6667L4 28L6 29.3333V31H8.5L10 32L11.5 31H14V29.3333L16 28L14 26.6667V25H11.5Z" fill="#219653" stroke="#F2C94C" stroke-linejoin="round"/><path d="M4 38.343L7.51447 36H12.4847L16 38.3435V41.6567L12.485 44H7.51413L4 41.6572V38.343Z" fill="#219653" stroke="#F2C94C" stroke-linejoin="round"/><path d="M7 39C7 38.4477 7.44772 38 8 38H12C12.5523 38 13 38.4477 13 39V41C13 41.5523 12.5523 42 12 42H8C7.44772 42 7 41.5523 7 41V39Z" fill="#EB5757"/><path d="M11.5 49L10 48L8.5 49H6V50.6667L4 52L6 53.3333V55H8.5L10 56L11.5 55H14V53.3333L16 52L14 50.6667V49H11.5Z" fill="#219653" stroke="#F2C94C" stroke-linejoin="round"/><path d="M4 62.3431L7.51465 60H12.4854L16 62.3431V65.6568L12.4852 68H7.51479L4 65.6568V62.3431Z" fill="#F2F2F2" stroke="#219653" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M66.4449 34.9648C69.1329 24.9331 63.2684 14.6246 53.321 11.7808C55.3944 11.6628 57.5217 11.8684 59.6373 12.4352C70.3066 15.2941 76.6383 26.2608 73.7794 36.9301C70.9206 47.5994 59.9538 53.9311 49.2845 51.0723C47.1689 50.5054 45.2239 49.6197 43.4872 48.4808C53.5239 50.9917 63.7569 44.9966 66.4449 34.9648ZM49.7401 18.8564L51.3229 16.419L51.475 19.3212L54.2821 20.0734L51.569 21.1149L51.7211 24.0171L49.8922 21.7586L47.179 22.8L48.7618 20.3627L46.9329 18.1042L49.7401 18.8564ZM58.9116 26.7346L57.3288 29.172L54.5216 28.4198L56.3506 30.6783L54.7677 33.1156L57.4809 32.0742L59.3098 34.3327L59.1577 31.4305L61.8708 30.389L59.0637 29.6368L58.9116 26.7346ZM50.6181 38.7619L52.2009 36.3246L52.353 39.2267L55.1601 39.9789L52.447 41.0204L52.5991 43.9226L50.7702 41.6641L48.057 42.7055L49.6398 40.2682L47.8109 38.0097L50.6181 38.7619ZM40.6098 33.2187L39.027 35.656L36.2198 34.9039L38.0487 37.1624L36.4659 39.5997L39.1791 38.5582L41.008 40.8167L40.8559 37.9146L43.569 36.8731L40.7619 36.1209L40.6098 33.2187ZM38.0103 23.9956L39.5931 21.5583L39.7452 24.4605L42.5523 25.2126L39.8392 26.2541L39.9913 29.1563L38.1624 26.8978L35.4492 27.9392L37.032 25.5019L35.2031 23.2434L38.0103 23.9956Z" fill="#F2F2F2"/></g></g>
          <defs><filter id="filter0_d" x="-4" y="0" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs>
        </>
      )
  }
}

const FlagsTurkmenistan = forwardRef((props, ref) => {
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

FlagsTurkmenistan.displayName = 'FlagsTurkmenistan'

export default FlagsTurkmenistan
