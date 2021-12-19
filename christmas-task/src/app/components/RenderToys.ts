import { render } from "./Render";
import { toyTemplate } from "./Card";
import { selectedList } from "../state/State";
import { showSelectedCount } from "./SelectedToys";

export const renderToys = (toys) => {
  const toysList = document.querySelector(".results__list") as HTMLElement;
  toysList.innerHTML = "";
  toys.forEach(toy => {
    render(toysList, toyTemplate(toy));
    addEvents(toy);
  });
};

function addEvents(toy) {
  const toyCard = document.getElementById(`toy_${toy.num}`) as HTMLElement;
  toyCard.addEventListener("click", () => {
    addToSelected(toy.num);
    if (selectedList.includes(toy.num)) {
      toyCard.classList.add("is-selected");
    }
    else {
      toyCard.classList.remove("is-selected");
    }
  });
}

const addToSelected = (id) => {
  if (selectedList.includes(id)) {
    const index = selectedList.indexOf(id);
    selectedList.splice(index, 1);
  }
  else {
    if (selectedList.length >= 3) {
      console.log("Извините, все слоты заполнены");
      return;
    }
    selectedList.push(id);
  }
  showSelectedCount();
}
