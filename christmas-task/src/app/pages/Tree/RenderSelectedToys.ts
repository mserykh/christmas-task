import { render } from "../../utils/Render";
import { toyTemplate } from "./SelectedToyCard";
import { IToy } from "../../utils/Types";

export const renderSelectedToys = (toys: IToy[]): void => {
  const SelectedToysList = document.querySelector<HTMLElement>(".settings__toys-list");

  if (SelectedToysList) {
    SelectedToysList.addEventListener("dragstart", onDragEvent, false);
    toys.forEach(toy => {
      render(SelectedToysList, toyTemplate(toy));
    });
  }

};

function onDragEvent(e: DragEvent) {
  const item = (e.target as HTMLElement).closest(".settings__toys-item") as HTMLElement;
  if (item) {
    const num = item.dataset.num as string;
    (<DataTransfer>e.dataTransfer).setData("num", num);
  }
}
