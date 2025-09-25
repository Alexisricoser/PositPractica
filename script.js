
localStorage.removeItem("postit", null);

let lista = ["fdsf","dsfsdf"];

localStorage.setItem("lista_de_notas", JSON.stringify(lista));

let arrayRecuperada = JSON.parse(localStorage.getItem("lista_de_notas"))

console.log(arrayRecuperada[0]);

botonenviar.addEventListener("click"   ,  (evento) => {
  evento.preventDefault();
  let div = document.createElement("div");
  div.innerText = contenido.value;
  notasgrid.appendChild(div);

  localStorage.setItem("postit", contenido.value);
});


