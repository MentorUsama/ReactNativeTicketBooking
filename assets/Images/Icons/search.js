import React from "react"
import Svg, { Path, Defs, Pattern, Image } from 'react-native-svg';

function SvgComponent(props) {
    var { width = 30, height = 30 } = props;
    return (
        <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 16 15.9"
      >
        <Path
          d="M15.7 14.3l-4.2-4.2a1.136 1.136 0 00-.8-.3A6.229 6.229 0 0012 6a6 6 0 10-6 6 5.746 5.746 0 003.8-1.4.829.829 0 00.3.8l4.2 4.2a.967.967 0 001.4 0 .853.853 0 000-1.3zM6 10.5A4.5 4.5 0 1110.5 6 4.481 4.481 0 016 10.5z"
          fill="#5641b6"
        />
      </Svg>
    )
}

export default SvgComponent
