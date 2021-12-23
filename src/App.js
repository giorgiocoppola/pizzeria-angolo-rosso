import Header from './components/Header';
import './App.css';
import Pizze from './components/Pizze';
import pizze from './components/pizza';
import pizze2 from './components/pizza2';
import pizze3 from './components/pizza3';


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

      </article>
      

    </div>
  );
}

export default App;
