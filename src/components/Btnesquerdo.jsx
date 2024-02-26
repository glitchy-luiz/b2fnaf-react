import React from 'react';

const Btnesquerdo = () => {
  const handleMouseOver = () => {
    window.scroll({left: 0, behavior: "smooth"})
  };

  return (
    <button
      className="ladoesq"
      onMouseOver={handleMouseOver}
    >
    </button>
  );
};

export default Btnesquerdo;