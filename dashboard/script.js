var boton = document.getElementById('dark')
boton.addEventListener('click', modoDark)

function modoDark() {
    //nav dark
    var navNuevo = document.getElementById('nav-nuevo')
    navNuevo.style.backgroundColor = 'rgb(66 65 65)';

    //sidebar dark
    var sidebarDark = document.getElementById('sidebar-sticky')
    sidebarDark.style.backgroundColor = '#252525';

    //sidebar link
    var sidebarColor = document.getElementsByClassName('nav-link')
    for (var i = 0; i < sidebarColor.length; i++) sidebarColor[i].style.color = "rgb(70 135 199)";

    //body
    document.body.style.backgroundColor = '#313131f0';

    //titulos
    var titulos = document.getElementsByClassName('h2')
    for (var i = 0; i < titulos.length; i++) titulos[i].style.color = "#dee2e6a6";

    //tabla
    var tablas = document.getElementsByClassName('table')
    for (var i = 0; i < tablas.length; i++) tablas[i].style.color = '#889098';

    //cambio nombre
    var cambioTitulo = document.getElementById('titulo')
    cambioTitulo.textContent = 'Modo Dark'
}


var botonLigth = document.getElementById('ligth')
botonLigth.addEventListener('click', modoLigth)

function modoLigth() {
    //nav ligth
    var navNuevoLigth = document.getElementById('nav-nuevo')
    navNuevoLigth.style.backgroundColor = '#62a6ea';

    //sidebar dark
    var navNuevoDark = document.getElementById('sidebar-sticky')
    navNuevoDark.style.backgroundColor = '#eae2e278';

    //sidebar link 
    var sidebarColorLight = document.getElementsByClassName('nav-link')
    for (var i = 0; i < sidebarColorLight.length; i++) sidebarColorLight[i].style.color = "#333";

    //body
    document.body.style.backgroundColor = '#fff';

    //titulos
    var titulosLight = document.getElementsByClassName('h2')
    for (var i = 0; i < titulosLight.length; i++) titulosLight[i].style.color = "#212529";

    //tabla
    var tablasLight = document.getElementsByClassName('table')
    for (var i = 0; i < tablasLight.length; i++) tablasLight[i].style.color = '#212529';

    //cambio nombre
    var cambioTituloLigth = document.getElementById('titulo')
    cambioTituloLigth.textContent = 'Modo Ligth'

}