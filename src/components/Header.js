import React, {useState} from 'react'
import './Header.css'


const elementilink = ['HOME','DESCRIZIONE','PIZZA','CONTATTI'];

function Header() {
    const [titolo,setTitolo] = useState("");

    const inseriscidescr = () => {
        if(titolo === "") {
          setTitolo("Il piacere della pizza!!!");
        } else {
            setTitolo("");
        }
    
    }
    return (
        <div className="Header">
        <h1 onClick={inseriscidescr}>Pizzeria <br /> Angolo Rosso</h1>
        <p className="sottotitolo">{titolo}</p>
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
