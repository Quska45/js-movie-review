import logo from "../../templates/logo.png";
import { makeDom } from "./util";

export default () => {
  const string = `
    <h1><img src="${logo}" alt="MovieList 로고" /></h1>
    <div class="search-box">
      <input type="text" placeholder="검색" />
      <button class="search-button">검색</button>
    </div>
  `;

  const dom = makeDom("header", string);

  return dom;
};
