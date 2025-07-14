let productos = [
  { nombre: "Camiseta", precio: 15.99, descripcion: "Camiseta de algodón 100%" },
  { nombre: "Pantalón", precio: 29.99, descripcion: "Pantalón de mezclilla azul" },
  { nombre: "Zapatos", precio: 49.99, descripcion: "Zapatos deportivos unisex" }
];

const cuerpoTabla = document.querySelector("#tabla-productos tbody");
const form = document.getElementById("form-producto");
const mensajeError = document.getElementById("mensaje-error");

// Función para mostrar productos
function renderizarProductos() {
  cuerpoTabla.innerHTML = "";

  productos.forEach(producto => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${producto.nombre}</td>
      <td>$${producto.precio.toFixed(2)}</td>
      <td>${producto.descripcion}</td>
    `;
    cuerpoTabla.appendChild(fila);
  });
}

// Evento al enviar el formulario
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const precio = parseFloat(document.getElementById("precio").value);
  const descripcion = document.getElementById("descripcion").value.trim();

  if (!nombre || isNaN(precio) || !descripcion) {
    mensajeError.textContent = "Por favor, completa todos los campos correctamente.";
    return;
  }

  mensajeError.textContent = "";

  productos.push({ nombre, precio, descripcion });

  renderizarProductos();

  // Limpiar formulario
  form.reset();
  document.getElementById("nombre").focus();
});

// Al iniciar
window.onload = renderizarProductos;

