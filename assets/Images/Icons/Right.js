import React from "react"
import Svg, { Path, Defs, Pattern, Image } from 'react-native-svg';

function SvgComponent(props) {
    var { width = 30, height = 30 } = props;
    return (
        <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 8.219 12.487"
      >
        <Path
          d="M.092 1.91L5.005 6.18l-4.27 4.913 1.496 1.299 5.568-6.408L1.391.415z"
          fill="#fff"
        />
      </Svg>
    )
}

export default SvgComponent
