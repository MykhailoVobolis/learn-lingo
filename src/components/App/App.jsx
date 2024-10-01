import { Route, Routes } from "react-router-dom";
import { lazy, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { clearUser, setUser } from "../../redux/auth/slice.js";

import Layout from "../Layout/Layout.jsx";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../services/firebase.js";

import css from "./App.module.css";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const TeachersPage = lazy(() => import("../../pages/TeachersPage/Teachers.jsx"));
const FavoritesPage = lazy(() => import("../../pages/FavoritesPage/FavoritesPage.jsx"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage.jsx"));

export default function App() {
  const dispatch = useDispatch();

  const [authInitialized, setAuthInitialized] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userData = {
          uid: user.uid,
          email: user.email,
          name: user.displayName || null,
        };
        dispatch(setUser(userData));
      } else {
        dispatch(clearUser());
      }
      setAuthInitialized(true);
    });

    return () => unsubscribe();
  }, [dispatch]);

  return !authInitialized ? (
    <b>Refreshing user please wait...</b> // Додати Loader !!!
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/favorites" element={<PrivateRoute component={<FavoritesPage />} redirectTo="/" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
