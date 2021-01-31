import * as React from "react"
import Svg ,{Path,G} from 'react-native-svg';

function SvgComponent(props) {
  var {width=30,height=30}=props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 52.245 53.75"
      {...props}
    >
      <Path
        data-name="Path 1359"
        d="M27.008 50.473h-1.417l.089-1.773h1.24A23.466 23.466 0 103.542 25.237a17.045 17.045 0 00.089 2.125l-1.771.177a20 20 0 01-.089-2.3 25.237 25.237 0 1125.237 25.234zm0 0"
        fill="#415a87"
      />
      <Path
        data-name="Path 1360"
        d="M12.396 11.511h30.107v14.168H12.396zm0 0"
        fill="#415a87"
      />
      <Path
        data-name="Path 1361"
        d="M30.107 18.595a2.657 2.657 0 11-2.657-2.656 2.657 2.657 0 012.657 2.656zm0 0"
        fill="#fb8549"
      />
      <G data-name="Group 907" fill="#fb8549">
        <Path
          data-name="Path 1362"
          d="M16.824 17.71h-1.772v-3.542h3.542v1.771h-1.771zm0 0"
        />
        <Path
          data-name="Path 1363"
          d="M18.595 23.023h-3.543v-3.542h1.771v1.771h1.771zm0 0"
        />
        <Path
          data-name="Path 1364"
          d="M39.847 23.023h-3.543v-1.771h1.771v-1.771h1.771zm0 0"
        />
        <Path
          data-name="Path 1365"
          d="M39.847 17.71h-1.771v-1.771h-1.772v-1.771h3.542zm0 0"
        />
      </G>
      <Path
        data-name="Path 1366"
        d="M19.48 17.71h2.657v1.771H19.48zm0 0"
        fill="#fb8549"
      />
      <Path
        data-name="Path 1367"
        d="M32.762 17.71h2.656v1.771h-2.656zm0 0"
        fill="#fb8549"
      />
      <Path
        data-name="Path 1368"
        d="M-.001 30.107h8.856v13.282H-.001zm0 0"
        fill="#415a87"
      />
      <Path
        data-name="Path 1369"
        d="M4.426 30.107h1.771v6.2H4.426zm0 0"
        fill="#a5cdfa"
      />
      <Path
        data-name="Path 1370"
        d="M4.426 38.076h1.771v2.656H4.426zm0 0"
        fill="#676b7f"
      />
      <Path
        data-name="Path 1371"
        d="M28.512 53.75l-4.074-4.073 4.162-4.251 1.24 1.328-2.922 2.922 2.922 2.833zm0 0"
        fill="#415a87"
      />
      <Path
        data-name="Path 1372"
        d="M39.405 34.007l-10.715 3.1a2.448 2.448 0 01-.8.089l-10.183-1.771h6.2a2.657 2.657 0 000-5.313H12.84a1.709 1.709 0 00-.885.265l-3.1 1.771v8.678l10.006 4.162a1.944 1.944 0 001.24.089l20.721-6.464a2.464 2.464 0 001.594-3.011 2.325 2.325 0 00-3.011-1.594zm0 0"
        fill="#efccbf"
      />
    </Svg>
  )
}

export default SvgComponent
