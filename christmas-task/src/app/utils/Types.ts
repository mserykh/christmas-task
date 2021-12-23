export interface IToy {
  num: string,
  name: string,
  count: string,
  year: string,
  shape: string,
  color: string,
  size: string,
  favorite: boolean,
}

export interface IAttributesFilter {
  shape: string[],
  color: string[],
  size: string[],
  favorite: boolean,
}

export interface IRangeFilters {
  [propName: string]: string;
  qtyMin: string;
  qtyMax: string;
  yearMin: string;
  yearMax: string
} 

export type StateSorting = {
  option: string
};

export type SelectedList = IToy[];

export type Filters = { [key: string]: string };

export enum FavoriteText {
  Yes = "Да",
  No = "Нет"
}

export type TemplateFunction = () => string;
export type ToyTemplateFunction = (arg: IToy) => string;
