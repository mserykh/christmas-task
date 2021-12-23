export const setToLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) || '[]');
};
