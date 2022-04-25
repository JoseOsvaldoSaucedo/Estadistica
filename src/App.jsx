import './App.scss';
import { useState } from 'react';
import Resultado from './Resultado';
function App() {

  const [result, setResult ] = useState("");
  //Esta es una funcion, lo que hace es recolectar todos los datos de los campos de texto
  //Y asignarlos a variables, para poder guardar los valores
  //Y al final ejecutar otra funcion, que tiene como parametros los valores recolectados
  const calcularIC = () => {
    var muestraN_input = document.getElementById('muestraN');
    var media_input = document.getElementById('media');
    var desviacion_input = document.getElementById('desviacion');
    var nivelConfianza_input = document.getElementById('nivelConfianza');

    var muestraN = muestraN_input.value;
    var media = media_input.value;
    var desviacion = desviacion_input.value;
    var nivelConfianza = nivelConfianza_input.value;
    //esta es la funcion que ejecuta con los parametros, que en este caso son los valores introducidos
    resultadoIC(muestraN, media, desviacion, nivelConfianza)
  }
//Esta es la funcion de antes, lo que hace es obtener los valores que se introdujeron y operar con ellos
  const resultadoIC = (sizeMuestra, media, desviacionE, nivelConfianza) => {
    //Se declara la variable del coeficiente de confianza, pero como aun no es necesaria se le da el valor de 0
    var coeficienteConfianza = 0;
    //En caso de que no haya valor para la desviacion estandar, se manda un mensaje en consola avisando de que no hay
    //Y con otros valores se saca la la desviacion para poder seguir con los calculos
    if(!desviacionE){
      console.log('no hay desviacion estandar');
      desviacionE = Math.sqrt(((media * sizeMuestra) - media)  )

    }
    //Esta es una estructura condicional y toma como parametro el nivel de confianza introducido, como no es posible sacar este valor
    //Sin la tabla z, se hace lo siguiente
    
    switch (nivelConfianza) {
        //En caso de que el nivel de confianza sea de 0.99, el coeficiente de confianza sera igual a 2.5758
      case '0.99':
        coeficienteConfianza = 2.5758;
        break;
        //En caso de que el nivel de confianza sea de 0.98, el coeficiente de confianza sera igual a 2.3263
      case '0.98':
        coeficienteConfianza = 2.3263;
        break;
        //En caso de que el nivel de confianza sea de 0.97, el coeficiente de confianza sera igual a 2.1701 y asi hasta llegar al 0.9 o 0.90
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
    
    //Los valores que se introdujeron, se obtienen como texto, por lo cual no se puede operar con estos valores, asi que 
    //Lo que hacemos es esos valores, es convertirlos a decimales, para ahora si poder operar con ellos
    var int_media = parseFloat(media);
    var int_coeficienteConfianza = parseFloat(coeficienteConfianza);
    var int_desviacionE = parseFloat(desviacionE);
    var int_sizeMuestra = parseFloat(sizeMuestra)

    //En caso de que algun valor no se encuentre, se mostrara en un cuadro el mensaje de 'Introduce todos los campos'
    if(!int_media || !int_coeficienteConfianza || !int_desviacionE || !int_sizeMuestra){
      setResult('Introduce todos los campos')
      //En caso de que si esten todos los valores se haran las dos operaciones ppara poder sacar el intervalo de confianza
      //Esas dos operaciones se guardan como texto para poder introducir la letra 'a' en medio e indicar de que intervalo a que intervalo llega
      //Ese valor o texto, se guarda en la variable intervaloConfianza y se introduce dentro del cuadro de texto
    }else{
      var intervaloConfianza = `${int_media -  int_coeficienteConfianza * (int_desviacionE / Math.sqrt(int_sizeMuestra))} a ${int_media + int_coeficienteConfianza * (int_desviacionE / Math.sqrt(int_sizeMuestra))}`
      setResult(intervaloConfianza)
    }

  }

  //Apartir de aquí esto es solo para crear la interfaz de la pagina web
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
            <!--Este boton ejecuta toda la funcion anterior-->
          <button onClick={calcularIC}>Calcular</button>
        </div>
  <!--En caso de que la variable resultado tenga un valor, se mostrara el resultado con los valores obtenidos, caso contrario no aparece el cuadro-->
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
