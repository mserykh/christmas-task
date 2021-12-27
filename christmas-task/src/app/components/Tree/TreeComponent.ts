import { TemplateFunction } from "../../utils/Types";
import { render } from "../../utils/Render";

export const TreeComponent = (): void => {
  const appContainer = document.querySelector<HTMLElement>(".container--tree");
  const settingsComponent: TemplateFunction = () => `    <section class="tree-container">
    <div class="tree">
    <map name="tree-map">
      <area alt="" title="" coords="451,675,372,700,122,700,11,586,5,540,66,522,13,436,118,416,68,364,100,217,169,185,152,133,240,3,265,3,347,136,388,206,430,357,419,435,459,440,448,534,500,535" shape="poly">
    </map>
    <img class="tree-img" src="../../assets/img/trees/1.png" usemap="#tree-map" alt="" class="tree-img">
    </div>
  </section>`;
  if (appContainer !== null) {
    render(appContainer, settingsComponent());
  }
};
