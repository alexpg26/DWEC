class Persona{
    constructor (nombre, apellidos, anno, estudios, poblacion){
        this._nombre=nombre;
        this._apellidos=apellidos;
        this._anno=anno;
        this._estudios=estudios;
        this._poblacion=poblacion;
    }

    get annoNacimiento(){
        return this._anno;
    }

    get nombre(){
        return this._nombre;
    }
    
    get apellidos(){
        return this._apellidos;
    }

    get estudios(){
        return this._estudios;
    }

    get poblacion(){
        return this._poblacion;
    }
    
}

//Primero vamos a crear dos objetos de la clase persona y le vamos a pasar los atributos
const Persona1 = new Persona("Alejandro", "PenarandaGarrido", "2002", "DAW", "Illescas");
const Persona2 = new Persona("Mario", "Ramos", "2003", "DAW", "Cobisa");

//Ahora vamos a crear un array de objetos con los objetos que hemos creado
const ArrayPersonas = new Array(2);
ArrayPersonas[0] = Persona1;
ArrayPersonas[1] = Persona2;

//Ahora, vamos a crear una función flecha, que tenga como parámetro un array que será lo que suponemos que nos van a pasar
const arrowfunction = (array) => {

    //Dentro de la funcion, es decir, lo que va a hacer la funcion, es recorrer el array que nos pasen 
    //El array tiene valor e indice, no hace falta incluir el indice porque no lo usamos, asi que solo ponemos el valor
    array.forEach((value)=>{
        console.log(value.nombre);
        console.log(value.apellidos);
    })
    }

//Por último vamos a llamar a la funcion arrowfunction y vamos a meterle ArrayPersonas como parametro
//Eso hara que en la funcion, el parametro arary=arrypersonas, y que el array.forEach se recorra con el 
//array ArrayPersonas
arrowfunction(ArrayPersonas);