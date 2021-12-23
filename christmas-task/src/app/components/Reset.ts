import data from "../../assets/data/data";
import { render } from "./Render";
import { stateAttributeFilters, stateRangeFilters, stateSortingOption } from "../state/State";
import { attributesFilter } from "./Filters";
import { rangesFilters } from "./Filters";
import { renderToys } from "./RenderToys";
import { sliderRanges } from "../utils/SliderRange";
import { sortToys } from "./Sorting";
import { TemplateFunction } from "../utils/Types";


export const reset = (): void => {
  const resetBtnContainer = document.querySelector(".filters__sorting") as HTMLElement;
  const resetBtnComponent: TemplateFunction = () => `<button class="filters__reset">Сброс фильтров</button>`;

  render(resetBtnContainer, resetBtnComponent());
  addEventListeners();
};

const addEventListeners = (): void => {
  const bntReset = document.querySelector(".filters__reset") as HTMLElement;
  bntReset.addEventListener("click", (e: Event): void => { onReset(e) } );
};

const onReset = (e: Event): void => {
  stateAttributeFilters.shape = [];
  stateAttributeFilters.color = [];
  stateAttributeFilters.size = [];
  stateAttributeFilters.favorite = false;
  stateRangeFilters.qtyMin = "1";
  stateRangeFilters.qtyMax = "12";
  stateRangeFilters.yearMin = "1940";
  stateRangeFilters.yearMax = "2020";

  const checkboxes = document.querySelectorAll(".filters__checkbox") as NodeListOf<HTMLInputElement>;
  checkboxes.forEach(checkbox => checkbox.checked = false);
  const sliders = document.querySelectorAll(".range-slider") as NodeListOf<HTMLInputElement>;
  const inputs = document.querySelectorAll(".filters__range") as NodeListOf<HTMLInputElement>;
  
  inputs.forEach(input => {
    if (input.id === "qtyMin") { input.value = stateRangeFilters.qtyMin as string };
    if (input.id === "qtyMax") { input.value = stateRangeFilters.qtyMax as string };
    if (input.id === "yearMin") { input.value = stateRangeFilters.yearMin as string };
    if (input.id === "yearMax") { input.value = stateRangeFilters.yearMax as string };
  });

  sliders.forEach(slider => sliderRanges(slider));
  renderToys(sortToys(rangesFilters(attributesFilter(data, stateAttributeFilters), stateRangeFilters), stateSortingOption.option));
};
