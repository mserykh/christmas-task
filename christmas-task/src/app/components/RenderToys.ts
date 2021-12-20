import { render } from "./Render";
import { toyTemplate } from "./Card";
import { selectedList } from "../state/State";
import { showSelectedCount } from "./SelectedToys";
import { noToysMessage } from "./NoToysMessage";

export const renderToys = (toys) => {
  const toysList = document.querySelector(".results__list") as HTMLElement;
  toysList.innerHTML = "";
    if (toys.length === 0) {
      noToysMessage(); 
    }

  toys.forEach(toy => {
    render(toysList, toyTemplate(toy));
    //check if it is in SelectedList already
    addEvents(toy);
  });
};

const addEvents = (toy) => {
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
};

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
};
