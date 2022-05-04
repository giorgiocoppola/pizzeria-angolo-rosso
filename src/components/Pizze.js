import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Messaggioordine from '../Menu/Messaggioordine';
import './Pizze.css'
import Home from '../Menu/Home';

function Pizze(props) {

const {img,prezzo,nome,ingredienti,max} = props;
const [count,setCount] = useState(0);
const [message,setMessage] = useState("");
const [message2,setMessage2] = useState("");

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

const ordina = () => {
    if(count === 0) {
        setMessage2("*Inserimento numero degli ordini obbligatorio");
        setTimeout(function() {setMessage2("")},3000);
      
    } else {
        setMessage2("Ordine aggiunto");
        setTimeout(function() {setMessage2("")},3000);
    }
}
    return (
           <div className="Pizze">
                <img src={img} alt={nome} width="300px" height="300px" />
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
                <button className="ordina" onClick={ordina}>Ordina</button>
                <p className="mes">{message2}</p>
            </div>     
    )
}

export default Pizze