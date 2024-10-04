import clsx from "clsx";
import css from "./MainButton.module.css";

export default function MainButton({ variant, children, handleClick }) {
  return (
    <button className={clsx(css.mainBtn, css[variant])} onClick={handleClick}>
      {children}
    </button>
  );
}
