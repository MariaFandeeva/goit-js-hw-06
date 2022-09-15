function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector("body");
const colorEl = document.querySelector(".color");
const btnEl = document.querySelector(".change-color");

const onClickChange = () => {
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  colorEl.textContent = getRandomHexColor();
};
btnEl.addEventListener("click", onClickChange);
