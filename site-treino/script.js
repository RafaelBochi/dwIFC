let btnOpenNote = document.getElementById("openAddNote");
let divNote = document.getElementById("dadosItem");

btnOpenNote.addEventListener("click", openNote);

function openNote() {
  
  divNote.style.opacity ="1";
  divNote.style.zIndex = "999";
}


let title = document.getElementById("title");
let description = document.getElementById("description");
let btnAddNote = document.getElementById("btnAddNote");
let divItens = document.getElementById("itens");

btnAddNote.addEventListener("click", getDados);

function getDados() {
  let titleText = title.value;
  let descriptionText = description.value;

  divNote.style.opacity = "0";
  divNote.style.zIndex = "-999"

  divItens.innerHTML =
    divItens.innerHTML +
    `
    <div class="item">

                <h1>${titleText}</h1>

                <p>${descriptionText}</p>
            </div>`;
}

