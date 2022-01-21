import { render } from "../../utils/Render";
import { toyTemplate } from "./SelectedToyCard";
import { IToy } from "../../utils/Types";

export const renderSelectedToys = (toys: IToy[]): void => {
  const SelectedToysList = document.querySelector<HTMLElement>(".settings__toys-list");

  if (SelectedToysList) {
    SelectedToysList.addEventListener("dragstart", onDragStartEvent);
    SelectedToysList.innerHTML = ``;
    toys.forEach(toy => {
      render(SelectedToysList, toyTemplate(toy));
    });
  }
};

function onDragStartEvent(e: DragEvent) {
  const item = (e.target as HTMLElement).closest(".settings__toys-item") as HTMLElement;
  if (item) {
    const num = item.dataset.num as string;
    const qty = (<HTMLElement>item.querySelector<HTMLElement>(".settings__toys-count")).innerText;
    (<DataTransfer>e.dataTransfer).setData("num", num);
    (<DataTransfer>e.dataTransfer).setData("qty", qty);
  }

  if ((<HTMLElement>e.target).classList.contains("settings__toys-list")) {
    e.preventDefault();
  }
}
