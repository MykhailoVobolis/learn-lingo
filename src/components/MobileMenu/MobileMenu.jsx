import { MdClose } from "react-icons/md";

import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";

import NavigationList from "../NavigationList/NavigationList.jsx";
import UserMenu from "../UserMenu/UserMenu.jsx";
import AuthNav from "../AuthNav/AuthNav.jsx";

import css from "./MobileMenu.module.css";

export default function MobileMenu({ onClose }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.mobileMenu}>
      <button className={css.closeBtn} onClick={() => onClose()}>
        <MdClose size={28} className={css.closeIcon} />
      </button>
      <NavigationList onClose={onClose} />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
}
