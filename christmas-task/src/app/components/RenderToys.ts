import { render } from "./Render";
import { toyTemplate } from "./ToyCard";
import { stateSelectedList } from "../state/State";
import { showSelectedCount } from "./SelectedToys";
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
    if (stateSelectedList.includes(toy.num)) {
      toyCard.classList.add("is-selected");
    }
    else {
      toyCard.classList.remove("is-selected");
    }
  });
};

const addToSelected = (id) => {
  if (stateSelectedList.includes(id)) {
    const index = stateSelectedList.indexOf(id);
    stateSelectedList.splice(index, 1);
  }
  else {
    if (stateSelectedList.length >= 3) {
      noSlotsMessage();
      return;
    }
    stateSelectedList.push(id);
  }
  showSelectedCount();
};

const isSelected = (toy) => {
  if (stateSelectedList.includes(toy.num)) {
    const toyCard = document.getElementById(`toy_${toy.num}`) as HTMLElement;
    toyCard.classList.add("is-selected");
  };
};
