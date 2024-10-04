import { FiHeart } from "react-icons/fi";
import css from "./ButtonAddFavorite.module.css";

export default function ButtonAddFavorite({}) {
  return (
    <button className={css.heartBtn}>
      <FiHeart className={css.heartIcon} size={26} />
    </button>
  );
}
