import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import './Pizza.css'



function Pizza() {
    return (
        <div className="Pizza">
        <article className="App-header">
         <Header />
           <h1 className="pizza-titolo">Pizza</h1>          
         <Footer />
        </article>   
        </div>
    )
}

export default Pizza
