import React from "react"
import Svg, { Path, Defs, Pattern, Image } from 'react-native-svg';

function SvgComponent(props) {
    var { width = 30, height = 30 } = props;
    return (
        <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 16 16"
      >
        <Path
          d="M0 16v-2c0-2.2 3.6-4 8-4s8 1.8 8 4v2zM4 4a4 4 0 114 4 4 4 0 01-4-4z"
          fill="#5641b6"
        />
      </Svg>
    )
}

export default SvgComponent
