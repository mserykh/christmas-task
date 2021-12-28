import data from "../../assets/data/data";
import { render } from "../utils/Render";
import { TemplateFunction } from "../utils/Types";
import { attributesFiltersComponent } from "./Toys/AttributesFilterComponent";
import { controls } from "./Toys/Controls";
import { ranges } from "./Toys/Ranges";
import { renderToys } from "./Toys/RenderToys";
import { reset } from "./Toys/Reset";
import { search, onSearchEvent } from "./Toys/Search";
import { selectedToys, showSelectedCount, selectedToysModal } from "./Toys/SelectedToys";
import { sorting } from "./Toys/Sorting";
import { toysList } from "./Toys/ToysList";

export const toysPage = () => {
  const container = document.querySelector<HTMLElement>(".main");
  const toysPageTemplate: TemplateFunction = () => {
    return `<div class="container--main container">
  </div>`;
  };
  if (container) {
    render(container, toysPageTemplate());
  }

  selectedToys();
  search();
  onSearchEvent();
  showSelectedCount();
  controls();
  attributesFiltersComponent();
  ranges();
  sorting();
  reset();
  toysList();
  renderToys(data);
  selectedToysModal();
};


