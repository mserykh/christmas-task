import { TemplateFunction } from "../../utils/Types";
import { render } from "../../utils/Render";

export const settingsLeftContainer = (): void => {
  const appContainer = document.querySelector<HTMLElement>(".container--tree");
  const settingsComponent: TemplateFunction = () => `<section class="settings settings--left">
    <div class="settings__snow-audio">
    </div>
    <div class="settings__trees">
      <h3 class="settings__title">Select a tree</h3>
      <ul class="settings__tree-list">
        <li class="settings__tree-item settings__item"></li>
        <li class="settings__tree-item settings__item"></li>
        <li class="settings__tree-item settings__item"></li>
        <li class="settings__tree-item settings__item"></li>
      </ul>
    </div>
    <div class="settings__scenes">
      <h3 class="settings__title">Select an image</h3>
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
      <h3 class="settings__title">Select the lights</h3>
      <ul class="settings__lights-list">
        <li class="settings__lights-item settings__item" data-color="color"></li>
        <li class="settings__lights-item settings__item" data-color="purple"></li>
        <li class="settings__lights-item settings__item" data-color="white"></li>
        <li class="settings__lights-item settings__item" data-color="yellow"></li>
        <li class="settings__lights-item settings__item" data-color="blue"></li>
      </ul>
      <div class="settings__lights-control">
        <input class="lights-onoff" type="checkbox" id="switcher" checked>
        <label for="switcher">Turn off the lights</label>
      </div>
    </div>
  </section>`;
  if (appContainer !== null) {
    render(appContainer, settingsComponent());
  }
};
