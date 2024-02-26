import React, { useState, useEffect } from 'react';
import Globais from './Globais';

const Portadir = () => {

    const [estado, setEstado] = useState('hidden');
    const [porta2, setPorta2] = useState(Globais.porta2)
    const [usando, setUsando] = useState(Globais.usandodir)
    
    const abrirfechar2 = () => {
      setEstado(estado === 'hidden' ? 'visible' : 'hidden');

      setPorta2((prevPorta2) => {
        const newUsando = prevPorta2 ? usando - 1 : usando + 1;
  
        Globais.porta2 = !prevPorta2;
        console.log(Globais.porta2);
  
        setUsando(newUsando);
        Globais.usandodir = newUsando;
  
        console.log(Globais.usandodir);
  
        return !prevPorta2;
      });
    };

    return (
        <div className='portabtn'>
        <button className="btnportad" onClick={abrirfechar2}></button>
        <div className="portad" style={{visibility: estado}}></div>
        </div>
    );
}

export default Portadir;