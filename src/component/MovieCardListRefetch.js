import list from "./List";
import MovieCard from "./MovieCard";

/**
 * cardDatas : [
 *  {
 *    href : 영화 상세페이지 url
 *    src : 영화 썸네일 url
 *    title : 영화 이름
 *    alt : 영화 썸네일 alt
 *    score : 영화 점수
 *  }
 * ]
 */
const MovieCardListRefetch = ({ cardDatas }) => {
  const ul = list();
  const fragment = new DocumentFragment();
  cardDatas.map(MovieCard).forEach((dom) => fragment.appendChild(dom));
  ul.appendChild(fragment);
};

export default MovieCardListRefetch;
