import React from 'react'
import Cartwidget from './CartWidget'
import Logo1 from "./images/Logo.png"

const Navbar = () => {
  return (
    <nav className='navbar m-0 mw-100 bg-info'>
    <div className='container fluid p-0 m-0'>
    <img src={Logo1} width={100} alt="Logo1" />
    <div className="p-1" >
        <button className="btn btn-secondary p-1 m-1">Running</button>
        <button className="btn btn-secondary p-1 m-1">Traking</button>
        <button className="btn btn-secondary p-1 m-1">Pista</button>
    </div>
    <Cartwidget/>
    </div>
    </nav>
  )
}

export default Navbar