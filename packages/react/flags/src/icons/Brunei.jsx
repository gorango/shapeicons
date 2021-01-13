
import { forwardRef } from 'react'
import { transform } from '../utils'

const renderString = ({ variant, strokeWidth='3', strokeLinecap='round', strokeLinejoin='round' }) => {
  switch (variant) {    
    case 'rectangle':
      return (
        <>
          <g clip-path="url(#clip09kku)"><path d="M120 0H0V80H120V0Z" fill="#F2C94C"/><path fill-rule="evenodd" clip-rule="evenodd" d="M163.714 70.7152L-36.2861 -9.28477L-43.7139 9.28477L156.286 89.2848L163.714 70.7152Z" fill="#F2F2F2"/><path d="M-43.7139 9.28487L156.286 89.2849L160 80.0001L-40 9.91821e-05L-43.7139 9.28487Z" fill="#333333"/><path fill-rule="evenodd" clip-rule="evenodd" d="M62 34.3689V50.7121C69.0063 49.7292 74.4 43.6569 74.4 36.3127C74.4 33.7421 73.7392 31.3273 72.5798 29.2321C74.722 31.9799 76 35.4468 76 39.2151C76 45.4034 72.5534 50.7789 67.4926 53.4919C69.5512 54.7582 71.2637 56.5272 72.4709 58.6381C73.0192 59.597 72.6864 60.8188 71.7275 61.3671C70.7687 61.9154 69.5468 61.5826 68.9985 60.6238C68.0814 59.0201 66.7652 57.6931 65.1857 56.7724C63.611 55.8546 61.8284 55.3716 60.0155 55.3689L60 55.3689L59.9846 55.3689C58.1718 55.3716 56.3891 55.8546 54.8145 56.7724C53.235 57.6931 51.9187 59.0201 51.0017 60.6238C50.4533 61.5826 49.2315 61.9154 48.2727 61.3671C47.3138 60.8188 46.981 59.597 47.5293 58.6381C48.7365 56.5272 50.4489 54.7582 52.5075 53.4919C47.4466 50.779 44 45.4034 44 39.2151C44 35.4466 45.2781 31.9796 47.4205 29.2317C46.2609 31.3271 45.6 33.742 45.6 36.3127C45.6 43.6569 50.9937 49.7292 58 50.7121V34.3689H57C55.6938 34.3689 54.5825 33.5341 54.1707 32.3689H54C52.3431 32.3689 51 31.0258 51 29.3689C51 29.144 51.0247 28.9249 51.0717 28.7141C49.8168 27.7825 48.9003 26.6621 48.4089 25.4395L58 23.7262V18.3689H62V23.7262L71.5911 25.4395C71.0997 26.6621 70.1832 27.7825 68.9283 28.7141C68.9752 28.9249 69 29.144 69 29.3689C69 31.0258 67.6569 32.3689 66 32.3689H65.8293C65.4175 33.5341 64.3062 34.3689 63 34.3689H62Z" fill="#EB5757"/></g>
          <defs><clipPath id="clip09kku"><rect width="120" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'square':
      return (
        <>
          <g clip-path="url(#clip0y4AZ)"><path d="M80 0H0V80H80V0Z" fill="#F2C94C"/><path fill-rule="evenodd" clip-rule="evenodd" d="M109.143 70.7152L-24.1908 -9.28477L-29.1426 9.28477L104.191 89.2848L109.143 70.7152Z" fill="#F2F2F2"/><path d="M-29.1428 9.28486L104.191 89.2849L106.667 80.0001L-26.6668 9.15527e-05L-29.1428 9.28486Z" fill="#333333"/><path fill-rule="evenodd" clip-rule="evenodd" d="M42 34.3689V50.7121C49.0063 49.7292 54.4 43.6569 54.4 36.3127C54.4 33.7421 53.7392 31.3273 52.5798 29.2321C54.722 31.9799 56 35.4468 56 39.2151C56 45.4034 52.5534 50.7789 47.4926 53.4919C49.5512 54.7582 51.2637 56.5272 52.4709 58.6381C53.0192 59.597 52.6864 60.8188 51.7275 61.3671C50.7687 61.9155 49.5468 61.5826 48.9985 60.6238C48.0814 59.0201 46.7652 57.6931 45.1857 56.7724C43.611 55.8546 41.8284 55.3716 40.0155 55.3689L40 55.3689L39.9846 55.3689C38.1718 55.3716 36.3891 55.8546 34.8145 56.7724C33.235 57.6931 31.9187 59.0201 31.0017 60.6238C30.4533 61.5826 29.2315 61.9155 28.2727 61.3671C27.3138 60.8188 26.981 59.597 27.5293 58.6381C28.7365 56.5272 30.4489 54.7583 32.5075 53.4919C27.4466 50.779 24 45.4034 24 39.2151C24 35.4467 25.2781 31.9796 27.4205 29.2317C26.2609 31.3271 25.6 33.742 25.6 36.3127C25.6 43.6569 30.9937 49.7292 38 50.7121V34.3689H37C35.6938 34.3689 34.5825 33.5341 34.1707 32.3689H34C32.3431 32.3689 31 31.0258 31 29.3689C31 29.144 31.0247 28.9249 31.0717 28.7141C29.8168 27.7825 28.9003 26.6621 28.4089 25.4395L38 23.7262V18.3689H42V23.7262L51.5911 25.4395C51.0997 26.6621 50.1832 27.7825 48.9283 28.7141C48.9752 28.9249 49 29.144 49 29.3689C49 31.0258 47.6569 32.3689 46 32.3689H45.8293C45.4175 33.5341 44.3062 34.3689 43 34.3689H42Z" fill="#EB5757"/></g>
          <defs><clipPath id="clip0y4AZ"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
    case 'circle':
      return (
        <>
          <mask id="mask0DRfm" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#C4C4C4"/></mask>
          <g mask="url(#mask0DRfm)"><g clip-path="url(#clip0DRfm)"><path d="M80 0H0V80H80V0Z" fill="#F2C94C"/><path fill-rule="evenodd" clip-rule="evenodd" d="M109.143 70.7152L-24.1908 -9.28476L-29.1426 9.28477L104.191 89.2848L109.143 70.7152Z" fill="#F2F2F2"/><path d="M-29.1428 9.28486L104.191 89.2849L106.667 80.0001L-26.6668 9.15527e-05L-29.1428 9.28486Z" fill="#333333"/><path fill-rule="evenodd" clip-rule="evenodd" d="M42 34.3689V50.7121C49.0063 49.7292 54.4 43.6569 54.4 36.3127C54.4 33.7421 53.7392 31.3273 52.5798 29.2321C54.722 31.9799 56 35.4468 56 39.2151C56 45.4034 52.5534 50.7789 47.4926 53.4919C49.5512 54.7582 51.2637 56.5272 52.4709 58.6381C53.0192 59.597 52.6864 60.8188 51.7275 61.3671C50.7687 61.9155 49.5468 61.5826 48.9985 60.6238C48.0814 59.0201 46.7652 57.6931 45.1857 56.7724C43.611 55.8546 41.8284 55.3716 40.0155 55.3689L40 55.3689L39.9846 55.3689C38.1718 55.3716 36.3891 55.8546 34.8145 56.7724C33.235 57.6931 31.9187 59.0201 31.0017 60.6238C30.4533 61.5826 29.2315 61.9155 28.2727 61.3671C27.3138 60.8188 26.981 59.597 27.5293 58.6381C28.7365 56.5272 30.4489 54.7583 32.5075 53.4919C27.4466 50.779 24 45.4034 24 39.2151C24 35.4467 25.2781 31.9796 27.4205 29.2317C26.2609 31.3271 25.6 33.742 25.6 36.3127C25.6 43.6569 30.9937 49.7292 38 50.7121V34.3689H37C35.6938 34.3689 34.5825 33.5341 34.1707 32.3689H34C32.3431 32.3689 31 31.0258 31 29.3689C31 29.144 31.0247 28.9249 31.0717 28.7141C29.8168 27.7825 28.9003 26.6621 28.4089 25.4395L38 23.7262V18.3689H42V23.7262L51.5911 25.4395C51.0997 26.6621 50.1832 27.7825 48.9283 28.7141C48.9752 28.9249 49 29.144 49 29.3689C49 31.0258 47.6569 32.3689 46 32.3689H45.8293C45.4175 33.5341 44.3062 34.3689 43 34.3689H42Z" fill="#EB5757"/></g></g>
          <defs><clipPath id="clip0DRfm"><rect width="80" height="80" fill="white"/></clipPath></defs>
        </>
      )
  }
}

const FlagsBrunei = forwardRef((props, ref) => {
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

FlagsBrunei.displayName = 'FlagsBrunei'

export default FlagsBrunei