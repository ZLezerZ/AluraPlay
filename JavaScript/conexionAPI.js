async function listarVideos(){
    const conexion = await fetch('http://localhost:3001/videos');
    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}
async function crearVideo(titulo, descripcion, url, imagen){
    const conexion = await fetch('http://localhost:3001/videos', {
    method: "POST",
    headers: {"Content-type":"application/json"},
    body: JSON.stringify({
        titulo: titulo,
        descripcion:`${descripcion} mil visualizaciones`,
        url: url,
        imagen: imagen
    })
});
    const conexionConvertida = await conexion.json();
    if(!conexionConvertida.ok){
        throw new Error("No se ha podido agregar el video a la lista")
    }
    return conexionConvertida;
};


async function buscarVideos(palabraClave){
    const conexion = await fetch(`http://localhost:3001/videos?q=${palabraClave}`);
    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}
export const conexionAPI = {
    listarVideos, crearVideo, buscarVideos
};