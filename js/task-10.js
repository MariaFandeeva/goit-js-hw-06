function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// const controlsEl = document.getElementById("controls");
const boxesEl = document.getElementById("boxes");

const ref = {
  id: document.querySelector("#controls"),
  input: document.querySelector(`input`),
  btnCreate: document.querySelector(`[data-create]`),
  btnDestroy: document.querySelector(`[data-destroy]`),
};
ref.btnCreate.addEventListener("click", onClickInput);

function onClickInput(event) {
  const newBox = Number(ref.input.value);
  createBoxes(newBox);
}
let width = 30;
let height = 30;

function createBoxes(amount) {
  const elements = [];

  for (let i = 0; i < Number(ref.input.value); i += 1) {
    const divEl = document.createElement(`div`);
    divEl.classList.add(`box`);
    divEl.style.backgroundColor = getRandomHexColor();

    divEl.style.height = `${height}px`;
    divEl.style.width = `${width}px`;
    width = width + 10;
    height = height + 10;
    elements.push(divEl);
  }
  boxesEl.append(...elements);
}
ref.btnDestroy.addEventListener(`click`, destroyBox);
function destroyBox() {
  boxesEl.innerHTML = "";
  ref.input.value = "";
}
