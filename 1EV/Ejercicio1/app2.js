let num=0;      //Aquí declaramos la variable num y la igualamos a 0

function hastamayoredad(num){       //Aquí declaramos la función hastamayoredad, en la que el parámetro que coge
                                    //es el num que declaramos anteriormente
    while(num<18){                  //en el while, le decimos que mientras num sea menor que 18, siga pidiendo al
        num = prompt("Introduzca un número: ");     //usuario que escriba un número, hasta que éste sea igual o
    }                               //mayor que 18
    console.log(num);               //imprimimos el num
}

hastamayoredad(num);                //llamamos a la funcion