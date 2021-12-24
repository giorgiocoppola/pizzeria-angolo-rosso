import Header from './components/Header';
import './App.css';
import Pizze from './components/Pizze';
import pizze from './mincomponents/pizza';
import pizze2 from './mincomponents/pizza2';
import pizze3 from './mincomponents/pizza3';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <article className="App-header">
       <Header/>
       <div className="pizze">
       {
         pizze.map((pizza) =>{
       return <Pizze {...pizza} />
        })} 
       </div>
       <div className="pizze">
       {
         pizze2.map((pizza) =>{
       return <Pizze {...pizza} />
        })} 
       </div>
       <div className="pizze">
       {
         pizze3.map((pizza) =>{
       return <Pizze {...pizza} />
        })} 
       </div>
      <Footer />
      </article>
      

    </div>
  );
}

export default App;
