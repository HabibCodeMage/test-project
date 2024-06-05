import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { SvgProps } from 'react-native-svg';

const PortFolioFillIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      {...props}
    >
      <Path
        d="M26.116 14.003c.025.303.038.61.038.92C26.154 21.038 21.192 26 15.077 26 8.96 26 4 21.038 4 14.923a11.082 11.082 0 017.693-10.55"
        stroke="#EF7D00"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <Path
        d="M28 14c0-6.628-5.372-12-12-12a11.959 11.959 0 00-4.904 1.044L16 14h12z"
        stroke="#EF7D00"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default PortFolioFillIcon
