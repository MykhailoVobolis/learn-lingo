import { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleFavoriteTeacher } from "../../redux/favorites/operations.js";
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";
import { openModal } from "../../redux/modal/slice.js";

import TeacherCard from "../TeacherCard/TeacherCard.jsx";

import css from "./TeacherCardCollection.module.css";

function TeacherCardCollection({ pageSize, teachers }, ref) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleToggleFavorite = (teacher) => {
    if (isLoggedIn) {
      dispatch(toggleFavoriteTeacher(teacher));
    } else {
      dispatch(openModal("message"));
    }
  };

  const newTeacherIndex = teachers.length - pageSize;
  const isNewTeacher = (index) => index === newTeacherIndex;

  return (
    teachers.length > 0 && (
      <ul className={css.teacherList}>
        {teachers.map((teacher, index) => (
          <li key={teacher.id} ref={isNewTeacher(index) ? ref : null}>
            <TeacherCard teacher={teacher} onToggleFavorite={handleToggleFavorite} />
          </li>
        ))}
      </ul>
    )
  );
}

TeacherCardCollection.displayName = "TeacherCardCollection";

export default forwardRef(TeacherCardCollection);
