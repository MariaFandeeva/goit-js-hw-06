let counterValue = document.querySelector("#value");

const decrementBtnEl = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementBtnEl = document.querySelector(
  'button[data-action="increment"]'
);

const decrement = function () {
  counterValue.textContent = Number(counterValue.textContent) - 1;
};
const increment = function () {
  counterValue.textContent = Number(counterValue.textContent) + 1;
};

decrementBtnEl.addEventListener("click", decrement);

incrementBtnEl.addEventListener("click", increment);
