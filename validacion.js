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
