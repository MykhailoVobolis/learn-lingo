import { FiLogIn } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/modal/slice.js";

import css from "./AuthNav.module.css";

export default function AuthNav() {
  const dispatch = useDispatch();

  const handleClick = (modalType) => {
    dispatch(openModal(modalType));
  };

  return (
    <div className={css.btnContainer}>
      <button className={css.loginBtn} onClick={() => handleClick("login")}>
        <FiLogIn className={css.loginIcon} size={20} />
        Log in
      </button>
      <button className={css.registerBtn} onClick={() => handleClick("register")}>
        Registration
      </button>
    </div>
  );
}
