// script.js
export function sum(a, b) {
    return a + b    // COMENTARIO_ERROR: falta punto y coma (lint)
}

const user = "<img src=x onerror=alert('XSS')>";
// COMENTARIO_ERROR: 'innerHTML' con HTML no sanitizado -> posible vulnerabilidad XSS【24†L279-L287】
document.getElementById("welcome").innerHTML = "Hola, " + user;
