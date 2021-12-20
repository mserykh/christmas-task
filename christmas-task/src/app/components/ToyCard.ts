import { stateAttributeFilters, stateSelectedList } from "../state/State";

enum FavoriteText {
  Yes = "Да",
  No = "Нет"
}

export const toyTemplate = (toy) => `<li class="results__item toy" id="${getToyId(toy)}">
  <h2 class="toy__title">${toy.name}</h2>
  <img class="toy__image" src="./assets/toys/${toy.num.toString()}.webp" alt="Сосулька красная">
  <div class="toy__description">
    <p class="toy__qty">Количество: <span>${toy.count}</span></p>
    <p class="toy__year">Год покупки: <span>${toy.year}</span></p>
    <p class="toy__shape">Форма: <span>${toy.shape}</span></p>
    <p class="toy__color">Цвет: <span>${toy.color}</span></p>
    <p class="toy__size">Размер: <span>${toy.size}</span></p>
    <p class="toy__favorite">Любимая: <span>${getFavoriteText(toy.favorite)}</span></p>
  </div>
  <div class="toys__ribbon"></div>
</li>`;

const getToyId = (toy) => `toy_${toy.num}`;
const getFavoriteText = (value) => {
  if (value) {
    return FavoriteText.Yes;
  }
  else {
    return FavoriteText.No;
  }
};
