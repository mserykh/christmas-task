import { IToy } from "../../utils/Types";

export const toyTemplate = (toy: IToy): string => `<li class="settings__toys-item settings__item" data-num="${toy.num}">
    <span class="settings__toys-count">${toy.count}</span>
    <img src="../../assets/toys/${toy.num}.webp" alt="${toy.name}" class="settings__toys-img">
  </li>`;
