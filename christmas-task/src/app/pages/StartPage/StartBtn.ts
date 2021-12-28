import { toysPage } from "../ToysPage";

export const startBtn = () => {
  const btn = document.querySelector(".main__start");
  if (btn) {
    btn.addEventListener("click", onBtnClick);
  }
}

function onBtnClick() {
  const container = document.querySelector<HTMLElement>(".main");
  const link = document.getElementById("toys-page");
    if (container && link) {
      container.innerHTML = ``;
      link.classList.add("site-nav__link--active");
      toysPage();
    }
}