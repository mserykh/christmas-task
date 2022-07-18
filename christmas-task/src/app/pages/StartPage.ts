import { TemplateFunction } from "../utils/Types";

export const startPage: TemplateFunction = () => {
  return `<div class="container--enter container">
  <div class="main__deco">
    <div class="deco-ball deco-ball--big">
      <img src="../../assets/img/ball-1.png" alt="">
    </div>
    <div class="deco-ball deco-ball--small">
      <img src="../../assets/img/ball-2.png" alt="">
    </div>
  </div>
  <h1 class="main__title title">Help your grandma to decorate a Xmas Tree</h1>
  <button class="main__start">Decorate!</button>
</div>`;
};
