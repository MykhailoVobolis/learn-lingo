import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectLoading } from "../../redux/teachers/selectors.js";
import { selectLastKey, selectLoadMore, selectTeachersIsFavorite } from "../../redux/favorites/selectors.js";
import { fetchAllFavoritesTeacher } from "../../redux/favorites/operations.js";
import { clearAllShowDetails } from "../../redux/teachers/slise.js";

import TeacherCardCollection from "../../components/TeacherCardCollection/TeacherCardCollection.jsx";
import MainButton from "../../components/MainButton/MainButton.jsx";
import Spinner from "../../components/Spinner/Spinner.jsx";

import css from "./FavoritesPage.module.css";

export default function FavoritesPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const teachersIsFavorite = useSelector(selectTeachersIsFavorite);
  const lastKey = useSelector(selectLastKey);
  const isVisible = useSelector(selectLoadMore);
  const key = null;
  const pageSize = 4;

  useEffect(() => {
    dispatch(clearAllShowDetails());
    teachersIsFavorite.length < pageSize && dispatch(fetchAllFavoritesTeacher({ pageSize, key }));
  }, [dispatch, teachersIsFavorite.length]);

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
    dispatch(fetchAllFavoritesTeacher({ pageSize, lastKey })).then(() => {
      smoothCollectionScroll(); // Викликаємо скрол після завантаження нових даних
    });
  };

  return (
    teachersIsFavorite.length && (
      <section className={css.pageContainer}>
        {loading && <Spinner isLoading={loading} />}
        <TeacherCardCollection ref={firstNewTeacherRef} pageSize={pageSize} teachers={teachersIsFavorite} />
        {isVisible && (
          <MainButton variant={"more"} handleClick={handleClickLoadMoreBtn}>
            Load more
          </MainButton>
        )}
      </section>
    )
  );
}
