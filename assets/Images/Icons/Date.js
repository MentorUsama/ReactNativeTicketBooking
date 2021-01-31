import React from "react"
import Svg, { Path, Defs, Pattern, Image } from 'react-native-svg';

function SvgComponent(props) {
    var { width = 30, height = 30 } = props;
    return (
        <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 9.999 12.332"
    >
      <Path
        d="M7.777 6.783H5v3.083h2.778zM7.222 0v1.233H2.778V0H1.667v1.233h-.556A1.172 1.172 0 00.006 2.466L0 11.1a1.177 1.177 0 001.111 1.233h7.777A1.18 1.18 0 0010 11.1V2.466a1.18 1.18 0 00-1.111-1.233h-.556V0zm1.667 11.1H1.111V4.316h7.777z"
        fill="#5641b6"
      />
    </Svg>
    )
}

export default SvgComponent
