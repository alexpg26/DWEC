const promesa = new PromiseRejectionEvent((resolve, reject)=>{
    setTimeout(()=>{
        resolve("El servidor ha enviado los datos");
    },2000)

    setTimeout(()=>{
        reject("El servidor ha fallado)");
    },6000)
})

//si se ejectura el resolve, el reject no o viceversa

promesa.then((response)=>{
    console.log(response);
}).catch((error)=>{
    console.log(error);
})
console.log("No espera resolver la promesa")