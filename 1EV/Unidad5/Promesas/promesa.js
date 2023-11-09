$(document).ready(function(){
    console.log("Antes de la petición");
    let promise = $.get("https://reqres.in/api/users")
});

promise.then(
    (respuesta)=>{
        console.log("Dentro del primer then")
        
    }
)

