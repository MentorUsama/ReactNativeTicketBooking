import React from "react"
import Svg, { Path, Defs, Pattern, Image } from 'react-native-svg';

function SvgComponent(props) {
    var { width = 30, height = 30 } = props;
    return (
        <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={9.998}
        height={14.283}
        viewBox="0 0 9.998 14.283"
        {...props}
      >
        <Path
          d="M5 0a5 5 0 00-5 5c0 3.749 5 9.284 5 9.284S10 8.748 10 5a5 5 0 00-5-5zm0 6.784A1.785 1.785 0 116.784 5 1.786 1.786 0 015 6.784z"
          fill="#5641b6"
        />
      </Svg>
    )
}

export default SvgComponent
