import React from 'react';

const Btndireito = () => {
  const handleMouseOver = () => {
    window.scroll({left: window.innerWidth, behavior: "smooth"})
  };

  return (
    <button
      className="ladodir"
      onMouseOver={handleMouseOver}
    >
    </button>
  );
};

export default Btndireito;