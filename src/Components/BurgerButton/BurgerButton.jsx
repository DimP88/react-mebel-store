import React from "react";

const BurgerButton = ({ isActive, onClick }) => {
  return (
    <button
      className={`burger-button ${isActive ? "active" : ""}`}
      onClick={onClick}
      aria-label="Menu"
    >
      <span className="burger-line"></span>
      <span className="burger-line"></span>
      <span className="burger-line"></span>
    </button>
  );
};

export default BurgerButton;
