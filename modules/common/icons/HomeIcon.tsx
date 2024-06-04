import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import { SvgProps } from 'react-native-svg';

const HomeIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
      width={30}
      height={25}
      viewBox="0 0 30 25"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_570_16363)">
        <Path
          d="M14.665 2.971l-.06-.045-.06.045-8.929 6.697-.04.03v12.268h5.302v-6.478a3.727 3.727 0 017.454 0v6.478h5.302V9.698l-.04-.03-8.929-6.697zm-1.53-1.88a2.451 2.451 0 012.94 0l8.93 6.696a2.45 2.45 0 01.98 1.96v12.119a2.451 2.451 0 01-2.451 2.45h-6.25a1.303 1.303 0 01-1.303-1.302v-7.526a1.376 1.376 0 00-2.752 0v7.526a1.303 1.303 0 01-1.303 1.303h-6.25a2.451 2.451 0 01-2.451-2.451V9.748a2.451 2.451 0 01.98-1.961l8.93-6.697z"
          fill="#8C9099"
          stroke="#fff"
          strokeWidth={0.2}
        />
      </G>
        <Defs>
        <ClipPath id="clip0_570_16363">
          <Path fill="#fff" transform="translate(.5)" d="M0 0H29V25H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default HomeIcon
