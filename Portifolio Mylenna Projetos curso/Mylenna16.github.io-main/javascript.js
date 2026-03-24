const slider = document.querySelectorAll(".slider");
const btnprev = document.getElementById("prev-button");
const btnnext = document.getElementById("next-button");

let slideativo = 0;
function esconder(){
    slider.forEach(item => item.classList.remove("on"))
}
function mostrar(){
    slider[slideativo].classList.add("on")
}

function avançar(){
    esconder()
    if(slideativo === slider.length -1){
        slideativo = 0
    }else{
        slideativo++
    }
    mostrar()
}

function voltar(){
    esconder()
    if(slideativo === 0){
        slideativo = slider.length -1
    }else{
        slideativo--
    }
    mostrar()
}

btnnext.addEventListener("click", avançar)
btnprev.addEventListener("click", voltar)
