import React,{useState} from 'react'
import './Pizze.css'

function Pizze(props) {

const {img,prezzo,nome,ingredienti,max} = props;
const [count,setCount] = useState(0);
const [message,setMessage] = useState("");
const min = 0;
// const max = 20;

const incrementa = () => {

    if (count >= max) {
        setCount(max);
        setMessage("Hai raggiunto il massimo degli ordini disponibili");
        setTimeout(function() { setMessage("")},3000);
    } 
    else {
        setCount( count + 1 );
    }
 
}

const decrementa = () => {
    if(count <= min) {
        setCount(min);
    }
    else {
       setCount( count - 1 );
    }
  
}

const resetta = () => {
    setCount(0);
}

    return (
           <div className="Pizze">
                <img src={img} alt={nome} width="300px" />
                <h4>{nome}</h4>
                <p>{ingredienti}</p>
                <p className="prezzo">{prezzo} €</p>
                <p className="dim">{count}</p>
                <p className="mes">{message}</p>
                <div className="conteggio">
                    <button className="cont" onClick={incrementa}>+</button>
                    <button className="cont" onClick={decrementa}>-</button>
                    <button className="cont" onClick={resetta}>Reset</button>
                </div>
                <button className="ordina">Ordina</button>
            </div>     
    )
}

export default Pizze
