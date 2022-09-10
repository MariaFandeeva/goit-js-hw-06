const allCategoties = document.querySelectorAll(".item");
console.log(`Number of categories: ${allCategoties.length}`);

allCategoties.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
