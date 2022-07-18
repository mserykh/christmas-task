import { TemplateFunction } from "../../utils/Types";
import { render } from "../../utils/Render";

export const settingsRightContainer = (): void => {
  const appContainer = document.querySelector<HTMLElement>(".container--tree");
  const settingsComponent: TemplateFunction = () => `<section class="settings settings--right">
    <div class="settings__toys">
      <h3 class="settings__title">Toys</h3>
      <ul class="settings__toys-list" draggable="true">
      </ul>
    </div>
  </section>`;
  if (appContainer !== null) {
    render(appContainer, settingsComponent());
  }
};
