import React from 'react'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'

import Contact from '../components/Contact'
import Inicio from '../components/Inicio'
import Portafolio from '../components/Portafolio'
import Curriculum from '../components/Curriculum'
import Error from '../components/Error'

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Proyecto from '../components/Proyecto'
import LandingPage from '../components/LandingPage'

const MyRoutes = () => {
    return (
        <BrowserRouter>

            <Header />
                <section className='content'>
                    <Routes>
                        <Route path='/' element={<Navigate to='/landingPage'/>} />
                        <Route path='/landingPage' element={<LandingPage />} />
                        <Route path='portafolio' element={<Portafolio/>} />
                        <Route path='/curriculum' element={<Curriculum />} />
                        <Route path='/contacto' element={<Contact />} />
                        <Route path='/proyecto/:id' element={<Proyecto />} />
                        <Route path='*' element={<Error />} />
                    </Routes>
                </section>

            
            <Footer />

        </BrowserRouter>
    )
}


export default MyRoutes