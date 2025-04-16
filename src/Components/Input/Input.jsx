import React from "react";

const Input = ({
  type = "text",
  name,
  label,
  error,
  placeholder,
  required = false,
  ...props
}) => {
  return (
    <div className="inptcom__wrapper">
      {label && (
        <label htmlFor={name} className="inptcom__label">
          {label} {required && <span>*</span>}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={`inptcom__field ${error ? "inptcom__error" : ""}`}
        {...props}
      />
      {error && <p className="inptcom__error-message">{error}</p>}
    </div>
  );
};

export default Input;
