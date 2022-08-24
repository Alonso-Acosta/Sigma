// Librerias
import {Link} from 'react-router-dom';
import { useState,useEffect } from 'react';
//CSS
import "../Style/header.css"
function Header(props){

    return(
        // eslint-disable-next-line
        <header>
             <div>
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <a className="navbar-brand logo">
                            <img src={"https://res.cloudinary.com/dpk1fnwji/image/upload/v1660742923/Pages/Logo1_yvay8e.svg"} alt="" className="d-inline-block align-text-top"/>
                            <a className="textL">Grupo Sigma Judicial</a>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse itemss" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className={"nav-link active"} to='/' key={1}>Inicio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={"nav-link "} to='/Service'key={2}>Area de Servicios</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={"nav-link "} to='/Equipo' key={3}>Nuesto Equipo</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={"nav-link "} to='/CompromisoSocial' key={4}>Compromiso Social</Link>        
                                    
                                </li>
                                <li className="nav-item">
                                    <Link className={"nav-link "} to='/Contacto' key={5}>Contactenos</Link>        
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        </div>
        </header>
    )    
}

export default Header;