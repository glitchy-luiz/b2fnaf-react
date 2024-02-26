import React, { useState, useEffect } from 'react';
import '../app.css'
import Globais from './Globais';

const Portaesq = () => {

    const [estado, setEstado] = useState('hidden');
    const [porta1, setPorta1] = useState(Globais.porta1)
    const [usando, setUsando] = useState(Globais.usandoesq)
    
    const abrirfechar1 = () => {
      setEstado(estado === 'hidden' ? 'visible' : 'hidden');
      console.log(estado)

      setPorta1((prevPorta1) => {
        const newUsando = prevPorta1 ? usando - 1 : usando + 1;
  
        Globais.porta1 = !prevPorta1;
        console.log(Globais.porta1);
  
        setUsando(newUsando);
        Globais.usandoesq = newUsando;
  
        console.log(Globais.usandoesq);
  
        return !prevPorta1;
      });
      
    };

    return (
        <div className='portabtn'>
        <div className="portae" style={{visibility: estado}}></div>
        <button className="btnportae" onClick={abrirfechar1}></button>
        </div>
    );
}

export default Portaesq;