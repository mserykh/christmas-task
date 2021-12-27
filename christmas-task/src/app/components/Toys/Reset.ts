import data from "../../../assets/data/data";
import { render } from "../../utils/Render";
import { stateAttributeFilters, stateRangeFilters, stateSortingOption } from "../../state/State";
import { attributesFilter } from "./Filters";
import { rangesFilters } from "./Filters";
import { renderToys } from "./RenderToys";
import { sliderRanges } from "../../utils/SliderRange";
import { sortToys } from "./Sorting";
import { TemplateFunction } from "../../utils/Types";


export const reset = (): void => {
  const resetBtnContainer = document.querySelector(".filters__sorting") as HTMLElement;
  const resetBtnComponent: TemplateFunction = () => `<button class="filters__reset">Сброс фильтров</button>`;

  render(resetBtnContainer, resetBtnComponent());
  addEventListeners();
};

const addEventListeners = (): void => {
  const bntReset = document.querySelector(".filters__reset") as HTMLElement;
  bntReset.addEventListener("click", (): void => { onReset() } );
};

const onReset = (): void => {
  stateAttributeFilters.shape = [];
  stateAttributeFilters.color = [];
  stateAttributeFilters.size = [];
  stateAttributeFilters.favorite = false;
  stateRangeFilters.qtyMin = "1";
  stateRangeFilters.qtyMax = "12";
  stateRangeFilters.yearMin = "1940";
  stateRangeFilters.yearMax = "2020";

  const checkboxes = document.querySelectorAll<HTMLInputElement>(".filters__checkbox");
  checkboxes.forEach(checkbox => (checkbox).checked = false);
  const sliders = document.querySelectorAll<HTMLElement>(".range-slider");
  const inputs = document.querySelectorAll<HTMLInputElement>(".filters__range");
  
  inputs.forEach(input => {
    if (input.id === "qtyMin") { input.value = stateRangeFilters.qtyMin  }
    if (input.id === "qtyMax") { input.value = stateRangeFilters.qtyMax  }
    if (input.id === "yearMin") { input.value = stateRangeFilters.yearMin  }
    if (input.id === "yearMax") { input.value = stateRangeFilters.yearMax  }
  });

  sliders.forEach(slider => sliderRanges(slider));
  renderToys(sortToys(rangesFilters(attributesFilter(data, stateAttributeFilters), stateRangeFilters), stateSortingOption.option));
};
