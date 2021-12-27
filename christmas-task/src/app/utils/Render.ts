export const render = (container: HTMLElement, component: string): void => {
  container.insertAdjacentHTML("beforeend", component);
};
