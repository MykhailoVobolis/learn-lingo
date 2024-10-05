import { forwardRef } from "react";
import { useSelector } from "react-redux";
import { selectTeachers } from "../../redux/teachers/selectors.js";

import TeacherCard from "../TeacherCard/TeacherCard.jsx";

import css from "./TeacherCardCollection.module.css";

function TeacherCardCollection({ pageSize }, ref) {
  const teachers = useSelector(selectTeachers);

  const newTeacherIndex = teachers.length - pageSize;
  const isNewTeacher = (index) => index === newTeacherIndex;

  return (
    teachers.length > 0 && (
      <div className={css.teacherCardCollectionWrapper}>
        <ul className={css.teacherList}>
          {teachers.map((teacher, index) => (
            <li key={teacher.id} ref={isNewTeacher(index) ? ref : null}>
              <TeacherCard teacher={teacher} />
            </li>
          ))}
        </ul>
      </div>
    )
  );
}

TeacherCardCollection.displayName = "TeacherCardCollection";

export default forwardRef(TeacherCardCollection);
