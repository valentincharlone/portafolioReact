import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <span>VC</span>
                <h2>Valentin Charlone</h2>
            </div>
            <nav>
                <ul>
                    <li>
                        <a 
                            href='#about'
                            to='/landingPage' 
                            className={({ isActive }) => isActive ? 'active' : ''}
                        >
                            About me
                        </a>
                    </li>
                    <li>
                        <a
                            href='#portafolio'
                            to='/portafolio'
                            className={({ isActive }) => isActive ? 'active' : ''}
                        >
                            Portafolio
                        </a>
                    </li>
                    
                    <li>
                        <a
                            href='#skills'
                            to='/curriculum' 
                            className={({ isActive }) => isActive ? 'active' : ''}
                        >
                            Currirulum
                        </a>
                    </li>
                    <li>
                        <a
                            href='#contact'
                            to='/contacto'
                            className={({ isActive }) => isActive ? 'active' : ''}
                        >
                            Contacto
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header