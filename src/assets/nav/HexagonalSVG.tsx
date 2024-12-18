import React from "react";
import Svg, { G, Path } from "react-native-svg";

export default function HexagonalSVG({ style }: { style?: any }) {
  return (
    <Svg
      x="0px"
      y="0px"
      viewBox="0 0 256 256"
      enable-background="new 0 0 256 256"
      style={style}
    >
      <G>
        <Path
          fill="#000000"
          d="M134.5,0.3c1.7,0.4,3.8,0.5,5.6,1.1c3.9,1.3,7.8,2.4,11.3,4.1c5.7,2.8,11,6.4,16.4,9.7c8.6,5.3,17.6,10,26.2,15.2c2,1.2,4,2.1,6,3.2c2.6,1.4,5.3,3.3,8,4.8c6.9,3.8,13.4,7.4,19.4,11.9c1.8,1.3,3.6,3.3,4.9,5.1c1.1,1.5,2.7,2.7,3.8,4.3c2.9,4.2,5.2,9,7.2,14.1c4.1,11,2.4,28.5,2.4,42.9c0.1,12.9,0.1,25.7,0.2,38.6c0,11,0,20.9-3.2,28.6c-4.7,11.5-11.9,19.9-21.6,26.4c-4.9,3.2-10.4,5.5-15.4,8.6c-8.2,5-16.8,9.8-25.3,14.5c-12.6,6.9-23.2,15.5-37.8,20.3c-3.8,1.3-8.2,2.2-13.4,2.2c-1.6,0-3.2,0-4.8,0c-4.6-1-8.9-1.2-12.9-2.7c-9.5-3.5-17.4-8.8-25.4-13.8c-8.7-5.4-17.8-10.1-26.5-15.4c-8.2-5-17.2-8.8-25.1-14.1c-9-6-16.1-14.2-20.5-24.8c-2.6-6.3-3.7-13.7-3.7-22.6c0-2.9-0.4-6.6,0.2-9.2c0.7-3.3-0.5-8,0.2-11.3c0-4,0-8,0-12.1c0-10.8-0.3-20.9-0.3-31.5c0-3.8-0.4-8.6,0.3-11.9c0.1-1.2,0.1-2.4,0.2-3.7c0.7-2.5,0.9-5.3,1.7-7.8c2.2-6.5,5.1-12,8.7-17c4.1-5.6,10.8-10.6,16.9-14.3c2.1-1.3,4.3-2.1,6.4-3.3c10.3-6.3,21.2-11.6,31.5-18c6.1-3.8,12.4-7.2,18.6-11c11-6.8,19.8-11.9,38.2-11.5C133.1,0.4,133.9,0.1,134.5,0.3z"
        />
      </G>
    </Svg>
  );
}
