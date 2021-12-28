import { TemplateFunction } from "../../utils/Types";
import { render } from "../../utils/Render";

export const settingsLeftContainer = (): void => {
  const appContainer = document.querySelector<HTMLElement>(".container--tree");
  const settingsComponent: TemplateFunction = () => `<section class="settings settings--left">
    <div class="settings__snow-audio">
    </div>
    <div class="settings__trees">
      <h3 class="settings__title">Выберите ёлку</h3>
      <ul class="settings__tree-list">
        <li class="settings__tree-item settings__item"></li>
        <li class="settings__tree-item settings__item"></li>
        <li class="settings__tree-item settings__item"></li>
        <li class="settings__tree-item settings__item"></li>
      </ul>
    </div>
    <div class="settings__scenes">
      <h3 class="settings__title">Выберите фон</h3>
      <ul class="settings__scene-list">
        <li class="settings__scene-item settings__item"></li>
        <li class="settings__scene-item settings__item"></li>
        <li class="settings__scene-item settings__item"></li>
        <li class="settings__scene-item settings__item"></li>
        <li class="settings__scene-item settings__item"></li>
        <li class="settings__scene-item settings__item"></li>
        <li class="settings__scene-item settings__item"></li>
        <li class="settings__scene-item settings__item"></li>
      </ul>
    </div>
    <div class="settings__lights">
      <h3 class="settings__title">Выберите гирлянду</h3>
      <ul class="settings__lights-list">
        <li class="settings__lights-item settings__item"></li>
        <li class="settings__lights-item settings__item"></li>
        <li class="settings__lights-item settings__item"></li>
        <li class="settings__lights-item settings__item"></li>
        <li class="settings__lights-item settings__item"></li>
      </ul>
      <div class="settings__lights-control">
        <input class="lights-onoff" type="checkbox">
      </div>
    </div>
    <button class="settings__reset-btn">Сбросить настройки</button>
  </section>`;
  if (appContainer !== null) {
    render(appContainer, settingsComponent());
  }
};