import data from "../../assets/data/data";
import { render } from "./Render";
import { searchFilter, rangesFilters, attributesFilter } from "./Filters";
import { renderToys } from "./RenderToys";
import { sortToys } from "./Sorting";
import { stateAttributeFilters, stateRangeFilters, stateSortingOption } from "../state/State";

export const search = () => {
  const searchContainer = document.querySelector(".search") as HTMLElement;
  const searchInputComponent = (): string  => `<input class="search__input" type="search" autofocus placeholder="Поиск игрушек" autocomplete="off">`;
  render(searchContainer, searchInputComponent());
};

export const onSearchEvent = () => {
  const searchIput = document.querySelector(".search") as HTMLInputElement;
  searchIput.addEventListener("input", (event) => {
    const value = (event.target as HTMLInputElement).value.toLowerCase();
    renderToys(searchFilter(sortToys(rangesFilters(attributesFilter(data, stateAttributeFilters), stateRangeFilters), stateSortingOption.option), value));
  });
};
