import "./global.css";
import data from "./assets/data/data";
import { IToy } from "./app/utils/IToy";
import "./app/Sorting";
import "./app/SliderRange";

const application = document.querySelector(".app") as HTMLElement;
export const resultList = document.querySelector(".results__list") as HTMLElement;

enum FavoriteText {
  Yes = "Да",
  No = "Нет"
}

function getFavoriteText(value: boolean): string {
  if (value) {
    return FavoriteText.Yes;
  }
  else {
    return FavoriteText.No;
  }
}


export function showToys(data: IToy[]): void {
  data.map((toy: IToy) => {
    const toyEl = document.createElement("li") as HTMLElement;
    toyEl.classList.add("results__item", "toy");
    toyEl.innerHTML = `
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
      <div class="toys__ribbon">
      </div>
    `;
    resultList.appendChild(toyEl);
  });
}

showToys(data);


import "./app/Filters";
import "./app/Selected";

/*import { App } from "./app/App";
import { ToysList } from "./app/components/ToysList/ToysList";
import { AppStore } from "./app/components/Subscribe/AppStore";*/

/*const root = document.querySelector(".app") as HTMLElement; 

if (!root) {
  throw new Error("Something went wrong, body is undefined")
}

const app: App = new App();
root.innerHTML = app.render();*/


/*
const END_POINT: string = "./public/data.json";
const getToysList = async function (url: string){
  const res = await fetch(url);
  const data: IToy[] = await res.json();
  if (!res.ok) throw new Error(res.statusText);

  showToys(data);
  const result = data.slice();

  return result;
}

const toysData = getToysList(END_POINT);*/
