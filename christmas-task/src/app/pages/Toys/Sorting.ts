import data from "../../../assets/data/data";
import { render } from "../../utils/Render";
import { renderToys } from "./RenderToys";
import { stateSortingOption } from "../../state/State";
import { rangesFilters } from "./Filters";
import { attributesFilter } from "./Filters";
import { stateRangeFilters } from "../../state/State";
import { stateAttributeFilters } from "../../state/State";
import { IToy, TemplateFunction } from "../../utils/Types";

export const sorting = () => {
  const sortingContainer = document.querySelector(".filters__sorting") as HTMLElement;
  const controlsComponent: TemplateFunction = () => `<select name="sorting" id="sorting" class="filters__select">
  <option value="default_sorting" ${ stateSortingOption.option === 'default_sorting' ? 'selected' : ''}>По умолчанию</option>
  <option value="name-asc_sorting" ${ stateSortingOption.option === 'name-asc_sorting' ? 'selected' : ''}>По названию от «А» до «Я»</option>
  <option value="name-desc_sorting" ${ stateSortingOption.option === 'name-desc_sorting' ? 'selected' : ''}>По названию от «Я» до «А»</option>
  <option value="year-asc_sorting" ${ stateSortingOption.option === 'year-asc_sorting' ? 'selected' : ''}>По году по возрастанию</option>
  <option value="year-desc_sorting" ${ stateSortingOption.option === 'year-desc_sorting' ? 'selected' : ''}>По году по убыванию</option>
</select>`;

  render(sortingContainer, controlsComponent());
  addEventListeners();
};

const addEventListeners = (): void => {
  const filterSelect = document.querySelector(".filters__select") as HTMLElement;
  filterSelect.addEventListener("change", (e: Event): void => { onSortValueChange(e) });
};


const onSortValueChange = (e: Event): void => {
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

const sortByYearDesc = (toys: IToy[]): IToy[] => {
  return toys.slice().sort((toy1, toy2) => +toy2.year - +toy1.year);
};

const sortByYearAsc = (toys: IToy[]): IToy[] => {
  return toys.slice().sort((toy1, toy2) => +toy1.year - +toy2.year);
};

const sortByNameAsc = (toys: IToy[]): IToy[] => {
  return toys.slice().sort((toy1, toy2) => (toy1.name.toLowerCase() > toy2.name.toLowerCase()) ? 1 : (toy2.name.toLowerCase() > toy1.name.toLowerCase()) ? - 1 : 0);
};

const sortByNameDesc = (toys: IToy[]): IToy[] => {
  return toys.slice().sort((toy1, toy2) => (toy1.name.toLowerCase() > toy2.name.toLowerCase()) ? -1 : (toy2.name.toLowerCase() > toy1.name.toLowerCase()) ? 1 : 0);
};

export const sortToys = (toys: IToy[], sortingOption: string) => {
  let result: IToy[] = [];
  switch (sortingOption) {
    case "default_sorting": 
      result = toys;
      break;
    case "name-asc_sorting": 
      result = sortByNameAsc(toys);
      break;
    case "name-desc_sorting": 
      result = sortByNameDesc(toys);
      break;
    case "year-asc_sorting": 
      result = sortByYearAsc(toys);
      break;
    case "year-desc_sorting": 
      result = sortByYearDesc(toys);
      break;
  }
  return result;
};
