import data from "../../assets/data/data";
import { render } from "./Render";
import { renderToys } from "./RenderToys";
import { stateSortingOption } from "../state/State";
import { rangesFilters } from "./Filters";
import { attributesFilter } from "./Filters";
import { stateRangeFilters } from "../state/State";
import { stateAttributeFilters } from "../state/State";

export const sorting = () => {
  const sortingContainer = document.querySelector(".filters__sorting");
  const controlsComponent = () => `<select name="sorting" id="sorting" class="filters__select">
  <option value="default_sorting" selected>По умолчанию</option>
  <option value="name-asc_sorting" false>По названию от «А» до «Я»</option>
  <option value="name-desc_sorting" false>По названию от «Я» до «А»</option>
  <option value="year-asc_sorting" false>По году по возрастанию</option>
  <option value="year-desc_sorting" false>По году по убыванию</option>
</select>`;

  render(sortingContainer, controlsComponent());
  addEventListeners();
};

const addEventListeners = () => {
  const filterSelect = document.querySelector(".filters__select") as HTMLElement;
  filterSelect.addEventListener("change", (e: Event): void => { onSortValueChange(e) });
};


const onSortValueChange = (e: Event) => {
  const target = e.target as HTMLSelectElement;

  if (target.value === "default_sorting") {
    stateSortingOption.option = target.value;
    renderToys(rangesFilters(attributesFilter(data, stateAttributeFilters), stateRangeFilters));
  }

  if (target.value === "name-asc_sorting") {
    stateSortingOption.option = target.value;
    const data = sortByNameAsc();
    renderToys(rangesFilters(attributesFilter(data, stateAttributeFilters), stateRangeFilters));
  }

  if (target.value === "name-desc_sorting") {
    stateSortingOption.option = target.value;
    const data = sortByNameDesc();
    renderToys(rangesFilters(attributesFilter(data, stateAttributeFilters), stateRangeFilters));
  }

  if (target.value === "year-asc_sorting") {
    stateSortingOption.option = target.value;
    const data = sortByYearAsc();
    renderToys(rangesFilters(attributesFilter(data, stateAttributeFilters), stateRangeFilters));
  }

  if (target.value === "year-desc_sorting") {
    stateSortingOption.option = target.value;
    const data = sortByYearDesc();
    renderToys(rangesFilters(attributesFilter(data, stateAttributeFilters), stateRangeFilters));
  }
};

const sortByYearDesc = () => {
  return data.slice().sort((toy1, toy2) => +toy1.year - +toy2.year);
};

const sortByYearAsc = () => {
  return data.slice().sort((toy1, toy2) => +toy2.year - +toy1.year);
};

const sortByNameAsc = () => {
  return data.slice().sort((toy1, toy2) => (toy1.name.toLowerCase() > toy2.name.toLowerCase()) ? 1 : (toy2.name.toLowerCase() > toy1.name.toLowerCase()) ? - 1 : 0);
};

const sortByNameDesc = () => {
  return data.slice().sort((toy1, toy2) => (toy1.name.toLowerCase() > toy2.name.toLowerCase()) ? -1 : (toy2.name.toLowerCase() > toy1.name.toLowerCase()) ? 1 : 0);
};
