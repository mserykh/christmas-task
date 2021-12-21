import { render } from "./Render";
import { stateSelectedList } from "../state/State";

export const renderSelectedList = (toys) => {
  const modalInner = document.querySelector(".selected-modal__wrapper") as HTMLElement;
  const selectedToyTemplate = (toy) => `<div class="selected-toy__wrapper"><img class="selected-toy__image" src="./assets/toys/${toy.num}.webp" alt="${toy.name}"><h3 class="selected-toy__title">${toy.name}</h3><button class="selected-toy__delete">Убрать</button></div>
  `;
  
  if (stateSelectedList.length === 0) {
    modalInner.innerHTML = ``;
    const emptyMessage = () => `<p class="selected-modal__message-empty">
        Пока нет отобранных игрушек
    </p>`;
    render(modalInner, emptyMessage());
  }

  else if (stateSelectedList.length > 0) {
    modalInner.innerHTML = ``;
    stateSelectedList.forEach(toy => render(modalInner, selectedToyTemplate(toy))); 
  }
};