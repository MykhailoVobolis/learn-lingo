import css from "./AboutForm.module.css";

export default function AboutForm({ title, description }) {
  return (
    <>
      <h2 className={css.title}>{title}</h2>
      <p className={css.description}>{description}</p>
    </>
  );
}
