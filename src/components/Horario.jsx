import React, { useState, useEffect } from 'react';
import '../app.css'
import Globais from './Globais';

const Horario = () => {

    const [horario, setHorario] = useState(Globais.horario)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setHorario((prevHorario) => prevHorario + 1)

            Globais.horario = setHorario
        }, 60000)

        return () => clearInterval(intervalId);

    }, [])

    return(
        <div className="horario">
            <h1>{horario}</h1>
        </div>
    )
}
export default Horario