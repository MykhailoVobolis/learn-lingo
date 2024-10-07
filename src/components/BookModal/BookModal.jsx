import AboutForm from "../AboutForm/AboutForm.jsx";
import css from "./BookModal.module.css";

export default function BookModal() {
  return (
    <div className={css.modalContainer}>
      <AboutForm
        title="Book trial lesson"
        description="Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."
      />
    </div>
  );
}
