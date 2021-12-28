import data from "../../assets/data/data";
import { stateSelectedList } from "../state/State";
import { render } from "../utils/Render";
import { IToy, TemplateFunction } from "../utils/Types";
import { letTheMusicPlay } from "./Tree/Audio";
import { renderSelectedToys } from "./Tree/RenderSelectedToys";
import { setScene } from "./Tree/Scenes";
import { settingsLeftContainer } from "./Tree/SettingsLeftContainer";
import { settingsRightContainer } from "./Tree/SettingsRightContainer";
import { letItSnow } from "./Tree/Snow";
import { TreeComponent } from "./Tree/TreeComponent";
import { setTree } from "./Tree/Trees";

export const treePage = () => {
  const container = document.querySelector<HTMLElement>(".main");
  const treePageTemplate: TemplateFunction = () => {
    return `<div class="container--tree container">
  </div>`;
  };
  if (container) {
    render(container, treePageTemplate());
  }

  settingsLeftContainer();
  TreeComponent();
  settingsRightContainer();
  setScene();
  setTree();
  
  let toys: IToy[];
  if (stateSelectedList.length > 0 ) {
    toys = stateSelectedList;
  }
  else {
    toys = data.filter(el => +el.num < 21);
  }
  
  renderSelectedToys(toys);
  letTheMusicPlay();
  letItSnow();
};
