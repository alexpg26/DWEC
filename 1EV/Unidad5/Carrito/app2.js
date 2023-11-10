window.addEventListener('load', e => {

    const cards = document.getElementById("cards");
    const templateCard = document.getElementById("template-card").content;
    const templateCarrito = document.getElementById("template-carrito").content;
    const templateFooter = document.getElementById("template-footer").content;
    const fragment = document.createDocumentFragment();
    const itemsCarrito = document.querySelector("#items");
    const footer = document.getElementById("footer");

    let carrito = {};

    cards.addEventListener("click", e => {
        e.stopPropagation();
        addCarrito(e);
    })

    itemsCarrito.addEventListener("click", e => {
        btnAction(e);
    })

    const fechData = async () => {
        try {
            const res = await fetch("./productos.json");
            console.log(res);
            const data = await res.json();
            console.log(data);
            pintarCards(data);
        } catch (error) {
            console.log(error)
        }
    }

    const pintarCards = data => {
        data.forEach(producto => {
            templateCard.querySelector("h5").textContent = producto.title;
            templateCard.querySelector("p").textContent = producto.precio;
            templateCard.querySelector("img").setAttribute("src", producto.thumbnailUrl);
            templateCard.querySelector("img").setAttribute("alt", producto.title);

            templateCard.querySelector(".btn").dataset.idProducto = producto.id;
            const clone = templateCard.cloneNode(true);
            fragment.appendChild(clone);
        });

        cards.appendChild(fragment);
    }

    const addCarrito = e => {
        if (e.target.classList.contains("btn-dark")) {
            setCarrito(e);
        }
    }

    const btnAction = e => {

        if (e.target.classList.contains('btn-info')) {
            const idProducto = e.target.dataset.id;
            carrito[idProducto].cantidad++;
            pintarCarrito();
        }


        if (e.target.classList.contains('btn-danger')) {
            if (e.target.closest('tfoot')) {
                carrito = {};
                pintarCarrito();
                pintarFooter();
            } else {
                const idProducto = e.target.dataset.id;
                if (carrito[idProducto].cantidad > 1) {
                    carrito[idProducto].cantidad--;
                } else {
                    delete carrito[idProducto];
                }
                pintarCarrito();
            }
        }



        e.stopPropagation();
    }

    const setCarrito = e => {
        const idProducto = e.target.dataset.idProducto;
        console.log(idProducto);

        if (carrito.hasOwnProperty(idProducto)) {
            carrito[idProducto].cantidad++;
        } else {
            const producto = {
                id: idProducto,
                nombre: e.target.parentNode.querySelector("h5").textContent,
                precio: e.target.parentNode.querySelector(".precio").textContent,
                cantidad: 1
            };
            carrito[idProducto] = producto;
        }

        pintarCarrito();
        console.log(carrito);
    }

    const pintarFooter = () => {
        footer.innerHTML = "";
        if (Object.keys(carrito).length === 0) {
            footer.innerHTML = '<th scope="row" colspan="5">Carrito vacio, Comience a comprar!!</th>';
            return;
        } else {
            const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0);
            const nTotal = Object.values(carrito).reduce((acc, { cantidad, precio }) => acc + cantidad * precio, 0);

            templateFooter.querySelector("td").textContent = nCantidad;
            templateFooter.querySelector("span").textContent = nTotal;

            const clone = templateFooter.cloneNode(true);
            fragment.appendChild(clone);
            footer.appendChild(fragment);
        }
    }

    const pintarCarrito = () => {
        itemsCarrito.innerHTML = "";
        Object.values(carrito).forEach(producto => {
            const clone = templateCarrito.cloneNode(true);
            clone.querySelector("th").textContent = producto.id;
            clone.querySelectorAll("td")[0].textContent = producto.nombre;
            clone.querySelectorAll("td")[1].textContent = producto.cantidad;
            clone.querySelector(".btn-info").dataset.id = producto.id;
            clone.querySelector(".btn-danger").dataset.id = producto.id;    
            clone.querySelector("span").textContent = producto.precio * producto.cantidad;

            fragment.appendChild(clone);
        });
        itemsCarrito.appendChild(fragment);
        pintarFoorter();
    }
    

    fechData();
})