import { TemplateFunction } from "../../utils/Types";
import { render } from "../../utils/Render";

export const noToysMessage = (): void => {
  const toysList = document.querySelector<HTMLElement>(".results__list");
  const noToysMessageComponent: TemplateFunction = ()  => `<p class="results__message">Sorry, nothing found</p>`;
  if (toysList) {
    render(toysList, noToysMessageComponent());
  }
};
