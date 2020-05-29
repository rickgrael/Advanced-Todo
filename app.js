let cards = document.querySelectorAll(".card");
let dropzones = document.querySelectorAll(".dropzone")
let status = document.querySelectorAll(".status");
let dropBoard;
let draggedCard;

addEventToCards();

function addEventToStatus(){
    status.forEach(stat => (stat.addEventListener("click", changeColor)))
}

function addEventToCards(){
    cards = document.querySelectorAll(".card");
    cards.forEach(card=>{
        card.addEventListener("dragstart", dragstart);
        card.addEventListener("drag", drag);
        card.addEventListener("dragend", dragend);
    })
}

function dragstart(e){
    console.log("Drag started")
    e.target.classList.toggle("card-changing")
    dropzones.forEach(dropzone=> dropzone.classList.toggle("drop-area"));
    draggedCard = document.querySelector(".card-changing");
    console.log(draggedCard)
}

function drag(){
    console.log("Dragging")
}

function dragend(e){
    console.log("Drag ended")
    dropBoard.appendChild(draggedCard)
    e.target.classList.toggle("card-changing")
    dropzones.forEach(dropzone=> dropzone.classList.toggle("drop-area"))
}

dropzones.forEach(dropzone=>{
    dropzone.addEventListener("dragenter", dragenter);
    dropzone.addEventListener("dragover", dragover);
    dropzone.addEventListener("dragleave", dragleave);
    dropzone.addEventListener("drop", drop);
})

function dragenter(){
    console.log("Drag enter")
    
}
function dragover(){
    console.log("Drag over")
    let pai = this;
    pai.classList.add("is-over");

    dropBoard = document.querySelector(".is-over");
}
function dragleave(){
    console.log("Drag leave")
    let pai = this;
    pai.classList.remove("is-over");
}
function drop(){
    console.log("Dropped")
}

//adding new todos

const btnAdd = document.querySelector(".btn-add");
const inputContent = document.querySelector(".input-content");
const colorSelector = document.querySelector(".color-selector");
const firstZone = document.querySelector(".dropzone");

btnAdd.addEventListener("click",()=>{
    event.preventDefault()
    let card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("draggable","true");
    let status = document.createElement("div");
    status.classList.add("status");
    status.classList.add(colorSelector.value)
    card.appendChild(status);
    let content = document.createElement("div");
    content.classList.add("content");
    content.innerText = inputContent.value;
    card.appendChild(content);
    firstZone.appendChild(card);
    inputContent.value="";
    addEventToCards();
})