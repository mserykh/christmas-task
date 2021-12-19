interface IFilter {
  shape: string[],
  color: string[],
  size: string[],
  favorite: boolean
}

type SelectedList = string[];

export const selectedFilters: IFilter = {
  shape: [],
  color: [],
  size: [],
  favorite: false
};
export const rangeOptions = [];
export const sortingOption = "";
export const selectedList: SelectedList = [];