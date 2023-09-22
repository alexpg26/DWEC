//Operaciones con cadenas de texto

//Concatenar texto
let nombre="Pepe";
let apellido="Mosca";
let nombre_completo=nombre+' '+apellido;
console.log(nombre_completo);

//Template literals
let curso='VS2DAW';
nombre_apellido=`Hola + ${nombre} ${apellido}`;
console.log(nombre_apellido);
let saludo=`Hola ${nombre} ${apellido}, bienvenido al curso`;
console.log(saludo);

//length
console.log(nombre.length);

//.includes(subcadenas)
console.log(saludo.includes('bien55id'));

//.slice(start, end)
console.log(saludo.slice(12,17));

//.replace("este texto, por este otro")
console.log(saludo.replace('Pepe', 'Fernando'));

//.trim
let cadena='            hola         mundo       ';
console.log(cadena.trim());