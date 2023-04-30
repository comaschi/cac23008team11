const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {

    nav.classList.remove("visible");
})

function header() {
    document.write('<img class="logo" src="/assets/Imagenes/5.png" alt="Logo"><button id="abrir" class="abrir-menu"><i class="bi bi-list"></i></button><nav class="nav" id="nav"><button id="cerrar" class="cerrar-menu"><i class="bi bi-x-circle-fill"></i></button><ul class="nav-list"><li><a href="index.html">Inicio</a></li><li><a href="el_restaurante.html">El restaurante</a></li><li><a href="donde_estamos.html">¿Dónde estamos?</a></li><li><a href="la_carta.html">La carta</a></li><li><a href="contactos.html">Contacto - Reservas</a></li></ul></nav>')
}
function footer() {
    document.write('<div><div id="footer-div1">Seguinos en nuestras redes</div><div><a href=""><img class="footer-div-img-1" src="/assets/Imagenes/Logo de Instagram.png" alt=""></a><a href=""><img class="footer-div-img-1" src="/assets/Imagenes/Logo Linkedin.png" alt=""></a><img class="footer-div-img-1" src="/assets/Imagenes/Logo de Facebook.png" alt=""></a></div></div><div id="footer-div2" class="footer-div-2">Todos los derechos reservados - 2023</div><div class="footer-div-3"><div id="footer-div3">Chateá con nosotros</div><div><a><img id="Whatsapp" src="/assets/Imagenes/Ícono de Whatsapp.png" alt=""></a></div></div>')
}