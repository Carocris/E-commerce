function validarInicioSesion() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
  
    if (email.trim() == "") {
      alert("Por favor, ingrese su correo electrónico");
      return false;
    }
  
    if (password.trim() == "") {
      alert("Por favor, ingrese su contraseña");
      return false;
    }
  
    if (password != confirmPassword) {
      alert("Las contraseñas no coinciden");
      return false;
    }
  
    return true;
  }


  document.querySelector('form').addEventListener('submit', function() {
    window.location.href = 'profile.html';
  });
  