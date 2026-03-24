function alterarTemaSite(){
    let tema = document.querySelector("html").getAttribute("data-bs-theme");
    if(tema === "light"){
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-moon"></i>`;
    }else{
        document.querySelector("html").setAttribute("data-bs-theme", "light");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-sun"></i>`;
    }
}