var digits = "01234567";
var longitudeCode = 3;

var $phoneNumberInput = $('#phone-number');
var $linkToVerifyView = $('.verify-phone-next');

$(document).ready(loadPage);

function loadPage() { // función que centraliza al resto de las funciones
  loadSplashView();
  loadMainView();
  $phoneNumberInput.keyup(validatePhoneNumber);
  $linkToVerifyView.click(codeGenerator);
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

function validatePhoneNumber() {
  var $buttonToVerifyView = $('.verify-phone');

  if($(this).val().trim().length === 10) {
    $buttonToVerifyView.removeAttr('disabled');
    // $linkToVerifyView.attr("href", "verify-view.html");
  }else {
    $buttonToVerifyView.attr('disabled', true);
    // $linkToVerifyView.attr('href','#');
  }
}

function codeGenerator(e){
  e.preventDefault();
  code = "";
  for(var i = 0; i < longitudeCode; i++) {
    randomNumber = Math.floor(Math.random() * digits.length);
    code += digits.substr(randomNumber, 1);
  }
  // $linkToVerifyView.attr("href", "verify-view.html");
  alert('Your code is: LAB-' + code);
  window.location.href = "verify-view.html";
}
