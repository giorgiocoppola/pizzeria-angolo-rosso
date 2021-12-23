import React from 'react'
import './Pizze.css'

function Pizze(props) {
    return (
           <div className="Pizze">
                <img src={props.img} alt={props.nome} width="300px" />
                <h4>{props.nome}</h4>
                <p>{props.ingredienti}</p>
                <p>{props.prezzo} €</p>
                <button>Ordina</button>
            </div>     
    )
}

export default Pizze
