import React from "react";
import '../hojas-de-estilo/Clear.css'

const BotonClear = ( props ) => (
    <div className='Boton-clear'
    onClick={props.manejarClear}> 
    Clear</div>

);

export default BotonClear;