import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <>
      <button type="button" className="catalog-btn btn" onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
