import React from "react";

const PrimaryButton = ({ children, className, onClick, disabled }) => {
  return (
    <button
      className={`${className} py-3 flex items-center justify-center bg-primary text-white font-semibold text-center rounded hover:bg-violet-500 duration-300 active:scale-95 disabled:bg-secondary disabled:cursor-not-allowed`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
