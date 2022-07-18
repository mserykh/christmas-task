import { FavoriteText, IToy } from "../../utils/Types";


export const toyTemplate = (toy: IToy): string => `<li class="results__item toy" id="${getToyId(toy)}">
  <h2 class="toy__title">${toy.name}</h2>
  <img class="toy__image" src="./assets/toys/${toy.num.toString()}.webp" alt="${toy.name}">
  <div class="toy__description">
    <p class="toy__qty">Quantity: <span>${toy.count}</span></p>
    <p class="toy__year">Year of purchase: <span>${toy.year}</span></p>
    <p class="toy__shape">Shape: <span>${toy.shape}</span></p>
    <p class="toy__color">Colour: <span>${toy.color}</span></p>
    <p class="toy__size">Size: <span>${toy.size}</span></p>
    <p class="toy__favorite">Is favourite: <span>${getFavoriteText(toy.favorite)}</span></p>
  </div>
  <div class="toys__ribbon"></div>
</li>`;

const getToyId = (toy: IToy) : string=> `toy_${toy.num}`;
const getFavoriteText = (value: boolean): string => {
  if (value) {
    return FavoriteText.Yes;
  }
  else {
    return FavoriteText.No;
  }
};
