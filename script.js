  let postit = JSON.parse(localStorage.getItem("postit")) == null ? [] : JSON.parse(localStorage.getItem("postit"));

  botonenviar.addEventListener("click", (evento) => {
    evento.preventDefault();

    postit.push(contenido.value);
    localStorage.setItem("postit", JSON.stringify(postit));

    let div = document.createElement("div");
    div.id= "Item" + postit.length
    div.innerText = contenido.value;
    notasgrid.appendChild(div);

  });

  function cargarPostit(){
    for(let i = 0 ; i < postit.length; i++){
      let div = document.createElement("div");
      div.innerText = postit[i];
      notasgrid.appendChild(div);
    }
  };
  cargarPostit();