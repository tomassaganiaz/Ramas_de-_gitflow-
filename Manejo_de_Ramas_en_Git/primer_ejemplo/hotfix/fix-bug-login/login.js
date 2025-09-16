// hotfix/fix-bug-login/login.js
function login(usuario, contraseña) {
if (!usuario || !contraseña) {
    alert("Por favor, completa todos los campos");
    return;
}
if (usuario === "admin" && contraseña === "1234") {
    alert("Login exitoso");
} else {
    alert("Credenciales incorrectas");
}
}
