import { TemplateFunction } from "../../utils/Types";
import { render } from "../../utils/Render";

export const settingsRightContainer = (): void => {
  const appContainer = document.querySelector<HTMLElement>(".container--tree");
  const settingsComponent: TemplateFunction = () => `<section class="settings settings--right">
    <div class="settings__toys">
      <h3 class="settings__title">Игрушки</h3>
      <ul class="settings__toys-list" draggable="true">
      </ul>
    </div>
    <button class="settings__save-btn settings__save-btn--tree">Сохранить ёлку</button>
    <div class="settings__saved">
      <h3 class="settings__title">Вы нарядили</h3>
      <ul class="settings__saved-list">
        <li class="settings__saved-item settings__item"></li>
        <li class="settings__saved-item settings__item"></li>
        <li class="settings__saved-item settings__item"></li>
        <li class="settings__saved-item settings__item"></li>
        <li class="settings__saved-item settings__item"></li>
        <li class="settings__saved-item settings__item"></li>
      </ul>
    </div>
  </section>`;
  if (appContainer !== null) {
    render(appContainer, settingsComponent());
  }
};
