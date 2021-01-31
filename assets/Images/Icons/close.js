import React from "react"
import Svg, { Path, Defs, Pattern, Image } from 'react-native-svg';

function SvgComponent(props) {
    var { width = 30, height = 30 } = props;
    return (
        <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 20 20"
      >
        <Path
          d="M12.59 6L10 8.59 7.41 6 6 7.41 8.59 10 6 12.59 7.41 14 10 11.41 12.59 14 14 12.59 11.41 10 14 7.41zM10 0a10 10 0 1010 10A9.991 9.991 0 0010 0zm0 18a8 8 0 118-8 8.011 8.011 0 01-8 8z"
          fill="#5641b6"
        />
      </Svg>
    )
}

export default SvgComponent
