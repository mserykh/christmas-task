import './global.css'

const API_URL: string = './public/data.json';

interface IToy {
  num: string,
  name: string,
  count: string,
  year: string,
  shape: string,
  favorite: boolean,
  color: string,
  size: string
}

interface IFilter {
  
}

enum FavoriteText {
  Yes = "Да",
  No = "Нет"
}

async function getToysList(url: string): Promise<void> {
  const res = await fetch(url);
  const data = await res.json();
  showToys(data);
}

function getFavoriteText(value: boolean): string {
  if (value) {
    return FavoriteText.Yes;
  }
  else {
    return FavoriteText.No;
  }
}

function showToys(data: [IToy]):void {
  const page = document.getElementById("data") as HTMLElement;

  data.forEach((toy: IToy) => {
    const toyEl = document.createElement("div") as HTMLElement;
    toyEl.innerHTML = `
      <h3>${toy.name}</h3>
      <p>${toy.year}</p>
      <p>${toy.shape}</p>
      <p>${toy.color}</p>
      <p>${toy.size}</p>
      <p>${getFavoriteText(toy.favorite)}</p>
      <img src="./assets/toys/${toy.num.toString()}.webp" alt="${toy.name}">
      <hr>
    `;
    page.appendChild(toyEl);
  });
}


getToysList(API_URL);
