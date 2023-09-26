//Invoco la variable correo y que introduzca su correo el usuario, añadiendo el trim

let correo = prompt("Introduzca su correo eléctronico: ").trim();

//Ahora inicializo una variable separador para separar el correo, y como separador pongo el arroba
let separador = correo.split("@");

//Saco por consola la variable separador poniendo que muestre la parte 0 (primera parte) de la separación
console.log(separador[0]);
