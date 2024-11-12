const nombreinput = document.getElementById("nombre");
const telefonoinput = document.getElementById("telefono");
const correoinput = document.getElementById("correo");
const apellidoinput = document.getElementById("apellido");
const plazo = document.getElementById('plazo');
const extras = document.querySelectorAll('.extra');
const presupuesto = document.getElementById('presupuesto');
const formularioinput = document.getElementById("miFormulario");
const btnborrar = document.getElementById("borrar");
const condiciones = document.getElementById("condiciones")
function validarNombre () {
    const nombre = nombreinput.value.trim();
    let expresionNombre = /^[a-zA-Z]{1,15}$/;
    if (nombre.length >= 3 && expresionNombre.test(nombre)) {
        nombreinput.classList.add("valido");
        nombreinput.classList.remove("invalido");
        document.getElementById("nombreError").textContent = "";
    } else {
        nombreinput.classList.remove("valido");
        nombreinput.classList.add("invalido");
        document.getElementById("nombreError").textContent = "El nombre debe tener al menos 3 caracteres y empezar con una letra";
    }
}

 function validarTelefono (){
    const telefono = telefonoinput.value
    let expresionTelefono = /^\d{9}$/;
    if (telefono.length >=3 && expresionTelefono.test(telefono)) {
        telefonoinput.classList.add("valido");
        telefonoinput.classList.remove("invalido")
        document.getElementById("telefonoError").textContent = ""
        console.log("valido")
    } else {
        telefonoinput.classList.remove("valido");
        telefonoinput.classList.add("invalido")
        document.getElementById("telefonoError").textContent = "El número de telefono debe contener 9 numeros"    
        console.log("invalido")     
    }    
 }

 function validarCorreo (){
    const correo = correoinput.value
    let expresionCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (correo.length >= 3 && expresionCorreo.test(correo)) {
        correoinput.classList.add("valido");
        correoinput.classList.remove("invalido")
        document.getElementById("correoError").textContent = ""
        console.log("valido")
    } else {
        correoinput.classList.remove("valido");
        correoinput.classList.add("invalido")
        document.getElementById("correoError").textContent = "El nombre de usuario debe tener al menos 3 caracteres y empezar con una letra"   
        console.log("invalido")         
    }    
 } 

 function validarapellido (){
    const apellido = apellidoinput.value
    let expresionApellidos = /^[a-zA-Z ]{1,40}$/;
    if (apellido.length >= 3 && expresionApellidos.test(apellido)) {
        apellidoinput.classList.add("valido");
        apellidoinput.classList.remove("invalido")
        document.getElementById("apellidoError").textContent = ""
        console.log("valido");
    } else {
        apellidoinput.classList.remove("valido");
        apellidoinput.classList.add("invalido")
        document.getElementById("apellidoError").textContent = "El apellido del usuario debe tener al menos 3 caracteres y empezar con una letra" 
        console.log("invalido");        
    }    

 } 
function mensajeEnvio(mensaje , estilo){  
    let enviado = document.getElementById("formularioEnviado")
    if (estilo === "enviado" || estilo === "noEnviado") {
      enviado.textContent = mensaje;
      enviado.className = (estilo)
    }    
    setTimeout(function(){
        enviado.textContent = ""
        enviado.classList.remove(estilo)
    },3000)  
}

 nombreinput.addEventListener("keyup", function(){
    if(nombreinput.value == ""){
        borrarestilos(nombreinput)
    }else{
        validarNombre();
    }  
});

telefonoinput.addEventListener("keyup", function(){
    if(telefonoinput.value == ""){
        borrarestilos(telefonoinput)
    }else{
        validarTelefono();
    }  
});
correoinput.addEventListener("keyup", function(){
    if(correoinput.value == ""){
        borrarestilos(correoinput)
    }else{
        validarCorreo();
    }  
});
apellidoinput.addEventListener("keyup", function(){
    if(apellidoinput.value == ""){
        borrarestilos(apellidoinput)
    }else{
        validarapellido();
    }  
});

function calcularPresupuesto() {
    let total = parseFloat(producto.value);
    
    // Descuento por plazo
    if (plazo.value >= 5 && plazo.value <= 9) {
        total = total - (total * 0.05); 
    } else if (plazo.value >= 10) {
        total = total - (total * 0.15); 
    }
    

    // Sumar extras seleccionados
    extras.forEach(extra => {
        if (extra.checked) total += parseFloat(extra.value);
    });

    presupuesto.value = `$${total.toFixed(2)}`;
}

producto.addEventListener('change', calcularPresupuesto);
plazo.addEventListener('input', calcularPresupuesto);
extras.forEach(extra => extra.addEventListener('change', calcularPresupuesto));
 formularioinput.addEventListener("submit", function(evento){
    evento.preventDefault();

    validarNombre()
    validarTelefono()
    validarCorreo()
    validarapellido()
    
    if (nombreinput.classList.contains("valido") && telefonoinput.classList.contains("valido") && correoinput.classList.contains("valido") && apellidoinput.classList.contains("valido") && plazo.value === "1" && condiciones.checked == true ) {
               
           borrarestilos()

        
            mensajeEnvio("Tu formulario fue enviado con exíto", "enviado");
    } else {
        mensajeEnvio("Tienes que completar todos los campos del formulario y aceptar las politicas de privacidad" , "noEnviado");
        setTimeout(function(){
            borrarestilos()
        },3000)  
    }
 })

/*********************botonBorran************************/
 btnborrar.addEventListener("click", borrarestilos);
 /******************Borrar*********************/

 function borrarestilos(){
    formularioinput.reset()      
    nombreinput.classList.remove("valido","invalido");
    telefonoinput.classList.remove("valido","invalido");
    correoinput.classList.remove("valido","invalido");
    apellidoinput.classList.remove("valido","invalido");
    document.getElementById("nombreError").textContent = "";
    document.getElementById("telefonoError").textContent = "";
    document.getElementById("correoError").textContent = "";
    document.getElementById("apellidoError").textContent = "";
} 