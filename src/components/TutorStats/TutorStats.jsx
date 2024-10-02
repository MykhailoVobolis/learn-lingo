import { PiBookOpenBold } from "react-icons/pi";
import { GoStarFill } from "react-icons/go";
import css from "./TutorStats.module.css";

export default function TutorStats({ teacher }) {
  const { lessons_done, rating, price_per_hour } = teacher;

  return (
    <div className={css.tutorStatsContainer}>
      <p className={css.description}>Languages</p>
      <ul className={css.tutorStatsList}>
        <li className={css.afterElement}>
          <PiBookOpenBold className={css.bookIcon} size={16} /> Lessons online
        </li>
        <li className={css.afterElement}>Lessons done: {lessons_done}</li>
        <li className={css.afterElement}>
          <GoStarFill className={css.starIcon} size={16} /> Rating: {rating}
        </li>
        <li>
          Price / 1 hour: <span className={css.accent}>{price_per_hour}$</span>
        </li>
      </ul>
    </div>
  );
}
