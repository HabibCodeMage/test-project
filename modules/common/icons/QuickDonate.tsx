import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { SvgProps } from 'react-native-svg';

const QuickDonateIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
      width={20}
      height={30}
      viewBox="0 0 20 30"
      fill="none"
      {...props}
    >
      <Path
        d="M8.791 27.277a.896.896 0 01-.32 0 1.107 1.107 0 01-.787-1.08v-.147l1.2-8.467H3.098a1.067 1.067 0 01-.947-.573 1.133 1.133 0 010-1.147l2.667-4.653 5.466-8.693a1.053 1.053 0 011.227-.467 1.107 1.107 0 01.787 1.08v.147l-1.2 8.466h5.8a1.067 1.067 0 01.946.574 1.133 1.133 0 010 1.146l-2.666 4.654L9.71 26.81a1.054 1.054 0 01-.92.467zM4.578 15.53H9.91a1.12 1.12 0 011.107 1.133v.147l-.787 5.52 3.333-5.333 1.92-3.307h-5.333a1.12 1.12 0 01-1.107-1.133v-.147l.787-5.52-3.333 5.333-1.92 3.307z"
        fill="#EF7D00"
      />
    </Svg>
  )
}

export default QuickDonateIcon
