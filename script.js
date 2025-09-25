
localStorage.removeItem("postit", null);

let lista = ["fdsf","dsfsdf"];

localStorage.setItem("prueba", lista);

let recuperada = localStorage.getItem("prueba");

console.log(recuperada[0]);

botonenviar.addEventListener("click"   ,  (evento) => {
  evento.preventDefault();
  let div = document.createElement("div");
  div.innerText = contenido.value;
  notasgrid.appendChild(div);

  localStorage.setItem("postit", contenido.value);
});


