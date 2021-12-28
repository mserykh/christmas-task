import { render } from "../../utils/Render"
import { sliderRanges } from "../../utils/SliderRange";
import { TemplateFunction } from "../../utils/Types";

export const ranges = (): void => {
  const rangesContainer = document.querySelector<HTMLElement>(".filters__ranges");
  const rangesComponent: TemplateFunction = () => `<fieldset class="filters__value filters__value--range">
  <legend class="filters__name">Количество экземпляров:</legend>
  <div class="fieldset__inner">
    <div class="range-slider range-slider--qty">
      <div class="slider">
        <div class="output left">1</div>
        <input class="filters__range filters__range--left" type="range" id="qtyMin" min="1" max="12" value="1" step="1">
        <input class="filters__range filters__range--right" type="range" id="qtyMax" min="1" max="12" value="12" step="1">
        <div class="slider__inner">
          <div class="track"></div>
          <div class="range"></div>
          <div class="thumb left"></div>
          <div class="thumb right"></div>
        </div>
        <div class="output right">12</div>
      </div>
    </div>
  </div>
  </fieldset>
  <fieldset class="filters__value filters__value--range">
  <legend class="filters__name">Год приобретения:</legend>
  <div class="fieldset__inner">
    <div class="range-slider range-slider--year">
      <div class="slider">
        <div class="output left">1940</div>
        <input class="filters__range filters__range--left" type="range" id="yearMin" min="1940" max="2020" value="1940" step="10">
        <input class="filters__range filters__range--right" type="range" id="yearMax" min="1940" max="2020" value="2020" step="10">
        <div class="slider__inner">
          <div class="track"></div>
          <div class="range"></div>
          <div class="thumb left"></div>
          <div class="thumb right"></div>
        </div>
        <div class="output right">2020</div>
      </div>
    </div>
  </div>
  </fieldset>`;

  if (rangesContainer) {
    render(rangesContainer, rangesComponent());
  }

  const rangeSliders = document.querySelectorAll<HTMLElement>(".range-slider");
  rangeSliders.forEach(rangeSlider => sliderRanges(rangeSlider));
};
