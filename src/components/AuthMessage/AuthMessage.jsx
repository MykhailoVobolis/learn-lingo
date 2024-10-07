import AboutForm from "../AboutForm/AboutForm.jsx";
import css from "./AuthMessage.module.css";

export default function AuthMessage() {
  return (
    <div className={css.modalContainer}>
      <AboutForm
        title="Log In or Create a LearnLingo Account"
        description="To add to favorites, please log in or create an account."
      />
    </div>
  );
}
