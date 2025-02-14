import React from 'react';

const Button = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick} style={style} className="btn">
      {label}
    </button>
  );
};

export default Button;
