
localStorage.removeItem("postit", null);
let doc=document
let form=doc.getElementById("formulario");
let input=doc.getElementById("contenido");
let container=doc.getElementById("notasgrid")

let lista = [];








botonenviar.addEventListener("click"   ,  (evento) => {
  evento.preventDefault();
  let div = document.createElement("div");
  div.className="notas"
  let botonBorrar=document.createElement("button")
  botonBorrar.className="borrar"
  div.innerText = contenido.value;
  notasgrid.appendChild(div);
  botonBorrar.innerText="x"
  div.appendChild(botonBorrar)
  lista.push(contenido.value)
  localStorage.setItem("postit", JSON.stringify(lista));
  let contenidoRecuperada=JSON.parse(localStorage.getItem("postit"))
  

  botonBorrar.addEventListener("click",(evento)=>{
    container.removeChild(div)
  })

  
});













