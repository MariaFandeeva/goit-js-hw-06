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

function createBoxes(amount) {
  const width = 30;
  const height = 30;
  let difference = 0;

  const elements = [];

  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement(`div`);
    divEl.classList.add(`box`);
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.height = height + difference + `px`;
    divEl.style.width = width + difference + `px`;

    difference += 10;
    elements.push(divEl);
  }
  boxesEl.append(...elements);
}
ref.btnDestroy.addEventListener(`click`, destroyBox);
function destroyBox() {
  boxesEl.innerHTML = "";
  ref.input.value = "";
}
