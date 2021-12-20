import { render } from "./Render";
import { stateSelectedList } from "../state/State";

export const selectedToys = () => {
  const selectedToysContainer = document.querySelector(".selected");
  const selectedToysComponent = () => `<span class="selected__count"></span>`;
  render(selectedToysContainer, selectedToysComponent());
}

export const showSelectedCount = () => {
  const selectedCount = document.querySelector(".selected__count") as HTMLElement;
  selectedCount.innerHTML = `${stateSelectedList.length}`;
}

export const selectedToysModal = () => {
  const renderSelectedToysModal = () => {
    const site = document.querySelector(".app");
    const selectedToysModalTemplate = () => `
    <div class="selected-modal">
      <div class="selected-modal__inner">
        <h2 class="selected-modal__title">Отобранные игрушки</h2>
        <div class="selected-modal__wrapper">
          <p class="selected-modal__message-empty">
            Пока нет отобранных игрушек
          </p>
        </div>
        <button class="selected-modal__close">x</button>
      </div>
      </div>`;
    render(site, selectedToysModalTemplate());
  };
  renderSelectedToysModal();
};
