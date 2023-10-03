//Estructuras de control

//Estructura del condicional

const flight=100;
const hotel=50;
const tour=30;
const total=flight+hotel+tour;
const budget='300';

if(budget>total){
    console.log('Sí me voy de viaje');
}else if(budget===total){
    console.log('Sí me puedo ir, pero voy ajustaillo');
}else{
    console.log('No me voy de viaje');
}

//Operadores ternarios

const result = budget > total ? console.log('Sí me voy'):console.log('No me voy');       //es como el if, si es cierto hace eso, si no hace lo otro
const newresult2=budget>total?100:200;  //esto quiere decir que la variable newresult2 cogerá un nuevo valor, si budget es mayor que el total será 100, si no será 20

const NUM ="30" + 3;