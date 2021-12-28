import { toysPage } from "../pages/ToysPage";
import { treePage } from "../pages/TreePage";

export const routing = () => {
  const navLinks = document.querySelectorAll<HTMLElement>(".site-nav__link");

  navLinks.forEach(link => {
    link.addEventListener("click", openPage);
  });

  function openPage(e: Event) {
    navLinks.forEach(link => {
      link.classList.remove("site-nav__link--active");
    });
    const target = e.target as HTMLElement;
    const container = document.querySelector<HTMLElement>(".main");
    if (target.id === "toys-page") {
      if (container) {
        container.innerHTML = ``;
      }
      target.classList.add("site-nav__link--active");
      toysPage();
    }
    else {
      if (container) {
        container.innerHTML = ``;
      }
      target.classList.add("site-nav__link--active");
      treePage();
    }
  }
};
