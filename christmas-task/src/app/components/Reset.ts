import { render } from "./Render"

export const reset = () => {
  const resetBtnContainer = document.querySelector(".filters__sorting");
  const resetBtnComponent = () => `<button class="filters__reset">Сброс фильтров</button>`;

  render(resetBtnContainer, resetBtnComponent());
};
