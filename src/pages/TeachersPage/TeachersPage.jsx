import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";

import {
  selectError,
  selectLastKey,
  selectLoading,
  selectLoadMore,
  selectTeachers,
} from "../../redux/teachers/selectors.js";
import { fetchAllTeachers } from "../../redux/teachers/operations.js";
import { clearAllShowDetails } from "../../redux/teachers/slise.js";

import Spinner from "../../components/Spinner/Spinner.jsx";
import TeacherCardCollection from "../../components/TeacherCardCollection/TeacherCardCollection.jsx";
import MainButton from "../../components/MainButton/MainButton.jsx";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";
import SelectTeachersBar from "../../components/SelectTeachersBar/SelectTeachersBar.jsx";

import css from "./TeachersPage.module.css";

export default function TeachersPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const teachers = useSelector(selectTeachers);
  const lastKey = useSelector(selectLastKey);
  const isVisible = useSelector(selectLoadMore);
  const key = null;
  const pageSize = 4;
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(clearAllShowDetails());
    teachers.length < pageSize && dispatch(fetchAllTeachers({ pageSize, key }));
  }, [dispatch, teachers.length]);

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
      smoothCollectionScroll();
    });
  };

  return (
    <section className={css.pageContainer}>
      {loading && <Spinner isLoading={loading} />}
      <SelectTeachersBar />
      {teachers.length > 0 && (
        <TeacherCardCollection ref={firstNewTeacherRef} pageSize={pageSize} teachers={teachers} />
      )}
      {isVisible && (
        <MainButton variant={"more"} handleClick={handleClickLoadMoreBtn}>
          Load more
        </MainButton>
      )}
      {error && <ErrorMessage />}
    </section>
  );
}
