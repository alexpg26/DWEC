const radio = prompt('Introduce el radio del círculo');
const alerta = document.querySelector(".alert");
if(!isNaN(radio)){
    let area = Math.pow(radio,2);
    area = area.toFixed(2);
    alerta.innerHTML = `El área del círculo de radio ${radio} es ${area}`
}else{
    alerta.classList = 'alert alert-danger';
    alerta.innerHTML = 'No has introducido un número';
}