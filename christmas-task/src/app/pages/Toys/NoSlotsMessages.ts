import { TemplateFunction } from "../../utils/Types";
import { render } from "../../utils/Render";

export const noSlotsMessage = (): void => {

  const noSlotsMessageModal = (): void => {
    const site = document.querySelector<HTMLElement>(".app");
    const noSlotsMessageTemplate: TemplateFunction = () => `<div class="noslots-modal">
      <div class="noslots-modal__inner">
          <p class="no-slots">
          Sorry, no more free slots
          </p>
          <button class="noslots-modal__close">X</button>
      </div>
    </div>`;
    if (site) {
      render(site, noSlotsMessageTemplate());
    }
  };

  noSlotsMessageModal();

  const noslotsModal =  document.querySelector<HTMLElement>(".noslots-modal");
  const noslotsClose = document.querySelector<HTMLElement>(".noslots-modal__close");
  const site = document.querySelector<HTMLElement>(".app");
  if (noslotsModal !== null && noslotsClose !== null && site !== null) {
    noslotsClose.addEventListener("click" ,(): void => {
      closeModal(noslotsModal);
    });

    const closeModal = (modalWindow: HTMLElement): void => {
      modalWindow.style.display = "none";
      site.removeChild(modalWindow);
    }

    window.onclick = function(event: Event): void {
      if (event.target === noslotsModal) {
        site.removeChild(noslotsModal);
      }
    }
  }
};
