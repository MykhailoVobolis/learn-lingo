import { Link } from "react-router-dom";
import css from "./TeacherProfile.module.css";
import TutorStats from "../TutorStats/TutorStats.jsx";

export default function TeacherProfile({ teacher }) {
  const { name, surname, languages, lesson_info, conditions } = teacher;
  const speaks = languages.join(", ");
  const conditionsValue = conditions.join(" ");

  return (
    <div className={css.teacherProfileContainer}>
      <TutorStats teacher={teacher} />
      <div>
        <h2 className={css.teacherName}>
          {name} {surname}
        </h2>
        <ul className={css.teachingInfo}>
          <li>
            Speaks: <span className={`${css.teachingInfoText} ${css.accent}`}>{speaks}</span>
          </li>
          <li>
            Lesson Info: <span className={css.teachingInfoText}>{lesson_info}</span>
          </li>
          <li>
            Conditions: <span className={css.teachingInfoText}>{conditionsValue}</span>
          </li>
        </ul>
        <Link className={css.moreLink}>Read More</Link>
      </div>
    </div>
  );
}
