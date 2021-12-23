import { IAttributesFilter, IRangeFilters, IToy } from "../utils/Types";

export const searchFilter = (toys: IToy[], searchValue: string): IToy[] => {
  const result = toys.filter((toy: IToy) => {
    const values = (Object.values(toy)).map(value => (value as string).toString().toLowerCase());
    return values.join("").includes(searchValue) ? toy : "";
  });
  return result;
};

export const attributesFilter = (toys: IToy[], filters: IAttributesFilter): IToy[] => {
  const result = toys
  .filter(toy => (filters.shape.length === 0 ? Boolean(toy.shape) : filters.shape.includes(toy.shape)))
  .filter(toy => (filters.color.length === 0 ? Boolean(toy.color) : filters.color.includes(toy.color)))
  .filter(toy => (filters.size.length === 0 ? Boolean(toy.size): filters.size.includes(toy.size)))
  .filter(toy => filters.favorite ? toy.favorite : toy.favorite || !toy.favorite);
  return result;
};

export const rangesFilters = (toys: IToy[], filters: IRangeFilters): IToy[] => {
  const result = toys
  .filter(toy => ((+toy.count >= +filters.qtyMin) && (+toy.count <= +filters.qtyMax)))
  .filter(toy => ((+toy.year >= +filters.yearMin) && (+toy.year <= +filters.yearMax)));
  return result;
};
