import css from "./RadioButton.module.css";

export default function RadioButton({ label, value, name, register }) {
  return (
    <label className={css.label} htmlFor={label}>
      <input className={css.hiddenRadioButton} id={label} type="radio" value={value} {...register(name)} />
      <span className={css.customRadio}></span>
      <span className={css.labelText}>{label}</span>
    </label>
  );
}
