let formulario = document.getElementById("miFormulario");

let usuario = document.getElementById("usuario");
let password = document.getElementById("password");

let mensaje = document.getElementById("mensaje");
let mensajePass = document.getElementById("mensajePass");
let contador = document.getElementById("contador");
let estado = document.getElementById("estado");

let togglePass = document.getElementById("togglePass");

let intentosFallidos = 0;
let bloqueado = false;

usuario.addEventListener("input", function () {

    this.value = this.value.toLowerCase();
    this.value = this.value.replace(/[^a-z0-9.-]/g, '');

    if (this.value.length === 0) {
        mensaje.textContent = "Campo requerido";
        mensaje.style.color = "orange";
    } 
    else if (this.value.length < 3) {
        mensaje.textContent = "Mínimo 3 caracteres";
        mensaje.style.color = "red";
    } 
    else {
        mensaje.textContent = "Usuario válido";
        mensaje.style.color = "green";
    }
});

togglePass.addEventListener("click", () => {
    password.type = password.type === "password" ? "text" : "password";
    togglePass.textContent = password.type === "password" ? "Mostrar" : "Ocultar";
});

password.addEventListener("input", function () {

    let valor = this.value;
    contador.textContent = `Caracteres: ${valor.length}`;

    let tieneNumero = /\d/.test(valor);
    let tieneEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(valor);
    let tieneMayuscula = /[A-Z]/.test(valor);

    if (valor.length === 0) {
        mensajePass.textContent = "Campo requerido";
        mensajePass.style.color = "orange";
    }
    else if (valor.length < 6) {
        mensajePass.textContent = "Muy corta";
        mensajePass.style.color = "red";
    }
    else if (!tieneNumero || !tieneMayuscula || !tieneEspecial) {
        mensajePass.textContent = "Password débil";
        mensajePass.style.color = "red";
    }
    else {
        mensajePass.textContent = "Contraseña segura";
        mensajePass.style.color = "green";
    }
});

function validarUsuarioFinal() {
    if (usuario.value.length < 3) {
        mensaje.textContent = "Usuario inválido";
        mensaje.style.color = "red";
        return false;
    }
    return true;
}

function bloquearFormulario() {

    bloqueado = true;
    usuario.disabled = true;
    password.disabled = true;

    estado.textContent = "Demasiados intentos. Espere 30 segundos.";
    estado.style.color = "red";

    setTimeout(() => {
        bloqueado = false;
        intentosFallidos = 0;

        usuario.disabled = false;
        password.disabled = false;

        estado.textContent = "";
    }, 30000);
}

function mostrarMensaje(texto, color) {
    estado.textContent = texto;
    estado.style.color = color;
}

formulario.addEventListener("submit", function (e) {

    e.preventDefault();

    if (bloqueado) return;

    let usuarioValido = validarUsuarioFinal();
    let passSegura = mensajePass.textContent === "Contraseña segura";

    if (usuarioValido && passSegura) {

        mostrarMensaje("Formulario enviado correctamente ✅", "green");

        formulario.reset();
        contador.textContent = "";
        mensaje.textContent = "";
        mensajePass.textContent = "";

        intentosFallidos = 0;
    } 
    else {

        intentosFallidos++;

        mostrarMensaje(`Intento fallido (${intentosFallidos}/3)`, "orange");

        if (intentosFallidos >= 3) {
            bloquearFormulario();
        }
    }
});