import data from "../../../assets/data/data";
import { render } from "../../utils/Render";
import { stateRangeFilters, stateSelectedList } from "../../state/State";
import { renderSelectedList } from "./RenderSelectedList";
import { stateAttributeFilters, stateSortingOption } from "../../state/State";
import { attributesFilter, rangesFilters } from "./Filters";
import { renderToys } from "./RenderToys";
import { sortToys } from "./Sorting";
import { TemplateFunction } from "../../utils/Types";

export const selectedToys = (): void => {
  const selectedToysContainer = document.querySelector<HTMLElement>(".selected");
  const selectedToysComponent: TemplateFunction = () => `<span class="selected__count"></span>`;
  if (selectedToysContainer !== null) render(selectedToysContainer, selectedToysComponent());
};

export const showSelectedCount = (): void => {
  const selectedCount = document.querySelector<HTMLElement>(".selected__count");
  if (selectedCount !== null) selectedCount.innerHTML = `${stateSelectedList.length}`;
};

export const selectedToysModal = (): void => {
  const site = document.querySelector<HTMLElement>(".app");
  const renderSelectedToysModal = (): void => {
    const selectedToysModalTemplate: TemplateFunction = () => `
    <div class="selected-modal">
      <div class="selected-modal__inner">
        <h2 class="selected-modal__title">Отобранные игрушки</h2>
        <div class="selected-modal__wrapper">
          <p class="selected-modal__message-empty">
            Пока нет отобранных игрушек
          </p>
        </div>
        <button class="selected-modal__close">X</button>
      </div>
      </div>`;
      if (site !== null) {
        render(site, selectedToysModalTemplate());
      }
  };

  renderSelectedToysModal();

  const toysSelected = document.querySelector(".selected") as HTMLElement;
  const cartModal = document.querySelector(".selected-modal") as HTMLElement;
  const toysSelectedClose = document.querySelector(".selected-modal__close") as HTMLElement;

  const openSelected = (): void => {
    cartModal.style.display = "flex";
    renderSelectedList();
  };

  const closeSelected = (): void => {
    cartModal.style.display = "none";
  };

  toysSelected.addEventListener("click", openSelected);
  toysSelectedClose.addEventListener("click", closeSelected);

  window.onclick = function(e: Event) {
    if (e.target == cartModal) {
      cartModal.style.display = "none";
    }
  }

  const toysWrapper = document.querySelector(".selected-modal__wrapper") as HTMLElement;
  toysWrapper.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;

    if (target.classList.contains("selected-toy__delete")) {
      const toyCard = target.closest(".selected-toy__wrapper") as HTMLElement;
      const toyNum = toyCard.id;
      const index = stateSelectedList.findIndex(item => {
        return item.num === toyNum; 
      });
      stateSelectedList.splice(index, 1);
      renderSelectedList();
      showSelectedCount();
      renderToys(sortToys(rangesFilters(attributesFilter(data, stateAttributeFilters), stateRangeFilters), stateSortingOption.option));
    }
  });
};
