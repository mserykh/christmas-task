import { TemplateFunction } from "../utils/Types";

export const staticPage: TemplateFunction = () => {
    return `<header class="header">
    <div class="container--header container">
      <nav class="header__nav">
        <a href="" class="logo">
          <img class="logo__img" src="./assets/img/tree.svg" alt="Логотип">
        </a>
        <ul class="site-nav">
          <li class="site-nav__item">
            <a class="site-nav__link">Игрушки</a>
          </li>
          <li class="site-nav__item">
            <a class="site-nav__link">Ёлка</a>
          </li>
        </ul>
      </nav>
      <div class="user-nav">
        <div class="search">
        </div>
        <div class="selected">
        </div>
      </div>
    </div>
  </header>
  <main class="main">
    <div class="container--main container">
    </div>
  </main>
  <footer class="footer">
    <div class="container container--footer">
      <p class="footer__copyright">© 2021</p>
      <a class="footer__github" href="https://github.com/mserykh">mserykh</a>
      <a class="footer__rss-logo" href="https://rs.school/js/" target="_blank"></a>
    </div>
  </footer>`;
};
