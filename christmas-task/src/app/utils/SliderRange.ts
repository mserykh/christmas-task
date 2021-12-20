export const sliderRanges = () => {
  const inputLeft = document.querySelector(".filters__range--left") as HTMLInputElement;
  const inputRight = document.querySelector(".filters__range--right") as HTMLInputElement;
  
  const thumbLeft = document.querySelector(".thumb.left") as HTMLElement;
  const thumbRight = document.querySelector(".thumb.right") as HTMLElement;
  const range = document.querySelector(".range") as HTMLElement;
  
  const outputLeft = document.querySelector(".output.left") as HTMLElement;
  const outputRight = document.querySelector(".output.right") as HTMLElement;
  
  
  function setLeftValue(): void {
    const input = inputLeft;
    const min = parseInt(input.min);
    const max = parseInt(input.max);
  
    const currentValueLeft = Math.min(parseInt(input.value), parseInt(inputRight.value))
    input.value = currentValueLeft.toString();
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
    const percent = ((currentValueRight - min) / (max - min)) * 100;
    outputRight.innerText = currentValueRight.toString();
    thumbRight.style.right = (100 - percent) + "%";
    range.style.right = (100 - percent) + "%";
  }
  setRightValue();
  
  inputLeft.addEventListener("input", setLeftValue);
  inputRight.addEventListener("input", setRightValue);
};
