
//Primero declaramos esta función ParOImpar para hacer el código dentro
function ParOImpar(num){

    if (isNaN(num)){                        //Hacemos un if en el que, si no es un número nos aparezca por consola
        return("¡No es un número!");        //y en el que, en el caso de ser un número, diga si es par o impar
    }else if(num%2===0){
        return("Es número par");
    }else{
        return("Es número impar")
    }

}

//Aquí declaramos la constante num y hacemos un prompt para que el usuario pueda escribir un número
const num = prompt("Introduzca un número: ");
let resultado = ParOImpar(num);     //declaramos una variable resultado que almacene el resultado de la función
console.log(resultado);             //sacamos el resultado por consola
