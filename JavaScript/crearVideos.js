import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function crearVideo(evento){
    evento.preventDefault();
    const titulo = document.querySelector("[data-titulo]").value;
    const url = document.querySelector("[data-url]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    const descripcion = Math.floor(Math.random() * 10).toString();
    console.log("ENTRÓ A LA FUNCIÓN DE CREAR VIDEO")
    try{
        await conexionAPI.crearVideo(titulo, descripcion, url, imagen); //Este crearVideo es el que está en conexionAPI.js
        window.location.href = "envio-concluido.html";
    }catch(e){
        alert(e);
    }
}

formulario.addEventListener("submit", evento => crearVideo(evento));