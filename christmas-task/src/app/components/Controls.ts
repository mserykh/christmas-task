import { render } from "./Render";

export const controls = () => {
  const appContainer = document.querySelector(".container--main");
  const controlsComponent = () => `<section class="filters">
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

  render(appContainer, controlsComponent());
};
