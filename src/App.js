import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Menu/Home';
import Contatti from './Menu/Contatti';
import Descrizione from './Menu/Descrizione';
import Pizza from './Menu/Pizza';
import Messaggioordine from './Menu/Messaggioordine';
import InvioForm from './Menu/InvioForm';





function App() {
  return <Router>
  <Routes>
  <Route path = '/'  element = {<Home />} />
  <Route path = '/descrizione' element = {<Descrizione />} />
  <Route path = '/pizza' element = {<Pizza />} />
  <Route path = '/contatti' element = {<Contatti />} />
  <Route path = '/*' element = {<Messaggioordine />} />
  <Route path = '/mess' element = {<InvioForm />} />
</Routes>
  
</Router>
}

export default App;

