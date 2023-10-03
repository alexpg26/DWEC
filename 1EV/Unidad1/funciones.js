//Funciones anónimas
let funcion=function(parametro){
    return parametro+":)";
}

console.log(funcion("Hola"));

//Callback  (Programación funcional, utilizado en IA, es muy útil en JavaScript)

function getIdentificación(número,letra,callback){
    let identificación = callback(número, letra);
    return identificación;
}

let formatoNIF=function(número, letra){
    return número+"-"+letra;
}

let formatoNIE=function(número,letra){
    return letra+"-"+número;
}

console.log(getIdentificación("34543223", "A", formatoNIF));

//Esto es una función que no es anónima (se llama getIdentificación)
//Dentro de la función, aparte de los parámetros, puedo hacer un callback, que es una llamada
//a otra función. Si al callback le pongo formatoNIE, llamará a esa función específica
//y si a callback le pongo la otra, llamará a la otra. 


//Forma más utilizada de Callback

function getIdentificación2(número, letra, callback){
    let identificación = callback(número, letra);
    return identificación;
}

getIdentificación2("1232321", "T", function(número, letra){
    console.log(número+"-"+letra);
    return número+"-"+letra;
});

//Funciones autoinvocadas (a veces, para identificarlo, ponen un ! tal que asi !(function))

(function(número, letra){
    console.log(número+"-"+letra);
})("3290482934", "R");

