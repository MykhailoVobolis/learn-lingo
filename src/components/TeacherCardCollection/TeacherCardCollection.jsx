import { forwardRef } from "react";
import { useDispatch } from "react-redux";

import TeacherCard from "../TeacherCard/TeacherCard.jsx";
import { toggleFavoriteTeacher } from "../../redux/favorites/operations.js";

import css from "./TeacherCardCollection.module.css";

function TeacherCardCollection({ pageSize, teachers }, ref) {
  const dispatch = useDispatch();

  const handleToggleFavorite = (teacher) => {
    dispatch(toggleFavoriteTeacher(teacher));
  };

  const newTeacherIndex = teachers.length - pageSize;
  const isNewTeacher = (index) => index === newTeacherIndex;

  return (
    teachers.length > 0 && (
      <div className={css.teacherCardCollectionWrapper}>
        <ul className={css.teacherList}>
          {teachers.map((teacher, index) => (
            <li key={teacher.id} ref={isNewTeacher(index) ? ref : null}>
              <TeacherCard teacher={teacher} onToggleFavorite={handleToggleFavorite} />
            </li>
          ))}
        </ul>
      </div>
    )
  );
}

TeacherCardCollection.displayName = "TeacherCardCollection";

export default forwardRef(TeacherCardCollection);
