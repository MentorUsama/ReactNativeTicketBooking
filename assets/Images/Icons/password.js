import React from "react"
import Svg, { Path, Defs, Pattern, Image } from 'react-native-svg';

function SvgComponent(props) {
    var { width = 30, height = 30 } = props;
    return (
<Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 22.458 12.25"
    >
      <Path
        d="M11.893 4.083a6.125 6.125 0 100 4.083h4.441v4.084h4.083V8.167h2.042V4.083zM6.125 8.167a2.042 2.042 0 112.042-2.042 2.048 2.048 0 01-2.042 2.042z"
        fill="#5641b6"
      />
    </Svg>
    )
}

export default SvgComponent
