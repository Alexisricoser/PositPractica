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

  const botonEditar = document.createElement("button");
  botonEditar.className = "editar";
  botonEditar.innerText = "editar";

  div.appendChild(textoNota);
  div.appendChild(botonEditar);
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
  botonEditar.addEventListener("click", () => {
    let nuevoTexto = prompt('Escribe el nuevo texto')

    const texto = textoNota.textContent;
    for(let i = 0; i<lista.length; i++){
      if(lista[i] == texto){
        lista[i] = nuevoTexto
      }
    }

    textoNota.innerText = nuevoTexto

    localStorage.setItem("postit", JSON.stringify(lista));
  });
  contenido.value = "";
});
