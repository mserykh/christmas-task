import "./global.css";
import { appTemplate } from "./app/pages/App";
import { startPage } from "./app/pages/StartPage";
import { render } from "./app/utils/Render";
import { routing } from "./app/utils/Routing";
import { startBtn } from "./app/pages/StartPage/StartBtn";

const app = document.querySelector(".app") as HTMLElement;
render(app, appTemplate());
const container = document.querySelector<HTMLElement>(".main");
if (container) {
  render(container, startPage());
}
routing();
startBtn();

console.log(`
Общай оценка 115 / 200
-------------
1. Вёрстка страниц приложения и навигация между ними +30
стартовая страница +10
на странице с ёлкой есть меню с настройками, слоты с добавленными в избранное игрушками, ёлка  +10
в header приложения есть навигация +10
2. Меню с настройками +30
У пользователя есть возможность:
выбрать один из нескольких (минимум 8) фонов +10
выбрать одну из нескольких (минимум 4) ёлок +10
включить/отключить новогоднюю музыку +10
3. Игрушки в избранном +55
в слотах находятся игрушки, которые были добавлены в избранное на странице с игрушками +10
если в избранное не была добавлена ни одна игрушка, в слотах отображаются первые 20 игрушек коллекции исходных данных +10
игрушки из слотов с игрушками можно перетянуть на ёлку используя drag and drop +10
если в процессе перетягивания игрушку отпускают за пределами ёлки, она возвращается в свой слот +10
возле слота с каждой игрушкой указывается количество игрушек в слоте равное количеству экземпляров игрушки в массиве с исходными данными +10
когда игрушку "вешают на ёлку" количество игрушек в слоте уменьшается, когда игрушку "снимают с ёлки", количество игрушек в слоте увеличивается, когда все экземпляры игрушки помещаются на ёлку, отображается пустой слот +5
`);
