const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const fontResize = () => {
  textEl.style.fontSize = `${inputEl.value}px`;
};
inputEl.addEventListener("input", fontResize);
