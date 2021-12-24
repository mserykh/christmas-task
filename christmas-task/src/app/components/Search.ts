import data from "../../assets/data/data";
import { render } from "./Render";
import { searchFilter, rangesFilters, attributesFilter } from "./Filters";
import { renderToys } from "./RenderToys";
import { sortToys } from "./Sorting";
import { stateAttributeFilters, stateRangeFilters, stateSortingOption } from "../state/State";
import { TemplateFunction } from "../utils/Types";

export const search = (): void => {
  const searchContainer = document.querySelector<HTMLElement>(".search");
  const searchInputComponent: TemplateFunction = ()  => `<input class="search__input" type="search" autofocus placeholder="Поиск игрушек" autocomplete="off">`;
  if (searchContainer !== null) {
    render(searchContainer, searchInputComponent());
  }
};

export const onSearchEvent = (): void => {
  const searchIput = document.querySelector<HTMLInputElement>(".search__input");
  if (searchIput !== null) {
    searchIput.addEventListener("input", (e: Event) => {
      const target = <HTMLInputElement>e.target;
      const value = target.value.toLowerCase();
      renderToys(searchFilter(sortToys(rangesFilters(attributesFilter(data, stateAttributeFilters), stateRangeFilters), stateSortingOption.option), value));
    });
  }
};
