import TutorStats from "../TutorStats/TutorStats.jsx";
import LessonLevels from "../LessonLevels/LessonLevels.jsx";
import TutorOverview from "../TutorOverview/TutorOverview.jsx";

import { useDispatch, useSelector } from "react-redux";
import { useMedia } from "react-use";
import { selectShowDetails } from "../../redux/teachers/selectors.js";
import { onShowDetails } from "../../redux/teachers/slise.js";

import css from "./TeacherProfile.module.css";
import ButtonAddFavorite from "../ButtonAddFavorite/ButtonAddFavorite.jsx";

export default function TeacherProfile({ teacher, onToggleFavorite }) {
  const { name, surname, languages, lesson_info, conditions, levels, id } = teacher;
  const speaks = languages.join(", ");
  const conditionsValue = conditions.join(" ");

  const dispatch = useDispatch();
  const showDetails = useSelector(selectShowDetails(id));

  const handleClick = () => {
    dispatch(onShowDetails(teacher.id));
  };

  const isTablet = useMedia("(max-width: 1023px)");
  const isDesktop = useMedia("(min-width: 1024px)");

  return (
    <div className={css.teacherProfileContainer}>
      {isDesktop && <TutorStats teacher={teacher} onToggleFavorite={onToggleFavorite} />}
      <div className={css.nameContainer}>
        <h2 className={css.teacherName}>
          {name} {surname}
        </h2>
        {isTablet && <ButtonAddFavorite teacherId={id} onToggleFavorite={onToggleFavorite} teacher={teacher} />}
      </div>
      {isTablet && <TutorStats teacher={teacher} onToggleFavorite={onToggleFavorite} />}
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
      {!showDetails && (
        <button className={css.showDetailsBtn} onClick={handleClick}>
          Read More
        </button>
      )}
      {showDetails ? <TutorOverview teacher={teacher} /> : <LessonLevels levels={levels} />}
    </div>
  );
}
