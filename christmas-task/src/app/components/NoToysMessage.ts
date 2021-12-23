import { TemplateFunction } from "../utils/Types";
import { render } from "./Render";

export const noToysMessage = (): void => {
  const toysList = document.querySelector(".results__list") as HTMLElement;
  const noToysMessageComponent: TemplateFunction = ()  => `<p class="results__message">Извините, совпадений не обнаружено</p>`;
  render(toysList, noToysMessageComponent());
};
