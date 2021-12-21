import { render } from "./Render";
import { stateSelectedList } from "../state/State";
import { renderSelectedList } from "./RenderSelectedList";

export const selectedToys = () => {
  const selectedToysContainer = document.querySelector(".selected");
  const selectedToysComponent = () => `<span class="selected__count"></span>`;
  render(selectedToysContainer, selectedToysComponent());
};

export const showSelectedCount = () => {
  const selectedCount = document.querySelector(".selected__count") as HTMLElement;
  selectedCount.innerHTML = `${stateSelectedList.length}`;
};

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

  const toysSelected = document.querySelector(".selected") as HTMLElement;
  const cartModal = document.querySelector(".selected-modal") as HTMLElement;
  const toysSelectedClose = document.querySelector(".selected-modal__close") as HTMLElement;

  const openSelected = () => {
    cartModal.style.display = "flex";
    renderSelectedList(stateSelectedList);
  };

  const closeSelected = () => {
    cartModal.style.display = "none";
  };

  toysSelected.addEventListener("click", openSelected);
  toysSelectedClose.addEventListener("click", closeSelected);
};
