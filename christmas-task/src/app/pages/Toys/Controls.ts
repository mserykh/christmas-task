import { TemplateFunction } from "../../utils/Types";
import { render } from "../../utils/Render";

export const controls = (): void => {
  const appContainer = document.querySelector<HTMLElement>(".container--main");
  const controlsComponent: TemplateFunction = () => `<section class="filters">
    <div class="filters__container filters__values">
      <h3 class="filters__title">Filters by value</h3>
    </div>
    <div class="filters__container filters__ranges">
      <h3 class="filters__title">Filters by range</h3>
    </div>
    <div class="filters__container filters__sorting">
      <h3 class="filters__title">Sorting</h3>
    </div>
  </section>`;
  if (appContainer) {
    render(appContainer, controlsComponent());
  }
};
