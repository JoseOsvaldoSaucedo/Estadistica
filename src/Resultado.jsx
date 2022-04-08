import React from 'react'

const Resultado = (props) => {
  return (
    <div className="contenedorResultado">
    <h1>El intervalo de confianza es de:</h1>
    <p>{props.resultado}</p>
  </div>
  )
}

export default Resultado