import React from 'react'
import { Link } from 'react-router-dom'
import {works} from '../data/Work'

const ListWork = () => {
  return (
    <section className='works'>
        {
          works.map(work => (
            // {console.log(work)}
            <article key={work.id} className='work-item'>
              <div className='map-img'>
                <img src={"/images/Fuente-Shutterstock_Autor-McIek_codigo-programacion.jpg"}/>
              </div>
              <h2>{work.name}</h2>
              <h2><Link to={"/proyecto/"+work.id}>{work.name}</Link></h2>
              <h3>{work.tecnologias}</h3>
              
            </article>
          ))
        }

      </section>
  )
}

export default ListWork