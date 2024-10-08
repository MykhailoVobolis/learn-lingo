import { useSelector } from "react-redux";
import { selectCurentTeacher } from "../../redux/teachers/selectors.js";

import css from "./TeacherInfo.module.css";

export default function TeacherInfo() {
  const curentTeacher = useSelector(selectCurentTeacher);
  const { avatar_url, name, surname } = curentTeacher;

  return (
    <div className={css.teacherAvatarWrapper}>
      <img
        className={css.teacherAvatarImg}
        src={avatar_url}
        alt="teachers avatar"
        width={44}
        height={44}
        loading="lazy"
      />
      <div>
        <p className={css.description}>Your teacher</p>
        <h3 className={css.teacherName}>{`${name} ${surname}`}</h3>
      </div>
    </div>
  );
}
