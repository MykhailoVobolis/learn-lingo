import { useSelector } from "react-redux";
import { selectTeachers } from "../../redux/teachers/selectors.js";

import TeacherCard from "../TeacherCard/TeacherCard.jsx";

import css from "./TeacherCardCollection.module.css";

export default function TeacherCardCollection() {
  const teachers = useSelector(selectTeachers);

  return (
    teachers.length > 0 && (
      <div className={css.teacherCardCollectionWrapper}>
        <ul className={css.teacherList}>
          {teachers.map((teacher) => (
            <li key={teacher.id}>
              <TeacherCard teacher={teacher} />
            </li>
          ))}
        </ul>
      </div>
    )
  );
}
