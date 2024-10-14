import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return <p className={css.errorMessage}>Unfortunately, an error occurred! Try refreshing this page!</p>;
}
