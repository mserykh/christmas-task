import { selectedFilters } from "../state/State";

type Filters = { [key: string]: string };

interface IFilterTypesList {
  shape: string[];
  color: string[];
  size: string[];
  favorite: Boolean;
};

const FILTERS = {
  sphere: "шар",
  bell: "колокольчик",
  cone: "шишка",
  figurine: "фигурка",
  snowflake: "снежинка",
  white: "белый",
  yellow: "жёлтый",
  red: "красный",
  blue: "синий",
  green: "зелёный",
  big: "большой",
  medium: "средний",
  small: "малый",
};

export const searchFilter = (toys, searchValue) => {
  const result = toys.filter((toy) => {
    const values = (Object.values(toy)).map(value => (value as string).toString().toLowerCase());
    return values.join("").includes(searchValue) ? toy : "";
  });
  return result;
};


export const attributesFilter = (toys, filters) => {
  //check selectedList, check sort
  const result = toys
  .filter(toy => (filters.shape.length === 0 ? Boolean(toy.shape) : filters.shape.includes(toy.shape)))
  .filter(toy => (filters.color.length === 0 ? Boolean(toy.color) : filters.color.includes(toy.color)))
  .filter(toy => (filters.size.length === 0 ? Boolean(toy.size): filters.size.includes(toy.size)))
  .filter(toy => filters.favorite ? toy.favorite : toy.favorite || !toy.favorite);
  return result;
};

export const rangesFilters = (toys, filters) => {
  const result = toys
  .filter(toy => ((+toy.count >= +filters.qtyMin) && (+toy.count <= +filters.qtyMax)))
  .filter(toy => ((+toy.year >= +filters.yearMin) && (+toy.year <= +filters.yearMax)));
  return result;
};

