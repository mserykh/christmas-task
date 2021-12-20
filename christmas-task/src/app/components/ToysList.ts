import { render } from "./Render";

export const toysList = () => {
  const appContainer = document.querySelector(".container--main");
  const controlsComponent = () => `<section class="results">
    <ul class="results__list">
    </ul>
  </section>`;
  render(appContainer, controlsComponent());
};
