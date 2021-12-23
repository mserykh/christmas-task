import { IAttributesFilter, IRangeFilters, SelectedList, StateSorting } from "../utils/Types";

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
