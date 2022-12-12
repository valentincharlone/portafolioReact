import React from 'react'
import { Link } from 'react-router-dom'
import yo from '../images/yo.jpg'
import Portafolio from './Portafolio'
import Curriculum from './Curriculum'


const Inicio = () => {
  return (
    <div className='home' id='about'>
      <div className='home-img'>
        <img src={yo}  />
        <h2>
          Estudiante en la Facultad de Exactas en Tandil UNICEN, 
          actualmente en la carrera Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas.
        </h2>
        <hr />
        <h2>
          Actualmente estudiando con React y nodeJS, pero siempre abierto a nuevas
          tecnologias y en constante aprendizaje
        </h2>
      </div>
      {/* <h3>
        En este momento me encuentro estudiando y/o trabajando mas sobre la parte del front-end,
        utilizando React, pero siempre abierto y en constante conocimiento de nuevas tecnologias.
        <br />
        <Link to='/contact'> contacta conmigo!</Link>
      </h3> */}
      
    </div>
  )
}

export default Inicio