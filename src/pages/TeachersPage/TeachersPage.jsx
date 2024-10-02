import TeacherCardCollection from "../../components/TeacherCardCollection/TeacherCardCollection.jsx";

import css from "./TeachersPage.module.css";

export default function TeachersPage() {
  return (
    <div className={css.pageContainer}>
      <TeacherCardCollection />
    </div>
  );
}
