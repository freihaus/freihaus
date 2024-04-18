import React from 'react';

const CustomIcon = ({ size = 24, color = "#000", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 648.9 832"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path
      d="M163.1,0h300.9c10.9,0,17.3,12.1,11.3,21.1l-49.4,74.1c-6.2,9.3-16.6,14.9-27.8,14.9h-207.8c-37.5,0-68,30.4-68,68v133.2c0,37.5,30.4,68,68,68h181.1c9.6,0,16.2,9.7,12.6,18.6l-38.1,95.2c-2.1,5.2-7.1,8.5-12.6,8.5h-143.1c-37.5,0-68,30.4-68,68v228.9c0,18.5-15,33.5-33.5,33.5h-55.4C15,832,0,817,0,798.5V163.1c0-90.1,73-163.1,163.1-163.1Z"
      fill="#00bfbf"
    />
    <path
      d="M560.2,0h55.1c18.5,0,33.6,15,33.6,33.6v764.8c0,18.5-15,33.6-33.6,33.6h-55.2c-18.5,0-33.6-15-33.6-33.6v-228.8c0-37.5-30.4-68-68-68h-71c-9.6,0-16.2-9.7-12.6-18.6l38.1-95.2c2.1-5.2,7.1-8.5,12.6-8.5h32.9c37.5,0,68-30.4,68-68V33.7c0-18.6,15.1-33.7,33.7-33.7h0Z"
      fill="#35231e"
    />
  </svg>
);

export default CustomIcon;
