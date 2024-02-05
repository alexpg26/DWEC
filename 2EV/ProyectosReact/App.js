
import './App.css';
import { Testimonios } from './Testimonios';
import(comentarios) from '../componentes/comentarios'

function App(){
    return(
        <div>
            <h1>Compañeros de Carrera</h1>
            <Testimonios
                nombre="Eduardo Collado"
                cargo="Ingeniero de Sistemas"
                texto="Siempre haciendo por los demás"
                imagen="1"
            />
            <Testimonios
                nombre="Eduardo Collado"
                cargo="Ingeniero de Sistemas"
                texto="Siempre haciendo por los demás"
                imagen="2"
            />
        </div>
    )
}

export default App;