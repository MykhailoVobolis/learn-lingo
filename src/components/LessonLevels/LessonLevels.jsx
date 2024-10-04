import { nanoid } from "nanoid";
import css from "./LessonLevels.module.css";

export default function LessonLevels({ levels }) {
  return (
    <ul className={css.levelsContainer}>
      {levels.map((level) => (
        <li className={css.levelItem} key={nanoid()}>
          #{level}
        </li>
      ))}
    </ul>
  );
}
