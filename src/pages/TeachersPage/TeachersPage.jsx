import { useDispatch, useSelector } from "react-redux";
import MainButton from "../../components/MainButton/MainButton.jsx";
import TeacherCardCollection from "../../components/TeacherCardCollection/TeacherCardCollection.jsx";
import Spinner from "../../components/Spinner/Spinner.jsx";
import { selectLastKey, selectLoading, selectTeachers } from "../../redux/teachers/selectors.js";
import { useEffect } from "react";
import { fetchAllTeachers } from "../../redux/teachers/operations.js";

import css from "./TeachersPage.module.css";

export default function TeachersPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const teachers = useSelector(selectTeachers);
  const lastKey = useSelector(selectLastKey);
  const key = null;
  const pageSize = 4;

  useEffect(() => {
    dispatch(fetchAllTeachers({ pageSize, key }));
  }, []);

  const handleClickLoadMoreBtn = () => {
    dispatch(fetchAllTeachers({ pageSize, lastKey }));
  };

  const isVisible = teachers.length > 0 && teachers.length % pageSize === 0; // !!! КОСТЫЛЬ !!!!

  return (
    <section className={css.pageContainer}>
      {loading && <Spinner isLoading={loading} />}
      <TeacherCardCollection />
      {isVisible && (
        <MainButton variant={"more"} handleClick={handleClickLoadMoreBtn}>
          Load more
        </MainButton>
      )}
    </section>
  );
}
