let input = document.querySelector(".input");
let botonAgregar = document.querySelector(".boton-agregar");
let container = document.querySelector(".container");

class item {
  constructor(nuevaTarea) {
    this.crearDiv(nuevaTarea);
  }

  crearDiv(nuevaTarea) {
    let inputItem = document.createElement("input");
    inputItem.type = "text";
    inputItem.disabled = true;
    inputItem.classList.add = "item-input";
    inputItem.value = nuevaTarea;

    let botonEditar = document.createElement("button");
    botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
    botonEditar.classList.add("boton-editar");

    let botonRemover = document.createElement("button");
    botonRemover.innerHTML = "<i class='fas fa-trash'></i>";
    botonRemover.classList.add("boton-remover");

    let divItem = document.createElement("div");
    divItem.classList.add("item");
    divItem.appendChild(inputItem);
    divItem.appendChild(botonEditar);
    divItem.appendChild(botonRemover);
    container.appendChild(divItem);

    botonEditar.addEventListener("click", function () {
      inputItem.disabled = !inputItem.disabled;

      if (inputItem.disabled === true) {
        botonEditar.innerHTML = "<i class='fas fa-lock-open'></i>";
      } else {
        botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
      }
    });

    botonRemover.addEventListener("click", function () {
      divItem.remove();
    });
  }
}

function chequearInput() {
  if (input.value === "") {
    alert("Introduzca una tarea por favor!");
  } else {
    new item(input.value);
    input.value = "";
  }
}

botonAgregar.addEventListener("click", function () {
  chequearInput();
});

input.addEventListener("keydown", function (enter) {
  if (enter.key === "Enter") {
    chequearInput();
  }
});
