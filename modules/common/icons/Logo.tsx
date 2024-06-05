import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { SvgProps } from 'react-native-svg';

const Logo: React.FC<SvgProps> = (props) => {
  return (
    <Svg
      width={192}
      height={119}
      viewBox="0 0 192 119"
      fill="none"
      {...props}
    >
      <Path
        d="M148.439 26.561c-12.535-60.788 26.146-122.808 42.784-144.992C133.12-163.329 9.625-213.984-19.532-57.423-37.806 40.708-14.558 84.879 16.306 104.99c32.91 21.445 79.266 17.222 108.656-8.839 17.48-15.5 29.925-38.321 23.478-69.59z"
        fill="#fff"
      />
    </Svg>
  )
}

export default Logo
