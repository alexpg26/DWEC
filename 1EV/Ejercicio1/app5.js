//Inicializamos la variable número para que el usuario nos introduzca un número
let numero = prompt("Introduzca un número por consola: ");

if (numero<0){
    console.warn("El número introducido es menor a 0");     //En este if, si el número es menor que 0, aparecerá
}else{                                                      //un warning en consola que avise del error
    for (let i=0; i<11; i++){                               //Si no, hacemos un for, el número se mete en el bucle
                                                            //y hasta que no llegue a num*10 no para
        let resultado = numero*i;                    
        console.log(numero + "*" + i + "=" + resultado );   //En cada iteración del bucle, sacamos el resultado,
    }                                                       //generando así la tabla
}