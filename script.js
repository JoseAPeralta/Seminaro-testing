// script.js
export function sum(a, b) {
    return a + b    // COMENTARIO_ERROR: falta punto y coma (lint)
}

const user = "<img src=x onerror=alert('XSS')>";
// COMENTARIO_ERROR: 'innerHTML' con HTML no sanitizado -> posible vulnerabilidad XSS【24†L279-L287】
const el = document.getElementById("welcome");
if (el) {
    el.innerHTML = "Hola, " + user; // sigue siendo inseguro (XSS), pero ya no crashea en tests
}