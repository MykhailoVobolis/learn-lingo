import AboutForm from "../AboutForm/AboutForm.jsx";
import SignUpForm from "../SignUpForm/SignUpForm.jsx";
import css from "./RegistrationModal.module.css";

export default function RegistrationModal() {
  return (
    <div className={css.modalContainer}>
      <AboutForm
        title="Registration"
        description="Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information."
      />
      <SignUpForm />
    </div>
  );
}
