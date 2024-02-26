import React, { useState} from 'react';
import Globais from './Globais';

const Btncamera = () => {

    const [estado, setEstado] = useState('none');
    // const [btncam, setBtncam] = useState()
    const [camera, setCamera] = useState(Globais.camera)
    const [usando, setUsando] = useState(Globais.usandocam)

    const mostrarImagem = () => {
        setEstado(estado === 'none' ? 'block' : 'none');

        setCamera((prevCamera) => {
            const newUsando = prevCamera ? usando - 1 : usando + 1;
      
            Globais.porta2 = !prevCamera;
            console.log(Globais.camera);
      
            setUsando(newUsando);
            Globais.usandocam = newUsando;
      
            console.log(Globais.usandocam);
      
            return !prevCamera;
          });

      };
    
      const esconderImagem = () => {
        document.getElementById('imgcamera').style.backgroundImage = 'url(/src/assets/testecam2.jpg)';
      };

  return (
    <div>
    <button
      className="btncamera"
      onMouseOver={mostrarImagem} 
    >
    </button>
    <div className="trocacam" style={{display: estado}}>
        <div className="linha1">
            <button
            className="cam1"
            onClick={esconderImagem} 
            > 1
            </button>
            <button
            className="cam2"
            onClick={esconderImagem} 
            > 2
            </button>
            <button
            className="cam3"
            onClick={esconderImagem} 
            > 3
            </button>
        </div>
        <div className="linha2">
            <button
            className="cam4"
            onClick={esconderImagem} 
            > 4
            </button>
            <button
            className="cam5"
            onClick={esconderImagem} 
            > 5
            </button>
            <button
            className="cam6"
            onClick={esconderImagem} 
            > 6
            </button>
        </div>
        <div className="linha3">
            <button
            className="cam7"
            onClick={esconderImagem} 
            > 7
            </button>
            <button
            className="cam8"
            onClick={esconderImagem} 
            > 8
            </button>
            <button
            className="cam9"
            onClick={esconderImagem} 
            > 9
            </button>
        </div>
        <div className="linha4">
            <button
            className="cam10"
            onClick={esconderImagem} 
            > 10
            </button>
            <button
            className="cam11"
            onClick={esconderImagem} 
            > 11
            </button>
        </div>
    </div>
    <div id="imgcamera" style={{display: estado}}>   </div>
    </div>
  );
};

export default Btncamera;