import { getFromLocalStorage } from "../utils/LocalStorage";

interface IAttributesFilter {
  shape: string[],
  color: string[],
  size: string[],
  favorite: boolean
}

interface IRangeFilters {
  qtyMin: string,
  qtyMax: string,
  yearMin: string,
  yearMax: string
} 

type StateSorting = {
  option: string
};

type SelectedList = string[];

export const stateAttributeFilters: IAttributesFilter = {
  shape: [],
  color: [],
  size: [],
  favorite: false
};

export const stateRangeFilters: IRangeFilters = {
  qtyMin: "1",
  qtyMax: "12",
  yearMin: "1940",
  yearMax: "2020"
};

export const stateSortingOption: StateSorting = {
  option: "default_sorting"
};

export const stateSelectedList: SelectedList = [];
