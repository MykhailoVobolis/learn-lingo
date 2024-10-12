import { FiLogIn } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { closeModalMobile, openModal } from "../../redux/modal/slice.js";
import { useMedia } from "react-use";

import css from "./AuthNav.module.css";

export default function AuthNav() {
  const dispatch = useDispatch();
  const isTablet = useMedia("(min-width: 768px)");

  const handleClick = (modalType) => {
    dispatch(openModal(modalType));
    dispatch(closeModalMobile());
  };

  return (
    <div className={css.btnContainer}>
      <button className={css.loginBtn} onClick={() => handleClick("login")}>
        {isTablet && <FiLogIn className={css.loginIcon} size={20} />}
        Log in
      </button>
      <button className={css.registerBtn} onClick={() => handleClick("register")}>
        Registration
      </button>
    </div>
  );
}
