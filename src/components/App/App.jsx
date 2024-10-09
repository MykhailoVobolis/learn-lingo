import { Route, Routes } from "react-router-dom";
import { lazy, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, setAuthInitialized, setUser } from "../../redux/auth/slice.js";
import { selectAuthInitialized, selectIsAuthenticating, selectIsLoggedIn } from "../../redux/auth/selectors.js";

import Layout from "../Layout/Layout.jsx";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Spinner from "../Spinner/Spinner.jsx";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../services/firebase.js";
import { fetchAllFavoritesId } from "../../redux/favorites/operations.js";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const TeachersPage = lazy(() => import("../../pages/TeachersPage/TeachersPage.jsx"));
const FavoritesPage = lazy(() => import("../../pages/FavoritesPage/FavoritesPage.jsx"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage.jsx"));

export default function App() {
  const dispatch = useDispatch();
  const isAuthenticating = useSelector(selectIsAuthenticating);
  const authInitialized = useSelector(selectAuthInitialized);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchAllFavoritesId());
    }
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // Запобігаємо оновленню стану користувача через onAuthStateChanged, поки йде процес реєстрації або логіну.
      if (!isAuthenticating) {
        if (user) {
          const userData = {
            uid: user.uid,
            email: user.email,
            name: user.displayName,
          };
          dispatch(setUser(userData));
        } else {
          dispatch(clearUser());
        }
        dispatch(setAuthInitialized(true));
      }
    });

    return () => unsubscribe();
  }, [dispatch, isAuthenticating, isLoggedIn]);

  return !authInitialized ? (
    <Spinner isLoading={!authInitialized} />
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/favorites" element={<PrivateRoute component={<FavoritesPage />} redirectTo="/" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster position="top-right" containerStyle={{ zIndex: 999999 }} />
    </Layout>
  );
}
