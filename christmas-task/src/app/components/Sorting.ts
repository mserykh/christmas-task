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
  <option value="default_sorting" ${ stateSortingOption.option === 'default_sorting' ? 'selected' : ''}>По умолчанию</option>
  <option value="name-asc_sorting" ${ stateSortingOption.option === 'name-asc_sorting' ? 'selected' : ''}>По названию от «А» до «Я»</option>
  <option value="name-desc_sorting" ${ stateSortingOption.option === 'name-desc_sorting' ? 'selected' : ''}>По названию от «Я» до «А»</option>
  <option value="year-asc_sorting" ${ stateSortingOption.option === 'year-asc_sorting' ? 'selected' : ''}>По году по возрастанию</option>
  <option value="year-desc_sorting" ${ stateSortingOption.option === 'year-desc_sorting' ? 'selected' : ''}>По году по убыванию</option>
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
    const toys = sortByNameAsc(data);
    renderToys(rangesFilters(attributesFilter(toys, stateAttributeFilters), stateRangeFilters));
  }

  if (target.value === "name-desc_sorting") {
    stateSortingOption.option = target.value;
    const toys = sortByNameDesc(data);
    renderToys(rangesFilters(attributesFilter(toys, stateAttributeFilters), stateRangeFilters));
  }

  if (target.value === "year-asc_sorting") {
    stateSortingOption.option = target.value;
    const toys = sortByYearAsc(data);
    renderToys(rangesFilters(attributesFilter(toys, stateAttributeFilters), stateRangeFilters));
  }

  if (target.value === "year-desc_sorting") {
    stateSortingOption.option = target.value;
    const toys = sortByYearDesc(data);
    renderToys(rangesFilters(attributesFilter(toys, stateAttributeFilters), stateRangeFilters));
  }
};

const sortByYearDesc = (toys) => {
  return toys.slice().sort((toy1, toy2) => +toy2.year - +toy1.year);
};

const sortByYearAsc = (toys) => {
  return toys.slice().sort((toy1, toy2) => +toy1.year - +toy2.year);
};

const sortByNameAsc = (toys) => {
  return toys.slice().sort((toy1, toy2) => (toy1.name.toLowerCase() > toy2.name.toLowerCase()) ? 1 : (toy2.name.toLowerCase() > toy1.name.toLowerCase()) ? - 1 : 0);
};

const sortByNameDesc = (toys) => {
  return toys.slice().sort((toy1, toy2) => (toy1.name.toLowerCase() > toy2.name.toLowerCase()) ? -1 : (toy2.name.toLowerCase() > toy1.name.toLowerCase()) ? 1 : 0);
};

export const sortToys = (toys, sortingOption) => {
  switch (sortingOption) {
    case "default_sorting": 
      return toys;
    case "name-asc_sorting": 
      return sortByNameAsc(toys);
    case "name-desc_sorting": 
      return sortByNameDesc(toys);
    case "year-asc_sorting": 
      return sortByYearAsc(toys);
    case "year-desc_sorting": 
      return sortByYearDesc(toys);
  }
};
