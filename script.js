
localStorage.removeItem("postit", null);



let lista = [];








botonenviar.addEventListener("click", (evento) => {
  evento.preventDefault();


  const div = document.createElement("div");
  div.className = "notas";


  const textoNota = document.createElement("p");
  textoNota.innerText = contenido.value;


  const botonBorrar = document.createElement("button");
  botonBorrar.className = "borrar";
  botonBorrar.innerText = "x";


  div.appendChild(textoNota);
  div.appendChild(botonBorrar);
  notasgrid.appendChild(div);


  lista.push(contenido.value);
  localStorage.setItem("postit", JSON.stringify(lista));


  botonBorrar.addEventListener("click", () => {
    notasgrid.removeChild(div);


    const texto = textoNota.textContent;
    lista = lista.filter((nota) => nota !== texto);
    localStorage.setItem("postit", JSON.stringify(lista));
  });


  contenido.value = "";
});














