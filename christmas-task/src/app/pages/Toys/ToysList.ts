import { TemplateFunction } from "../../utils/Types";
import { render } from "../../utils/Render";

export const toysList = (): void => {
  const appContainer = document.querySelector(".container--main") as HTMLElement;
  const controlsComponent: TemplateFunction = () => `<section class="results">
    <ul class="results__list">
    </ul>
  </section>`;
  render(appContainer, controlsComponent());
};
