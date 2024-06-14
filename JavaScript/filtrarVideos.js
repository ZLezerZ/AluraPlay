import { conexionAPI } from "./conexionAPI.js"
import crearCarta from "./mostrarVideos.js";

async function filtrarVideos(evento){
    evento.preventDefault();
    const datosBusqueda = document.querySelector("[data-busqueda]");
    const busqueda = await conexionAPI.buscarVideos(datosBusqueda.value);
    const lista = document.querySelector("[data-lista]");
    //Este if es para eliminar todos los videos de la lista antes de mostrar los nuevos videos que se buscan con la palabra clave ingresada por el usuario.
    if(lista.firstChild){
        lista.innerHTML = "";
    }
    //Con este while se eliminan los videos de la lista al igual que con el if de arriba. La diferencia es que el while es más seguro porque se asegura de que no haya ningún video en la lista. Pero el InnerHTML es más rápido.
    // while(lista.firstChild){
    //     lista.removeChild(lista.firstChild);
    // }
    busqueda.forEach(video => {
        const nuevoVideo = crearCarta(video.titulo, video.descripcion, video.url, video.imagen);
        lista.appendChild(nuevoVideo); 
    });

    if(busqueda.length === 0){
        lista.innerHTML = `<h2 class="mensaje__titulo">No se han encontrado videos con la palabra clave ingresada =(</h2>`;
    }
};

const botonBusqueda = document.querySelector("[data-boton-busqueda]");
botonBusqueda.addEventListener("click", evento => filtrarVideos(evento));

const inputBusqueda = document.querySelector("[data-busqueda]");
inputBusqueda.addEventListener("keyup", evento => {
    if(evento.keyCode === 13){
        filtrarVideos(evento);
    }
});