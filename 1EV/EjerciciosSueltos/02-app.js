const brand = document.getElementsByClassName("navbar-brand");
console.log(brand);

brand[0].style.color ="red";

const btnJumbo = document.querySelector(".jumbotron a.btn-primary");

btnJumbo.classList.remove("btn-primary");
btnJumbo.classList.add("btn-danger");

const btnCols = document.querySelectorAll(".col-md-6 a.btn-selector")

btnCols.forEach(element =>{

    element.classList.remove("btn-secondary");
    element.classList.add("btn-danger");
});

const cols = document.querySelectorAll(".col-md-6");

cols[4].style.backgroundColor = "#FE9";
cols[5].style.backgroundColor = "#FE9";

cols.forEach(element =>{
    element.addEventListener("click", function(e){
        element.classList.toogle("marcar");
    });
});
