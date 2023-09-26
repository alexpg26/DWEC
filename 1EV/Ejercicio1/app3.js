//Primero declaramos las variables, pidiéndoselas al usuario y añadiendo el trim, para quitar espacios

nombre = prompt("Introduzca su nombre:").trim();
curso = prompt("Introduzca el curso:").trim();
localidad = prompt("Introduzca su localidad:").trim();
fecha_inicio = prompt("Introduzca la fecha de inicio del curso:").trim();
fecha_fin = prompt("Introduzca la fecha de final del curso:").trim();

//Ahora declaramos una variable carta donde escribimos la carta y añadimos las variables, con los saltos de línea
//para que la carta tenga la estructura deseada
let carta ="Estimado " + nombre + ",\nBienvenido al curso de " + curso + " que se celebrará en la localidad de " + localidad + " entre \nlas fechas " + fecha_inicio + " y " + fecha_fin + ". Espero que el curso se desarrolle según sus expectativas. Estaremos encantados de atenderle. \n\nAtentamente,\nLa dirección."

//Sacamos el resultado por consola
console.log(carta);

