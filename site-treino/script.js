let btnOpenNote = document.getElementById("openAddNote");
let divNote = document.getElementById("dadosItem");

btnOpenNote.addEventListener("click", openNote);

function openNote() {
  
  divNote.style.display = "flex"
}


let title = document.getElementById("title");
let description = document.getElementById("description");
let btnAddNote = document.getElementById("btnAddNote");
let divItens = document.getElementById("secNoteBasic");

btnAddNote.addEventListener("click", getDados);

function getDados() {
  let titleText = title.value;
  let descriptionText = description.value;

  divNote.style.display = "none";

  divItens.innerHTML =
    divItens.innerHTML +
    `
    <div class="item">

                <h1>${titleText}</h1>

                <p>${descriptionText}</p>
            </div>`;
}

