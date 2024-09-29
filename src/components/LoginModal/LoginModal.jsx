import AboutForm from "../AboutForm/AboutForm.jsx";
import SignInForm from "../SignInForm/SignInForm.jsx";

import css from "./LoginModal.module.css";

export default function LoginModal() {
  return (
    <div className={css.modalContainer}>
      <AboutForm
        title="Log In"
        description="Welcome back! Please enter your credentials to access your account and continue your search for an teacher."
      />
      <SignInForm />
    </div>
  );
}
