import { SVGProps, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg fill={'none'} height={16} width={16} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <g clipPath={'url(#a)'} fill={'#fff'}>
      <path
        d={
          'M8 1.833a6.667 6.667 0 1 0 0 13.334A6.667 6.667 0 0 0 8 1.833Zm0 12A5.333 5.333 0 1 1 8 3.168a5.333 5.333 0 0 1 0 10.665Z'
        }
      />
      <path
        d={
          'M8.227 5.467a1.133 1.133 0 0 0-1.234-.2 1.067 1.067 0 0 0-.666.986v4.494a1.067 1.067 0 0 0 .666.986c.145.066.302.1.46.1a1.16 1.16 0 0 0 .774-.3l2.44-2.246a1.068 1.068 0 0 0 0-1.574l-2.44-2.246Zm-.56 4.766V6.767L9.54 8.5l-1.873 1.733Z'
        }
      />
    </g>
    <defs>
      <clipPath id={'a'}>
        <path d={'M0 .5h16v16H0z'} fill={'#fff'} />
      </clipPath>
    </defs>
  </svg>
)

export const PlayCircle = memo(SvgComponent)
