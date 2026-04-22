const formulario = document.querySelector("form");
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const boton = document.querySelector("button");
const body = document.querySelector("body");
const div = document.querySelector(".parrafo");
const botones = document.querySelectorAll("button");

const ul = document.querySelector("ul");


ul.addEventListener("click", (event) =>{
    event.preventDefault()
    let elemento = event.target;
    let id;
    if (event.target.matches(".eliminar")){
        id = elemento.dataset.id
        let respuesta = (`quiere  eliminar el producto con el id: ${id}`)
        if (respuesta){
        elemento.remove()
        fetch
        }
    }
});






/*
console.log(botones)
const cargar = (nombre,apellido) => {
    let pNombre = document.createElement("p");
    let pApellido = document.createElement("p");
    let contenedor = document.createElement("div");

    pNombre.textContent = nombre;
    pApellido.textContent = apellido;

    contenedor.append(pNombre , pApellido);
    contenedor.classList.add("card")
    div.appendChild(contenedor)
}



boton.addEventListener("click", () =>{
    body.classList.toggle("bg")
    const p = document.createElement("p");
    p.textContent = "no es ni pingo"
    div.appendChild(p)

})

const saludar = () =>{
    alert("holaaaaaaaaa")
}

document.addEventListener("DOMContentLoaded", saludar =>{

});

body.addEventListener("click", (e) => {
    console.log(e.target)
})

nombre.addEventListener("keypress", () =>{
    console.log("si")
})
//console.log(formulario)
//evento 
formulario.addEventListener("submit" , (e) => {
    e.preventDefault();
    let error = true 
    //console.log(!nombre.value)
    nombre.classList.remove("error")
    apellido.classList.remove("error")
    if (!nombre.value){
        nombre.classList.add("error");
        error = true
        
    }

    if (!apellido.value){
        apellido.classList.add("error");
        error = true
    }
    if (error){
        return
    }

    cargar(nombre.value,apellido.value);
    formulario.reset();
}); 
*/