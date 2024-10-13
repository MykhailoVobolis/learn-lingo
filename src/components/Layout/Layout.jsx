import { Suspense } from "react";

import AppBar from "../AppBar/AppBar.jsx";
import ModalWindow from "../ModalWindow/ModalWindow.jsx";
import ModalMobileMenu from "../ModalMobileMenu/ModalMobileMenu.jsx";

import css from "./Layout.module.css";
import { useSelector } from "react-redux";
import { selectLoading } from "../../redux/auth/selectors.js";
import Spinner from "../Spinner/Spinner.jsx";

export default function Layout({ children }) {
  const isLoading = useSelector(selectLoading);

  return (
    <div className={css.pageContainer}>
      <AppBar />
      <main className={css.mainContainer}>
        <Suspense fallback={<div></div>}>{children}</Suspense>
      </main>
      <ModalWindow />
      <ModalMobileMenu />
      {isLoading && <Spinner isLoading={isLoading} />}
    </div>
  );
}
