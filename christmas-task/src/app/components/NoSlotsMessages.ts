import { render } from "./Render";

export const noSlotsMessage = () => {

  const noSlotsMessageModal = () => {
    const site = document.querySelector(".app") as HTMLElement;
    const noSlotsMessageTemplate = () => `<div class="noslots-modal">
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

  noslotsClose.addEventListener("click" ,(e) => {
    closeModal(noslotsModal);
  });

  const closeModal = (modalWindow) => {
    modalWindow.style.display = "none";
    const site = document.querySelector(".app") as HTMLElement;
    site.removeChild(modalWindow);
  }
};

