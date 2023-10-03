//podemos delcarar un objeto vacío e ir declarando sus propiedades

const myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
//si un campo está vacío es una anomalia


//podemos crear directamente un objeto dando sus propiedades y métodos

const myCar2 = {
    make: 'Seat',
    model: '127',
    year: '1975'
}

//declaracion de un objeto con propiedades y métodos
const persona = {
    nombre: 'juan',
    apellido: 'sin miedo',
    edad: 30,
    saludar: function() {
        //
    }
}

//funcion constructora
function Persona(nombre,apellido,fechaNac){
    this.nombre = nombre;
    this.apellido = apellido;
    this.anioNac = fechaNac;
    this.getFechaNac = function () {
        return this.anioNac;
    }
}

class Persona{
    //método constructor
    constructor(nombre,apellido,anioNac){
        this._nombre = nombre;
        this._apellido = apellido;
        this.anioNac = anioNac;
    }
    //podemos declarar métodos getters, setters...
    get anioNac(){
        return this._anioNac;
    }
}

