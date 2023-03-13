function validateForm() {
  // Obtener los valores de los campos
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm-password").value;

  // Verificar que se haya ingresado un nombre de usuario válido
  var usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
  if (!usernameRegex.test(username)) {
    alert("Por favor ingrese un nombre de usuario válido (solo letras, números, guiones y guiones bajos, de 3 a 16 caracteres)");
    return false;
  }

  // Verificar que la dirección de correo electrónico sea válida
  var emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor ingrese una dirección de correo electrónico válida");
    return false;
  }

  // Verificar que la contraseña tenga al menos 8 caracteres
  if (password.length < 6) {
    alert("La contraseña debe tener al menos 8 caracteres");
    return false;
  }

  // Verificar que la contraseña y la confirmación de contraseña coincidan
  if (password != confirmPassword) {
    alert("Las contraseñas no coinciden");
    return false;
  }

  // Guardar los datos en el localStorage
  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  // Permitir que el formulario se envíe
  return true;
}
