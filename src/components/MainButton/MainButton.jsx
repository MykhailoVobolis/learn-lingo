import clsx from "clsx";
import css from "./MainButton.module.css";

export default function MainButton({ variant, children, onClick }) {
  return (
    <button className={clsx(css.mainBtn, css[variant])} onClick={onClick}>
      {children}
    </button>
  );
}
