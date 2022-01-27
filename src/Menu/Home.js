import Pizze from '../components/Pizze';
import pizze from '../mincomponents/pizza';
import pizze2 from '../mincomponents/pizza2';
import pizze3 from '../mincomponents/pizza3';
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
       <div className="pizze">
       {
         pizze2.map((pizza) =>{
       return <Pizze  key={pizza.id} {...pizza} />
        })} 
       </div>
       <div className="pizze">
       {
         pizze3.map((pizza) =>{
       return <Pizze key={pizza.id} {...pizza} />
        })} 
       </div>
      <Footer />
      </article>
      

    </div>
  );
}

export default Home;

