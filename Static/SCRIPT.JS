/* ==========================
   CARRITO DE COMPRAS
========================== */

let carrito = [];

function agregarCarrito(nombre, precio) {

    carrito.push({
        nombre: nombre,
        precio: precio
    });

    actualizarCarrito();

}


function actualizarCarrito() {

    const lista = document.getElementById("listaCarrito");

    const contador = document.getElementById("contador");

    const totalElemento = document.getElementById("total");


    contador.textContent = carrito.length;


    if (carrito.length === 0) {

        lista.innerHTML =
            '<p class="carrito-vacio">Tu carrito está vacío.</p>';

        totalElemento.textContent = "0";

        return;

    }


    lista.innerHTML = "";


    let total = 0;


    carrito.forEach((producto, index) => {

        total += producto.precio;


        const item = document.createElement("div");

        item.classList.add("item-carrito");


        item.innerHTML = `

            <div>

                <strong>${producto.nombre}</strong>

                <br>

                $${producto.precio.toLocaleString("es-CO")}

            </div>

            <button
                class="btn-eliminar"
                onclick="eliminarProducto(${index})">

                ELIMINAR

            </button>

        `;


        lista.appendChild(item);

    });


    totalElemento.textContent =
        total.toLocaleString("es-CO");

}


function eliminarProducto(index) {

    carrito.splice(index, 1);

    actualizarCarrito();

}


function finalizarCompra() {

    if (carrito.length === 0) {

        alert("Tu carrito está vacío.");

        return;

    }


    alert(
        "¡Gracias por tu compra! Pronto nos pondremos en contacto contigo."
    );

}


/* ==========================
   FORMULARIO CONTACTO
========================== */

function enviarFormulario(event) {

    event.preventDefault();


    const nombre =
        document.getElementById("nombre").value;


    alert(
        "¡Gracias " + nombre +
        "! Tu mensaje fue enviado correctamente."
    );


    event.target.reset();

}


/* ==========================
   INICIO DE SESIÓN
========================== */

function iniciarSesion(event) {

    event.preventDefault();


    const usuario =
        document.getElementById("usuario").value;


    alert(
        "Bienvenido/a " + usuario +
        ". El inicio de sesión es una demostración."
    );

}


/* ==========================
   REGISTRO
========================== */

function registrarse(event) {

    event.preventDefault();


    alert(
        "¡Cuenta creada correctamente!"
    );


    event.target.reset();

}