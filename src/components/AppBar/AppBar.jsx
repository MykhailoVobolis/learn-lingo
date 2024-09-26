import Navigation from "../Navigation/Navigation.jsx";
import AuthNav from "../AuthNav/AuthNav.jsx";
// import UserMenu from "../UserMenu/UserMenu";

import css from "./AppBar.module.css";

export default function AppBar() {
  return (
    <header className={css.header}>
      <div className={css.navContainer}>
        <Navigation />
        <AuthNav />
        {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
      </div>
    </header>
  );
}
