import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { SvgProps } from 'react-native-svg';

const RightArrow: React.FC<SvgProps> = (props) => {
  return (
    <Svg
      width={6}
      height={10}
      viewBox="0 0 6 10"
      fill="none"
      {...props}
    >
      <Path
        d="M1 9l4-4-4-4"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default RightArrow
