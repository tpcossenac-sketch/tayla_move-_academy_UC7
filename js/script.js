window.addEventListener("DOMContentLoaded", function () {

    const aluno = localStorage.getItem("aluno");

    const menuPlanos = document.getElementById("menuPlanos");
    const menuUnidades = document.getElementById("menuUnidades");
    const menuTreinos = document.getElementById("menuTreinos");

    if (!menuPlanos || !menuUnidades || !menuTreinos) return;

    if (aluno === "true") {

        menuPlanos.style.display = "none";
        menuUnidades.style.display = "none";
        menuTreinos.style.display = "block";

    } else {

        menuPlanos.style.display = "block";
        menuUnidades.style.display = "block";
        menuTreinos.style.display = "none";

    }

});