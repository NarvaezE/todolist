
const contenedor = document.getElementById("contenedor");
const textoNuevaEntrada = document.getElementById("textoNuevaEntrada");
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  agregarLi();
});
// const liReferences = [];


const agregarLi = () => {
  if(!textoNuevaEntrada.value.trim()){
    alert("Agregue un valor valido al input");
    return;
  }else{
  const nuevoLi =  document.createElement("li");
  nuevoLi.innerText = textoNuevaEntrada.value;
  //se crea un elemento boton
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "X";
  deleteButton.addEventListener("click", () => {eliminarLi(nuevoLi)});
  const editButton = document.createElement("button");
  editButton.innerText = "Editar";
  editButton.addEventListener("click", () => {
    editarLi(nuevoLi);
  });
  //Se le agrega el boton al elemento miLi
  nuevoLi.appendChild (deleteButton);
  nuevoLi.appendChild (editButton);
  contenedor.appendChild(nuevoLi);
  //limpia el input del formulario
  textoNuevaEntrada.value = "";
  }
}

const eliminarLi=(element)=>{
  element.remove();

}
const editarLi=(element)=>{
  const nuevaEntrada = prompt("Ingrese el nuevo texto");
  element.innerText = nuevaEntrada;
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "X";
  deleteButton.addEventListener("click", () => {eliminarLi(element)});
  const editButton = document.createElement("button");
  editButton.innerText = "Editar";
  editButton.addEventListener("click", () => {
    editarLi(element);
  });
  //Se le agrega el boton al elemento miLi
  element.appendChild (deleteButton);
  element.appendChild (editButton);
} 

// btnAgregar.onclick=agregarLi;

// const edicionLi=(liListItem)=>{
//   const edicionInput =document.createElement("input");
//   const span = liListItem.li.querySelector("span");
//   span.innerHTML = "";
//   span.appendChild("input");
// }