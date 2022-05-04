import Pizze from '../components/Pizze';
import pizze from '../mincomponents/pizza';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './Home.css'
import { useEffect } from 'react';


function Home() {

 useEffect(() => {

   document.title = `Pizzeria Angolo Rosso`;

 },[]);
 
  return (
    <div className="App">
      <article className="App-header">
        
       <Header/>
  
       <div className="pizze">
       {
         pizze.map((pizza) =>{
       return <Pizze key={pizza.id} {...pizza} />
        })} 
       </div>
      
      
      <Footer />
      
      </article>
      

    </div>
  );
}

export default Home;

