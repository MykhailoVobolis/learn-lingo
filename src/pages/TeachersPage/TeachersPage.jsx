import { useDispatch, useSelector } from "react-redux";
import MainButton from "../../components/MainButton/MainButton.jsx";
import TeacherCardCollection from "../../components/TeacherCardCollection/TeacherCardCollection.jsx";
import Spinner from "../../components/Spinner/Spinner.jsx";
import { selectLastKey, selectLoading, selectLoadMore, selectTeachers } from "../../redux/teachers/selectors.js";
import { useEffect, useRef } from "react";
import { fetchAllTeachers } from "../../redux/teachers/operations.js";

import css from "./TeachersPage.module.css";

export default function TeachersPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const teachers = useSelector(selectTeachers);
  const lastKey = useSelector(selectLastKey);
  const isVisible = useSelector(selectLoadMore);
  const key = null;
  const pageSize = 4;

  useEffect(() => {
    teachers.length < pageSize && dispatch(fetchAllTeachers({ pageSize, key }));
  }, [dispatch]);

  // Реалізація плавного скролу при додаванні нових вчителів
  const firstNewTeacherRef = useRef();

  const smoothCollectionScroll = () => {
    if (firstNewTeacherRef.current) {
      const cardHeight = firstNewTeacherRef.current.firstElementChild.getBoundingClientRect().height;

      window.scrollBy({
        top: cardHeight * 1.6,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  const handleClickLoadMoreBtn = () => {
    dispatch(fetchAllTeachers({ pageSize, lastKey })).then(() => {
      smoothCollectionScroll(); // Викликаємо скрол після завантаження нових даних
    });
  };

  // const isVisible = teachers.length > 0 && teachers.length % pageSize === 0; // !!! КОСТЫЛЬ !!!!

  return (
    <section className={css.pageContainer}>
      {loading && <Spinner isLoading={loading} />}
      {teachers.length > 0 && <TeacherCardCollection ref={firstNewTeacherRef} pageSize={pageSize} />}
      {isVisible && (
        <MainButton variant={"more"} handleClick={handleClickLoadMoreBtn}>
          Load more
        </MainButton>
      )}
    </section>
  );
}
