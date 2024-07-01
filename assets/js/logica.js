// Obtener el formulario y los campos de usuario y contraseña
const form = document.getElementById('login-form');
const usernameField = document.getElementById('username');
const passwordField = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

// Simular datos de usuario (esto debería conectarse a una base de datos real en un entorno de producción)
const usuarioValido = {
  username: 'admin',
  password: 'admin123'
};

// Manejar el evento de envío del formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar que se envíe el formulario por defecto

  const username = usernameField.value;
  const password = passwordField.value;

  // Validar las credenciales ingresadas
  if (username === usuarioValido.username && password === usuarioValido.password) {
    // Redireccionar al usuario a la página principal de la tienda (por ejemplo, tienda.html)
    window.location.href = './tienda.html';
  } else {
    // Mostrar un mensaje de error si las credenciales no son válidas
    errorMessage.textContent = 'Usuario o contraseña incorrectos. Inténtalo de nuevo.';
    // Limpiar los campos de usuario y contraseña para un nuevo intento
    usernameField.value = '';
    passwordField.value = '';
  }
});
