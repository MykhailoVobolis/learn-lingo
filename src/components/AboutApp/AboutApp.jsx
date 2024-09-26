import LinkButton from "../LinkButton/LinkButton.jsx";
import css from "./AboutApp.module.css";

export default function AboutApp() {
  return (
    <div className={css.aboutContainer}>
      <h1 className={css.mainTitle}>
        Unlock your potential with the best <span className={css.accentWord}>language</span> tutors
      </h1>
      <p className={css.textAbout}>
        Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new
        heights by connecting with highly qualified and experienced tutors.
      </p>
      <LinkButton />
    </div>
  );
}
