

import { render } from "../../utils/Render";
import { TemplateFunction } from "../../utils/Types";

export const letItSnow = (): void => {
  const snowControlTemplate: TemplateFunction = () => `<div class="snow-control control"></div>`;

  const container = document.querySelector<HTMLElement>(".settings__snow-audio");
  let isSnowing = false;

  if (container !== null) {
    render(container, snowControlTemplate());
  }

  const toggleSnow = (e) => {
    if (isSnowing) {
      isSnowing = false;
      toggleIcon(e);
    }
    else {
      isSnowing = true;
      toggleIcon(e);
    }
  }

  const toggleIcon = (e) => {
    if (!isSnowing) {
      (e.target as HTMLElement).classList.remove("control--active");
    }
    else {
      (e.target as HTMLElement).classList.add("control--active");
    }
  }

  const onSnowClick = (e) => {
    toggleSnow(e);
  };

  const audioControl = document.querySelector(".snow-control");
  if (audioControl !== null) {
    audioControl.addEventListener("click", (e: Event) => onSnowClick(e));
  }
};
