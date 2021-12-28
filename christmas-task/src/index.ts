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
