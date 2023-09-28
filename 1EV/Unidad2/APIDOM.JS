let contenido = document.querySelector(".cabecera.titulo");     //Esto devuelve las etiquetas de la clase cabecera y titulo
console.log(contenido);

//document.querySelector(".contenido").remove();    //Sirve para eliminar la clase contenido

let parrafos=document.querySelectorAll("p");        //Sirve para localizar más de una etiqueta
console.log(parrafos);
//let matches=document.querySelectorAll("div.highlighted>p");   //Esto quiere decir que estoy buscando todos los parrafos
                                                                //cuyo padre sea highlighted, es decir, que esté dentro de 
                                                                //un div con esa clave

//let matches=document.querySelectorAll("div.nota, div.alerta") //Va a buscar todos los div que tengan la clase nota y además
                                                                //todos los div que tengan la clase alerta
                                                                //Esto devuelve las etiquetas de la clase nota, y de la clase alerta,
                                                                //no las etiquetas de la clase nota y alerta

let localizacion=document.location;
console.log(localizacion);  //Me devuelve parámetros como la http, el host, el protocolo...

let titulo=document.title;
console.log(titulo);        //Me devuelve lo que contiene la etiqueta titulo

let valor1=document.querySelector("#pie").innerText;       //Me saca el contenido del id "pie", solo el contenido, sin etiquetas
console.log(valor1);                                       //Cuando es un id se pone # en vez de .

let valor2=document.querySelector("#pie").innerHTML;        //Me saca el contenido del id "pie" etiquetas incluidas
console.log(valor2); 

let valor3=document.querySelector("#MiBoton").value;        //Me saca el contenido del value del botón 
console.log(valor3);