import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";
import { lazy } from "react";
import css from "./App.module.css";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const TeachersPage = lazy(() => import("../../pages/TeachersPage/Teachers.jsx"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage.jsx"));

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
