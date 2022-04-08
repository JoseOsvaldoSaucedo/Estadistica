import './App.scss';
import { useState } from 'react';
import Resultado from './Resultado';
function App() {

  const [result, setResult ] = useState("");

  const calcularIC = () => {
    var muestraN_input = document.getElementById('muestraN');
    var media_input = document.getElementById('media');
    var desviacion_input = document.getElementById('desviacion');
    var nivelConfianza_input = document.getElementById('nivelConfianza');

    var muestraN = muestraN_input.value;
    var media = media_input.value;
    var desviacion = desviacion_input.value;
    var nivelConfianza = nivelConfianza_input.value;
    resultadoIC(muestraN, media, desviacion, nivelConfianza)
    // return formulaIC();
  }

  const resultadoIC = (sizeMuestra, media, desviacionE, nivelConfianza) => {
    var coeficienteConfianza = 0;

    if(!desviacionE){
      console.log('no hay desviacion estandar');
      desviacionE = Math.sqrt(((media * sizeMuestra) - media)  )

    }

    switch (nivelConfianza) {
      case '0.99':
        coeficienteConfianza = 2.5758;
        break;
      case '0.98':
        coeficienteConfianza = 2.3263;
        break;
      case '0.97':
        coeficienteConfianza = 2.1701;
        break;
      case '0.96':
        coeficienteConfianza = 2.0537;
        break;
      case '0.95':
        coeficienteConfianza = 1.96;
        break;
      case '0.94':
        coeficienteConfianza = 1.8808;
        break;
      case '0.93':
        coeficienteConfianza = 1.8119;
        break;
      case '0.92':
        coeficienteConfianza = 1.7507;
        break;
      case '0.91':
        coeficienteConfianza = 1.6954;
        break;
      case '0.9':
        coeficienteConfianza = 1.6449;
        break;
        case '0.90':
          coeficienteConfianza = 1.6449;
          break;

      default:
        break;
    }
    var int_media = parseFloat(media);
    var int_coeficienteConfianza = parseFloat(coeficienteConfianza);
    var int_desviacionE = parseFloat(desviacionE);
    var int_sizeMuestra = parseFloat(sizeMuestra)

    if(!int_media || !int_coeficienteConfianza || !int_desviacionE || !int_sizeMuestra){
      setResult('Introduce todos los campos')
    }else{
      var intervaloConfianza = `${int_media -  int_coeficienteConfianza * (int_desviacionE / Math.sqrt(int_sizeMuestra))} a ${int_media + int_coeficienteConfianza * (int_desviacionE / Math.sqrt(int_sizeMuestra))}`
      setResult(intervaloConfianza)
    }

  }

  return (
    <div className="App">
      <div>
        <h1>Calculadora estadistica</h1>
        <h2>Ingresa los valores para sacar el Intervalo de confianza (IC)</h2>
      </div>

      <div className='contenedor'>
        <div className="contenedorInputs">
          <label htmlFor="">Tamaño de la muestra (n)</label>
          <input id='muestraN' type="text" />
          <label htmlFor="">Media (µ)</label>
          <input id='media' type="text" />
          <label htmlFor="">Desviacion estandar (s ó σ )</label>
          <input id='desviacion' type="text" />
          <label htmlFor="">Nivel de confianza (a)</label>
          <input id='nivelConfianza' type="text" />
          <button onClick={calcularIC}>Calcular</button>
        </div>
    {result  ? <Resultado resultado = {result  ? result : "Introduce los datos solicitados"}/> : null}
      </div>
      <aside>
        <h1>Integrantes</h1>
        <ul>
          <li>Montserrath Acosta</li>
          <li>Martinez Ian</li>
          <li>Renteria Diana</li>
          <li>Saucedo Osvaldo</li>
        </ul>
      </aside>
    </div>
  );
}

export default App;
