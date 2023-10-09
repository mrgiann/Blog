export const crearPublicaciones = async (datos) => {
    const response = await fetch('/publicacion', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(datos)
    })

    const data = await response.json()
    return data;
}

export const obtenerPublicaciones = async ( ) => {
    // Consulta al servidor por los datos de publicaciones
    const response = await fetch('/publicaciones');
    const publicaciones = await response.json();
    return publicaciones
}

export const actualizarPublicacion = async (id) => {
    fetch()
  
}

export const eliminarPublicacion = async (id) => {
    fetch()
  
}

// FUNCIONES PARA MOSTRAR DATOS
export const mostrarDatosPublicaciones = (publicaciones, elemento) => {
    let registros = '';
    publicaciones.forEach(pub => {
        registros += `

        <div id="cuadro-editar">
            <section class="editor d-flex">
                <img src="${pub.url_imagen}" class="rounded" height="80" width="80">
                <div class="contenidoeditor d-flex justify-content-between">
                    <h4>${pub.titulo}</h4>
                    <p><b>Fecha:</b> ${pub.fecha_publicacion}</p>
                    <p><b>Publicado por:</b> ${pub.firma_autor}</p>
                    <button id="editarBtn" class="btn btn-sm btn-primary">Editar</button>
                    <button id="eliminarBtn" class="btn btn-sm btn-primary">Eliminar</button>
                </div>
            </section>
            <div id="formulario-editar">
            <div class="row" id="formulario-editar">
                    <form action="#" id="form-editar">
                        <!-- Agrega un campo oculto para almacenar el ID de la publicación que se está editando -->
                        <input type="hidden" id="post-id-editar" value="${pub.id}">
                        
                        <div class="mb-3">
                            <input type="text" id="titulo-editar" placeholder="Título" class="form-control" value="${pub.titulo}">
                        </div>
                        <div class="form-floating mb-3">
                            <textarea class="form-control" id="detalle-editar" style="height: 100px">${pub.detalle}</textarea>
                            <label>Detalle:</label>
                        </div>
                        <div class="mb-3">
                            <input type="text" id="url_imagen-editar" placeholder="URL de la imagen" class="form-control" value="${pub.url_imagen}">
                        </div>
                        <div class="mb-3">
                            <input type="date" id="fecha_publicacion-editar" class="form-control" value="${pub.fecha_publicacion}">
                        </div>
                        <div class="mb-3">
                            <input type="time" id="hora_manual-editar" placeholder="Hora" class="form-control" value="${pub.hora_manual}">
                        </div>
                        <div class="mb-3">
                            <input type="text" id="firma_autor-editar" placeholder="Firma del autor" class="form-control" value="${pub.firma_autor}">
                        </div>
                        <button type="submit" id="guardar-edicion-btn" class="btn btn-sm btn-primary">Guardar Edición</button>
                    </form>
                </div>
            </div>
            </div>
        `;
    });

    elemento.innerHTML = registros;
}