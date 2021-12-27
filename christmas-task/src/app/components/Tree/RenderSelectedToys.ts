import { render } from "../../utils/Render";
import { toyTemplate } from "./SelectedToyCard";
import { IToy } from "../../utils/Types";

export const renderSelectedToys = (toys: IToy[]): void => {
  const SelectedToysList = document.querySelector<HTMLElement>(".settings__toys-list");

  const addEvents = (toy: IToy): void => {
    const toyCard = document.getElementById(`toy_${toy.num}`);
    if (toyCard !== null) {
      toyCard.addEventListener("click", (e) => console.log(e));
    }
  };

  if (SelectedToysList !== null) {
    toys.forEach(toy => {
      render(SelectedToysList, toyTemplate(toy));
      addEvents(toy);
    });
  }
};
