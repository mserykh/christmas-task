import data from "../../assets/data/data";
import { render } from "./Render";
import { stateRangeFilters, stateSelectedList } from "../state/State";
import { renderSelectedList } from "./RenderSelectedList";
import { stateAttributeFilters, stateSortingOption } from "../state/State";
import { attributesFilter, rangesFilters } from "./Filters";
import { renderToys } from "./RenderToys";
import { sortToys } from "./Sorting";

const site = document.querySelector(".app") as HTMLElement;

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
    const selectedToysModalTemplate = () => `
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

  window.onclick = function(event) {
    if (event.target == cartModal) {
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
      renderSelectedList(stateSelectedList);
      showSelectedCount();
      renderToys(sortToys(rangesFilters(attributesFilter(data, stateAttributeFilters), stateRangeFilters), stateSortingOption.option));
    }
  });
};
