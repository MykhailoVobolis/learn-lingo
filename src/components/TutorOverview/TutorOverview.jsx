import LessonLevels from "../LessonLevels/LessonLevels.jsx";
import MainButton from "../MainButton/MainButton.jsx";
import Reviews from "../Reviews/Reviews.jsx";
import css from "./TutorOverview.module.css";

export default function TutorOverview({ teacher }) {
  const { levels, experience, reviews } = teacher;

  return (
    <>
      <p className={css.experienceText}>{experience}</p>
      <Reviews reviews={reviews} />
      <LessonLevels levels={levels} />
      <MainButton variant="booking">Book trial lesson</MainButton>
    </>
  );
}
