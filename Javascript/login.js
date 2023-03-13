function validateForm() {
  // Obtener los valores de los campos
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Verificar que la dirección de correo electrónico sea válida
  var emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor ingrese una dirección de correo electrónico válida");
    return false;
  }

  // Verificar que se haya ingresado una contraseña
  if (password.length == 0) {
    alert("Por favor ingrese una contraseña");
    return false;
  }

  // Verificar que las credenciales coincidan con las almacenadas en el localStorage
  var storedEmail = localStorage.getItem("email");
  var storedPassword = localStorage.getItem("password");
  if (email == storedEmail && password == storedPassword) {
    // Redirigir al usuario a la página de bienvenida
    window.location.href = "bienvenido.html";
  } else {
    // Mostrar un mensaje de error
    alert("Credenciales incorrectas");
    return false;
  }
}
