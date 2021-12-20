import data from "../../assets/data/data";
import { render } from "./Render";
import { selectedFilters } from "../state/State";
import { attributesFilter } from "./Filters";
import { renderToys } from "./RenderToys";

export const reset = () => {
  const resetBtnContainer = document.querySelector(".filters__sorting");
  const resetBtnComponent = () => `<button class="filters__reset">Сброс фильтров</button>`;

  render(resetBtnContainer, resetBtnComponent());
  addEventListeners();
};

const addEventListeners = () => {
  const bntReset = document.querySelector(".filters__reset") as HTMLElement;
  bntReset.addEventListener("click", (e) => { onReset(e) } );
};

const onReset = (e) => {
  selectedFilters.shape = [];
  selectedFilters.color = [];
  selectedFilters.size = [];
  selectedFilters.favorite = false;

  const checkboxes = document.querySelectorAll(".filters__checkbox") as NodeListOf<HTMLInputElement>;
  checkboxes.forEach(checkbox => checkbox.checked = false);

  renderToys(attributesFilter(data, selectedFilters));
}
