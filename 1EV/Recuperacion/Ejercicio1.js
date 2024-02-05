//Para empezar, vamos a cargar un evento que se ejecute al cargar la página web, y dentro hacemos todo lo que queremos.
document.addEventListener("DOMContentLoaded", function () {

    //Primero empezamos con los selectores. Aquí seleccionamos todo el conjunto de secciones, las 4 juntas
    let listGroup = document.querySelector('.list-group');

    //Ahora vamos a llamar a una función que resalte en rojo los elementos que aparecen repetidos en las secciones,
    //de tal forma que solo queden items del numero 1 en la seccion 1, items del numero 2 en la seccion 2, y así.
    resaltarElementos();

    //Seguimos seleccionando, ahora en este caso los elementos del menú desplegable, para poder ejecutar sus eventos después
    //Seleccionamos los dos elementos del menú que queremos para el ejercicio, y asignamos a cada uno el que queremos
    let botones = document.querySelectorAll('.dropdown-item');
    let botonEliminar = botones[0]; // Selecciona el primer elemento
    let botonOrdenar = botones[1]; // Selecciona el segundo elemento

    // Ahora vamos a agregar dos eventos, uno para cada botón del menú:
    //Este primero que llamará a la función de eliminarRepetidos una vez que se haga click en ese botón
    botonEliminar.addEventListener('click', function () {
        eliminarRepetidos();
    });

    // Y el segundo que llamará a una función llamada ordenarSecciones una vez que se haga click en este otro botón:
    botonOrdenar.addEventListener('click', function () {
        ordenarSecciones();
    });


    //Ahora vamos a realizar las funciones que hemos declarado en los eventos anteriores. 
    //Primero la de eliminarRepetidos: 
    function eliminarRepetidos() {
        //Con este selector vamos a obtener todas las secciones de la página, que nos serán devueltas
        //en forma de conjunto
        let listItems = listGroup.querySelectorAll('.list-group-item');
    
        //A continuación vamos a iterar sobre cada sección del conjunto devuelto
        listItems.forEach(listItem => {
            let items = listItem.querySelectorAll('ul li');
    
            //Esto es un objeto que nos servirá para rastrear letras finales que no se repitan
            let letrasUnicas = {};
    
            // Ahora vamos a filtrar los items que no se repitan, para ello tendremos en cuenta las letras finales
            //de cada sección, las cuales no deben repetirse            
            let listaLetrasUnicas = Array.from(items).filter(item => {
                let nombreItem = item.textContent.trim();
                //Ahora obtenemos las letras del final
                let ultimaLetra = getultimaLetra(nombreItem);
    
                if (ultimaLetra !== null) {
                    if (!letrasUnicas[ultimaLetra]) {
                        letrasUnicas[ultimaLetra] = true;
                        return true;
                    } else {
                        // Si las letras finales ya existen, eliminamos el item
                        item.remove();
                        return false;
                    }
                } else {
                    // Si no, mantenemos el item
                    return true;
                }
            });
    
            //Por último, actualizamos la lista para que queden solamente los items que no están repetidos
            listItem.querySelector('ul').innerHTML = '';
            listItem.querySelector('ul').append(...listaLetrasUnicas);
        });
    
        //Y antes de salir de la función, cambiamos la función de ordenar items a "habilitada"
        botonOrdenar.classList.remove('disabled');
    }

    //Ahora vamos a realizar la función de ordenarSecciones. Para ello vamos a hacer:
    function ordenarSecciones() {
        // Seleccionamos las secciones de la página web, que nos serán devueltas en conjunto.
        let listItems = Array.from(listGroup.querySelectorAll('.list-group-item'));
    
        // Aquí hacemos un pequeño filtro por si nos ha quedado algún item sin detectar, el cual elimina
        //cualquier item que se haya quedado fuera de su sección        
        listItems.forEach(listItem => {
            let numeroSeccion = getnumeroSeccion(listItem.textContent);
    
            let items = Array.from(listItem.querySelectorAll('ul li'));
            items = items.filter(item => {
                let NumeroItem = getnumeroSeccion(item.textContent);
                return NumeroItem === numeroSeccion;
            });
    
            listItem.querySelector('ul').innerHTML = '';
            listItem.querySelector('ul').append(...items);
        });
    
        // Ahora sí, ordenamos las listas por orden numérico
        listItems.sort((a, b) => {
            let numeroA = getnumeroSeccion(a.textContent);
            let numeroB = getnumeroSeccion(b.textContent);
            return numeroA - numeroB;
        });
    
        //Actualizamos el contenido de la lista principal con las listas ordenadas
        listGroup.innerHTML = '';
        listGroup.append(...listItems);
    
        // Por último, ordenamos los items dentro de cada lista por orden alfabético
        listItems.forEach(listItem => {
            let items = Array.from(listItem.querySelectorAll('ul li'));
            items.sort((a, b) => a.textContent.localeCompare(b.textContent));
            listItem.querySelector('ul').innerHTML = '';
            listItem.querySelector('ul').append(...items);
        });
    }

    //Aquí realizamos otra función que hemos utilizado en la función anterior, con el fin de obtener
    //el número de la sección en el nombre, mediante un patrón, igual que hicimos anteriormente        
    function getnumeroSeccion(sectionName) {
            let coincidencia = sectionName.match(/\d+/);
            return coincidencia ? parseInt(coincidencia[0]) : Infinity;
        }

        //Ahora vamos a realizar una función extra que nos servirá para obtener las letras al final del elemento. 
        //Es una función que usamos con anterioridad.
        function getultimaLetra(nombreItem) {
            //Declaramos una variable coincidencia a la cual le asignamos un patrón que busque una o más letras
            //al final del elemento
            let coincidencia = nombreItem.match(/[a-zA-Z]+$/);
            //Con esto la función devolverá las letras que se hayan encontrado, o bien null si no se encuentran
            return coincidencia ? coincidencia[0] : null;
        }

        //Función para recargar el contenido de la página al darle botón al "home"
        let homeLink = document.querySelector('.nav-link.active');
        homeLink.addEventListener('click', function () {
            window.location.reload();
        });

        //Por último vamos a realizar la función que hace que los elementos repetidos estén resaltados nada más
        //cargar la página, y para ello usamos la misma función que la de eliminarRepetidos, solo que con 
        //la diferencia de que en vez de eliminarlos, los pone de color rojo:
        function resaltarElementos() {
            let listItems = listGroup.querySelectorAll('.list-group-item');
        
            listItems.forEach(listItem => {
                let items = listItem.querySelectorAll('ul li');
        
                let letrasUnicas = {};
        
                let listaLetrasUnicas = Array.from(items).filter(item => {
                    let nombreItem = item.textContent.trim();
                    let ultimaLetra = getultimaLetra(nombreItem);
        
                    if (ultimaLetra !== null) {
                        if (!letrasUnicas[ultimaLetra]) {
                            letrasUnicas[ultimaLetra] = true;
                            return true;
                        } else {
                            // Si las letras finales ya existen, cambiar el color a rojo
                            item.style.color = "red";
                            return false;
                        }
                    } else {
                        // Mantener elementos sin letras finales
                        return true;
                    }
                });
    
            });
        }

});

