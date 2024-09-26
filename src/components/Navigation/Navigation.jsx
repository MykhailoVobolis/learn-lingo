import clsx from "clsx";

import { NavLink, Link } from "react-router-dom";

import css from "./Navigation.module.css";

const getNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <nav className={css.navigation}>
      <Link className={css.mainLogo} to="/">
        <img className={css.logo} width={28} height={28} src="/logo-ukraine.svg" alt="logo" />
        LearnLingo
      </Link>
      <ul className={css.navMenu}>
        <li>
          <NavLink to="/" className={getNavLinkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/teachers" className={getNavLinkClass}>
            Teachers
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
