import { render } from "./Render";

export const noToysMessage = () => {
  const toysList = document.querySelector(".results__list") as HTMLElement;
  const noToysMessageComponent = (): string  => `<p class="results__message">Извините, совпадений не обнаружено</p>`;
  render(toysList, noToysMessageComponent());
};
