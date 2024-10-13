import { FiLogOut } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../redux/auth/operations.js";
import { clearFavoritesId } from "../../redux/favorites/slice.js";
import { useMedia } from "react-use";
import { closeModalMobile } from "../../redux/modal/slice.js";

import UserAvatar from "../UserAvatar/UserAvatar.jsx";

import css from "./UserMenu.module.css";

export default function UserMenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isTablet = useMedia("(min-width: 768px)");

  const handleLogout = () => {
    dispatch(closeModalMobile());
    dispatch(logOut()).then(() => {
      dispatch(clearFavoritesId());
      navigate("/");
    });
  };

  return (
    <div className={css.userMenuContainer}>
      <button className={css.logoutBtn} onClick={handleLogout}>
        {isTablet && <FiLogOut className={css.logoutIcon} size={20} />}
        Log out
      </button>
      {isTablet && <UserAvatar />}
    </div>
  );
}
