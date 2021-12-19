import { render } from "./Render"
import { sliderRanges } from "../SliderRange";

export const ranges = () => {
  const rangesContainer = document.querySelector(".filters__ranges");
  const rangesComponent = () => `<fieldset class="filters__value filters__value--range">
  <legend class="filters__name">Количество экземпляров:</legend>
  <div class="fieldset__inner">
    <div class="range-slider range-slider--year">
      <div class="slider">
        <div class="output left">3</div>
        <input class="filters__range filters__range--left" type="range" id="input-left" min="1" max="12" value="3">
        <input class="filters__range filters__range--right" type="range" id="input-right" min="1" max="12" value="9">
        <div class="slider__inner">
          <div class="track"></div>
          <div class="range"></div>
          <div class="thumb left"></div>
          <div class="thumb right"></div>
        </div>
        <div class="output right">9</div>
      </div>
    </div>
  </div>
  </fieldset>`;

  render(rangesContainer, rangesComponent());
  sliderRanges();
};
