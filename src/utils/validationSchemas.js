import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  name: yup.string().required("Ім'я є обов'язковим"),
  email: yup.string().email("Невірний email").required("Email є обов'язковим"),
  password: yup.string().min(8, "Пароль повинен містити щонайменше 8 символів").required("Пароль є обов'язковим"),
});

export const singInSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
});
