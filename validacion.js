let usuario = document.getElementById("usuario");
let mensaje = document.getElementById("mensaje");
usuario.addEventListener("input", function(e){

this.value = this.value.toLowerCase()
if(/[^a-zA-Z]/g.test(this.value)){
    mensaje.textContent = "no"
    mensaje.style.color = "red"; 
} 
else if(this.value){
mensaje.textContent = "bien"
mensaje.style.color = "green"; 
} else {
    mensaje.textContent = "campo requerido"
    mensaje.style.color = "yellow"; 
}
this.value = this.value.replace(/[^a-zA-Z]/g, "")
});

let password = document.getElementById("password");
let mensajePass = document.getElementById("mensajePass");

password.addEventListener("input", function () {

    if (this.value.length > 10) {
        mensajePass.textContent = "mal";
        mensajePass.style.color = "red";
    } 
    else if (this.value.length > 0) {
        mensajePass.textContent = "bien";
        mensajePass.style.color = "green";
    } 
    else {
        mensajePass.textContent = "campo requerido";
        mensajePass.style.color = "orange";
    }

});
