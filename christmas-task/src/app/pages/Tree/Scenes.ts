export const setScene = (): void => {
  const settingsScenesList = document.querySelector<HTMLElement>(".settings__scene-list");
  settingsScenesList?.children[0].classList.add("settings__item--active");


  const sceneOnClick = (e: Event): void => {
    if (settingsScenesList) {
      Array.from(settingsScenesList.children).forEach(child => {
        if ((<HTMLElement>child).classList.contains("settings__item--active")) {
          (<HTMLElement>child).classList.remove("settings__item--active");
        }
      });
    }

    const scene = (<HTMLElement>e.target).closest(".settings__scene-item") as HTMLElement;
    if (!scene) return;

    if (!scene.classList.contains("settings__item--active")) {
      scene.classList.add("settings__item--active");
    }

    const style = getComputedStyle(scene);
    const backgroundImage = style.backgroundImage;

    const treeBackground = document.querySelector<HTMLElement>(".tree-container");
    if (treeBackground) {
      treeBackground.style.backgroundImage = backgroundImage;
    }
  };

  if (settingsScenesList) {
    settingsScenesList.addEventListener("click", sceneOnClick);
  }
};
