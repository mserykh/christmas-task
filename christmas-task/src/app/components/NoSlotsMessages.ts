import { TemplateFunction } from "../utils/Types";
import { render } from "./Render";

export const noSlotsMessage = (): void => {

  const noSlotsMessageModal = (): void => {
    const site = document.querySelector(".app") as HTMLElement;
    const noSlotsMessageTemplate: TemplateFunction = () => `<div class="noslots-modal">
      <div class="noslots-modal__inner">
          <p class="no-slots">
            Извините, все слоты заполнены
          </p>
          <button class="noslots-modal__close">X</button>
      </div>
    </div>`;
    render(site, noSlotsMessageTemplate());
  };

  noSlotsMessageModal();

  const noslotsModal =  document.querySelector(".noslots-modal") as HTMLElement;
  const noslotsClose = document.querySelector(".noslots-modal__close") as HTMLElement;
  const site = document.querySelector(".app") as HTMLElement;

  noslotsClose.addEventListener("click" ,(e: Event): void => {
    closeModal(noslotsModal);
  });

  const closeModal = (modalWindow: HTMLElement): void => {
    modalWindow.style.display = "none";
    
    site.removeChild(modalWindow);
  }

  window.onclick = function(event: Event): void {
    if (event.target == noslotsModal) {
      site.removeChild(noslotsModal);
    }
  }
};
