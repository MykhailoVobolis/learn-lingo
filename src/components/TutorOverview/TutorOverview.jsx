import { useDispatch } from "react-redux";
import { openModal } from "../../redux/modal/slice.js";

import LessonLevels from "../LessonLevels/LessonLevels.jsx";
import MainButton from "../MainButton/MainButton.jsx";
import Reviews from "../Reviews/Reviews.jsx";

import css from "./TutorOverview.module.css";

export default function TutorOverview({ teacher }) {
  const { levels, experience, reviews } = teacher;

  const dispatch = useDispatch();

  const handleClick = (modalType) => {
    dispatch(openModal(modalType));
  };

  return (
    <>
      <p className={css.experienceText}>{experience}</p>
      <Reviews reviews={reviews} />
      <LessonLevels levels={levels} />
      <MainButton variant="booking" handleClick={() => handleClick("booking")}>
        Book trial lesson
      </MainButton>
    </>
  );
}
