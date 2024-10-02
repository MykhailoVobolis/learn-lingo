import css from "./TeacherAvatar.module.css";

export default function TeacherAvatar({ imgUrl }) {
  return (
    <div className={css.teacherAvatarWrapper}>
      <img className={css.teacherAvatarImg} src={imgUrl} alt="avatar" width={96} height={96} loading="lazy" />
      <div className={css.marker}></div>
    </div>
  );
}
