import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Contato from './components/pages/contato';
import Empresa from './components/pages/empresa';
import Inicio from './components/pages/inicio'; 
import Projetos from './components/pages/projetos';
import Footer from './layout/footer';
import Navbar from './layout/navbar';


function App() {
  return (
    
      <Router>
        <Navbar/>
      
       <Routes>
       <Route  exact path="/" element={<Inicio/>} />
       </Routes>
       <Routes>
        <Route  path="/empresa" element={<Empresa/>} />
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
