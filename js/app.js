$(document).ready(loadPage);

function loadPage() { // función que centraliza al resto de las funciones
  loadSplashView();
  loadMainView();
}

function loadSplashView() { // función para mostrar la vista splash por tres segundos
  setTimeout(function() {
    $("#view-splash").fadeOut(1500);
  },3000);
}

function loadMainView() { // función que muestra la vista principal pasado la vista splash
  setTimeout(function() {
    $("#signup").fadeIn(1500);
  },3000);
}
