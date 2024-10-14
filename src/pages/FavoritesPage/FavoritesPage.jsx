import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectError,
  selectLastKey,
  selectLoading,
  selectLoadMore,
  selectTeachersIsFavorite,
} from "../../redux/favorites/selectors.js";
import { fetchAllFavoritesTeacher } from "../../redux/favorites/operations.js";
import { clearAllShowDetails } from "../../redux/teachers/slise.js";

import TeacherCardCollection from "../../components/TeacherCardCollection/TeacherCardCollection.jsx";
import MainButton from "../../components/MainButton/MainButton.jsx";
import Spinner from "../../components/Spinner/Spinner.jsx";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";
import NoFavoriteTeachers from "../../components/NoFavoriteTeachers/NoFavoriteTeachers.jsx";

import css from "./FavoritesPage.module.css";

export default function FavoritesPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const teachersIsFavorite = useSelector(selectTeachersIsFavorite);
  const lastKey = useSelector(selectLastKey);
  const isVisible = useSelector(selectLoadMore);
  const key = null;
  const pageSize = 4;
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(clearAllShowDetails());
    teachersIsFavorite.length < pageSize && dispatch(fetchAllFavoritesTeacher({ pageSize, key }));
  }, [dispatch, teachersIsFavorite.length]);

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
      smoothCollectionScroll();
    });
  };

  return (
    <section className={css.pageContainer}>
      {loading && <Spinner isLoading={loading} />}
      {teachersIsFavorite.length > 0 ? (
        <TeacherCardCollection ref={firstNewTeacherRef} pageSize={pageSize} teachers={teachersIsFavorite} />
      ) : (
        !loading && <NoFavoriteTeachers />
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
