import data from "../../assets/data/data";
import { stateRangeFilters } from "../state/State";
import { rangesFilters } from "../components/Filters";
import { renderToys } from "../components/RenderToys";
import { attributesFilter } from "../components/Filters";
import { stateAttributeFilters } from "../state/State";

export const sliderRanges = (rangeSlider) => {
  const inputLeft = rangeSlider.querySelector(".filters__range--left") as HTMLInputElement;
  const inputRight = rangeSlider.querySelector(".filters__range--right") as HTMLInputElement;
  const thumbLeft = rangeSlider.querySelector(".thumb.left") as HTMLElement;
  const thumbRight = rangeSlider.querySelector(".thumb.right") as HTMLElement;
  const range = rangeSlider.querySelector(".range") as HTMLElement;
  const outputLeft = rangeSlider.querySelector(".output.left") as HTMLElement;
  const outputRight = rangeSlider.querySelector(".output.right") as HTMLElement;

  function setLeftValue(): void {
    const input = inputLeft;
    const min = parseInt(input.min);
    const max = parseInt(input.max);
    const currentValueLeft = Math.min(parseInt(input.value), parseInt(inputRight.value));
    input.value = currentValueLeft.toString();
    stateRangeFilters[input.id] = currentValueLeft.toString();
    const percent = ((currentValueLeft - min) / (max - min)) * 100;
    outputLeft.innerText = currentValueLeft.toString();
    thumbLeft.style.left = percent + "%";
    range.style.left = percent + "%";

  }
  setLeftValue();
  
  function setRightValue(): void {
    const input = inputRight;
    const min = parseInt(input.min);
    const max = parseInt(input.max);
    const currentValueRight = Math.max(parseInt(input.value), parseInt(inputLeft.value))
    input.value = currentValueRight.toString();
    stateRangeFilters[input.id] = currentValueRight.toString();
    const percent = ((currentValueRight - min) / (max - min)) * 100;
    outputRight.innerText = currentValueRight.toString();
    thumbRight.style.right = (100 - percent) + "%";
    range.style.right = (100 - percent) + "%";
  }
  setRightValue();
  
  inputLeft.addEventListener("input", (e) => {
    setLeftValue();
    onRangeChange();
  });
  inputRight.addEventListener("input", (e) => {
    setRightValue();
    onRangeChange();
  });
};

const onRangeChange = () => {
  renderToys(rangesFilters(attributesFilter(data, stateAttributeFilters), stateRangeFilters));
};
