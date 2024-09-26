import { FiLogIn } from "react-icons/fi";
import css from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div className={css.btnContainer}>
      <button className={css.loginBtn}>
        <FiLogIn className={css.loginIcon} size={20} />
        Log in
      </button>
      <button className={css.registerBtn}>Registration</button>
    </div>
  );
}
