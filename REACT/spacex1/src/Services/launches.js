const API_URL = 'https://api.spacexdata.com/v3/launches';

//Vamos a hacer una función que saque todos los lanzamientos de spaceX
export async function getAllLaunches(){
    try{
        /*El fetch lo va a hacer a la api que le indicamos al principio,
        donde estan todos los datos de los lanzamientos*/
        const response = await fetch(`${API_URL}`)
        const data = await response.json();
        return data;
    }
    catch(error){
        console.log("Error al cargar datos");
    }
}

//Vamos a hacer una función que va a buscar lanzamientos por identificador
//Es muy parecido al anterior, solo que este está parametrizado
export async function getLaunchesByFlightNumber(flightNumber){
    try{
        //Para hacer un fetch parametrizado, hacemos lo siguiente:
        const response = await fetch(`${API_URL}/${flightNumber}`);
        /*Los datos que devolverá la función los hacemos con un await, ya que 
        si tiene que cargar 500 datos, queremos que espere a que se carguen todos 
        los datos, para que la página no se cargue antes de que se hayan cargado
        todos los datos */
        const data = await response.json();
        return data;
    }
    catch(error){
        console.log("Error al cargar datos");
    }
}

//Por último haremos una función para sacar los lanzamientos con el ID de lanzamiento
export async function getLaunchById(flightId){
    try{
        const response = await fetch(`${API_URL}/${flightId}`);
        const data = await response.json();
        return data;
    }
    catch(error){
        console.log("Error al cargar datos");
    }
}