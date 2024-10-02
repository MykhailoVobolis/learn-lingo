import { useDispatch, useSelector } from "react-redux";
import { selectTeachers } from "../../redux/teachers/selectors.js";
import { useEffect } from "react";
import { fetchAllTeachers } from "../../redux/teachers/operations.js";

import css from "./TeacherCardCollection.module.css";
import TeacherCard from "../TeacherCard/TeacherCard.jsx";

export default function TeacherCardCollection() {
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);

  useEffect(() => {
    dispatch(fetchAllTeachers());
  }, [dispatch]);

  return (
    <div className={css.teacherCardCollectionWrapper}>
      <ul className={css.teacherList}>
        {teachers.map((teacher, index) => (
          <li key={index}>
            <TeacherCard teacher={teacher} />
          </li>
        ))}
      </ul>
    </div>
  );
}
