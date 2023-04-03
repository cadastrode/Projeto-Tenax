import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Contato from './components/pages/contato';
import Inicio from './components/pages/inicio'; 
import Projetos from './components/pages/projetos';
import Footer from './layout/footer';
import Navbar from './layout/navbar';
import Projeto from './components/pages/projeto';


function App() {
  return (
    
      <Router>
        <Navbar/>
      
       <Routes>
       <Route  exact path="/" element={<Inicio/>} />
       </Routes>
       <Routes>
        <Route  path="/projeto" element={<Projeto />} />
       </Routes>
       <Routes>
    <Route path="/projetos"   element={<Projetos/>} />
    </Routes>
    <Routes>
    <Route
      index                                    
      element={<div>Default Page Content</div>}
    />
    </Routes>
       
       <Routes>
        <Route path="/contato" element={<Contato/>} />
       </Routes>
       <Footer/>
      </Router>
      
  
  );
}

export default App;
