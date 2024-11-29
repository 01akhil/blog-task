import React from 'react';

const Button = ({ label, bgColor, icon }) => {
  return (
    <button className={`flex items-center gap-2 text-white px-4 py-2 ${bgColor}`}>
      {icon && <img className="w-[2vw]" src={icon} alt={`${label} icon`} />}
      {label.toUpperCase()}
    </button>
  );
};

export default Button;
