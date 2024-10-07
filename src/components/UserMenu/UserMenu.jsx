import { FiLogOut } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations.js";
import UserAvatar from "../UserAvatar/UserAvatar.jsx";

import css from "./UserMenu.module.css";
import { clearFavoritesId } from "../../redux/favorites/slice.js";

export default function UserMenu() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut()).then(() => {
      dispatch(clearFavoritesId());
    });
  };

  return (
    <div className={css.userMenuContainer}>
      <button className={css.logoutBtn} onClick={handleLogout}>
        <FiLogOut className={css.logoutIcon} size={20} />
        Log out
      </button>
      <UserAvatar />
    </div>
  );
}
