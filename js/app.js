var digits = "01234567";
var longitudeCode = 3;

var $phoneNumberInput = $('#phone-number');
var $linkToVerifyView = $('.verify-phone-next');
var $codeVerifyInput = $('#verify-code');
var $agreeTermsUser = $('#grid-check');

$(document).ready(loadPage);

 // función que centraliza al resto de las funciones
function loadPage() {
  loadSplashView();
  loadMainView();
  $phoneNumberInput.keyup(validatePhoneNumber);
  $linkToVerifyView.click(codeGenerator);
  $codeVerifyInput.keyup(validateCode);
  $agreeTermsUser.click(validateUserData);
}

// función para mostrar la vista splash por tres segundos
function loadSplashView() {
  setTimeout(function() {
    $("#view-splash").fadeOut(1500);
  },3000);
}

// función que muestra la vista principal pasado la vista splash
function loadMainView() {
  setTimeout(function() {
    $("#signup").fadeIn(1500);
  },3000);
}

// función que valida el número telefonico ingresado por el usuario para habilitar botón
function validatePhoneNumber() {
  if($('#phone-number').val().trim().length === 10) {
    $('.verify-phone').removeAttr('disabled');
    return true
  }else {
    $('.verify-phone').attr('disabled', true);
    return false
  }
}

/* función para generar código aleatorio */
function codeGenerator(e){
  e.preventDefault();
  //validando input del phone number para prevenir compartamiendo del enlace
  var isValid = validatePhoneNumber();
  if( !isValid) {
    return
  }
  var code = "";
  for(var i = 0; i < longitudeCode; i++) {
    randomNumber = Math.floor(Math.random() * digits.length);
    code += digits.substr(randomNumber, 1);
  }
  code = 'LAB-' + code;
  localStorage.setItem('labCode', code);
  alert('Your code is: ' + code);
  window.location.href = "verify-view.html";
}

//función que valida el código enviado al usuario y permite la redirección a la siguiente vista
function validateCode(){
  var codeSent = localStorage.getItem('labCode');
   if($(this).val().trim() === codeSent) {
   $('.verify-code-next').removeAttr('disabled');
   $('.to-agree-view').attr('href','agree-view.html');
 }else {
   $('.verify-code-next').attr('disabled', true);
   $('.to-agree-view').attr('href','#');
 }
}

function validateUserData(){
  if($('.first-name').val().trim().length > 3 &&
     $('.second-name').val().trim().length > 3) {
    $('.finish-next').removeAttr('disabled');
    $('.to-finish-view').attr('href','finish-view.html');
  } else {
    $('.finish-next').attr('disabled', true);
    $('.to-finish-view').attr('href','#');
  }
}
