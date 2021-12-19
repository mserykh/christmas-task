import { render } from "./Render"

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
};