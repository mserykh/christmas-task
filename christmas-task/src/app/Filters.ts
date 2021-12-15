import data from "../assets/data/data";
import { showToys } from "..";
import { resultList } from "..";
import { IToy } from "./utils/IToy";

type Filters = {
  [key: string]: string
};

interface IFilterTypesList {
  shape: string[];
  color: string[];
  size: string[];
  favorite: Boolean;
};

const FILTERS: Filters = {
  sphere: "шар",
  bell: "колокольчик",
  cone: "шишка",
  figurine: "фигурка",
  snowflake: "снежинка",
  white: "белый",
  yellow: "жёлтый",
  red: "красный",
  blue: "синий",
  green: "зелёный",
  big: "большой",
  medium: "средний",
  small: "малый",
};

const shapesList = document.querySelectorAll(".filters__checkboxes-list--shape > li > input") as NodeListOf<HTMLInputElement>;
const colorsList = document.querySelectorAll(".filters__checkboxes-list--color > li > input") as NodeListOf<HTMLInputElement>;
const sizesList = document.querySelectorAll(".filters__checkboxes-list--size > li > input") as NodeListOf<HTMLInputElement>;
const isFavorite = document.querySelector(".filters__value--favorite > input") as HTMLInputElement;

const checkedFilters: IFilterTypesList = {
  shape: [],
  color: [],
  size: [],
  favorite: false
};

function onFilterChange(e: Event): void {
  const target = e.target as HTMLInputElement;

  if (target.name === "favorite" && checkedFilters[target.name] === false) {
    checkedFilters[target.name] = true;
    filterToys(checkedFilters);
  }

  else if (target.name === "favorite" && checkedFilters[target.name] === true) {
    checkedFilters[target.name] = false;
    filterToys(checkedFilters);
  }

  else if (target.checked && !checkedFilters[target.name].includes(target.value)) {
    checkedFilters[target.name].push(FILTERS[target.value]);

    filterToys(checkedFilters);
  }

  else if (checkedFilters[target.name].includes(FILTERS[target.value])) {
    const index = checkedFilters[target.name].indexOf(FILTERS[target.value]);
    checkedFilters[target.name].splice(index, 1);

    filterToys(checkedFilters);
  }
}

function filterToys(filters: IFilterTypesList): void {
  const result = data
                    .filter(toy => (filters.shape.length === 0 ? Boolean(toy.shape) : filters.shape.includes(toy.shape)))
                    .filter(toy => (filters.color.length === 0 ? Boolean(toy.color) : filters.color.includes(toy.color)))
                    .filter(toy => (filters.size.length === 0 ? Boolean(toy.size): filters.size.includes(toy.size)))
                    .filter(toy => filters.favorite ? toy.favorite : toy.favorite || !toy.favorite);

  renderToys(result);
}

function renderToys(result: IToy[]): void {
  resultList.innerHTML = ``;
  showToys(result);
}

shapesList.forEach(function(filterItem: HTMLInputElement): void {
  filterItem.addEventListener('change', (e) => { onFilterChange(e) } );
});

colorsList.forEach(function(filterItem: HTMLInputElement): void {
  filterItem.addEventListener('change', (e) => { onFilterChange(e) } );
});

sizesList.forEach(function(filterItem: HTMLInputElement): void {
  filterItem.addEventListener('change', (e: Event): void => { onFilterChange(e) });
});

isFavorite.addEventListener('change', (e: Event): void => { onFilterChange(e) } );
