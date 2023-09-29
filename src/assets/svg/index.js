import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

export const ProfileIcon = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke="#FFFFFF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      color="#FFFFFF"
    >
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Circle cx="12" cy="7" r="4" />
      <Path d="M17.816 17.833a9 9 0 1 1 -11.632 0" />
    </Svg>
  );
};
