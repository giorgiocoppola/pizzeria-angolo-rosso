import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import './Contatti.css'

function Contatti() {

    const [nome,setNome] = useState("");
    const [cognome,setCognome] = useState("");
    const [indirizzo,setIndirizzo] = useState("");
    const [cap,setCap] = useState("");
    const [localita,setLocalita] = useState("");
    const [provincia,setProvincia] = useState("");
    const [email,setEmail] = useState("");
    const [telefono,setTelefono] = useState("");
    const [messaggio,setMessaggio] = useState("");
   
    const [persone,setPersone] = useState([]);
    
    const handleSubmit = (e) => {

      

        e.preventDefault();
        setNome("");
        setCognome("");
        setIndirizzo("");
        setCap("");
        setLocalita("");
        setProvincia("");
        setEmail("");
        setTelefono("");
        setMessaggio("");

        setPersone( [
            ...persone,{
            id: persone.length + 1,
            nome,
            cognome,
            indirizzo,
            cap,
            localita,
            provincia,
            email,
            telefono,
            messaggio }
            ])
       
   
    }
    
    useEffect( ()=> {
        console.log(persone);
    },[persone]);
  

    return (
        <div>
            <article className="App-header">
            <Header />
            <h1 className="contatti-titolo">Contatti</h1>

               <form>
                   <label forHtml="nome">Nome:</label>
                   <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} className="text" />
                   
 

                   <label forHtml="cognome">Cognome:</label>
                   <input type="text" id="cognome" value={cognome} onChange={(e) => setCognome(e.target.value)} className="text"  /> <br />
                

                   <label forHtml="indirizzo">Indirizzo:</label>
                   <input type="text" id="indirizzo" value={indirizzo} onChange={(e) => setIndirizzo(e.target.value)} className="text" /> 
    

                   <label forHtml="cap" className="cap1">C.A.P:</label>
                   <input type="text" id="cap" value={cap} onChange={(e) => setCap(e.target.value)} className="cap" /><br />
                   

                   <label forHtml="localita'">Localita':</label>
                   <input type="text" id="localita'" value={localita} onChange={(e) => setLocalita(e.target.value)} className="text" />
                   

                   <label forHtml="provincia" className="provincia">Provincia:</label>
                   <input type="text" id="provincia" value={provincia} onChange={(e) => setProvincia(e.target.value)} className="provincia" /><br />
                   

                   <label forHtml="email">E-mail:</label>
                   <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="email" />
                   

                   <label forHtml="telefono">Telefono:</label>
                   <input type="telefono" id="email'" value={telefono} onChange={(e) => setTelefono(e.target.value)} className="telefono" /><br />
                   

                   <label forHtml="messaggio" className="mess2">Messaggio:</label>
                   <textarea className ="messaggio" rows={25} cols={142} value={messaggio} onChange={(e) => setMessaggio(e.target.value)}></textarea><br />

                 <button className="btn" onClick={handleSubmit}>Invia</button>
            
               </form>

            </article>

            <Footer />
            
        </div>
    )
}

export default Contatti
