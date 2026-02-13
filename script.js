export function sum(a, b) {
    return a + b    // COMENTARIO_ERROR: falta punto y coma (lint)
}

const params = new URLSearchParams(location.search);
const user = params.get("name"); // <- fuente (source) controlable

const el = document.getElementById("welcome");
if (el) {
  el.innerHTML = "Hola, " + user; // <- sink
}

