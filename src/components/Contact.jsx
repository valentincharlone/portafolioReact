import React from 'react'

const Contact = () => {


  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='contact' id='contact'>
      <h1 className='heading'>CONTACT</h1>
      <div className='form'>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder='Name' />
          <input type="text" placeholder='Lastname'/>
          <input type="text" placeholder='Email' />
          <textarea name="" id="" cols="20" rows="5" placeholder='Coments'></textarea>
          <input type="submit" value='Enviar'/>
        </form>
      </div>
    </div>
  )
}

export default Contact