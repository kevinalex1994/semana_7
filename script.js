// Arreglo inicial de productos
let productos = [
  { nombre: "Fertilizante Orgánico", precio: 12.5, descripcion: "Mejora la calidad del suelo." },
  { nombre: "Semillas de Maíz", precio: 8.0, descripcion: "Alta resistencia a plagas." },
  { nombre: "Herramienta de Riego", precio: 25.0, descripcion: "Ideal para cultivos medianos." }
];

// Función para renderizar productos
function renderizarProductos() {
  const lista = document.getElementById("lista-productos");
  lista.innerHTML = ""; // Limpiar contenido previo

  productos.forEach(producto => {
    const item = document.createElement("li");
    item.textContent = `${producto.nombre} - $${producto.precio} | ${producto.descripcion}`;
    lista.appendChild(item);
  });
}

// Evento para agregar un nuevo producto
document.getElementById("agregar-producto").addEventListener("click", () => {
  const nuevoProducto = {
    nombre: "Nuevo Insumo",
    precio: 10.0,
    descripcion: "Descripción genérica del producto."
  };
  productos.push(nuevoProducto);
  renderizarProductos();
});

// Renderizar al cargar la página
window.onload = renderizarProductos;
