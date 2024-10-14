import { useMedia } from "react-use";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";

import BurgerButton from "../BurgerButton/BurgerButton.jsx";
import NavigationList from "../NavigationList/NavigationList.jsx";
import UserAvatar from "../UserAvatar/UserAvatar.jsx";

import css from "./Navigation.module.css";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isMobile = useMedia("(max-width: 767px)");
  const isTablet = useMedia("(min-width: 768px)");

  return (
    <div className={css.barContainer}>
      <nav className={css.navigation}>
        <Link className={css.mainLogo} to="/">
          <img className={css.logo} width={28} height={28} src="/logo-ukraine.svg" alt="logo" />
          LearnLingo
        </Link>
        {isTablet && <NavigationList />}
      </nav>
      {isMobile && isLoggedIn && <UserAvatar />}
      {isMobile && <BurgerButton />}
    </div>
  );
}
