function validarFormulario() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
  
    if (username.trim() === "") {
      alert("Por favor, ingrese un nombre de usuario.");
      return false;
    }
  
    if (email.trim() === "") {
      alert("Por favor, ingrese un correo electrónico.");
      return false;
    }
  
    if (password.trim() === "") {
      alert("Por favor, ingrese una contraseña.");
      return false;
    }
  
    if (confirmPassword.trim() === "") {
      alert("Por favor, confirme su contraseña.");
      return false;
    }
  
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return false;
    }
  
    return true;
  }
  