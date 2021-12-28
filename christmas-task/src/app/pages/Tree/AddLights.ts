export const addLights = (): void => {
  const settingsLightsList = document.querySelector<HTMLElement>(".settings__lights-list");
  const lightsOnOff = document.querySelector<HTMLInputElement>(".lights-onoff");
  const lightsList = document.querySelector<HTMLElement>(".tree__lights");
  const bulbs = document.querySelectorAll<HTMLElement>(".bulb");

  const lightsSwitchOnOff = () => {
    const lights = document.querySelectorAll<HTMLElement>(".settings__lights-item");
    if (lightsOnOff && lightsList) {
      if (lightsOnOff.checked) {
        lightsList.style.display = "none";

        lights.forEach(light => {
          if (light.classList.contains("settings__item--active")) {
            light.classList.remove("settings__item--active");
          }
        })
      }
      else {
        lightsList.style.display = "flex";
        Array.from(bulbs).forEach(bulb => {
          if (bulb.classList.contains("color") || bulb.classList.contains("purple") || bulb.classList.contains("white") || bulb.classList.contains("yellow") || bulb.classList.contains("blue")) {
            bulb.classList.remove(bulb.classList[1]);
          }
          bulb.classList.add("color");
          lights[0].classList.add("settings__item--active");
        });
      }
    }
  }

  const lightsOnClick = (e: Event): void => {
    if (settingsLightsList) {
      Array.from(settingsLightsList.children).forEach(child => {
        if ((<HTMLElement>child).classList.contains("settings__item--active")) {
          (<HTMLElement>child).classList.remove("settings__item--active");
        }
      });
    }

    (<HTMLInputElement>lightsOnOff).checked = false;

    const color = (<HTMLElement>e.target).closest(".settings__lights-item") as HTMLElement;
    if (!color) return;

    if (!color.classList.contains("settings__item--active")) {
      color.classList.add("settings__item--active");
    }
    const colorOption = color.dataset.color as string;


    if (bulbs) {
      Array.from(bulbs).forEach(bulb => {
        if (bulb.classList.contains("color") || bulb.classList.contains("purple") || bulb.classList.contains("white") || bulb.classList.contains("yellow") || bulb.classList.contains("blue")) {
          bulb.classList.remove(bulb.classList[1]);
        }
        bulb.classList.add(colorOption);
      });
    }
  };

  if (settingsLightsList) {
    settingsLightsList.addEventListener("click", lightsOnClick);
  }

  if (lightsOnOff) {
    lightsOnOff.addEventListener("change", lightsSwitchOnOff);
  }
};
