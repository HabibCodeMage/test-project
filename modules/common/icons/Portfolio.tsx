
import * as React from "react"
import Svg, { Path } from "react-native-svg"

import { SvgProps } from 'react-native-svg';

const PortfolioIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="#8C9099"
      {...props}
    >
      <Path
        d="M21.926 11.9a1.25 1.25 0 10-2.491.205l2.491-.205zm-1.214.87h-1.25 1.25zm-18.462 0H1h1.25zm6.793-7.603a1.25 1.25 0 00-.764-2.38l.764 2.38zM22.25 12v1.25c.69 0 1.25-.56 1.25-1.25h-1.25zm-10-10l-.002 1.25h.002V2zm-4.087.87l-.51-1.141a1.25 1.25 0 00-.63 1.651l1.14-.51zM12.25 12l-1.141.51c.201.45.648.74 1.14.74V12zm7.185.105c.018.218.027.44.027.664h2.5c0-.292-.012-.582-.036-.87l-2.491.206zm.027.664a7.983 7.983 0 01-7.981 7.981v2.5c5.786 0 10.48-4.694 10.48-10.48h-2.5zM11.48 20.75A7.983 7.983 0 013.5 12.77H1c0 5.786 4.694 10.48 10.48 10.48v-2.5zM3.5 12.77c0-1.692.537-3.339 1.533-4.705l-2.02-1.473A10.485 10.485 0 001 12.77h2.5zm1.533-4.705a7.985 7.985 0 014.01-2.898l-.764-2.38a10.485 10.485 0 00-5.266 3.805l2.02 1.473zM23.5 12C23.5 5.787 18.463.75 12.25.75v2.5A8.75 8.75 0 0121 12h2.5zM12.252.75a11.216 11.216 0 00-4.6.979L8.675 4.01a8.716 8.716 0 013.574-.761l.004-2.5zm-5.23 2.63l4.087 9.13 2.282-1.02-4.087-9.13-2.282 1.02zm5.228 9.87h10v-2.5h-10v2.5z"
      />
    </Svg>
  )
}

export default PortfolioIcon
