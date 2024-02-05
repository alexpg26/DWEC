import logo from './logo.svg';
import './App.css';
import {Heading} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import * as API from './Services/launches';
import ItemLanzamientos from './Componentes/ItemLanzamientos';
import { ListaLanzamientos } from './Componentes/ListaLanzamientos';
import { DetallesLanzamiento } from './Componentes/DetallesLanzamiento';
import {Route, Routes} from 'react-router-dom';
function App() {
  const [launches, setLaunches] = useState([]);
  useEffect(()=>{
    API.getAllLaunches().then(setLaunches);
  },[])
  return (
    <div className="App">
      <Heading as='h1' size='lg'>
        LANZAMIENTO
      </Heading>
      <Routes>
        <Route path='/' element={<ListaLanzamientos/>}/>
        <Route path='/launch/:launchId' element={<DetallesLanzamiento/>}/>
          
      </Routes>
      <section>
        {launches.map(launch=>(
          <ItemLanzamientos key={launch.flight_number}{...launch}/>
        ))}
      </section>
    </div>
  );
}

export default App;
