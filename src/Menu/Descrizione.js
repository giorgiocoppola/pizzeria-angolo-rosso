import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import './Descrizione.css'

const img = "http://www.livornostreet.it/Foto/FotoClienti/Pizzeriaangolorosso/Foto1.jpg?1642440459967";
const nome = "Pizzeria Angolo Rosso"


function Descrizione() {

    

    return (
        <div className="descrizione">
        <article className="App-header">
           <Header />
           <h1 className="descrizione-titolo">Descrizione</h1> 
           <img className="img-descrizione" src={img} alt={nome} />
           <p className="testo">La Pizzeria Angolo Rosso e' una pizzeria che si trova ad Ancona, in via Manzoni, 25.<br /><br />
           Il menù del nostro locale offre una varietà di pizze veramente ottime, merito di un impasto fatto con maestria ogni giorno dal pizzaiolo.<br /><br />
           Dalla Pizzeria Angolo Rosso non poteva mancare un'ottima pizza Romana, la pizza 4 stagioni, la pizza Diavola.<br /><br />
           Inoltre spazio interno ed esterno per gustare le tue pizze. Se invece preferisci ricevere la tua pizza direttamente
           a casa, offriamo anche il Servizio a Domicilio gratuito con ordini di pizze online.<br /><br />
           Assapora le tue pizze fatte ad arte, scegli ANGOLO ROSSO PIZZERIA!!! </p>
           <Footer />
        </article>
        </div>
    )
}

export default Descrizione
