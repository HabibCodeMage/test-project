import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { SvgProps } from 'react-native-svg';

const RoundUpIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
      width={29}
      height={26}
      viewBox="0 0 29 26"
      stroke="#8C9099"
      fill="none"
      {...props}
    >
      <Path
        d="M2.5 7.333V18a2.667 2.667 0 002.667 2.667h8M2.5 7.333V4.667A2.667 2.667 0 015.167 2h18.666A2.667 2.667 0 0126.5 4.667v2.666m-24 0h24m0 0v4M7.833 12.667H14.5m8 2.666v4m0 0v4m0-4h-4m4 0h4"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default RoundUpIcon
