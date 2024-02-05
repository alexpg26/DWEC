import {useState, useEffect} from 'react';
import * as API from '../Services/launches';
import ItemLanzamientos from './ItemLanzamientos';

export function ListaLanzamientos(){
    const [launches, setLaunches] = useState([]);
  useEffect(()=>{
    API.getAllLaunches().then(setLaunches);
  },[])
  return(
    <>
        {launches.length===0 ?(<div>Loading...</div>):(
            <section>
                {launches.map(launch=>(
                    <ItemLanzamientos key={launch.flight_number}{...launch}/>
                ))}
            </section>
        )
        
        }
    </>
  )
}