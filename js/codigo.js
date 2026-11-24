let contenedorTarjetas = document.querySelector("#tarjetas");

fetch("js/datos.json")
    .then(respuesta => respuesta.json())
    .then(programas => {
        programas.forEach(programa => {
            contenedorTarjetas.innerHTML += `
            <div class="col">
                <div class="card tarjeta h-100 border border-2 border-danger">
                    <div class="card-body d-flex flex-column justify-content-between">
                        <div>
                            <h3 class="card-title">${programa.titulo}</h3>
                            <p class="card-text">${programa.descripcion}</p>
                        </div>
                        <p class="enlace my-2">
                            <a href="${programa.link}" target="_blank">Ver Instagram</a>
                        </p>
                    </div>
                </div>
            </div>`;
        });
    });
