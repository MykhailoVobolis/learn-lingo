import { FiHeart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { selectFavoritesId } from "../../redux/favorites/selectors.js";

import css from "./ButtonAddFavorite.module.css";

export default function ButtonAddFavorite({ teacher, teacherId, onToggleFavorite }) {
  const favoritesId = useSelector(selectFavoritesId);

  const isFavorite = favoritesId.includes(teacherId);

  return (
    <button className={css.heartBtn} onClick={() => onToggleFavorite(teacher)}>
      <FiHeart className={isFavorite ? `${css.heartIconIsFavorite}` : `${css.heartIcon}`} size={26} />
    </button>
  );
}
