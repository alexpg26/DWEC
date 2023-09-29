let num;

do{
    num = prompt("Introduzca un número por consola: ");
    if (num>0){
        for (let i=0; i<11; i++){
            let resultado = num*i; 
            console.log(num + "*" + i + "=" + resultado );
        }

    }else{
        console.warn("El número introducido no es válido");
    }
}while ((!(!isNaN(numero) && numero !== null && numero !== '')));