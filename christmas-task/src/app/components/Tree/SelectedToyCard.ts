import { IToy } from "../../utils/Types";

export const toyTemplate = (toy: IToy): string => `<li class="settings__toys-item settings__item">
    <span class="settings__toys-count">${toy.count}</span>
    <img src="../../assets/toys/${toy.num.toString()}.webp" alt="${toy.name}" class="settings__toys-img">
  </li>`;
