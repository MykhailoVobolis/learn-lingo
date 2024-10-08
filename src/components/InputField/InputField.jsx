import { useFormContext } from "react-hook-form";
import PasswordVisibilityButton from "../PasswordVisibilityButton/PasswordVisibilityButton.jsx";
import { useState } from "react";
import { IMaskInput } from "react-imask";

import css from "./InputField.module.css";

export default function InputField({ name, label, type = "text", placeholder, setValue }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handleClick = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className={css.inputGroup}>
      <label htmlFor={name} className={css.label}>
        {label}
      </label>
      {type === "tel" ? (
        <IMaskInput
          id={name}
          mask="+{38}(000)000-00-00"
          placeholder={placeholder}
          {...register(name)}
          onAccept={(value) => setValue(name, value)}
          className={css.inputField}
        />
      ) : (
        <input
          id={name}
          type={type === "password" && isPasswordVisible ? "text" : type}
          placeholder={placeholder}
          {...register(name)}
          className={css.inputField}
        />
      )}
      {errors[name] && <p className={css.errorMessage}>{errors[name]?.message}</p>}
      {name === "password" && <PasswordVisibilityButton onClick={handleClick} visible={isPasswordVisible} />}
    </div>
  );
}
