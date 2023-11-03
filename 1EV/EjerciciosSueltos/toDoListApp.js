    const listaTareas = document.getElementById("#lista-tareas");
    const formulario = document.getElementById("#formulario");
    const input = document.getElementById("#input");
    const templateItem = document.getElementById("#template-item").content;


    const fragment = document.createDocumentFragment();  
    let tareas = {};
    
    document.addEventListener("DOMContentLoaded", () => {

        pintarTareas();
    });

    listaTareas.addEventListener("click", e =>{
        btnAccion(e);
    });

    formulario.addEventListener("submit", e => {

        e.preventDefault();


        setTarea(e);
    });

    const setTarea = e => {
        if (input.vale.trim()=== ""){
            console.log("No hay valor");
        } else {

            const tarea = {
                id: Date.now(),
                texto: input.value.trim(),
                completada: false
            }

            tareas[tarea.id] = tarea;
        }
    }

   