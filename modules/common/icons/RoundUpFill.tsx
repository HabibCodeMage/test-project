import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { SvgProps } from 'react-native-svg';

const RoundUpFillIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
      width={28}
      height={25}
      viewBox="0 0 28 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2 7.333V18a2.667 2.667 0 002.667 2.667h8M2 7.333V4.667A2.667 2.667 0 014.667 2h18.666A2.667 2.667 0 0126 4.667v2.666m-24 0h24m0 0v4M7.333 12.667H14m8 2.666v4m0 0v4m0-4h-4m4 0h4"
        stroke="#EF7D00"
        strokeWidth={2.66667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default RoundUpFillIcon
