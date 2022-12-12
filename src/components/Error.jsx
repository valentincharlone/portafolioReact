import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='page'>
        <h1>Error 404</h1>
        <Link to='/inicio'>volver</Link>
    </div>
  )
}

export default Error