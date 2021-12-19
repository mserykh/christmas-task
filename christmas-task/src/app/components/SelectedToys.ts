import { render } from "./Render";
import { selectedList } from "../state/State";

export const selectedToys = () => {
  const selectedToysContainer = document.querySelector(".selected");
  const selectedToysComponent = () => `<span class="selected__count"></span>`;
  render(selectedToysContainer, selectedToysComponent());
}

export const showSelectedCount = () => {
  const selectedCount = document.querySelector(".selected__count") as HTMLElement;
  selectedCount.innerHTML = `${selectedList.length}`;
}
