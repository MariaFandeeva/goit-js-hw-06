let counterValue = 0;
const counter = document.querySelector("#value");

const decrementBtnEl = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementBtnEl = document.querySelector(
  'button[data-action="increment"]'
);

const decrement = function () {
  counter.textContent = counterValue -= 1;
};
const increment = function () {
  counter.textContent = counterValue += 1;
};

decrementBtnEl.addEventListener("click", decrement);

incrementBtnEl.addEventListener("click", increment);
