import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { SvgProps } from 'react-native-svg';

const DonationCount: React.FC<SvgProps> = (props) => {
  return (
    <Svg
      width={16}
      height={17}
      viewBox="0 0 16 17"
      fill="none"
      {...props}
    >
      <Path
        d="M7 14.332s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 100-6 3 3 0 000 6zm-5.784 6a2.238 2.238 0 01-.216-1c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 005 9.332c-4 0-5 3-5 4s1 1 1 1h4.216zm-.716-6a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
        fill="#5A606D"
      />
    </Svg>
  )
}

export default DonationCount
