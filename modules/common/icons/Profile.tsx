import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { SvgProps } from 'react-native-svg';

const ProfileIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
      width={32}
      height={24}
      viewBox="0 0 32 24"
      fill="none"
      stroke="#8C9099"
      {...props}
    >
      <Path
        d="M5.333 20a5.333 5.333 0 015.333-5.334h10.667a5.333 5.333 0 015.333 5.333A2.667 2.667 0 0124 22.666H8a2.667 2.667 0 01-2.667-2.667z"
        strokeWidth={2.66667}
        strokeLinejoin="round"
      />
      <Path
        d="M16 9.333a4 4 0 100-8 4 4 0 000 8z"
        strokeWidth={2.66667}
      />
    </Svg>
  )
}

export default ProfileIcon
