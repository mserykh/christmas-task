import { render } from "./Render";
import data from "../../assets/data/data";
import { stateAttributeFilters, stateSortingOption } from "../state/State";
import { attributesFilter } from "./Filters";
import { renderToys } from "./RenderToys";
import { sortToys } from "./Sorting";
import { Filters, TemplateFunction } from "../utils/Types";

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

export const attributesFiltersComponent = () => {
  const attributesFiltersContainer = document.querySelector(".filters__values") as HTMLElement;
  const attributesFiltersTemplate: TemplateFunction = () => `<div class="filters__value filters__value--shape">
    <legend class="filters__name">Форма:</legend>
    <ul class="filters__checkboxes-list filters__checkboxes-list--shape">
      <li class="filters__checkboxes-item">
        <input class="filters__checkbox filters__checkbox--shape filters__checkbox--sphere" type="checkbox" name="shape" value="sphere" id="sphere_shape">
        <label for="sphere_shape" class="visually-hidden filters__checkboxes-label">шар</label>
      </li>
      <li class="filters__checkboxes-item">
        <input class="filters__checkbox filters__checkbox--shape filters__checkbox--bell" type="checkbox" name="shape" value="bell" id="bell_shape">
        <label for="bell_shape" class="visually-hidden filters__checkboxes-label">колокольчик</label>
      </li>
      <li class="filters__checkboxes-item">
        <input class="filters__checkbox filters__checkbox--shape filters__checkbox--cone" type="checkbox" name="shape" value="cone" id="cone_shape">
        <label for="cone_shape" class="visually-hidden filters__checkboxes-label">шишка</label>
      </li>
      <li class="filters__checkboxes-item">
        <input class="filters__checkbox filters__checkbox--shape filters__checkbox--snowflake" type="checkbox" name="shape" value="snowflake" id="snowflake_shape">
        <label for="snowflake_shape" class="visually-hidden filters__checkboxes-label">снежинка</label>
      </li>
      <li class="filters__checkboxes-item">
        <input class="filters__checkbox filters__checkbox--shape filters__checkbox--figurine" type="checkbox" name="shape" value="figurine" id="figurine_shape">
        <label for="figurine_shape" class="visually-hidden filters__checkboxes-label">фигурка</label>
      </li>
    </ul>
  </div>
  <div class="filters__value filters__value--color">
    <legend class="filters__name">Цвет:</legend>
    <ul class="filters__checkboxes-list filters__checkboxes-list--color">
      <li class="filters__checkboxes-item">
        <input class="filters__checkbox filters__checkbox--color filters__checkbox--white" type="checkbox" name="color" value="white" id="white_color">
        <label for="white_color" class="visually-hidden filters__checkboxes-label">белый</label>
      </li>
      <li class="filters__checkboxes-item">
        <input class="filters__checkbox filters__checkbox--color filters__checkbox--yellow" type="checkbox" name="color" value="yellow" id="yellow_color">
        <label for="yellow_color" class="visually-hidden filters__checkboxes-label">жёлтый</label>
      </li>
      <li class="filters__checkboxes-item">
        <input class="filters__checkbox filters__checkbox--color filters__checkbox--red" type="checkbox" name="color" value="red" id="red_color">
        <label for="red_color" class="visually-hidden filters__checkboxes-label">красный</label>
      </li>
      <li class="filters__checkboxes-item">
        <input class="filters__checkbox filters__checkbox--color filters__checkbox--blue" type="checkbox" name="color" value="blue" id="blue_color">
        <label for="blue_color" class="visually-hidden filters__checkboxes-label">синий</label>
      </li>
      <li class="filters__checkboxes-item">
        <input class="filters__checkbox filters__checkbox--color filters__checkbox--green" type="checkbox" name="color" value="green" id="green_color">
        <label for="green_color" class="visually-hidden filters__checkboxes-label">зелёный</label>
      </li>
    </ul>
  </div>
  <div class="filters__value filters__value--size">
    <legend class="filters__name">Размер:</legend>
    <ul class="filters__checkboxes-list filters__checkboxes-list--size">
      <li class="filters__checkboxes-item">
        <input class="filters__checkbox filters__checkbox--size filters__checkbox--big" type="checkbox" name="size" value="big" id="big_size">
        <label for="big_size" class="visually-hidden filters__checkboxes-label">большой</label>
      </li>
      <li class="filters__checkboxes-item">
        <input class="filters__checkbox filters__checkbox--size filters__checkbox--medium" type="checkbox" name="size" value="medium" id="medium_size">
        <label for="medium_size" class="visually-hidden filters__checkboxes-label">средний</label>
      </li>
      <li class="filters__checkboxes-item">
        <input class="filters__checkbox filters__checkbox--size filters__checkbox--small" type="checkbox" name="size" value="small" id="small_size">
        <label for="small_size" class="visually-hidden filters__checkboxes-label">малый</label>
      </li>
    </ul>
  </div>
  <div class="filters__value filters__value--favorite">
    <input class="filters__checkbox filters__checkbox--favorite" type="checkbox" name="favorite" value="favorite" id="favorite">
    <label class="filters__name" for="favorite">Только любимые:</label>
  </div>`;

  render(attributesFiltersContainer, attributesFiltersTemplate());
  addEventListeners();
};

const addEventListeners = ():void => {
  const checkboxes = document.querySelectorAll(".filters__checkbox") as NodeListOf<HTMLInputElement>;
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', onFilterChange );
  });
};

const onFilterChange = (e: Event): void => {
  const target = e.target as HTMLInputElement;
  if (target.name === "favorite") {
    if (stateAttributeFilters[target.name] === false) {
      stateAttributeFilters[target.name] = true;
      renderToys(sortToys((attributesFilter(data, stateAttributeFilters)), stateSortingOption.option));
    }
  
    else if (stateAttributeFilters[target.name] === true) {
      stateAttributeFilters[target.name] = false;
      renderToys(sortToys((attributesFilter(data, stateAttributeFilters)), stateSortingOption.option));
    }  
  }
  else if (target.name === "shape" || target.name === "color" || target.name === "size") {
    if (target.checked && !stateAttributeFilters[target.name].includes(target.value)) {
      stateAttributeFilters[target.name].push(FILTERS[target.value]);
      renderToys(sortToys((attributesFilter(data, stateAttributeFilters)), stateSortingOption.option));
    }
  
    else if (stateAttributeFilters[target.name].includes(FILTERS[target.value])) {
      const index = stateAttributeFilters[target.name].indexOf(FILTERS[target.value]);
      stateAttributeFilters[target.name].splice(index, 1);
      renderToys(sortToys((attributesFilter(data, stateAttributeFilters)), stateSortingOption.option));
    }
  }
};
