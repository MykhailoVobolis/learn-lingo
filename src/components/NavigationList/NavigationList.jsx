import clsx from "clsx";
import css from "./NavigationList.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";

const getNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function NavigationList({ onClose }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <ul className={css.navMenu}>
      <li>
        <NavLink to="/" className={getNavLinkClass} onClick={() => onClose()}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/teachers" className={getNavLinkClass} onClick={() => onClose()}>
          Teachers
        </NavLink>
      </li>
      {isLoggedIn && (
        <li>
          <NavLink to="/favorites" className={getNavLinkClass} onClick={() => onClose()}>
            Favorites
          </NavLink>
        </li>
      )}
    </ul>
  );
}
