const a1 = new Array();     //nuevo array vacío 

const a2 = new Array(4);    //nuevo array de 4 elementos

//nuevo array con 3 elementos definiiso
const apellidos = new Array('Perez', 'Martinez', 'González');

//ASÍ podemos inicializar un array con valores
for (let i = 0; i<10; i++){
    a1[i] = Math.random();
}

//Podemos recorrerlo con el tradicional bucle for

for (let i = 0; i<a1.length; i++){
    console.log(a1[i]);
}

//ahora vamos a recorrerlo pero con el bucle for_of (ES6)

for (nuum of a1){
    console.log(num);
}

//tambien podemos recorrerlo con un forEach

a1.forEach(function(elemento, índice, array){
    console.log(elemento, índice);
})

//tipo de dato SET
//
let unicoArray = new Set();

//Al convertir un set en un array, se eliminan los duplicados