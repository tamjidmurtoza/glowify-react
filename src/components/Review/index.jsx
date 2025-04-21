import React from 'react';
import { FaStar } from 'react-icons/fa';

export default function Review({ reviewNumber = 2, variant }) {
  return (
    <div className={`cs_rating${variant ? ` ${variant}` : ' cs_accent_color'}`}>
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <div
        className="cs_rating_percentage"
        style={{ width: `${reviewNumber * 20}%` }}
      >
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
    </div>
  );
}
