import { render } from "./Render";
import { toyTemplate } from "./ToyCard";
import { stateSelectedList } from "../state/State";
import { showSelectedCount } from "./SelectedToys";
import { noToysMessage } from "./NoToysMessage";
import { noSlotsMessage } from "./NoSlotsMessages";
import { IToy } from "../utils/Types";

export const renderToys = (toys: IToy[]): void => {
  const toysList = document.querySelector<HTMLElement>(".results__list");

  const isSelected = (toy: IToy): void => {
    if (stateSelectedList.includes(toy)) {
      const toyCard = document.getElementById(`toy_${toy.num}`);
      if (toyCard !== null) {
        toyCard.classList.add("is-selected");
      }
    }
  };

  const addEvents = (toy: IToy): void => {
    const toyCard = document.getElementById(`toy_${toy.num}`);
    if (toyCard !== null) {
      toyCard.addEventListener("click", (): void => {
        addToSelected(toy);
        if (stateSelectedList.includes(toy)) {
          toyCard.classList.add("is-selected");
        }
        else {
          toyCard.classList.remove("is-selected");
        }
      });
    }
  };

  const addToSelected = (toy: IToy): void => {
    if (stateSelectedList.includes(toy)) {
      const index = stateSelectedList.indexOf(toy);
      stateSelectedList.splice(index, 1);
    }
    else {
      if (stateSelectedList.length >= 20) {
        noSlotsMessage();
        return;
      }
      stateSelectedList.push(toy);
    }
    showSelectedCount();
  };

  if (toysList !== null) {
    toysList.innerHTML = "";
    if (toys.length === 0) {
      noToysMessage(); 
    }

    toys.forEach(toy => {
      render(toysList, toyTemplate(toy));
      isSelected(toy);
      addEvents(toy);
    });
  }
};
