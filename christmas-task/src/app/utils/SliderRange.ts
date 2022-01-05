import data from "../../assets/data/data";
import { rangesFilters } from "../pages/Toys/Filters";
import { renderToys } from "../pages/Toys/RenderToys";
import { attributesFilter } from "../pages/Toys/Filters";
import { stateAttributeFilters, stateRangeFilters, stateSortingOption } from "../state/State";
import { sortToys } from "../pages/Toys/Sorting";

export const sliderRanges = (rangeSlider: HTMLElement): void => {
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
    thumbLeft.style.left = `${(percent - 8 * 0.01 * percent)}%`;
    range.style.left = `${(percent - 8 * 0.01 * percent)}%`;
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
    thumbRight.style.right = `${(100 - percent + 8 * 0.01 * percent)}%`;
    range.style.right = `${(100 - percent - 8 * 0.01 * (100 - percent))}%`;
  }
  setRightValue();
  
  inputLeft.addEventListener("input", (): void => {
    setLeftValue();
    onRangeChange();
  });
  inputRight.addEventListener("input", (): void => {
    setRightValue();
    onRangeChange();
  });
};

const onRangeChange = (): void => {
  renderToys(sortToys(rangesFilters(attributesFilter(data, stateAttributeFilters), stateRangeFilters), stateSortingOption.option));
};
