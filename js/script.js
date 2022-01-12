var eventos = document.getElementById("modal-eventos");
var usuarios = document.getElementById("modal-usuarios");
var relatorios = document.getElementById("modal-relatorios");


var btnEventos = document.getElementById("btn-eventos");
var btnUsuarios = document.getElementById("btn-usuarios");
var btnRelatorios = document.getElementById("btn-relatorios");
var btnEventos2 = document.getElementById("eventos");
var btnUsuarios2 = document.getElementById("usuarios");
var btnRelatorios2 = document.getElementById("relatorios");


var spanEventos = document.getElementById("close-eventos");
var spanUsuarios = document.getElementById("close-usuarios");
var spanRelatorios = document.getElementById("close-relatorios");


/* Abri Modal */
btnEventos.onclick = function () {
    eventos.style.display = "block";
}
btnUsuarios.onclick = function () {
    usuarios.style.display = "block";
}
btnRelatorios.onclick = function () {
    relatorios.style.display = "block";
}
btnEventos2.onclick = function () {
    eventos.style.display = "block";
}
btnUsuarios2.onclick = function () {
    usuarios.style.display = "block";
}
btnRelatorios2.onclick = function () {
    relatorios.style.display = "block";
}


/* Fechar Modal ao clicar no X*/
spanEventos.onclick = function () {
    eventos.style.display = "none";
}
spanUsuarios.onclick = function () {
    usuarios.style.display = "none";
}
spanRelatorios.onclick = function () {
    relatorios.style.display = "none";
}


/* Fechar Modal clicando em outro canto da tela */
window.onclick = function (event) {
    if (event.target == eventos) {
        eventos.style.display = "none";
    }
    else if (event.target == usuarios) {
        usuarios.style.display = "none";
    }
    else if (event.target == relatorios) {
        relatorios.style.display = "none";
    }
}


/* Botão para recarregar pagina */
var btnHome = document.getElementById("home");
var btnLogo = document.getElementById("logo");

btnHome.onclick = function () {
    window.location.reload();
}
btnLogo.onclick = function () {
    window.location.reload();
}


/* (Des)Logar */
var btnLogin = document.getElementById("log-in");
var logout = document.getElementById("log-out");
var btnLogout = document.getElementById("btn-log-out");
var btnLogoutSmall = document.getElementById("btn-log-out-small");



btnLogin.onclick = function () {
    logout.style.display = "flex";
    btnLogin.style.display = "none";
}
btnLogout.onclick = function () {
    btnLogin.style.display = "flex";
    logout.style.display = "none";
}
btnLogoutSmall.onclick = function () {
    btnLogin.style.display = "flex";
    logout.style.display = "none";
}
