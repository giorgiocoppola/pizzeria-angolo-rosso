import React from 'react'
import './Header.css'


const elementilink = ['HOME','DESCRIZIONE','PIZZA','CONTATTI'];

function Header() {
    
    return (
        <div className="Header">
        <h1>Pizzeria <br />Angolo Rosso</h1>
             <div className="menu">
                {
                   elementilink.map((elementolink) => {
                   return  <span><a href="#">{elementolink}</a></span>;
                 })
                }
             </div>
         
        </div>
    )
}

export default Header;
