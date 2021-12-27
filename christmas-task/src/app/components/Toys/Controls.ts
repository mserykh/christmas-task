import { TemplateFunction } from "../../utils/Types";
import { render } from "../../utils/Render";

export const controls = (): void => {
  const appContainer = document.querySelector<HTMLElement>(".container--main");
  const controlsComponent: TemplateFunction = () => `<section class="filters">
    <div class="filters__container filters__values">
      <h3 class="filters__title">Фильтры по значению</h3>
    </div>
    <div class="filters__container filters__ranges">
      <h3 class="filters__title">Фильтры по диапазону</h3>
    </div>
    <div class="filters__container filters__sorting">
      <h3 class="filters__title">Сортировка</h3>
    </div>
  </section>`;
  if (appContainer !== null) {
    render(appContainer, controlsComponent());
  }
};
