import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import { SvgProps } from 'react-native-svg';
import { rem } from "../utils";

const SearchIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
      width={rem(33)}
      height={rem(32)}
      viewBox="0 0 33 32"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_529_3800)">
        <Path
          d="M23.804 20.126h-1.446l-.512-.494a11.84 11.84 0 002.873-7.74 11.893 11.893 0 10-11.893 11.893 11.84 11.84 0 007.74-2.872l.493.512v1.445L30.207 32l2.727-2.726-9.13-9.148zm-10.978 0a8.222 8.222 0 01-8.233-8.234 8.222 8.222 0 018.233-8.233 8.222 8.222 0 018.233 8.233 8.222 8.222 0 01-8.233 8.234z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_529_3800">
          <Path fill="#fff" transform="translate(.934)" d="M0 0H32V32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SearchIcon
