import React from 'react'
import { Link } from 'react-router-dom'
import ListWork from './ListWork'

const Portafolio = () => {
  // let urls = 'https://github.com/valentincharlone/TPE-Venta-de-botines'
  return (
    <div className='page' id='portafolio'>
      <h1 className='heading'>PROJECTS</h1>
        <ListWork></ListWork>
    </div>
  )
}

export default Portafolio