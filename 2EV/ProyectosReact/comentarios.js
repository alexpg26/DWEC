import React from 'react'
import '../hojasestilo/comentarios.css'

function comentarios(){
    return(
        <div className='contenedor-post'>
            <img className='imagen-post' src='../imagenes/imagen1.jpg'></img>
            <div className='contenedor-texto'>
                <p className='nombre-post'></p>
                <p className='cargo-post'></p>
                <p className='texto-post'></p>
            </div>
        </div>
    )
}