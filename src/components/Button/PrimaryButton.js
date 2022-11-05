import React from "react";

const PrimaryButton = ({ children, className, onClick }) => {
  return (
    <button
      className={`${className} py-3 bg-primary text-white font-semibold text-center rounded hover:bg-violet-500 duration-300 active:scale-95`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
