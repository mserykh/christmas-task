import data from "../assets/data/data";
import { showToys } from "..";
import { resultList } from "..";
import { IToy } from "./utils/IToy";

function onSortValueChange(e: Event): void {
  const target = e.target as HTMLSelectElement;

  if (target.value === "default_sorting") {
    resultList.innerHTML = ``;
    showToys(data);
  }

  if (target.value === "name-asc_sorting") {
    const data = sortByNameAsc();
    resultList.innerHTML = ``;
    showToys(data);
  }

  if (target.value === "name-desc_sorting") {
    const data = sortByNameDesc();
    resultList.innerHTML = ``;
    showToys(data);
  }

  if (target.value === "year-asc_sorting") {
    const data = sortByYearAsc();
    resultList.innerHTML = ``;
    showToys(data);
  }

  if (target.value === "year-desc_sorting") {
    const data = sortByYearDesc();
    resultList.innerHTML = ``;
    showToys(data);
  }
}

function sortByYearDesc(): IToy[] {
  return data.slice().sort((toy1, toy2) => +toy1.year - +toy2.year);
}

function sortByYearAsc(): IToy[] {
  return data.slice().sort((toy1, toy2) => +toy2.year - +toy1.year);
}

function sortByNameAsc(): IToy[] {
  return data.slice().sort((toy1, toy2) => (toy1.name.toLowerCase() > toy2.name.toLowerCase()) ? 1 : (toy2.name.toLowerCase() > toy1.name.toLowerCase()) ? - 1 : 0);
}

function sortByNameDesc(): IToy[] {
  return data.slice().sort((toy1, toy2) => (toy1.name.toLowerCase() > toy2.name.toLowerCase()) ? -1 : (toy2.name.toLowerCase() > toy1.name.toLowerCase()) ? 1 : 0);
}

const filterSelect = document.querySelector(".filters__select") as HTMLElement;

filterSelect.addEventListener("change", (e: Event): void => { onSortValueChange(e) });