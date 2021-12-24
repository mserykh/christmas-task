import { render } from "./Render";
import { stateSelectedList } from "../state/State";
import { TemplateFunction, ToyTemplateFunction } from "../utils/Types";

export const renderSelectedList = (): void => {
  const modalInner = document.querySelector<HTMLElement>(".selected-modal__wrapper");
  const selectedToyTemplate: ToyTemplateFunction = (toy) => `<div class="selected-toy__wrapper" id="${toy.num}"><img class="selected-toy__image" src="./assets/toys/${toy.num}.webp" alt="${toy.name}"><h3 class="selected-toy__title">${toy.name}</h3><button class="selected-toy__delete">Убрать</button></div>
  `;
  if (modalInner !== null) {
    if (stateSelectedList.length === 0) {
      modalInner.innerHTML = ``;
      const emptyMessage: TemplateFunction = () => `<p class="selected-modal__message-empty">
          Пока нет отобранных игрушек
      </p>`;
      render(modalInner, emptyMessage());
    }
  
    else if (stateSelectedList.length > 0) {
      modalInner.innerHTML = ``;
      stateSelectedList.forEach(toy => render(modalInner, selectedToyTemplate(toy))); 
    }
  }
};