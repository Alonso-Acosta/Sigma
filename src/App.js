//librerias
import {Routes,Route} from 'react-router-dom';

//Componentes
import Header from './Components/Header';
import Footer from './Components/Footer';
import Inicio from './Components/Inicio';
import Service from './Components/Service';
import Equipo from './Components/Equipo';
import CompromisoSocial from './Components/CompromisoSocial';
import Contacto from './Components/Contacto';
import Administracion from './Components/Administracion';
//CSS
import "./Style/App.css";

function App() {
  return (
    <>
      <div className='Wrapper'>
        <Header/>
          <Routes>
            <Route exact path='/' element={<Inicio/>}/>
            <Route path='/Service' element={<Service/>}/>
            <Route path='/Equipo' element={<Equipo/>}/>
            <Route path='/CompromisoSocial' element={<CompromisoSocial/>}/>
            <Route path='/Contacto' element={<Contacto/>}/>
            <Route path='/Administracion' element={<Administracion/>}/> 
          </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
