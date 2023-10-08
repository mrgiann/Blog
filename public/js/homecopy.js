import { obtenerPublicaciones, mostrarDatosPublicaciones } from './crud-postcopy.js';



document.addEventListener('DOMContentLoaded', async () => {
    console.log("DOM Cargado!")
    const publicaciones = await obtenerPublicaciones()
    const main = document.querySelector('#lista-publicaciones-admin')
    mostrarDatosPublicaciones(publicaciones, main)
})