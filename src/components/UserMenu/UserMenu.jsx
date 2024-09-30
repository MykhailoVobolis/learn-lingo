import { FiLogOut } from "react-icons/fi";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors.js";

import css from "./UserMenu.module.css";

export default function UserMenu() {
  const user = useSelector(selectUser);

  return (
    <div className={css.userMenuContainer}>
      <button
        className={css.logoutBtn}
        //   onClick={() => handleClick()}
      >
        <FiLogOut className={css.logoutIcon} size={20} />
        Log out
      </button>
      <p>{user.name}</p>
    </div>
  );
}
