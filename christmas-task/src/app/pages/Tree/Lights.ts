import { render } from "../../utils/Render";
import { TemplateFunction } from "../../utils/Types";
import { addLights } from "./AddLights";

export const lights = (): void => {
  const container = document.querySelector<HTMLElement>(".tree");
  const lightsComponent: TemplateFunction = () => `<div class="tree__lights">
      <ul class="lightrope lightrope--row1">
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
      </ul>
      <ul class="lightrope lightrope--row2">
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
      </ul>
      <ul class="lightrope lightrope--row3">
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
      </ul>
      <ul class="lightrope lightrope--row4">
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
      </ul>
      <ul class="lightrope lightrope--row5">
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
      </ul>
      <ul class="lightrope lightrope--row6">
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
        <li class="bulb"></li>
       </ul>
    </div>`;
  if (container) {
    render(container, lightsComponent());

    const lightropes = document.querySelectorAll<HTMLElement>(".lightrope");
    lightropes.forEach((lightrope, indexRow) => {
      lightrope.style.width = `${120 + 100 * indexRow}px`;
      lightrope.style.height = `${180 + 100 * indexRow}px`;
      const bulbs = lightrope.querySelectorAll<HTMLElement>(".bulb");
      bulbs.forEach((bulb, index, array) => {
        const length = array.length;
        bulb.style.transform = `rotate(${(60 - 3 * indexRow) + ((80 + 4 * indexRow) * index / length)}deg) translate(${(180 + 60 * indexRow) / 2}px) rotate(${- 60 - 5 * index - (80 * index / length)}deg)`;
      });
    });
  }
  addLights();
};