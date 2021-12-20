import { render } from "./Render";
import { toyTemplate } from "./ToyCard";
import { selectedList } from "../state/State";
import { selectedToys, showSelectedCount } from "./SelectedToys";
import { setToLocalStorage } from "../utils/LocalStorage";
import { noToysMessage } from "./NoToysMessage";
import { noSlotsMessage } from "./NoSlotsMessages";

export const renderToys = (toys) => {
  const toysList = document.querySelector(".results__list") as HTMLElement;

  toysList.innerHTML = "";
    if (toys.length === 0) {
      noToysMessage(); 
    }

  toys.forEach(toy => {
    render(toysList, toyTemplate(toy));
    isSelected(toy);
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
      noSlotsMessage();
      return;
    }
    selectedList.push(id);
  }
  showSelectedCount();
};

const isSelected = (toy) => {
  if (selectedList.includes(toy.num)) {
    const toyCard = document.getElementById(`toy_${toy.num}`) as HTMLElement;
    toyCard.classList.add("is-selected");
  };
}
