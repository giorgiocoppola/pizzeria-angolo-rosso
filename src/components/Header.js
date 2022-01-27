import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import '../Menu/Home'
import '../Menu/Descrizione'
import '../Menu/Contatti'
import '../Menu/Pizza'



function Header() {

    return (
        <div className="Header">
        <h1>Pizzeria <br /> Angolo Rosso</h1>
             <div className="menu">
                
                    <span><Link to = "/">HOME</Link></span> 
                    <span><Link to = "/descrizione">DESCRIZIONE</Link></span>
                    <span><Link to = "/pizza">PIZZA</Link></span>
                    <span><Link to = "/contatti">CONTATTI</Link></span>            

             </div>
    
         
        </div>
    );}
    

export default Header;