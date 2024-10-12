import { MdMenu } from "react-icons/md";
import { useDispatch } from "react-redux";
import { openModalMobile } from "../../redux/modal/slice.js";

import css from "./BurgerButton.module.css";

export default function BurgerButton() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openModalMobile());
  };

  return (
    <button className={css.burgerBtn} onClick={() => handleClick()}>
      <MdMenu size={28} className={css.burgerIcon} />
    </button>
  );
}
