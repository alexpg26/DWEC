document.addEventListener("DOMContentLoaded", function(){
    
    /*Primero vamos a seleccionar al elemento del menú con el id "usuarios" y vamos a asignarle un evento. 
    A este evento le decimos que cuando se haga click en la opción, la función haga un fetch a la APIRest
    que nos han proporcionado en el ejercicio, a la cual le vamos a pasar una función llamada usuarios la cual 
    definiremos más adelante*/

    document.getElementById("usuarios").addEventListener("click", function () {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => usuarios(data))
            .catch(error => console.error('Error:', error));
    });
    
    //Ahora vamos a definir la función de usuarios:
    function usuarios(listausers) {
        /*Las líneas que defino a continuación son simplemente para que no se repitan los contenidos de otras páginas 
        al navegar por la web*/
        document.querySelector('.body h2').style.display = 'none';
        let usuariosContainer = document.getElementById("usuarios-container");
        usuariosContainer.innerHTML = '';
        let postsContainer = document.getElementById("posts-container");
        postsContainer.innerHTML = '';
        let comentariosContainer = document.getElementById("comentarios-container");
        comentariosContainer.innerHTML = '';

        /*Ahora vamos a crear una tabla donde mostraremos los datos de todos los usuarios que estamos obteniendo de la
        APIRest*/
        let userTable = document.createElement("table");
        userTable.classList.add("table"); 

        /*Aquí crearemos la fila del encabezado para la tabla; crearemos un elemento "tr" y declararemos 
        una función para guardar un string con los títulos o encabezados. Después creamos los encabezados 
        con el elemento "th" y se lo añadimos a la letiable filaHeader o "tr"*/
        let filaHeader = document.createElement("tr");
        let headers = ["ID", "name", "Username", "Email", "Street", "Suite", "City", "Zipcode", "LAT", "LNG", "Phone", "Website"];
        headers.forEach(function (header) {
            let th = document.createElement("th");
            th.textContent = header;
            filaHeader.appendChild(th);
        });

        userTable.appendChild(filaHeader);

        /*Ahora vamos a iterar sobre el parámetro que le hemos pasado y vamos a crear filas para
        la tabla, la cual rellenaremos con los datos que vienen en el apartado "users" de la APIRest*/
        listausers.forEach(function (user) {
            //Aquí creamos la letiable para las filas de la tabla
            let filaUser = document.createElement("tr");

            /*Aquí empezamos a crear las celdas de las filas que queremos sacar por pantalla*/
            let userId = document.createElement("td");
            userId.textContent = user.id;
            
            let nameUser = document.createElement("td");
            nameUser.textContent = user.name;

            let Username = document.createElement("td");
            Username.textContent = user.username

            let userEmail = document.createElement("td");
            userEmail.textContent = user.email

            let userStreet = document.createElement("td");
            userStreet.textContent = user.address.street

            let userSuite = document.createElement("td");
            userSuite.textContent = user.address.suite

            let userCity = document.createElement("td");
            userCity.textContent = user.address.city

            let userZipcode = document.createElement("td");
            userZipcode.textContent = user.address.zipcode

            let userLat = document.createElement("td");
            userLat.textContent = user.address.geo.lat

            let userLng = document.createElement("td");
            userLng.textContent = user.address.geo.lng

            let userPhone = document.createElement("td");
            userPhone.textContent = user.phone

            let userWebsite = document.createElement("td");
            userWebsite.textContent = user.website;

            /*Ahora agregamos las filas a la tabla*/
            filaUser.appendChild(userId);
            filaUser.appendChild(nameUser);
            userTable.appendChild(filaUser);
            filaUser.appendChild(Username);
            filaUser.appendChild(userEmail);
            filaUser.appendChild(userStreet);
            filaUser.appendChild(userSuite);
            filaUser.appendChild(userCity);
            filaUser.appendChild(userZipcode);
            filaUser.appendChild(userLat);
            filaUser.appendChild(userLng);
            filaUser.appendChild(userPhone);
            filaUser.appendChild(userWebsite);
        });

        /*Finalmente, agregamos la tabla al contenedor*/
        usuariosContainer.appendChild(userTable);
    }
    
    /*Aquí estamos cogiendo el elemento del menú con el id de "Posts" y estamos indicando que al hacer
    click sobre él, llame al API de posts y realice la función "posts" que le pasamos.*/
    document.getElementById("posts").addEventListener("click", function () {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => posts(data))
            .catch(error => console.error('Error:', error));
    });

    //Aquí vamos a realizar la función para sacar todos los posts de los usuarios, a la cual le estamos pasando un 
    //parámetro listaPosts:

    function posts(listaPosts) {
        // Limpiamos contenidos previos
        document.querySelector('.body h2').style.display = 'none';
        let usuariosContainer = document.getElementById("usuarios-container");
        usuariosContainer.innerHTML = '';
        let postsContainer = document.getElementById("posts-container");
        postsContainer.innerHTML = '';
        let comentariosContainer = document.getElementById("comentarios-container");
        comentariosContainer.innerHTML = '';
    
        // Creamos un objeto para almacenar el recuento de posts de cada usuario
        let postsPorUsuario = {};
    
        // Iteramos sobre la lista de posts y contamos cuántos posts tiene cada usuario con un contador
        listaPosts.forEach(function (post) {
            if (postsPorUsuario[post.userId]) {
                postsPorUsuario[post.userId]++;
            } else {
                postsPorUsuario[post.userId] = 1;
            }
        });
    
        // Después creamos una lista no ordenada para mostrar toda la información:
        let postsList = document.createElement("ul");
    
        // También aquí vamos a inicializar la variable para el total de los posts de los usuarios
        let totalPosts = 0;
    
        // Con este bucle, iteramos sobre el objeto en el que teníamos el recuento de posts por cada usuario
        // y vamos a mostrar la información
        for (let userId in postsPorUsuario) {
            // Creaamos un elemento de lista y mostrar la información por usuario y añadimos estilos
            let listItem = document.createElement("li");
            listItem.textContent = `Usuario ${userId}: ${postsPorUsuario[userId]} posts`;
            listItem.style.color = 'white';
            listItem.style.fontFamily = 'inherit';
            listItem.style.textAlign = 'center';
            postsList.appendChild(listItem);
    
            // Sumamos y almacenamos para sacar finalmente el total de los posts
            totalPosts += postsPorUsuario[userId];
        }
    
        // Agregamos el total de los posts al final de la lista y además añadimos estilos
        let totalItem = document.createElement("li");
        totalItem.style.color = 'white';
        totalItem.style.fontFamily = 'inherit';
        totalItem.style.textAlign = 'center';
        totalItem.style.fontSize = '1.2em';
        totalItem.style.marginTop = '10px';
        totalItem.textContent = `Total de posts de los usuarios: ${totalPosts}`;
        postsList.appendChild(totalItem);
    
        // Agregamos la lista al contenedor de posts
        postsContainer.appendChild(postsList);
    }

    // Por último, vamos a seleccionar el elemento del menú con el id "comentarios" y vamos a agregarle un evento
    // el cual, al pulsar el click sobre el botón del menú, nos lleve a la APIRest y saque el número de comentarios 
    // que hay en total en todos los posts
    document.getElementById("comentarios").addEventListener("click", function () {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(response => response.json())
            .then(data => mostrarInformacionComentarios(data))
            .catch(error => console.error('Error:', error));
    });

    // Y a continuación y por último, realizamos la función para sacar los comentarios que como podemos observar
    //es muy parecida a la anterior
    function mostrarInformacionComentarios(listaComentarios) {
        document.querySelector('.body h2').style.display = 'none';
        let usuariosContainer = document.getElementById("usuarios-container");
        usuariosContainer.innerHTML = '';
        let postsContainer = document.getElementById("posts-container");
        postsContainer.innerHTML = '';
        let comentariosContainer = document.getElementById("comentarios-container");
        comentariosContainer.innerHTML = '';
    
        let comentariosPorPost = {};
    
        listaComentarios.forEach(function (comentario) {
            if (comentariosPorPost[comentario.postId]) {
                comentariosPorPost[comentario.postId]++;
            } else {
                comentariosPorPost[comentario.postId] = 1;
            }
        });
    
        let comentariosList = document.createElement("ul");
    
        let totalComentarios = 0;
    

        for (let postId in comentariosPorPost) {
            let listItem = document.createElement("li");
            listItem.textContent = `Post ${postId}: ${comentariosPorPost[postId]} comentarios`;
            listItem.style.color = 'white';
            listItem.style.fontFamily = 'inherit';
            listItem.style.textAlign = 'center';
            comentariosList.appendChild(listItem);
    
            totalComentarios += comentariosPorPost[postId];
        }
    
        let totalItem = document.createElement("li");
        totalItem.style.color = 'white';
        totalItem.style.fontFamily = 'inherit';
        totalItem.style.textAlign = 'center';
        totalItem.style.fontSize = '1.2em'; 
        totalItem.style.marginTop = '10px'; 
        totalItem.textContent = `Total de comentarios en todos los posts: ${totalComentarios}`;
        comentariosList.appendChild(totalItem);
    
        document.getElementById("comentarios-container").appendChild(comentariosList);
    }
})