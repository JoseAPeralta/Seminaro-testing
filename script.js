


const params = new URLSearchParams(location.search);
const user = params.get("name"); // <- fuente (source) controlable

const el = document.getElementById("welcome");
if (el) {
  el.innerHTML = "Hola, " + user; // <- sink
}
