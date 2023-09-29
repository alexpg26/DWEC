const cadena = 'Esto es una cadena';
const objetocadena = new String('Esto es una cadena');

console.log(typeof cadena);             //El tipo de variable es un String
console.log(typeof objetocadena);       //El tipo de variable es un objeto

console.log(cadena===objetocadena);     //Falso, porque el tipo de variable es diferente
console.log(cadena==objetocadena);      //Verdadero, porque el contenido de las variables es el mismo


console.log(cadena.toUpperCase());          //Ambas funcionan tanto en el string como en el object
console.log(objetocadena.toUpperCase());