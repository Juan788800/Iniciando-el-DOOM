    const texto = document.querySelector("#texto");
    const boton = document.querySelector("#boton");
    const lista_de_mensajes = document.querySelector("#lista_de_mensajes");
    const mensajeError = document.querySelector("#mensaje_de_error");
    // Asocia un evento al botón.
    boton.addEventListener("click", () => {
    //Agrega contenido al elemento creado.
    const contenido_del_usuario = texto.value.trim();
    // Validar que los campos no estén vacíos o con espacios en blanco
    if (contenido_del_usuario ==="") {
        alert("El campo debe tener información.");
        return;
    }

    
    // Insertar nuevo elemento dentro de la página.
    const mensaje = document.createElement("div");
    mensaje.textContent = contenido_del_usuario;
    mensaje.classList.add("item");

    lista_de_mensajes.appendChild(mensaje);

    texto.value = "";
});