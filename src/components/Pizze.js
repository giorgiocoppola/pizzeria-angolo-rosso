import React from 'react'
import './Pizze.css'

function Pizze(props) {

    const handleClick = () => {
        console.log(`Pizza: ${props.nome}`);
        console.log(`Ingredienti: ${props.ingredienti}`);
        console.log(`Prezzo: ${props.prezzo}`);

    }

    return (
           <div className="Pizze">
                <img src={props.img} alt={props.nome} width="300px" onClick={handleClick} />
                <h4>{props.nome}</h4>
                <p>{props.ingredienti}</p>
                <p className="prezzo"onClick={()=>alert(`prezzo: ${props.prezzo} €`)}>{props.prezzo} €</p>
                <div className="aggdec">
                <button>+</button>
                <button>-</button>
                </div>
                <button onClick={()=>alert(`${props.nome}`)}>Ordina</button>
            </div>     
    )
}

export default Pizze
