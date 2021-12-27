import { settingsLeftContainer } from "./SettingsLeftContainer";

export const setTree = (): void => {
  const settingsTreeList = document.querySelector<HTMLElement>(".settings__tree-list");

  const sceneOnClick = (e: Event): void => {
    if (settingsTreeList !== null) {
      Array.from(settingsTreeList.children).forEach(child => {
        if ((<HTMLElement>child).classList.contains("settings__item--active")) {
          (<HTMLElement>child).classList.remove("settings__item--active");
        }
      });
    }

    const scene = (<HTMLElement>e.target).closest(".settings__tree-item") as HTMLElement;
    if (!scene) return;

    if (!scene.classList.contains("settings__item--active")) {
      scene.classList.add("settings__item--active");
    }

    const style = getComputedStyle(scene);
    const backgroundImage = style.backgroundImage;
    const imageURL = backgroundImage.slice(5, -2);

    const treeBackground = document.querySelector<HTMLElement>(".tree-container");
    if (treeBackground !== null) {
      const treeMainImage = treeBackground.querySelector<HTMLImageElement>(".tree-img");
      if (treeMainImage !== null) {
        treeMainImage.src = imageURL;
      }
    }
  };

  if (settingsTreeList !== null) {
    settingsTreeList.addEventListener("click", sceneOnClick);
  }
};
