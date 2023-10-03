//typeof
const num=20;
console.log("El tipo es: "+typeof num);

//NaN
const variable=4*"hola";
console.log(variable);
console.log("El tipo de variable es: "+typeof variable);

//Infinity
const division=4/0;
console.log(division);
console.log("El tipo de division es: "+typeof division);

//isNaN
const numberstring="30";
const string="20 años";
console.log(isNaN(string));
console.log(isNaN(numberstring));
console.log(isNaN(division));   //da falso porque es un número, aunque sea infinito
console.log(isNaN("12"));       //esto, para javaScript, es un número y un string, ambas
console.log(isNaN(12));
console.log(isNaN(string)); //en cuanto haya letras, ya no es un número, y da true
console.log(isNaN(NaN));

//toString
const number=100;
console.log(number);
console.log(number.toString());
console.log(typeof number);  //Este es un number
console.log(typeof number.toString());  //este es un string. El toString sirve para convertir un number en un String

//toFixed
console.log(number.toFixed(4));

//Funcion Boolean devuelve verdadero



