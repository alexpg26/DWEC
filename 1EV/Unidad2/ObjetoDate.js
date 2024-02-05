const alerta = document.querySelector(".alert-info");
const objeto = new Object();
//objeto.nombrepropiedad;
//objeto.nombrefuncion([parametros]);

let fecha_actual = new Date();
let fecha_fincurso = new Date(2024,4,30);       //La fecha es año,mes,dia

console.log(`La fecha actual es ${fecha_actual}`);       //Los literals son los ${}
console.log(`El curso acaba en ${fecha_fincurso}`);      //Las comillas para los literals son ``
let tiempo_restante=fecha_fincurso-fecha_actual;
console.log(`El curso acaba dentro de ${tiempo_restante} en milisegundos`);     //El curso acaba dentro de 21105943672 en milisegundos

console.log(fecha_actual.toString());               //Thu Sep 28 2023 17:12:01 GMT+0200 (hora de verano de Europa central)
console.log(fecha_actual.toTimeString());           //17:12:01 GMT+0200 (hora de verano de Europa central)
console.log(fecha_actual.toDateString());           //Thu Sep 28 2023

console.log(fecha_actual.toLocaleString());         //28/9/2023, 17:12:01
console.log(fecha_actual.toLocaleTimeString());     //17:12:01
console.log(fecha_actual.toLocaleDateString());     //28/9/2023
console.log(fecha_actual.toLocaleDateString("es-ES",{weekday: 'long', year:'numeric', month:'long', day:'numeric'}));       //jueves, 28 de septiembre de 2023

const fecha_actual_legible = fecha_actual.toLocaleDateString("es-ES",{weekday: 'long', year:'numeric', month:'long', day:'numeric'});
alerta.innerHTML = "<strong>HOY ES: </strong>" + fecha_actual_legible;

