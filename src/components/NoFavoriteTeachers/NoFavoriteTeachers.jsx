import { PiListDashes } from "react-icons/pi";

import css from "./NoFavoriteTeachers.module.css";

export default function NoFavoriteTeachers() {
  return (
    <div className={css.notFavoriteContainer}>
      <PiListDashes className={css.subIcon} />
      <p className={css.title}>Only the best!</p>
      <p className={css.text}>Keep your favorite teachers in your heart and here.</p>
    </div>
  );
}
