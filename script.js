  let postit = JSON.parse(localStorage.getItem("postit")) == null ? [] : JSON.parse(localStorage.getItem("postit"));

  botonenviar.addEventListener("click", (evento) => {
    evento.preventDefault();

    postit.push(contenido.value);
    localStorage.setItem("postit", JSON.stringify(postit));

    let div = document.createElement("div");
    div.innerText = contenido.value;
    div.id= 'item' + postit.length
    const botonEditar = document.createElement("button");
    botonEditar.className = "Editar";
    botonEditar.innerText = "Editar";
    botonEditar.addEventListener('click', editar(div.id))
    div.appendChild(botonEditar);
    notasgrid.appendChild(div);

  });

  function cargarPostit(){
    for(let i = 0 ; i < postit.length; i++){
      let div = document.createElement("div");
      div.innerText = postit[i];
      const botonEditar = document.createElement("button");
      botonEditar.className = "Editar";
      botonEditar.innerText = "Editar";
      div.appendChild(botonEditar);
      notasgrid.appendChild(div);

    }
  };

  function editar(id){
    let contenido = prompt('Texto a cambiar');
    id.innerText=contenido
  }

  cargarPostit();