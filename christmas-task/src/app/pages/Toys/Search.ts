import data from "../../../assets/data/data";
import { render } from "../../utils/Render";
import { searchFilter, rangesFilters, attributesFilter } from "./Filters";
import { renderToys } from "./RenderToys";
import { sortToys } from "./Sorting";
import { stateAttributeFilters, stateRangeFilters, stateSortingOption } from "../../state/State";
import { TemplateFunction } from "../../utils/Types";

export const search = (): void => {
  const searchContainer = document.querySelector<HTMLElement>(".search");
  const searchInputComponent: TemplateFunction = ()  => `<input class="search__input" type="search" autofocus placeholder="Search toys" autocomplete="off">`;
  if (searchContainer) {
    if (searchContainer.hasChildNodes()) {
      searchContainer.removeChild(searchContainer.firstChild as HTMLElement);
    }
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
