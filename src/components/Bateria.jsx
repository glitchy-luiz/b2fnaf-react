import React, { useState, useEffect } from 'react';
import '../app.css'
import Globais from './Globais';

const Bateria = () => {

    const [bateria, setBateria] = useState(Globais.bateria)
    var [usando, setUsando] = useState(Globais.usando)


    useEffect(() => {
        const intervalId = setInterval(() => {
            setBateria((prevBateria) => prevBateria - (0.05 * (Globais.usandoesq + Globais.usandodir + Globais.usandocam - 2)))
        }, 450)

        // return () => clearInterval(intervalId);

    }, [])


    const limitarCaracteres = (texto, limite) => {
        return texto.length > limite ? `${texto.slice(0, limite)}` : texto;
      };
    

    return (
        <div className="bateria">
            <h1>{Globais.usandoesq + Globais.usandodir + Globais.usandocam - 2}</h1>
            <h1 className="porcentagem">{limitarCaracteres(`${bateria}%`, 4)}</h1>
        </div>
    );
}

export default Bateria;