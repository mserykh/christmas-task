import { TemplateFunction } from "../../utils/Types";
import { render } from "../../utils/Render";

export const TreeComponent = (): void => {
  const appContainer = document.querySelector<HTMLElement>(".container--tree");
  const settingsComponent: TemplateFunction = () => `<section class="tree-container">
    <div class="tree">
    <map name="tree-map">
      <area class="tree__drop-area" alt="" title="" coords="451,675,372,700,122,700,11,586,5,540,66,522,13,436,118,416,68,364,100,217,169,185,152,133,240,3,265,3,347,136,388,206,430,357,419,435,459,440,448,534,500,535" shape="poly">
    </map>
    <img src="../../assets/img/trees/1.png" usemap="#tree-map" alt="" class="tree-img">
    </div>
  </section>`;
  if (appContainer) {
    render(appContainer, settingsComponent());
    document.addEventListener("drop", onDropEvent);
    const dropArea = document.querySelector<HTMLElement>(".tree__drop-area");
    if (dropArea) {
      dropArea.addEventListener("dragover", onDragOver);
    }
  }
};

function onDropEvent(e: DragEvent) {
  e.preventDefault();
  const target = e.target as HTMLElement;
  if (target.classList.contains("tree__drop-area")) {
    const num = (<DataTransfer>e.dataTransfer).getData("num");
    let qty = (<DataTransfer>e.dataTransfer).getData("qty");
    const item = document.querySelector<HTMLElement>(`.settings__toys-item[data-num="${num}"]`) as HTMLElement;
    const img = item.querySelector<HTMLElement>(".settings__toys-img");
    if (img) { 
      if (+qty > 0) {
        cloneElement(e, img);
        qty = (+qty - 1).toString();
        (item .querySelector<HTMLElement>(".settings__toys-count") as HTMLElement).innerText = qty;
      }
    }
  }
}

function onDragOver(e: DragEvent) {
  e.preventDefault();
}

function cloneElement(e: DragEvent, img: HTMLElement) {
  const imgClone = img.cloneNode() as HTMLElement;
  const style = getComputedStyle(img);
  const width = style.width;
  imgClone.style.width = width;
  imgClone.style.position = "absolute";
  imgClone.style.left = `${e.offsetX}px`;
  imgClone.style.top = `${e.offsetY}px`;
   imgClone.style.transform = `translate(-50%, -50%)`;
  const tree = document.querySelector(".tree");
  if (tree) {
    tree.appendChild(imgClone);
  }
}
