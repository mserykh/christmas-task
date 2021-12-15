import data from "../assets/data/data";
import { IToy } from "./utils/IToy";

type SelectedToys = string[];

const selectedCount = document.querySelector(".selected__count") as HTMLElement;
const resultField = document.querySelector(".results__list") as HTMLElement;

const SELECTED_MAX: number = 20;
const selectedToysList: SelectedToys = [];

selectedCount.innerText = selectedToysList.length.toString();

resultField.addEventListener("click", function(e: Event):void {
  let toyCard = (e.target as HTMLElement).closest("li") as HTMLElement;

  if (!toyCard) return;
  if (!resultField.contains(toyCard)) return;

  toggleSelection(toyCard);
  }
);

function toggleSelection(toyCard: HTMLElement): void {
  if (selectedToysList.length < SELECTED_MAX && !toyCard.classList.contains("is-selected")) {
    selectedToysList.push((toyCard.querySelector(".toy__title") as HTMLElement).innerText);
    selectedCount.innerText = selectedToysList.length.toString();
    toyCard.classList.add("is-selected");
   }
   else if (selectedToysList.length > 0 && toyCard.classList.contains("is-selected")) {
    const index = selectedToysList.indexOf((toyCard.querySelector(".toy__title") as HTMLElement).innerText);
    selectedToysList.splice(index, 1);
    selectedCount.innerText = selectedToysList.length.toString();
    toyCard.classList.remove("is-selected");
   }
}

function setToLocalStorage() {

}

function getFromLocalStorage() {

}

