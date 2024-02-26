import React, { useState, useEffect } from 'react';
import Btnesquerdo from "../components/btnesquerdo";
import Btndireito from "../components/Btndireito";
import Btncamera from '../components/Btncamera';
import Portaesq from '../components/Portaesq';
import Portadir from '../components/Portadir';
import Globais from '../components/Globais';
import Bateria from '../components/Bateria';
import Horario from '../components/Horario';


function Noite() {

    return (
      <div className="office1">
        <Btnesquerdo/>
        <Btncamera/>
        <Btndireito/>
        <Portaesq />
        <Portadir />
        <Bateria/>
        <Horario/>
      </div>
    )
  }
  export default Noite
  