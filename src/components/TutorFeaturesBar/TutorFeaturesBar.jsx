import css from "./TutorFeaturesBar.module.css";

export function TutorFeaturesBar() {
  return (
    <ul className={css.TutorFeaturesContainer}>
      <svg className={css.borderSvg} xmlns="http://www.w3.org/2000/svg">
        <rect className={css.borderRect} x="0" y="0" width="100%" height="100%" rx="30" ry="30" />
      </svg>
      <li className={css.featurItem}>
        <p className={css.featurValue}>32,000 +</p>
        <p className={css.featurName}>Experienced tutors</p>
      </li>
      <li className={css.featurItem}>
        <p className={css.featurValue}>300,000 +</p>
        <p className={css.featurName}>5-star tutor reviews</p>
      </li>
      <li className={css.featurItem}>
        <p className={css.featurValue}>120 +</p>
        <p className={css.featurName}>Subjects taught</p>
      </li>
      <li className={css.featurItem}>
        <p className={css.featurValue}>200 +</p>
        <p className={css.featurName}>Tutor nationalities</p>
      </li>
    </ul>
  );
}
