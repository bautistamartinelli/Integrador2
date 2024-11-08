
import Navegacion from './Componentes/Navegacion';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Contacto from './Contacto/Contacto';
import Footer from './Componentes/Footer';
import Alta from './Alta/Alta';
import Nosotros from './Nosotros/Nosotros';
import Creatina from './Creatina/Creatina';
import Carrito from './Carrito/Carrito';
import Proteina from './Proteina/Proteina'


function App() {
  return (
    <>
    <Navegacion />  

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contacto' element={<Contacto />} />
      <Route path='/alta' element={<Alta />} />
      <Route path='/nosotros' element={<Nosotros />} />
      <Route path='/creatina' element={<Creatina />} />
      <Route path='/proteina' element={<Proteina />} />
      <Route path='/carrito' element={<Carrito />} />

    </Routes>

    <Footer />
    </>
  );
}

export default App;
