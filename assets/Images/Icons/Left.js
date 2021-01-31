import React from "react"
import Svg, { Path, Defs, Pattern, Image } from 'react-native-svg';

function SvgComponent(props) {
    var { width = 30, height = 30 } = props;
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 7.4 12"
        >
            <Path d="M7.4 10.6L2.8 6l4.6-4.6L6 0 0 6l6 6z" fill="#fff" />
        </Svg>
    )
}

export default SvgComponent
