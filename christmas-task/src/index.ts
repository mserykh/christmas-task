import "./global.css";
import data from "./assets/data/data";
import { staticPage } from "./app/components/StaticPage";
import { render } from "./app/components/Render";
import { selectedToys, showSelectedCount } from "./app/components/SelectedToys";
import { controls } from "./app/components/Controls";
import { filters } from "./app/components/Filters";
import { ranges } from "./app/components/Ranges";
import { sorting } from "./app/components/Sorting";
import { reset } from "./app/components/Reset";
import { renderToys } from "./app/components/RenderToys";
import { toysList } from "./app/components/ToysList";

const site = document.querySelector(".app");
render(site, staticPage());
selectedToys();
showSelectedCount();
controls();
filters();
ranges();
sorting();
reset();
toysList();
renderToys(data);
