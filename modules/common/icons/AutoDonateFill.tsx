import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import { SvgProps } from 'react-native-svg';

const AutoDonateFillIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_529_3944)">
        <Path
          d="M0 10.5c0 .83.67 1.5 1.5 1.5S3 11.33 3 10.5C3 8.016 5.016 6 7.5 6H15v1.5a1.502 1.502 0 002.564 1.064l3-3a1.502 1.502 0 000-2.123l-3-3a1.494 1.494 0 00-1.636-.324A1.5 1.5 0 0015 1.5V3H7.5A7.498 7.498 0 000 10.5zm24 3c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5c0 2.484-2.016 4.5-4.5 4.5H9v-1.5a1.502 1.502 0 00-2.564-1.064l-3 3a1.502 1.502 0 000 2.123l3 3a1.494 1.494 0 001.636.324A1.5 1.5 0 009 22.495V21h7.5c4.144 0 7.5-3.356 7.5-7.5z"
          fill="#EF7D00"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_529_3944">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default AutoDonateFillIcon
