import { Link } from "react-router-dom";

import css from "./LinkButton.module.css";

export default function LinkButton() {
  return (
    <Link to="/teachers" className={css.linkBtn}>
      Get started
    </Link>
  );
}
