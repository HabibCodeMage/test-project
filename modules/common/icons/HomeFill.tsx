import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import { SvgProps } from 'react-native-svg';

const HomeFillIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
      width={23}
      height={24}
      viewBox="0 0 23 24"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_530_5919)">
        <Path
          d="M8.158 22.201v-3.567c0-.91.743-1.65 1.66-1.65h3.354c.44 0 .863.175 1.174.484.312.309.487.728.487 1.166V22.2c-.003.379.146.743.415 1.011.269.27.634.42 1.016.42h2.288a4.037 4.037 0 002.85-1.166 3.978 3.978 0 001.182-2.826V9.477c0-.857-.383-1.67-1.045-2.22l-7.782-6.17a3.614 3.614 0 00-4.607.083L1.545 7.258A2.886 2.886 0 00.417 9.477v10.152c0 2.211 1.805 4.003 4.032 4.003h2.236c.792 0 1.435-.634 1.441-1.42l.032-.01z"
          fill="#EF7D00"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_530_5919">
          <Path fill="#fff" d="M0 0H23V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default HomeFillIcon
