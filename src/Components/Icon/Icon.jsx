import React from "react";
import Icons from "../../assets/sprite.svg";

const Icon = ({ id, className, size }) => {
  return (
    <svg width={size} height={size} className={className}>
      <use href={Icons + "#" + id}></use>
    </svg>
  );
};

export default Icon;
