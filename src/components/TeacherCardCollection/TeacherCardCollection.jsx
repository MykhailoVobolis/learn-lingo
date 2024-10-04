import { useDispatch, useSelector } from "react-redux";
import { selectTeachers } from "../../redux/teachers/selectors.js";
import { useEffect } from "react";
import { fetchAllTeachers } from "../../redux/teachers/operations.js";
import TeacherCard from "../TeacherCard/TeacherCard.jsx";

import css from "./TeacherCardCollection.module.css";

export default function TeacherCardCollection() {
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);

  useEffect(() => {
    dispatch(fetchAllTeachers());
  }, [dispatch]);

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
