import TeacherAvatar from "../TeacherAvatar/TeacherAvatar.jsx";
import TeacherProfile from "../TeacherProfile/TeacherProfile.jsx";

import css from "./TeacherCard.module.css";

export default function TeacherCard({ teacher, onToggleFavorite }) {
  return (
    <div className={css.teacherCardContainer}>
      <TeacherAvatar imgUrl={teacher.avatar_url} />
      <TeacherProfile teacher={teacher} onToggleFavorite={onToggleFavorite} />
    </div>
  );
}
